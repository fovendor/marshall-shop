/* By clicking on the "play" button, an Iframe with a video on YouTube (https://youtu.be/dQw4w9WgXcQ)
  should appear instead of a picture, the "play" button disappears.
  Iframe should be created by clicking on the button, initially it should not be in the structure.
*/

buttonPlay.onclick = function() {
  const imgElement = document.querySelector('.swiper__video-container');
  const playElement = document.querySelector('.swiper-btn-play');

  const videoElement = document.createElement ('div');

  videoElement.innerHTML = '<iframe width="690" height="520" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  playElement.classList.add('play--hidden');
  imgElement.replaceWith(videoElement);
};
