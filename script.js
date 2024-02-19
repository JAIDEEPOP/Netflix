function changeAudio(audioSrc) {
  var video = document.getElementById('videoPlayer');
  var newAudio = new Audio(audioSrc);
  video.src = video.src; // This triggers a refresh in some browsers to ensure the new audio track is loaded
  video.pause();
  video.load();
  video.play();
}
