
<?php

if(isset($_POST["email"]) && !empty($_POST["email"])){

	$name = addslashes($_POST["name"]);
	$email = addslashes($_POST["email"]);
	$menssage = addslashes($_POST["menssage"]);

	$to = "gabrielaugustosb13@gmail.com";
	$subject = "Contato - Pixelated";
	$body = "Nome do usuário: " . $name . "\n\r"
	."E-mail do usuário: " . $email ."\n\r"
	."Mensagem deixada pelo usuário: " . $menssage."\n\r";

	$header = "From: contato@Pixelated.github.io" . "\r\n".
	"Reply-To: ".$email."\r\n".
	"X=Mailer:PHP/".phpversion();


	if(mail($to, $subject, $body, $header)){
		?>

		<h1 style="color: white; background-color: green; padding: 10px; text-align: center; margin-top: 10%; border-radius: 5px;"> The E-mail was sent successfully. We will answer you soon!</h1>

		<p style="justify-content: center; align-items: center; text-align: center;"><a href="index.html" style="color: black; background-color: purple; padding: 10px; border-radius: 5px; text-decoration:none;">Back to painting</a></p>

		<?php
	} else {
		?>

		<h1 style="color: white; background-color: red; padding: 10px; text-align: center; margin-top: 10%; border-radius: 5px;"> The E-mail couldn't be sent. Try later or try another way to contact us.</h1>

		<p style="justify-content: center; align-items: center; text-align: center;"><a href="index.html" style="color: black; background-color: purple; padding: 10px; border-radius: 5px; text-decoration:none;">Back to painting</a></p>
		<?php

	}

}

?>