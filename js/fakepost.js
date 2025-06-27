document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const selectedClass = document.querySelector('input[name="class"]:checked');
  const classValue = selectedClass.value;

  const resultDiv = document.getElementById("loginResult");
  resultDiv.innerHTML = `
      <h4>Your Hero</h4>
      <br>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Title:</strong> ${title}</p>
      <img src="${classValue}" alt="">
    `;

  const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  loginModal.hide();

});