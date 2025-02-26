<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST["firstName"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);    
    $address = htmlspecialchars($_POST["address"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $pincode = htmlspecialchars($_POST["pincode"]);          

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.dwellitsystems.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'notifications@dwellitsystems.com';
        $mail->Password = 'Dell@2011';
        $mail->SMTPSecure = ssl;
        $mail->Port = 465;

        // Sender & Recipient
        $mail->setFrom('notifications@dwellitsystems.com');
        $mail->addAddress('emmanual.nebu@dwellitsystems.com', 'Website Request');

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Message';
        $mail->Body    = "<strong>Name:</strong> $firstName <br><br><strong>Email:</strong>$email<br><br><strong>Phone:</strong><br>$phone<br><br><strong>Address:</strong><br>$address<br><br><strong>City:</strong><br>$city<br><br><strong>State:</strong><br>$state<br><br><strong>Pincode:</strong><br>$pincode";
        
        $mail->send();
        //echo "Message sent successfully!";
        echo '<script>alert("Message sent successfully!"); location.reload();</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
