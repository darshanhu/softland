window.addEventListener('message', function(event) {
    console.log("Message received from the parent: " + event.data);
    const btn = this.document.querySelector('#softland-btn');
    btn.click();
  });

  const btn = this.document.querySelector('#softland-btn');
  btn.addEventListener('click', function(){
    pendo.showGuideById("8qPDWFwuqM_ewygaO2UGdI2yipQ");
    console.log("SOFT LAND - send-message-btn clicked");
  })