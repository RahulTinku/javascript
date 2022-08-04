// set initial count
let count = 0;

// select values and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('reset')) {
      count = 0;
    } else if (styles.contains('increase')) {
      count++;
    }
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
