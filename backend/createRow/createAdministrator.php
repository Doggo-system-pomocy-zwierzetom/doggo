<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$mail = $_GET["mail"];
$password = $_GET["password"];

$connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));

 $stmt = $connection->prepare("INSERT INTO administrators (mail, password) VALUES (?, ?)");
 $stmt->bind_param('ss', $mail, $password);
 
 $stmt->execute();

 mysqli_close($connection);
 
?>