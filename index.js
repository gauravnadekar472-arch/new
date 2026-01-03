const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const imageContainer = document.getElementById("imageContainer");

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return alert("Please enter a prompt!");

  imageContainer.innerHTML = "<p>Generating image...</p>";

  try {
    const res = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error);

    imageContainer.innerHTML = `<img src="${data.imageUrl}" alt="AI Generated Image">`;
  } catch (err) {
    imageContainer.innerHTML = `<p style="color:red;">${err.message}</p>`;
    console.error(err);
  }
});
