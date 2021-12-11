<?php 
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
  header("Content-Type: application/json; charset=UTF-8");

  $mail = $_GET["mail"];
  $connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));


  // prepare and bind
  $stmt = $connection->prepare("SELECT * FROM `administrators` WHERE `mail` = ? LIMIT 1");
  $stmt->bind_param("s", $mail);

  // set parameters and execute
  $stmt->execute();

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();

  if($row) echo json_encode([$row]);
  else  echo json_encode([]);

  //close the db connection
  mysqli_close($connection);
?>