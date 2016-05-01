<?php ob_start();
require_once('authentication.php');
// access the current session
session_start();

// remove all session variables
session_unset();

// end the session
session_destroy();

// return home
header('location:default.php');

ob_flush();
?>