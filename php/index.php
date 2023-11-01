<!DOCTYPE html>
<html lang="en" class="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nate-games</title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <p>If you see this... We are moving to Heroku soon, since it supports MySQL and PHP.</p>
    <?php
    $p_start = "<p>";
    $p_end = "</p>";
    $date = date('F jS Y');
    echo "$p_start Today is $date! $p_end"
    ?>
</body>

</html>