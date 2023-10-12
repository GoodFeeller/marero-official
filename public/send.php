<?php
    $name = $_POST['name'];
    $from = trim($_POST['email']);
    $phone = $_POST['phone'];

    $message = "Новый клиент!\nИмя: $name\nПочта: $from\nНомер: $phone";
    $message = htmlspecialchars($message);
    $message = urldecode($message);
    $message = trim($message);


    $to = "maksim.vasilenok@gmail.com";
    $subject = "Новый клиент";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";

    if(mail($to, $subject, $message, $headers)) {
    echo 'Письмо отправлено'
    }
    else {
    echo 'Письмо не отправлено'
    }
?>