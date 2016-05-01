<?php ob_start();
require_once('authentication.php');

$variable_title = null;
$variable_title = 'Blog listing';
require_once('header.php'); ?>

    <h2> Blog </h2>

<?php

    require_once('database.php');

    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql= "SELECT * FROM venus ";

    $cmd = $conn->prepare($sql);
    $cmd -> execute();
    $games = $cmd -> fetchAll();

    echo 'Blogs';

    $conn = null;
require_once('footer.php');
ob_flush();
?>