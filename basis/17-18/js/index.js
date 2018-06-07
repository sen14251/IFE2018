let table = document.createElement('table');
let inners = '';
for (let i = 1; i <= 9; i++) {
  inners += '<tr>';
  for (let j = 1; j <= i; j++) {
    inners += `<td>${j} * ${i} = ${j * i}</td>`;
  }
  inners += '</tr>';
}
table.innerHTML = inners;
document.body.appendChild(table);