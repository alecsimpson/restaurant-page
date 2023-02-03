const displayUtil = (() => {
  const initPage = () => {
    const wrapperEl = document.createElement('div');
    wrapperEl.id = 'wrapper';

    const contentEl = document.createElement('div');
    contentEl.id = 'content';

    wrapperEl.appendChild(contentEl);
    document.querySelector('body').appendChild(wrapperEl);
  };

  const createEl = (type, elConfig) => {
    const el = document.createElement(type);
    if (!elConfig) { return el; }

    Object.keys(elConfig).forEach((key) => {
      el[key] = elConfig[key];
    });

    return el;
  };

  const selectTab = (tab) => {
    document.querySelector('#content').innerHTML = '';
    const currTab = document.querySelector('.selected');
    if (currTab) {
      currTab.classList.remove('selected');
    }

    document.querySelector(tab).classList.add('selected');
  };

  return {
    initPage,
    createEl,
    selectTab,
  };
})();

export default displayUtil;
