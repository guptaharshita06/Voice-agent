function startListening() {
  const output = document.getElementById("transcript");

  if (!('webkitSpeechRecognition' in window)) {
    output.textContent = "Speech recognition not supported in your browser.";
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
  };

  recognition.onerror = function(event) {
    output.textContent = "Error: " + event.error;
  };
}
