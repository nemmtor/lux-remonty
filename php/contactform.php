<?php
    // Set mail content (details from post request which are details from form.)
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $msg = "<b>Treść wiadomości:</b> " . $_POST["msg"] . "<br />" . "<br />";
    $msg .= "<b>Imie i nazwisko:</b> " . $name . "<br />";
    $msg .= "<b>Numer telefonu:</b> " . $phone . "<br />";
    // Set static mail details, receiver, subject, headers
    $receiver = "kontakt@lux-remonty.pl";
    $subject = "LUX WWW - nowy mail";
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8r' . "\r\n";
    $headers .= 'From: Lux Adam Jankowski <kontakt@lux-remonty.pl>' . " \r\n" .
            'Reply-To: kontakt@lux-remonty.pl' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
    // Send mail
    mail($receiver, $subject, $msg, $headers);
?>