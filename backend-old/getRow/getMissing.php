<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$id = $_GET["id"];
$connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));


// prepare and bind
if($stmt = $connection->prepare("SELECT * FROM notifications WHERE id= ? LIMIT 1")){
$stmt->bind_param("i", $id);
// set parameters and execute
$stmt->execute();

$result = $stmt->get_result();
$row = $result->fetch_assoc();
if($row){
    $emparray[] = ['title'=>$row['title'], 
                      'image'=> base64_encode($row['image']),
                      'creator'=>$row['creator'], 
                      'time'=> $row['time'],
                      'description'=>$row['description'], 
                      'place'=> $row['place'],
                      'id'=> $row['id']];
    echo json_encode($emparray);
}
else  echo json_encode([]);
}
//close the db connection
mysqli_close($connection);

?>