<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));
$name = $_GET['name'];
$userMail = $_GET['userMail'];
$shelterName = $_GET['shelterName'];
$description = $_GET['description'];
$id = $_GET['id'];
$entityBody = file_get_contents('php://input');


$sql = "INSERT INTO Adoptions ('name', 'image', 'userMail', 'shelterName', 'description', 'id') VALUES ($name, $entityBody, $userMail, $shelterName, $description, $id)";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
  }
 $mysqli -> close();
?>