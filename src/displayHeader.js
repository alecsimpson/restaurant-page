import './style.css';
import util from './displayUtil';

const displayHeader = () => {
  const headerEl = util.createEl('div', { id: 'header' });

  const titleEl = util.createEl('div', { className: 'title', innerHTML: 'The Irish Pub' });
  headerEl.appendChild(titleEl);

  const tabsEl = util.createEl('div', { className: 'tabs' });

  const homeTabEl = util.createEl('a', {
    className: 'home', innerHTML: 'Home', href: '#home',
  });
  tabsEl.appendChild(homeTabEl);

  const menuTabEl = util.createEl('a', {
    className: 'menu', innerHTML: 'Menu', href: '#menu',
  });
  tabsEl.appendChild(menuTabEl);

  const contactTabEl = util.createEl('a', {
    className: 'contact', innerHTML: 'Contact', href: '#contact',
  });
  tabsEl.appendChild(contactTabEl);

  headerEl.appendChild(tabsEl);
  document.querySelector('#wrapper').prepend(headerEl);
};

export default displayHeader;
