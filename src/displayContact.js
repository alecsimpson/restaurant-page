import util from './displayUtil';

const displayContact = () => {
  util.selectTab('.contact');

  const contentEl = document.querySelector('#content');

  const visitUsContainer = util.createEl('div', { className: 'visitUsContainer' });

  let visitUsSection = [
    { className: 'visitUsHeader', innerHTML: 'VISIT US' },
    { className: 'addressLine', innerHTML: 'Address' },
    { className: 'addressLine2', innerHTML: '1234 Taraval St, San Francisco CA 94122' },
    { className: 'phoneAndEmailLine', innerHTML: 'Phone and Email' },
    { className: 'phoneNumber', innerHTML: '909-816-3522' },
    { className: 'email', innerHTML: 'alecsimpson20@gmail.com' },
  ];
  visitUsSection = visitUsSection.map((config) => util.createEl('div', config));
  visitUsSection.forEach((el) => visitUsContainer.appendChild(el));

  const formEl = util.createEl('form');

  contentEl.appendChild(visitUsContainer);
};

export default displayContact;
