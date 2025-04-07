document.getElementById("qr-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = document.getElementById("url-input").value.trim();
    const qrImage = document.getElementById("qr-image");
    const qrResult = document.getElementById("qr-result");
    const downloadLink = document.getElementById("download-link");
  
    if (!url) {
      alert("Please enter a URL!");
      return;
    }
  
    try {
      const domain = new URL(url).hostname.replace(/\./g, "_");
      const fileName = `${domain}_qr.png`;
  
      // Generate QR code
      QRCode.toDataURL(url, { width: 200, margin: 2 }, function (err, dataUrl) {
        if (err) {
          console.error(err);
          alert("Failed to generate QR code!");
          return;
        }
  
        // Update the image source and the download link
        qrImage.src = dataUrl;
        downloadLink.href = dataUrl;
        downloadLink.download = fileName;
  
        // Show the QR code and download link
        qrResult.classList.remove("hidden");
        downloadLink.style.display = "inline-block";
      });
    } catch (err) {
      alert("Please enter a valid URL!");
    }
  });
  
  // Theme toggle logic
  const themeToggleBtn = document.getElementById("theme-toggle");
  
  function setThemeIcon(theme) {
    themeToggleBtn.textContent = theme === "dark" ? "🌞" : "🌙";
  }
  
  function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    setThemeIcon(theme);
  }
  
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  
  themeToggleBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
  });
  
  // Audio unmute on first interaction
  const audio = document.getElementById("background-music");
  document.addEventListener("click", () => {
    if (audio.muted) {
      audio.muted = false;
      audio.play().catch(err => console.error("Audio play failed:", err));
    }
  }, { once: true });