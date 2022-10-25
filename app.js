const images = document.querySelectorAll('.infinity-slider img');
let vision = 0;

function slider() {
   for (let i = 0; i < images.length; i++) {
      images[i].classList.add('opacity0');
   }
   images[vision].classList.remove('opacity0');
}

document.querySelector('.btn-back').onclick = () => {
   if ( vision-1 == -1 ){
      vision = images.length - 1
   } else {
      vision--
   }
   slider()
}
document.querySelector('.btn-next').onclick = () => {
   if ( vision+1 == images.length ){
      vision = 0
   } else {
      vision++
   }
   slider()
}

slider()