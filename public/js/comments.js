// const commentBtn = document.querySelector('#commentBtn');
// const commentBox = document.querySelector('#comment');

// commentBtn.addEventListener('click', createComment);

// function createComment() {
//   const commentBody = commentBox.value;
//   const projectId = document
//   .querySelector('#createdProject')
//   .getAttribute('data-projectId');
// }

const newCommentHandler = async (event) => {
  console.log('click');
  event.preventDefault();
  console.log('click');
  const commentBox = document.querySelector('#comment').ariaValueMax.trim();

  if (commentBox) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    alert('Input a comment');
    console.log('button clicked');
  }
};

document
  .querySelector('#commentBtn')
  .addEventListener('click', newCommentHandler);
