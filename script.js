window.addEventListener('message', function(event) {
    console.log("Message received from the parent: " + event.data);
    this.alert("HAHAHA") // Message received from parent
  });