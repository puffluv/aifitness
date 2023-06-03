<?php
spl_autoload_register(function ($class_name) { // Автозагрузчик для манипуляции с таблицами БД
    include  __DIR__.'/' . $class_name . '.php';
});