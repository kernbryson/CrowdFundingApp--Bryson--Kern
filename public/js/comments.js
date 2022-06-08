const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log('click');
  const body = document.querySelector('textarea[name="comment-body"]').value;
  const postId = document.querySelector('input[name="post-id"]').value;

  if (body) {
    fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(body, postId);
    window.location.reload();
  } else {
    alert('Input a comment');
    console.log('button clicked');
  }
};

const commentBtn = document.getElementById('commentBtn');
commentBtn.addEventListener('click', newCommentHandler);
