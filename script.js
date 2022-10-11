'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header =document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(one => one.addEventListener('click', openModal)); 

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// lecture

const message =document.createElement('div')
message.innerHTML = `Hello motherFuckers what are you up to  <button class='btn btn--close-cookie'>Let's Gooo<button/>`;
message.classList.add('cookie-message');

header.prepend(message)
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove()
})
console.log(getComputedStyle(message).height)
message.style.height =Number.parseFloat((getComputedStyle(message).height),10) +20 +"px";
console.log(getComputedStyle(message).height)
document.documentElement.style.setProperty('--color-primary', 'silver')

const logo= document.querySelector('.nav__logo');
 console.log(logo.src);
 console.log(logo.className);
 console.log(logo.alt);