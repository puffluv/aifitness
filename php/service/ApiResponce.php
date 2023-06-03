<?php

class ApiResponce{ // ApiResponse
    public static function responce(string $msg,int $httpCode){
        echo json_encode(
            [
                "error" => $msg,
                "code" => $httpCode
            ]
        );
        exit();
    }
}