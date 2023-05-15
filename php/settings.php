<?php
// Права доступа
const GOOGLE_SCOPES = [
    'https://www.googleapis.com/auth/userinfo.email', // доступ до адреси електронної пошти
    'https://www.googleapis.com/auth/userinfo.profile' // доступ до інформації профілю
];

// Посилання на аутентифікацію
const GOOGLE_AUTH_URI = 'https://accounts.google.com/o/oauth2/auth';

// Посилання на отримання токена
const GOOGLE_TOKEN_URI = 'https://accounts.google.com/o/oauth2/token';

// Посилання на отримання інформації про користувача
const GOOGLE_USER_INFO_URI = 'https://www.googleapis.com/oauth2/v1/userinfo';

// Client ID з кроку #3
const GOOGLE_CLIENT_ID = '980654595572-jhlh7mctkn7iorkfcjkem5s7dceoag8p.apps.googleusercontent.com';

// Client Secret з кроку #3
const GOOGLE_CLIENT_SECRET = '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';

// Посилання з секції "Authorized redirect URIs" з кроку #3
const GOOGLE_REDIRECT_URI = 'https://aktsept-stroy.kz/oauth.php';