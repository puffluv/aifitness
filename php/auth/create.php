<?php
    $host = 'srv-db-plesk02.ps.kz'; // хост
    $db   = 'aktsepts_db'; // бд
    $user = 'aktsepts_user'; // юзер
    $pass = '5331$HCgp#au'; // пароль
    $charset = 'utf8'; 

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset"; // Подключение DSN (имя источника данных)
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]; // Конфигурация PDO
    $pdo = new PDO($dsn, $user, $pass, $opt);

	function decode(string $token){ // Декодирование
        return (array) json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $token)[1]))));
    }
	$user = decode($_GET["token"]);
$sql = "INSERT INTO comments (avatar, name, comment,created_at) VALUES (?,?,?,?)";
$pdo->prepare($sql)->execute([$user["picture"], $user["name"],$_GET["comment"],date("d.m.Y H:i:s",time())]);
//$pdo->query('INSERT INTO comments (avatar, name, comment)
//VALUES ('.$user["picture"].','.$user["name"].', '.$_GET["comment"].');')


$allComments = $pdo->query('SELECT * FROM `comments`')->fetchAll(PDO::FETCH_UNIQUE);;

echo json_encode($allComments);