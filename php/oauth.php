<?php
require_once 'settings.php';

$parameters = [
    'redirect_uri'  => GOOGLE_REDIRECT_URI,
    'response_type' => 'code',
    'client_id'     => GOOGLE_CLIENT_ID,
    'scope'         => implode(' ', GOOGLE_SCOPES),
];

$uri = GOOGLE_AUTH_URI . '?' . http_build_query($parameters);