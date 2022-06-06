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
 
  event.preventDefault();
  console.log('click');
  const body = document.querySelector('textarea[name="comment-body"]').value;
  const postId = document.querySelector('input[name="post-id"]').value;

  if (body) {
   await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, postId }),
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
