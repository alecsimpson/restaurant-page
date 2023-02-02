import './style.css';
import foodPic from '../assets/Bangers-and-Mash-2.png';

const displayController = (() => {
  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'wrapper';

  const contentEl = document.createElement('div');
  contentEl.id = 'content';

  wrapperEl.appendChild(contentEl);
  document.querySelector('body').appendChild(wrapperEl);

  const createEl = (type, elConfig) => {
    const el = document.createElement(type);
    if (!elConfig) { return el; }

    Object.keys(elConfig).forEach((key) => {
      el[key] = elConfig[key];
    });

    return el;
  };

  const displayHome = () => {
    document.querySelector('#content').innerHTML = '';

    const introEl = createEl('div', { className: 'intro', innerHTML: 'The best place off the island for beer, bangers and bollocks!' });

    const slideshowEl = createEl('div', { className: 'slideshow' });
    const imgEl = createEl('img', { src: foodPic });
    slideshowEl.appendChild(imgEl);

    const addrLine1El = createEl('div', { className: 'address-line-1', innerHTML: '1234 Taraval Street' });
    const addrLine2El = createEl('div', { className: 'address-line-2', innerHTML: 'San Francisco CA, 94122' });

    contentEl.appendChild(introEl);
    contentEl.appendChild(slideshowEl);
    contentEl.appendChild(addrLine1El);
    contentEl.appendChild(addrLine2El);
  };

  const displayMenu = () => {
    document.querySelector('#content').innerHTML = '';

    const menuGridEl = createEl('div', { className: 'menu-grid' });
  };

  const displayContact = () => {
    document.querySelector('#content').innerHTML = '';
  };

  const displayHeader = () => {
    const headerEl = createEl('div', { id: 'header' });

    const titleEl = createEl('div', { className: 'title', innerHTML: 'The Irish Pub' });
    headerEl.appendChild(titleEl);

    const tabsEl = createEl('div', { className: 'tabs' });

    const homeTabEl = createEl('a', {
      className: 'home', innerHTML: 'Home', href: '#home', onclick: displayHome,
    });
    tabsEl.appendChild(homeTabEl);

    const menuTabEl = createEl('a', {
      className: 'menu', innerHTML: 'Menu', href: '#menu', onclick: displayMenu,
    });
    tabsEl.appendChild(menuTabEl);

    const contactTabEl = createEl('a', {
      className: 'contact', innerHTML: 'Contact', href: '#contact', onclick: displayContact,
    });
    tabsEl.appendChild(contactTabEl);

    headerEl.appendChild(tabsEl);
    wrapperEl.prepend(headerEl);
  };

  const initPage = () => {
    displayHeader();
    displayHome();
  };

  return {
    initPage,
  };
})();

export default displayController;
