


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

let title = document.getElementById ('splash_title');
title.addEventListener('click',() => {
  console.log('testing')
});



let fadeText = document.getElementById('fade_text');
// console.log(fadeText.innerHTML + "hello!");

function onSpacebarPress(event) {
  if (event.code === 'Space' || event.key === ' ') {
    window.location.href = '/feed';
  }
}

document.addEventListener('keydown', onSpacebarPress);

fadeText.onclick =  () => {
  window.location ="/feed";
}



  
