function sendEmergencyAlert() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(position => {
      const data = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
  
      fetch("http://localhost:5000/emergency", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(res => res.text())
      .then(msg => alert(msg))
      .catch(() => alert("❌ Could not send emergency alert."));
    });
  }
  