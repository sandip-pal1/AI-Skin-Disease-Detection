import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ClinicMap({ userLocation, clinics, radius = 12000 }) {
  return (
    <div className="h-80 w-full rounded overflow-hidden">
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        className="h-full w-full">
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User Location */}
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Radius Circle */}
        <Circle
          center={[userLocation.lat, userLocation.lng]}
          radius={radius}
          pathOptions={{ color: "blue" }}
        />

        {/* Clinics */}
        {clinics.map((c) => (
          <Marker key={c.id} position={[c.lat, c.lng]}>
            <Popup>
              <b>{c.name}</b>
              <br />
              Distance: {c.distance}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ClinicMap;
