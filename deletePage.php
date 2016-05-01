<?php ob_start(); // start of output buffer

// To read the selected id from url's querystring using get

$page_id = $_GET['page_id'];

if(is_numeric($page_id))
{
    // Connect to server
    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');

    // TO write and run the query

    $sql= "DELETE FROM earth WHERE page_id = :page_id";

    $cmd = $conn->prepare($sql);
    $cmd -> bindParam(':page_id',$page_id ,PDO::PARAM_INT);
    $cmd -> execute();

    // Disconnect from server

    $conn = null;

    // To redirect back to the listing page

    header('location:listing.php');
}
ob_end_flush();

?>