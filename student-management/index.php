<?php
declare(strict_types=1);
require_once __DIR__ . "/config/session.php";

if (isset($_SESSION["admin_id"])) {
    header("Location: /student-management/dashboard.php");
    exit;
}
header("Location: /student-management/login.php");
exit;
