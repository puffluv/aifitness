<?php
// Загрузчик "подключения"
include "../connection.php";

$jwtService = new JwtService(); 
$timeCode = "60 days";    // Время жизни куки (авторизации)
$user = $jwtService->decode($_GET["token"]);
setcookie("token",$_GET["token"],strtotime($timeCode),"/","/",false,false);

echo json_encode([
    "user" => $user,
    "code" => 200
]);
