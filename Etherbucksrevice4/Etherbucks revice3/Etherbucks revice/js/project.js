'use strict';

window.onload = function() {
  const premiumEditionImgList = document.getElementsByClassName("premium-edition-img");

  let lastPremiumEditionImgNum = 3;

  const moveBtnLeft = document.querySelector('#move-btn-left');
  const moveBtnRight = document.querySelector('#move-btn-right');
  // const premiumEditionImgBox = document.querySelector('#premium-edition-img-box');
  const ul = document.querySelector('#premium-edition-img-box');

  moveBtnLeft.style.visibility = "hidden";

  moveBtnLeft.addEventListener('click', (event) => {
    const premiumEditionImgListWidth = premiumEditionImgList[0].clientWidth;
    const moveWidth =( premiumEditionImgListWidth + 22.5);

    if (lastPremiumEditionImgNum > 3) {
      lastPremiumEditionImgNum -= 1;

      ul.style.marginLeft = -(lastPremiumEditionImgNum - 3) * moveWidth +'px';

      moveBtnRight.style.visibility = "visible";

      if (lastPremiumEditionImgNum === 3) {
        moveBtnLeft.style.visibility = "hidden";
      }
    }
  });

  moveBtnRight.addEventListener('click', (event) => {
    const premiumEditionImgListWidth = premiumEditionImgList[0].clientWidth;
    const moveWidth = (premiumEditionImgListWidth + 22.5) ;

    if (lastPremiumEditionImgNum < 7) {
      lastPremiumEditionImgNum += 1;

      ul.style.marginLeft = -(lastPremiumEditionImgNum-3) * moveWidth +'px';

      moveBtnLeft.style.visibility = "visible";

      if (lastPremiumEditionImgNum === 7) {
        moveBtnRight.style.visibility = "hidden";
      }
    }
  });

  const moreMenuBtn = document.querySelector('#more-menu');
  const subMenuBox = document.querySelector('#sub-nav-box');
  const subBackDrop = document.querySelector('#sub-backdrop');
  const body = document.querySelector('body');

  moreMenuBtn.addEventListener('click', (event) => {
    subMenuBox.classList.toggle('open');
    subBackDrop.classList.toggle('open');
    body.classList.toggle('not-scroll');
  });

  subBackDrop.addEventListener('click', (event) => {
    subMenuBox.classList.remove('open');
    subBackDrop.classList.remove('open');
    body.classList.remove('not-scroll');
  });

  const closeBtn = document.querySelector('#close-btn');

  closeBtn.addEventListener('click', (event) => {
    subMenuBox.classList.remove('open');
    subBackDrop.classList.remove('open');
    body.classList.remove('not-scroll');
  });
}


