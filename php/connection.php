<?php
// Вывод Json
header('Content-Type: application/json; charset=utf-8');
error_reporting(0);

// Подключение библиотеки composer
require_once __DIR__ . '/../vendor/autoload.php';

// Подключение БД
ActiveRecord\Config::initialize(function($config){
    $config->set_connections([
        'mysql://aktsepts_user:5331$HCgp#au@srv-db-plesk02.ps.kz/aktsepts_db'
    ]);
});

// Автозагрузчик двух сервисов
include "model/autoload.php";
include "service/autoload.php";

