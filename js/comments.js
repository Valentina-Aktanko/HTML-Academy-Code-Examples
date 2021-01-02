let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

function setCharCount() {
  charCounter.textContent = commentField.value.length;
}

function checkLengthOfComment(maxValue = 142) {
  if (commentField.value.length > 142) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
}

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
  charCounter.textContent = 0;
};

window.onload = function() {
  if (commentField.value.length) {
    setCharCount();
  }
}

commentField.oninput = function () {
  setCharCount();
  checkLengthOfComment();
};
