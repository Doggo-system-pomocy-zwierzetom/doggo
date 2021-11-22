<?php 
header('Content-type:application/json;charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$id = $_GET["id"];
$mysqli = new mysqli("localhost:3307", "root", "", "test");

$mysqli->select_db("test");
if ($result = $mysqli -> query("SELECT * FROM notifications WHERE id=$id")) {
  while( $row = $result->fetch_array()){
    printf(json_encode(['title'=>$row['title'], 
    'image'=> base64_encode($row['image']),
    'creator'=>$row['creator'], 
    'time'=> $row['time'],
    'description'=>$row['description'], 
    'place'=> $row['place'],
    'id'=> $row['id']]));
}
}
 $mysqli -> close();
?>