import requests
from math import radians, cos, sin, asin, sqrt

# -----------------------------
# DISTANCE CALCULATION
# -----------------------------
def calculate_distance(lat1, lon1, lat2, lon2):
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * asin(sqrt(a))
    return round(6371 * c, 2)  # km


# -----------------------------
# FETCH NEARBY CLINICS (OSM)
# -----------------------------
def fetch_nearby_clinics(lat, lng):
    url = "https://overpass-api.de/api/interpreter"

    # 🔹 12 km radius
    query = f"""
    [out:json];
    (
      node["amenity"~"hospital|clinic|doctors|pharmacy"](around:12000,{lat},{lng});
      way["amenity"~"hospital|clinic|doctors|pharmacy"](around:12000,{lat},{lng});
    );
    out center;
    """

    response = requests.post(url, data=query)
    data = response.json()

    user_lat = float(lat)
    user_lng = float(lng)

    clinics = []

    for place in data.get("elements", []):
        name = place.get("tags", {}).get("name")
        if not name:
            continue

        # ✅ correct coordinates
        place_lat = place.get("lat") or place.get("center", {}).get("lat")
        place_lng = place.get("lon") or place.get("center", {}).get("lon")

        if place_lat is None or place_lng is None:
            continue

        distance_km = calculate_distance(
            user_lat, user_lng, place_lat, place_lng
        )

        clinics.append({
            "id": place.get("id"),
            "name": name,
            "distance": f"{distance_km} km",
            "lat": place_lat,
            "lng": place_lng,
        })

    # 🔹 sort by nearest
    clinics.sort(key=lambda x: float(x["distance"].split()[0]))

    return clinics[:10]
