<?php
header('Content-Type: application/json');

$servername = "mysql0.small.pl";
$username = "m2310_bono";
$password = "KINGAiALBERT1";
$dbname = "m2310_wesele";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$sql = "SELECT nazwa_pliku FROM weselnefoty";
$result = $conn->query($sql);
$files = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $files[] = $row["nazwa_pliku"];
    }
}

echo json_encode($files);

$conn->close();
?>
