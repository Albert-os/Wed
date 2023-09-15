<?php
  //nagłówek że odp jest json
  header('Content-Type: application/json');
  
// Obsługa przesyłania plików
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $targetDir = "uploads/";
    $file = $_FILES["file"];
    $targetFile = $targetDir . basename($file["name"]);

    // Walidacja rozmiaru pliku
    if ($file["size"] > 120 * 1024 * 1024) {
        echo json_encode(['success' => false, 'message' => 'Plik jest za duży! Maksymalny rozmiar to 120MB.']);
        exit;
    }

    // Walidacja formatu pliku
    $validFormats = ['image/jpeg', 'image/png', 'image/gif', 'audio/mpeg', 'video/mp4'];
    if (!in_array($file["type"], $validFormats)) {
        echo json_encode(['success' => false, 'message' => 'Nieprawidłowy format pliku! Akceptowane formaty to: JPEG, PNG, GIF, MP3, MP4.']);
        exit;
    }

    if (move_uploaded_file($file["tmp_name"], $targetFile)) {
        // Połączenie z bazą danych
        $servername = "mysql0.small.pl";
        $username = "m2310_bono";
        $password = "KINGAiALBERT1";
        $dbname = "m2310_wesele";

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Zmieniono nazwy kolumn na "adres_ip", "urzadzenie" oraz "nazwa_pliku"
        $stmt = $conn->prepare("INSERT INTO weselnefoty (nazwa_pliku, adres_ip, urzadzenie) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $filename, $ip_address, $user_agent);

        $filename = $file["name"];
        $ip_address = $_SERVER['REMOTE_ADDR'];
        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        $stmt->execute();
        $stmt->close();
        $conn->close();

        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Wystąpił błąd podczas przesyłania pliku.']);
    }
}
?>
