<?php
header('Content-Type: application/json; charset=utf-8');
    $host = 'srv-db-plesk02.ps.kz';
    $db   = 'aktsepts_db';
    $user = 'aktsepts_user';
    $pass = '5331$HCgp#au';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $user, $pass, $opt);

	$allComments = $pdo->query('SELECT * FROM `comments`')->fetchAll(PDO::FETCH_UNIQUE);

echo json_encode($allComments);