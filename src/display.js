import './style.css';

const displayController = (() => {
  const displayHeader = () => {
    const headerEl = document.createElement('div');
    headerEl.id = 'header';

    const titleEl = document.createElement('div');
    titleEl.classList.add('title');
    titleEl.innerHTML = 'The Irish Pub';
    headerEl.appendChild(titleEl);

    const tabsEl = document.createElement('div');
    tabsEl.classList.add('tabs');

    const homeTabEl = document.createElement('div');
    homeTabEl.classList.add('home');
    homeTabEl.innerHTML = 'Home';
    tabsEl.appendChild(homeTabEl);

    const menuTabEl = document.createElement('div');
    menuTabEl.classList.add('menu');
    menuTabEl.innerHTML = 'Menu';
    tabsEl.appendChild(menuTabEl);

    const contactTabEl = document.createElement('div');
    contactTabEl.classList.add('contact');
    contactTabEl.innerHTML = 'Contact';
    tabsEl.appendChild(contactTabEl);

    headerEl.appendChild(tabsEl);
    document.querySelector('body').appendChild(headerEl);
  };

  return {
    displayHeader,
  };
})();

export default displayController;
