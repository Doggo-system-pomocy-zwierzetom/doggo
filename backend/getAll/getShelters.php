<?php
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "root", "", "test");

$mysqli->select_db("test");
if ($result = $mysqli -> query("SELECT * FROM shelters")) {
  while( $row = $result->fetch_array() )
{
  printf(json_encode(['mail'=>$row['mail'], 
                      'password'=> $row['password'],
                      'NIP'=>$row['NIP'], 
                      'name'=> $row['name'],
                      'food'=>$row['food'], 
                      'equipment'=> $row['equipment']]));
}
}
 $mysqli -> close();
?>