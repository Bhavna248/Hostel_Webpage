<?php
declare(strict_types=1);

require_once __DIR__ . "/../config/session.php";

function isLoggedIn(): bool
{
    return isset($_SESSION["admin_id"]);
}

function requireLogin(): void
{
    if (!isLoggedIn()) {
        $_SESSION["flash_error"] = "Please login to continue.";
        header("Location: /student-management/login.php");
        exit;
    }
}
