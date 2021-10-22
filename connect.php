<?php 
$connect = mysqli_connect('localhost','Dnicosia10','414243444546','db_test');

$result = $connect->query("SELECT * FROM test_mysql");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($result_array, $row);
    }
}
/* send a JSON encded array to client */
header('Content-type: application/json');
?>