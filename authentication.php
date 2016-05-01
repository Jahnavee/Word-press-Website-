<?php
session_start();
if(empty($_SESSION['person_id']))
{
    header('location:login.php');
    exit();
}
?>