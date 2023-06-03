<?php

class JwtService{
    public function decode(string $token){ // Декодирование токена
        return (array) json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $token)[1]))));
    }
    public function validateToken(string $token){ // Валидация токена
        return $this->decode($token);
    }
}