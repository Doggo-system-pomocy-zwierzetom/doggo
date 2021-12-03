<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
 header("Content-Type: application/json; charset=UTF-8");

 //open connection to mysql db
 $connection = mysqli_connect("localhost:3307", "root", "", "test") or die("Error " . mysqli_error($connection));

 //fetch table rows from mysql db
 $sql = "SELECT * FROM administrators";
 $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
 //create an array
 $emparray = array();
 while($row =mysqli_fetch_assoc($result))
 {
     $emparray[] = $row;
 }
 echo json_encode($emparray);

 //close the db connection
 mysqli_close($connection);
?>