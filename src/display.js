import './style.css';
import foodPic from '../assets/Bangers-and-Mash-2.png';

const displayController = (() => {
  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'wrapper';

  const contentEl = document.createElement('div');
  contentEl.id = 'content';

  wrapperEl.appendChild(contentEl);
  document.querySelector('body').appendChild(wrapperEl);

  const createEl = (type, style, inner) => {
    const el = document.createElement(type);
    if (style) {
      el.classList.add(style);
    }
    el.innerHTML = inner;

    return el;
  };

  const displayHeader = () => {
    const headerEl = document.createElement('div');
    headerEl.id = 'header';

    const titleEl = createEl('div', 'title', 'The Irish Pub');
    headerEl.appendChild(titleEl);

    const tabsEl = createEl('div', 'tabs', '');

    const homeTabEl = createEl('div', 'home', 'Home');
    tabsEl.appendChild(homeTabEl);

    const menuTabEl = createEl('div', 'menu', 'Menu');
    tabsEl.appendChild(menuTabEl);

    const contactTabEl = createEl('div', 'contact', 'Contact');
    tabsEl.appendChild(contactTabEl);

    headerEl.appendChild(tabsEl);
    wrapperEl.prepend(headerEl);
  };

  const displayHome = () => {
    const introEl = createEl('div', 'intro', 'The best place off the island for beer, bangers and bollocks!');

    const slideshowEl = createEl('div', 'slideshow', '');
    const imgEl = createEl('img', '', '');
    imgEl.src = foodPic;
    slideshowEl.appendChild(imgEl);

    const addrLine1El = createEl('div', 'address-line-1', '1234 Taraval Street');
    const addrLine2El = createEl('div', 'address-line-2', 'San Francisco CA, 94122');

    contentEl.appendChild(introEl);
    contentEl.appendChild(slideshowEl);
    contentEl.appendChild(addrLine1El);
    contentEl.appendChild(addrLine2El);
  };

  return {
    displayHeader,
    displayHome,
  };
})();

export default displayController;
