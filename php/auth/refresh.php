<?php
function decode(string $token){
   return (array) json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $token)[1])))); // Декодирование токена
}

setcookie("token",$_GET["token"],strtotime($timeCode),"/","/",false,true); // Ставит куки
$user = decode($_GET["token"]);
echo json_encode(["user" => $user,"code" => 200]); // Вывод