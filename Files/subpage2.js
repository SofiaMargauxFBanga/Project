<!DOCTYPE html>
<head>
   
    <title>Subpage 2</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url(images/scale.png);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }

        header {
            background-color: #ADE8F4;
            color: white;
            text-align: center;
            padding: 1rem;
        }

        nav {
            background-color: #FFC0CB;
            padding: 1rem;
            text-align: center;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 15px;
            font-size: 18px;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: black;
        }

        main {
            padding: 2rem;
            text-align: center;
            font-size: 20px;
            color: #000;
            background-color: rgba(255, 255, 255, 0.9);
            margin: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 500px;
            margin: 20px auto;
            background: linear-gradient(to bottom, #fff, #f0f0f0);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        label {
            align-self: flex-start;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            background-color: #f9f9f9;
        }

        input:focus, textarea:focus {
            outline: none;
            border-color: #ADE8F4;
            box-shadow: 0 0 5px rgba(173, 232, 244, 0.8);
        }

        button {
            background-color: #ADE8F4;
            color: white;
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #4683B7;
        }

        footer {
            background-color: #ADE8F4;
            color: white;
            text-align: center;
            padding: 1rem;
            position: relative;
            bottom: 0;
            width: 100%;
        }

        input[placeholder], textarea[placeholder] {
            color: #888;
            font-style: italic;
        }

        a[href="subpage2.html"] {
            font-weight: bold;
        }

        main {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8));
        }
    </style>
</head>
<body>
    <header>
        <h1>✧･ﾟ: *✧･ﾟ:* MEN AND WOMEN TOGETHER ✧･ﾟ: *✧･ﾟ:*</h1>
    </header>

    <nav>
        <a href="home.html">╰┈➤ Home</a>
        <a href="subpage.html">╰┈➤ About Gender Equality</a>
        <a href="subpage2.html">╰┈➤ Contact</a>
	<a href="CS AA - Interactive Quiz.html">╰┈➤   Quiz Time!</a>
	<a href="Sign up.html">╰┈➤   Sign Up!</a>
    </nav>

    <main>
        <h2>Contact Us!</h2>
        <p>If you have any questions, feedback, or would like to reach out regarding this website, kindly fill in the form below:</p>

        <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </main>

    <footer>
        <p>NOTE: I’m not sure if this form will really work or not.</p>
    </footer>
</body>
</html>