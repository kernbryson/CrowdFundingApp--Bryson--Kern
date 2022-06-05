
const commentBtn = document.querySelector('#commentBtn');
const commentBox = document.querySelector('#comment');

commentBtn.addEventListener('click', createComment);

function createComment() {
  const commentBody = commentBox.value;
  const projectId = document
  .querySelector('#createdProject')
  .getAttribute('data-projectId');
}
