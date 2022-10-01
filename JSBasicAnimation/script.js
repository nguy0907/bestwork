const $container = document.getElementById('container')
const $reveal = document.getElementById('reveal')
const $hamburgerMenu = document.getElementById('hamburgerMenu')
const $paragraph1 = document.getElementById('paragraph1')
const $paragraph2 = document.getElementById('paragraph2')
const $paragraph3 = document.getElementById('paragraph3')



//I just made the nav dissapear when clicking the button
$reveal.addEventListener('click', function(e){

if ($hamburgerMenu){
    $hamburgerMenu.classList.toggle('click')
    
}
})

//https://www.w3schools.com/jsref/prop_win_pagexoffset.asp 
//I used w3 school to know what pageyOffset

// window.pageYoffset window.innerHeight element.offsettop 

// Using pageYoffset is like using pageXoffset so I assume that I will have to measure the height or the width 
//so I used if statement on a certain height
window.addEventListener('scroll', function(){
    
  if (window.pageYOffset>200){
    $paragraph1.classList.add('mobilescroll')
  }


  //Mobile screen
    if (window.pageYOffset>700){
      $paragraph2.classList.add('mobilescroll')
    }
  
  
    if (window.pageYOffset>1700){
      $paragraph3.classList.add('mobilescroll')
    }
  


 //Tablet and desktop
  if (window.pageYOffset>700){
   $paragraph2.classList.add('scroll')

  } 
  
  if (window.pageYOffset>1200){
    $paragraph3.classList.add('scroll')
  }

})