import displayUtil from './displayUtil';
import displayHeader from './displayHeader';
import displayHome from './displayHome';
import displayMenu from './displayMenu';
import displayContact from './displayContact';

(() => {
  displayUtil.initPage();
  displayHeader();
  document.querySelector('.tabs .home').onclick = displayHome;
  document.querySelector('.tabs .menu').onclick = displayMenu;
  document.querySelector('.tabs .contact').onclick = displayContact;
})();
