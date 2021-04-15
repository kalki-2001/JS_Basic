// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#form_1');
const name_ip = document.querySelector('#name');
const email = document.querySelector('#email');
const ph_number=document.querySelector('#phone')
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(name_ip.value === '' || email.value === '' || ph_number.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 5 seconds
    setTimeout(() => msg.remove(), 5000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${name_ip.value}: ${email.value} ;${ph_number.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    user.appendChild(li);

    //Clear fields
    name_ip.value = '';
    email.value = '';
    ph_number.value = '';
  }
}