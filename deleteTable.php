<?php ob_start(); // start of output buffer

// To read the selected id from url's querystring using get

$person_id = $_GET['person_id'];

if(is_numeric($person_id))
{
    // Connect to server
    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');

    // TO write and run the query

    $sql= "DELETE FROM jupiter WHERE person_id = :person_id";

    $cmd = $conn->prepare($sql);
    $cmd -> bindParam(':person_id',$person_id ,PDO::PARAM_INT);
    $cmd -> execute();

    // Disconnect from server

    $conn = null;

    // To redirect back to the table page

    header('location:table.php');
}
ob_end_flush();

?>