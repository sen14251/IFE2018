/*
注意：
在这个练习中仅允许使用以下 DOM 方法或属性，不得使用高级选择器
- getElementById()
- getElementsByTagName()
- childNodes
- parentNode
 */
function getAllListItem() {
  // 返回页面中所有li标签
  return document.getElementsByTagName('li');
}

function findAllHtmlSpanInOneSection(sectionId) {
  // 返回某个section下所有span中内容为HTML的span标签
  const section = document.getElementById(sectionId);

  return [].filter.call(section.getElementsByTagName('span'), (element) => {
    return element.innerHTML === 'HTML';
  });
}

function findListItem(sectionId, spanCont) {
  // 返回某个section下，所有所包含span内容为spanCont的LI标签
  const section = document.getElementById(sectionId);

  return [].filter.call(section.getElementsByTagName('li'), (element) => {
    return element.innerHTML.indexOf(`<span>${spanCont}</span>`) >= 0;
  });
}

function getActiveLinkContent(sectionId) {
  // 返回某个section下，class为active的链接中包含的文字内容
  const section = document.getElementById(sectionId);

  return [].filter.call(section.getElementsByTagName('a'), (element) => {
    return element.classList.contains('active');
  }).map((element) => {
    return element.innerText;
  });
}


console.log(getAllListItem());
console.log(findAllHtmlSpanInOneSection('news-normal'));
console.log(findListItem('news-normal', 'HTML'));
console.log(getActiveLinkContent('news-normal'));