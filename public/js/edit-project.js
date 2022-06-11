const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#newproject-name').value.trim();
  const id = window.location.pathname.split('/')[3];
  const description = document.querySelector('#newproject-desc').value.trim();

  if (name && description) {
    console.log('click');
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update project');
    }
  }
};
document
  .querySelector('.update-project-form')
  .addEventListener('submit', updateFormHandler);
