document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const selectedClass = document.querySelector('input[name="class"]:checked');
  const classValue = selectedClass.value;

  const resultDiv = document.getElementById("loginResult");
  resultDiv.innerHTML = `
      <h5>Your Hero</h5>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Title:</strong> ${title}</p>
      <img src="${classValue}" alt="">
    `;

  // Close the modal
  const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  loginModal.hide();

});
