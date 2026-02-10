export async function predictSkinDisease(imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  // Access the URL from the environment file
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${backendUrl}/predict`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return await response.json();
}
