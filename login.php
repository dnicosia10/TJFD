<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="/login.php">
    <label for="usr">Username/Email:</label>
    <input type="email" id="usr" name="usr" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must contain @ / . / com" required>
    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
    <input type="submit">
</form>
</body>
</html>