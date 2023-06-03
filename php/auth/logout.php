<?php
include "../connection.php";

if(empty($_COOKIE["token"])){
    return ApiResponce::responce("У вас отсутвует Cookie",403);
}

if (isset($_SERVER['HTTP_COOKIE'])) {
    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
    foreach($cookies as $cookie) {
        $parts = explode('=', $cookie);
        $name = trim($parts[0]);
        setcookie($name, '', time()-1000);
        setcookie($name, '', time()-1000, '/');
    }
} 

echo json_encode(["message" => "Вы успешно вышли в аккаунта","code" =>200]);