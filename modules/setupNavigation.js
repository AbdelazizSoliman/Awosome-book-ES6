const showElement = (id) => {
  document.getElementById(id).classList.add('show');
  document.getElementById(id).classList.remove('non-show');
};

const hideElement = (id) => {
  document.getElementById(id).classList.add('non-show');
  document.getElementById(id).classList.remove('show');
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

  document.getElementById('list').addEventListener('click', showList);
  document.getElementById('add').addEventListener('click', showAdd);
  document.getElementById('cont').addEventListener('click', showContact);
};

export default setupNavigation;
