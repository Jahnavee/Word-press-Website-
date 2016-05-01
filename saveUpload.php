<?php ob_start();
//file details
$name = $_FILES['file']['name'];
echo "Name Of the File: $name <br />";

$size = $_FILES['file']['size'];
echo "Size Of the File: $size <br />";

$type = $_FILES['file']['type'];
echo "Type Of the File: $type <br />";
//echo "Mime Content Type:  " . mime_content_type($_FILES['file']['tmp_name']).'<br />';

$tmp_name = $_FILES['file']['tmp_name'];
echo "Temporary File Name: $tmp_name<br />";


//using session
session_start();
//generates unique name
$finalName = session_id() . '_' . $name ;

//copy
move_uploaded_file($tmp_name,"uploades/picture.jpg");

header('location:default.php');
ob_flush();
?>
