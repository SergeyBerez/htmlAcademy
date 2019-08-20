let li = document.querySelector('.login-link');
li.addEventListener('click', function(e) {
  e.preventDefault();
  let modal = document.querySelector('.modal.modal-login ');
  console.log(modal);
  if (modal.style.display == 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
});

let but = document.querySelector('.modal-close');
but.addEventListener('click', function(e) {
  let modal = (document.querySelector('.modal.modal-login').style.display =
    'none');
});
