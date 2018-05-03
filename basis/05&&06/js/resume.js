const link = document.getElementsByTagName('link')[0];
const btns = document.getElementsByTagName('button');
for (let i = 0; i < 3; i++) {
  btns[i].onclick = function () {
    link.href = `css/style_${i + 1}.css`;
  }
}