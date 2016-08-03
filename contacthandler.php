<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name = trim($_POST["name"]);
		$email = trim($_POST["email"]);
		$message = trim($_POST["message"]);
	
		if (empty($name) OR empty($email) OR empty($message)) {
			echo "error";
		}
		else {
			$recipient = "pereeayats@gmail.com, jjuscafresa@gmail.com";

        	$subject = "Missatge de $name des de la pàgina web";

        	$email_content = "Missatge de $name ";
        	$email_content .= "amb correu electrònic $email:\n\n";
        	$email_content .= $message;

        	$email_headers = "From: $name <$email>";

        	if (mail($recipient, $subject, $email_content, $email_headers)) {
            	echo "success";
        	}
        	else echo "error";
		}
	}
	else echo "error";
?>