<?php
    //$to = "contactar@mm-magrinya.cat"; 
    $to = "rubinho6@gmail.com"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "Has rebut un nou contacte desde la WEB"; 
    $fields = array(); 
    $fields{"name"} = "Nom"; 
    $fields{"surname"} = "Cognoms"; 
    $fields{"email"} = "Email"; 
    $fields{"phone"} = "Telèfon"; 
    $fields{"message"} = "Missatge";
    $body = "Contacte:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
    error_log("Send result :" + $send);
    error_log($body);
?>