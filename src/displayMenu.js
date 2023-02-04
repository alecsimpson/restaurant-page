import util from './displayUtil';

const displayMenu = () => {
  util.selectTab('.menu');

  const menuContainer = util.createEl('div', { className: 'menuContainer' });

  let menuArr = [
    { className: 'menuHeader', innerHTML: 'OUR MENU' },
    { className: 'menuSection', innerHTML: 'COCKTAILS' },
    { className: 'menuItemName', innerHTML: 'MANHATTAN' },
    { className: 'menuItemDetails', innerHTML: 'Rhy, Antica Carpano, Angostura bitters, cherry garnish' },
    { className: 'menuItemName', innerHTML: 'MULE' },
    util.configFactory('menuItemDetail', 'Tullamore Dew, Lime, Ginger beer'),
    util.configFactory('menuSection', 'WINE'),
    util.configFactory('menuItemName', 'NAPA CELLAR SAUVIGNON BLANC'),
    util.configFactory('menuItemName', 'RAIMAT ALBARINO'),
    util.configFactory('menuItemName', 'ROMANCE ROSE'),
    util.configFactory('menuSection', 'BEER ON DRAFT'),
    util.configFactory('menuItemName', 'Stella'),
    util.configFactory('menuItemName', '805'),
    util.configFactory('menuItemName', 'Trumer'),
    util.configFactory('menuItemName', 'Modelo'),
    util.configFactory('menuItemName', 'Guiness'),
    util.configFactory('menuItemName', 'Fort Point KSA'),

  ];
  menuArr = menuArr.map((config) => util.createEl('div', config));
  menuArr.forEach((menuEl) => menuContainer.appendChild(menuEl));

  document.querySelector('#content').appendChild(menuContainer);
};

export default displayMenu;
