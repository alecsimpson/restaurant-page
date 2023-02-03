import util from './displayUtil';
import foodPic from '../assets/Bangers-and-Mash-2.png';

const displayHome = () => {
  util.selectTab('.home');

  const contentEl = document.querySelector('#content');

  const introEl = util.createEl('div', { className: 'intro', innerHTML: 'The best place off the island for beer, bangers and bollocks!' });

  const slideshowEl = util.createEl('div', { className: 'slideshow' });
  const imgEl = util.createEl('img', { src: foodPic });
  slideshowEl.appendChild(imgEl);

  const addrLine1El = util.createEl('div', { className: 'address-line-1', innerHTML: '1234 Taraval Street' });
  const addrLine2El = util.createEl('div', { className: 'address-line-2', innerHTML: 'San Francisco CA, 94122' });

  contentEl.appendChild(introEl);
  contentEl.appendChild(slideshowEl);
  contentEl.appendChild(addrLine1El);
  contentEl.appendChild(addrLine2El);
};

export default displayHome;
