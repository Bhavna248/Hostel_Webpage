<?php
declare(strict_types=1);
require_once __DIR__ . "/config/database.php";
require_once __DIR__ . "/includes/flash.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
    $password = $_POST["password"] ?? "";

    if ($name === "" || !$email || strlen($password) < 6) {
        setFlash("flash_error", "Enter valid name, email and password (min 6 chars).");
    } else {
        $check = $pdo->prepare("SELECT id FROM admins WHERE email = ?");
        $check->execute([$email]);
        if ($check->fetch()) {
            setFlash("flash_error", "Email already registered.");
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $insert = $pdo->prepare("INSERT INTO admins (name, email, password_hash) VALUES (?, ?, ?)");
            $insert->execute([$name, $email, $hash]);
            setFlash("flash_success", "Registration successful. Please login.");
            header("Location: /student-management/login.php");
            exit;
        }
    }
}
require_once __DIR__ . "/includes/header.php";
displayFlash("flash_error", "error");
displayFlash("flash_success", "success");
?>
<section class="card">
    <h2>Admin Registration</h2>
    <form method="post">
        <div class="row">
            <label>Name</label>
            <input type="text" name="name" required>
        </div>
        <div class="row">
            <label>Email</label>
            <input type="email" name="email" required>
        </div>
        <div class="row">
            <label>Password</label>
            <input type="password" name="password" required minlength="6">
        </div>
        <button type="submit">Register</button>
        <a class="btn" href="/student-management/login.php">Back to Login</a>
    </form>
</section>
<?php require_once __DIR__ . "/includes/footer.php"; ?>
