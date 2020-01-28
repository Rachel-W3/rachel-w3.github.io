<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <title>Rachel Wong's Portfolio</title>
</head>
<body>

    <header class="navbar">
        <h1>Rachel Wong</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <div id="container">

        <div id="profile">
            <img src="images/photo_ID_cropped.jpeg" alt="Photo of Rachel Wong">
            <h1>The unicorn developer you've been looking for.</h1>
        </div>
        
        <div id="projects">
            <h1>Projects</h1>
            <section id="proj-gallery">
                <div class="preview">
                    <img src="images/project1.jpg" alt="Project 1">
                    <h2>Project 1</h2>
                </div>
                <div class="preview">
                    <img src="images/project2.jpg" alt="Project 2">
                    <h2>Project 2</h2>
                </div>
                <div class="preview">
                    <img src="images/project3.jpg" alt="Project 3">
                    <h2>Project 3</h2>
                </div>    
            </section>
        </div>

        <section id="aboutme">
            <h1>About Me</h1>
            <p>
                Hi there! I am a Game Design and Development student and I enjoy bringing things
                to life with C# and Unity. Before coming to college, I've always had an interest
                in both art and programming, so I figured what better way to have the best of both
                worlds than in game design? Some of my favorite games include&nbsp;Divinity: Original Sin 2
                and Undertale, both of which are strong RPGs with equally strong soundtracks. In the distant
                future, I intend to make my own game that will hopefully be of equal quality as those two
                gems, but in the meantime, I aim to master the skills I will need to fulfill those goals.
            </p>
            <button><a href="downloadable/WongRachel_Resume.pdf" download>Download Resume</a></button>
        </section>

        <section id="contact">
            <h1>Contact</h1>
            <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
                <div id="form-left">
                    <input name="name" placeholder="Name">
                    
                    <input name="email" type="email" placeholder="Email">

                    <input name="subject" placeholder="Subject">
            
                </div>

                <div id="form-right">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>

                <input id="submit" name="submit" type="submit" value="Submit">
            </form>

            <?php
                if (isset($_POST["submit"])){ 
                    $to = "rw7363@rit.edu";
                
                    $from = empty(trim($_POST["email"])) ? "noemail@sample.com" : sanitize_string($_POST["email"]);
                    
                    $subject = empty(trim($_POST["subject"])) ? "(No subject)" : sanitize_string($_POST["subject"]);

                    $message = empty(trim($_POST["message"])) ?  "No message" : sanitize_string($_POST["message"]);

                    $name = empty(trim($_POST["name"])) ? "No name" : sanitize_string($_POST["name"]);
                    
                    $headers = "From: $from" . "\r\n";
                    
                    $message .= "\n\n - $name";

                    $sent = mail($to,$subject,$message,$headers);
                    if ($sent) {
                        echo "<p align='center'><b>You sent:</b> $message</p>";
                    }
                    else {
                        echo "<p align='center'>Mail not sent!</p>";
                    }
                }

                function sanitize_string($string){
                    $string = trim($string);
                    $string = strip_tags($string);
                    return $string;
                }
            ?>
        </section>
        
        <footer>
            <p>Copyright &COPY; 
                <span id="year">
                    <script>
                        let yearspan = document.getElementById("year");
                        yearspan.innerHTML = new Date().getFullYear();
                    </script>
                </span> Rachel Wong. All rights reserved.</p>
        </footer>

    </div>
</body>
</html>