/* 编码一 */
const $ = (selector, element) => {
  return (element || document).querySelector(selector);
};

function output() {
  console.log(name.value);
}

const name = $('#name');
$('#submit-btn').addEventListener('click', output);
name.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    output();
  } else if (e.key === 'Escape') {
    name.value = '';
  }
});

/* 编码二 */
const selects = document.getElementsByTagName('select');

function clear(args) {
  [].forEach.call(args, (element) => {
    element.classList.remove('active');
  });
}

[].forEach.call(document.querySelectorAll('input[name="status"]'), (element) => {
  element.addEventListener('change', (e) => {
    clear(selects);
    document.getElementById(`${element.id}-select`).classList.add('active');
  });
});

/* 编码三四 */
const ul = document.querySelector('ul');
const p = document.getElementsByClassName("color-picker")[0];
ul.addEventListener('click', (e) => {
  const target = e.target || e.srcElement;
  if (target.nodeName.toLocaleLowerCase() === 'li') {
    const color = target.style.backgroundColor;
    p.style.color = p.innerHTML = color;
  }
});

/* 编码五 */
const fadeBtn = $('#fade-btn');
const fadeObj = $('#fade-obj');
let isHidden = false;
fadeBtn.addEventListener('click', () => {
  let opacity;
  let step;
  let txt;
  if (isHidden) {
    opacity = 0;
    step = 0.1;
    txt = '淡出';
  } else {
    opacity = 1;
    step = -0.1;
    txt = '淡入';
  }
  fadeBtn.disabled = true;
  const timer = setInterval(() => {
    opacity += step;
    fadeObj.style.opacity = opacity;
    console.log(opacity);
    if (opacity <= 0 || opacity >= 1) {
      clearInterval(timer);
      fadeBtn.innerText = txt;
      fadeBtn.disabled = false;
      isHidden = !isHidden;
    }
  }, 100);
});

/* 编码六 */
const erik = $('.erik');
let y = 0;

function change() {
  y -= 480;
  erik.style.backgroundPositionY = y + 'px';
}

const timer = setInterval(change, 100);