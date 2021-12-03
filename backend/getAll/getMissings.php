<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
$sql = "SELECT * FROM notifications";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
    //create an array
$emparray = array();
while($row =mysqli_fetch_assoc($result)){
  $emparray[] = ['title'=>$row['title'], 
                      'image'=> base64_encode($row['image']),
                      'creator'=>$row['creator'], 
                      'time'=> $row['time'],
                      'description'=>$row['description'], 
                      'place'=> $row['place'],
                      'id'=> $row['id']];
}
echo json_encode($emparray);
mysqli_close($connection);
?>