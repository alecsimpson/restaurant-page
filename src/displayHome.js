import util from './displayUtil';
import foodPic from '../assets/Bangers-and-Mash-2.png';

const displayHome = () => {
  util.selectTab('.home');

  const contentEl = document.querySelector('#content');

  // const introEl = util.createEl('div', {
  //   className: 'intro',
  //   innerHTML: 'The best place off the island for beer, bangers and bollocks!',
  // });

  const slideshowEl = util.createEl('div', { className: 'slideshow' });
  const imgEl = util.createEl('img', { src: foodPic });
  slideshowEl.appendChild(imgEl);

  const addrLine1El = util.createEl('div', { className: 'address-line-1', innerHTML: '1234 Taraval Street' });
  const addrLine2El = util.createEl('div', { className: 'address-line-2', innerHTML: 'San Francisco CA, 94122' });

  const hoursContainer = util.createEl('div', { className: 'hoursContainer' });

  let hoursArr = [
    { className: 'hoursHeader', innerHTML: 'HOURS' },
    { className: 'hoursBold', innerHTML: 'CLOSED MONDAY' },
    { className: 'hoursBold', innerHTML: 'Tuesday - Friday' },
    { className: 'hours', innerHTML: '12:00 pm - 10:00 pm' },
    { className: 'hoursBold', innerHTML: 'Saturday - Sunday' },
    { className: 'hours', innerHTML: '10:00 am - 12:00pm' },
    { className: 'hoursBold', innerHTML: 'Brunch ends at 3:00 pm, Kitchen closes at 9:00 pm' },
  ];
  hoursArr = hoursArr.map((config) => util.createEl('div', config));
  hoursArr.forEach((hoursEl) => hoursContainer.appendChild(hoursEl));

  // contentEl.appendChild(introEl);
  contentEl.appendChild(slideshowEl);
  contentEl.appendChild(addrLine1El);
  contentEl.appendChild(addrLine2El);
  contentEl.appendChild(hoursContainer);
};

export default displayHome;
