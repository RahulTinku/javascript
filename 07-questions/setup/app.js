// traversing the dom //
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // traverse the DOM and add class to grandparent element
//     const parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.toggle('show-text');
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function (ques) {
  const btn = ques.querySelector('.question-btn');
  btn.addEventListener('click', function (e) {
    // close all other questions
    questions.forEach(function (item) {
      if (item !== ques) {
        item.classList.remove('show-text');
      }
    });
    // open the selected questions
    ques.classList.toggle('show-text');
  });
});
