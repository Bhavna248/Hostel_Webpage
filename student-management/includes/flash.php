<?php
declare(strict_types=1);

require_once __DIR__ . "/../config/session.php";

function setFlash(string $key, string $message): void
{
    $_SESSION[$key] = $message;
}

function displayFlash(string $key, string $class): void
{
    if (isset($_SESSION[$key])) {
        $message = htmlspecialchars($_SESSION[$key]);
        echo "<div class='alert $class'>$message</div>";
        unset($_SESSION[$key]);
    }
}
