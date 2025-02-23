<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $businessname = htmlspecialchars($_POST["businessname"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $address = htmlspecialchars($_POST["address"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $pincode = htmlspecialchars($_POST["pincode"]);
    $requirement  = htmlspecialchars($_POST["requirement"]);        

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
        $mail->Body    = "<strong>Name:</strong> $name <br><strong>Business Name:</strong> $businessname <br><br><strong>Phone:</strong>$phone<br><br><strong>Email:</strong><br>$email<br><br><strong>Address:</strong><br>$address<br><br><strong>City:</strong><br>$city<br><br><strong>State:</strong><br>$state<br><br><strong>Pincode:</strong><br>$pincode<br><br><strong>requirement:</strong><br>$requirement";
        
        $mail->send();
        //echo "Message sent successfully!";
        echo '<script>alert("Message sent successfully!");</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
