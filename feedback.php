
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

		<h1 style="color: white; background-color: green; padding: 10px; text-align: center; margin-top: 10%; border-radius: 5px;"> E-mail enviado com sucesso! Responderemos você o mais breve possível.</h1>

		<p style="justify-content: center; align-items: center; text-align: center;"><a href="index.html" style="color: black; background-color: #ff9900; padding: 10px; border-radius: 5px; text-decoration:none;">Voltar para o início</a></p>

		<?php
	} else {
		?>

		<h1 style="color: white; background-color: red; padding: 10px; text-align: center; margin-top: 10%; border-radius: 5px;"> O E-mail não pôde ser enviado. Tente mais tarde ou tente outra forma de contato.</h1>

		<p style="justify-content: center; align-items: center; text-align: center;"><a href="index.html" style="color: black; background-color: #ff9900; padding: 10px; border-radius: 5px; text-decoration:none;">Voltar para o início</a></p>
		<?php

	}

}

?>