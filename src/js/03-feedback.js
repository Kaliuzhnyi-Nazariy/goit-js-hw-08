import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LS_KEY)) || {};

form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(storageFormData, 500));
form.addEventListener('submit', onSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  if (refs.input.value === '') {
    return alert('Hey, you should fill all fields!');
  }

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function reloadPage() {
  if (formData) {
    let { email, message } = form.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
