window.addEventListener('message', function(event) {
    console.log("Message received from the parent: " + event.data);
    const btn = this.document.querySelector('#softland-btn');
    btn.click();
    this.alert("HAHAHA") // Message received from parent
  });

  const btn = this.document.querySelector('#softland-btn');
  btn.addEventListener('click', function(){
    pendo.showGuideById("8qPDWFwuqM_ewygaO2UGdI2yipQ");
    console.log("Clicked")
  })