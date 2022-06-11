const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log('click');
  const body = document.querySelector('textarea[name="comment-body"]').value;
  const projectId = window.location.pathname.split('/')[2];

  if (body) {
    fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, projectId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(body, projectId + 'console log here!');
    window.location.reload();
  } else {
    alert('Input a comment');
    console.log('button clicked');
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  console.log('click');
  if (event.target.hasAttribute('comment-id')) {
    const id = event.target.getAttribute('comment-id');
    console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert('Failed to delete project');
    }
  }
};

const commentBtn = document.getElementById('commentBtn');
console.log(commentBtn);
commentBtn.addEventListener('click', newCommentHandler);

const deleteBtn = document.querySelector('.test');
console.log(commentBtn);
deleteBtn.addEventListener('click', delButtonHandler);
