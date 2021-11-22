<?php
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost:3307", "root", "", "test");
$mail = $_GET["mail"];
$mysqli->select_db("test");
if ($result = $mysqli -> query("SELECT * FROM users WHERE mail LIKE $mail")) {
  while( $row = $result->fetch_array() )
{
  printf(json_encode(['mail'=>$row['mail'], 
                      'password'=> $row['password']]));
}
}
 $mysqli -> close();
?>