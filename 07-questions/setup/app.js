//using selectors inside the element
// traversing the dom

const minusBtn = document.querySelector('.minus-icon');
const plusBtn = document.querySelectorAll('.plus-icon');
const btns = document.querySelectorAll('.question-btn');
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.currentTarget.parentElement.parentElement);
  });
});
