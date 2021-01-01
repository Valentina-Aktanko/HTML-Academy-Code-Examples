let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');

function setCharCount() {
  charCounter.textContent = commentField.value.length;
}

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};

window.onload = function() {
  if (commentField.value.length) {
    setCharCount()
  }
}

commentField.oninput = function () {
  setCharCount()
};
