<?php
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost:3307", "root", "", "test");
$name = $_GET['name'];
$userMail = $_GET['userMail'];
$shelterName = $_GET['shelterName'];
$description = $_GET['description'];
$id = $_GET['id'];
$entityBody = file_get_contents('php://input');
$mysqli->select_db("test");
$sql = "INSERT INTO Adoptions ('name', 'image', 'userMail', 'shelterName', 'description', 'id') VALUES ($name, $entityBody, $userMail, $shelterName, $description, $id)";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
  }
 $mysqli -> close();
?>