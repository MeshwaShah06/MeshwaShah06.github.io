<?php 

$username = $_POST['name'];
$email = $_POST['email'];
$pack = $_POST['pack'];


$host = "localhost";
$dbusername ="root";
$dbpass = '';
$dbname ='zaykadb';
 

$subject = "new contact from $username ";
 $email_content = "Hey $username\n";
    $email_content .= "we have registerd you Your Email is: $email\n\n";
    $email_content .= "pack choosed:\n$pack\n";
$email_content .= "Thanks you to become a part of our Zayka Family \n";
 



$conn = new mysqli($host, $dbusername, $dbpass, $dbname);



if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From person Where email = ? Limit 1";
     $INSERT = "INSERT Into person (username, email, package) values(?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sss", $username, $email, $pack);
      $stmt->execute();
      echo "New record inserted sucessfully";
     mail($email, $subject, $email_content);
        
         
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();

}
?>