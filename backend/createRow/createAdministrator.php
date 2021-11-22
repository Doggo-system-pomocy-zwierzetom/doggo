<?php 
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mail = $_GET["mail"];
$password = $_GET["password"];
$mysqli = new mysqli("localhost:3307", "root", "", "test");
$mysqli->select_db("test");
$sql = "INSERT INTO Administrators (mail, password) VALUES ($mail, $password)";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
  }
 $mysqli -> close();
?>