<?php
declare(strict_types=1);
require_once __DIR__ . "/../config/session.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <link rel="stylesheet" href="/student-management/assets/style.css">
</head>
<body>
<header class="topbar">
    <h1>Student Management System</h1>
    <nav>
        <a href="/student-management/dashboard.php">Dashboard</a>
        <a href="/student-management/students/list.php">Students</a>
        <?php if (isset($_SESSION["admin_id"])): ?>
            <a href="/student-management/logout.php">Logout</a>
        <?php else: ?>
            <a href="/student-management/login.php">Login</a>
        <?php endif; ?>
    </nav>
</header>
<main class="container">
