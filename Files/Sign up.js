<!DOCTYPE html>
<html>
<head>
  <title>Final Project</title>
  <style>
    body {
      font-family: Arial, Sans-Serif;
      margin: 0;
      padding: 0;
      background-image: url(images/scale.png);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }

    header {
      background-color: #ADE8F4;
      color: #fff;
      text-align: center;
      padding: 1rem;
    }

    nav {
      background-color: #FFC0CB;
      padding: 1rem;
      text-align: center;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin: 15px;
      font-size: 18px;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #000;
    }

    main {
      padding: 2rem;
      text-align: center;
      font-size: 1.5rem;
      font-family: "Courier New", Courier, monospace;
    }

    main img {
      max-width: 40%;
      display: block;
      margin: 20px auto;
      border-radius: 10px;
    }

    footer {
      background-color: #ADE8F4;
      color: #fff;
      text-align: center;
      padding: 1rem;
      position: relative;
      bottom: 0;
      width: 100%;
    }

    form {
      background: rgba(255, 255, 255, 0.9);
      padding: 20px;
      margin: 20px auto;
      width: 400px;
      border-radius: 10px;
    }

    input, textarea {
      display: block;
      margin: 10px auto;
      padding: 10px;
      width: 90%;
      font-size: 16px;
    }

    label {
      font-weight: bold;
      display: block;
      margin-top: 10px;
      text-align: left;
    }

    .required {
      color: red;
    }

    .error {
      color: red;
      font-size: 14px;
      text-align: left;
    }

    button {
      background-color: #FFC0CB;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #FFB6C1;
    }
  </style>
</head>
<body>
  <header>
    <h1>✧･ﾟ: *✧･ﾟ:* Men and Women Together ✧･ﾟ: *✧･ﾟ:*</h1>
  </header>

  <nav>
     	<a href="home.html">╰┈➤   Home</a>
        <a href="subpage.html">╰┈➤   About Gender Equality</a>
        <a href="subpage2.html">╰┈➤   Contact</a>
	<a href="CS AA - Interactive Quiz.html">╰┈➤   Quiz Time!</a>
	<a href="Sign up.html">╰┈➤   Sign Up!</a>
  </nav>

  <main>
    <form id="signupForm">
      <label>First Name <span class="required">*</span></label>
      <input type="text" id="firstName">
      <span class="error" id="errorFirstName"></span>

      <label>Last Name <span class="required">*</span></label>
      <input type="text" id="lastName">
      <span class="error" id="errorLastName"></span>

      <label>Sex <span class="required">*</span></label>
      <input type="radio" name="sex" value="Male"> Male
      <input type="radio" name="sex" value="Female"> Female
      <input type="radio" name="sex" value="Prefer not to say"> Prefer not to say
      <span class="error" id="errorSex"></span>

      <label>Email Address <span class="required">*</span></label>
      <input type="email" id="email">
      <span class="error" id="errorEmail"></span>

      <label>Password <span class="required">*</span></label>
      <input type="password" id="password">
      <span class="error" id="errorPassword"></span>

      <label>Contact Number (optional)</label>
      <input type="text" id="contact">

      <label>Why you’re supporting our campaign <span class="required">*</span></label>
      <textarea id="supportReason"></textarea>
      <span class="error" id="errorSupport"></span>

      <button type="button" onclick="submitForm()">Join the Movement</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2025 Men and Women Together Campaign</p>
  </footer>

  <script>
    function submitForm() {
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      let firstName = document.getElementById('firstName').value.trim();
      let lastName = document.getElementById('lastName').value.trim();
      let email = document.getElementById('email').value.trim();
      let password = document.getElementById('password').value.trim();
      let supportReason = document.getElementById('supportReason').value.trim();
      let sex = document.querySelector('input[name="sex"]:checked');

      let isValid = true;

      if (firstName === "") {
        document.getElementById('errorFirstName').textContent = "required";
        isValid = false;
      }
      if (lastName === "") {
        document.getElementById('errorLastName').textContent = "required";
        isValid = false;
      }
      if (!sex) {
        document.getElementById('errorSex').textContent = "required";
        isValid = false;
      }
      if (email === "") {
        document.getElementById('errorEmail').textContent = "required";
        isValid = false;
      }
      if (password === "") {
        document.getElementById('errorPassword').textContent = "required";
        isValid = false;
      }
      if (supportReason === "") {
        document.getElementById('errorSupport').textContent = "required";
        isValid = false;
      }

      if (isValid) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("sex", sex.value);
        localStorage.setItem("supportReason", supportReason);
        window.location.href = "profile.html";
      }
    }
  </script>
</body>
</html>
