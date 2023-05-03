import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let data = {
  email: '',
  message: '',
};
form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitFormHandler);

data = getFeedbackStateFromStorage();
form['email'].value = data.email || '';
form['message'].value = data.message || '';
function inputData(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}
function getFeedbackStateFromStorage() {
  const feedbackStateString = localStorage.getItem(LOCALSTORAGE_KEY);
  if (feedbackStateString) {
    return JSON.parse(feedbackStateString);
  } else {
    return {};
  }
}
function submitFormHandler(e) {
  e.preventDefault();
  if (!form['email'].value || !form['message'].value) {
    return alert('Будь ласка заповніть всі поля');
  }

  form.reset(data);
  console.log(data);
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
