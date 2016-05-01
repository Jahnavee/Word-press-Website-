<?php ob_start();
require_once('authentication.php');
try{
//Store the form inputs in variables
$username = $_POST['username'];
//$password = $_POST['password'];
$firstName  =$_POST['firstName'];
$lastName =$_POST['lastName'];

// for edit
$person_id = $_POST['person_id'];

// create a flag to track the comp. status
$ok = true;

// do our form validation before saving
if (empty($username)){
    echo ' REQUIRED<br />';
    $ok = false;
}

if (empty($firstName)){
    echo ' REQUIRED<br />';
    $ok = false;
}

if (empty($lastName)){
    echo 'Name is REQUIRED<br />';
    $ok = false;
}
// Save only if the form is ok
if($ok == true) {
//Connecting to database
    require_once('database.php');

    if(!empty($person_id))
    {
        $sql = "UPDATE jupiter SET username = :username , firstName = :firstName, lastName = :lastName WHERE person_id = :person_id";
    }
//Set-up an SQL command to save the new game
    else {
        $sql = "INSERT INTO jupiter (username, firstName, lastName) VALUES (:username, :firstName, :lastName)";
    }
//Set-up a command object
    $cmd = $conn->prepare($sql);

//Fill the placeholders with 4 inputs variables
    $cmd->bindParam(':username', $username, PDO::PARAM_STR, 50);
    $cmd->bindParam(':firstName', $firstName, PDO::PARAM_STR, 50);
    $cmd->bindParam(':lastName', $lastName, PDO::PARAM_STR, 50);
    if (!empty($person_id))
    {
        $cmd ->bindParam(':person_id',$person_id ,PDO::PARAM_INT);}
//Execute the input
    $cmd->execute();

//Shoe message
    echo 'Saved';

//Disconnecting from database
    $conn = null;
}
}
catch(Exception $e)
{
    header('location:error.php');
    mail('jahnaveeparmar@gmail.com','error',$e);
}
ob_flush();
?>
