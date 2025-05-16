<!DOCTYPE html>
<html>
<head>
  <title>Thank You for Signing Up!</title>
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

    footer {
      background-color: #ADE8F4;
      color: #fff;
      text-align: center;
      padding: 1rem;
      position: relative;
      bottom: 0;
      width: 100%;
    }

    button {
      background-color: #FFC0CB;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background-color: #FFB6C1;
    }
  </style>
</head>
<body>
  <header>
    <h1>Thank You for Joining!</h1>
  </header>

  <nav>
    <a href="home.html">╰┈➤ Home</a>
    <a href="subpage.html">╰┈➤ About Gender Equality</a>
    <a href="subpage2.html">╰┈➤ Contact</a>
    <a href="CS AA - Interactive Quiz.html">╰┈➤   Quiz Time!</a>
    <a href="Sign up.html">╰┈➤ Sign Up</a>
  </nav>

  <main>
    <p>Hi <span id="firstNameDisplay"></span>, thank you for supporting our campaign!</p>
    <p>Your reason: <span id="reasonDisplay"></span></p>
    <button onclick="goHome()">Back to Home Page</button>
  </main>

  <footer>
    <p>&copy; 2025 Men and Women Together Campaign</p>
  </footer>

  <script>
    document.getElementById('firstNameDisplay').textContent = localStorage.getItem('firstName');
    document.getElementById('reasonDisplay').textContent = localStorage.getItem('supportReason');

    function goHome() {
      window.location.href = 'home.html';
    }
  </script>
</body>
</html>
