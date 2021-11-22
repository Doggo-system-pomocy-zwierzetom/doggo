<?php
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost:3307", "root", "", "test");
$id = $_GET["id"];
$mysqli->select_db("test");
if ($result = $mysqli -> query("SELECT * FROM adoptions WHERE id=$id")) {
  while( $row = $result->fetch_array() )
{
  printf(json_encode(['name'=>$row['name'], 
                      'image'=> base64_encode($row['image']),
                      'userMail'=>$row['userMail'], 
                      'shelterName'=> $row['shelterName'],
                      'description'=>$row['description'], 
                      'id'=> $row['id']]));
}
}
 $mysqli -> close();
?>