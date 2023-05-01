const showElement = (id) => {
  const element = document.querySelector(`#${id}`);
  element.classList.add('show');
  element.classList.remove('non-show');
};

const hideElement = (id) => {
  const element = document.querySelector(`#${id}`);
  element.classList.add('non-show');
  element.classList.remove('show');
};

const showList = () => {
  showElement('diplay-list');
  hideElement('input-data');
  hideElement('contact');
};

const showAdd = () => {
  hideElement('diplay-list');
  showElement('input-data');
  hideElement('contact');
};

const showContact = () => {
  hideElement('diplay-list');
  hideElement('input-data');
  showElement('contact');
};

const setupNavigation = () => {
  showList();

  document.querySelector('#list').addEventListener('click', showList);
  document.querySelector('#add').addEventListener('click', showAdd);
  document.querySelector('#cont').addEventListener('click', showContact);
};

document
  .querySelector('#list')
  .addEventListener('click', showList, { once: true });

export default setupNavigation;
