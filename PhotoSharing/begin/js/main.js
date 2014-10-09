// JavaScript Document
alert('CAlling usermedia');
navigator.getUserMedia = navigator.getUserMedia || 
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
  var constraints={video:true};
  
  function successCallback(stream){
	  window.stream=stream;
	  var video = document.querySelector("video");
	  video.src=window.URL.createObjectURL(stream);
	  video.play();
  }
	  
 function errorCallback(error){
	  console.log("navigator.getUsermedia error:",error);
	 }
	 
navigator.getUserMedia(constraints,successCallback,errorCallback);	 