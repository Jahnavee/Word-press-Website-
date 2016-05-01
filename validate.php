<?php ob_start();
//adding try catch
try{
$username = $_POST['username'];
$password = hash('sha512', $_POST['password']);
//    connecting to database
require('database.php');
// selectin the id from table
$sql = "SELECT person_id FROM jupiter WHERE username = :username AND password = :password";
$cmd = $conn->prepare($sql);
//parameters
$cmd->bindParam(':username', $username, PDO::PARAM_STR, 50);
$cmd->bindParam(':password', $password, PDO::PARAM_STR, 128);
$cmd->execute();

$persons = $cmd->fetchAll();
$count = $cmd->rowCount();

//    if else statment
if ($count == 0) {
    echo 'Opps Invalid Login. You might have entered wrong password or you didnt registerd ';
    exit();
}
else {
    session_start(); // access the existing session
    foreach  ($persons as $person) {
        $_SESSION['person_id'] = $person['person_id'];
    }
}
// adding locations to links
    header('location:links.php');
$conn = null;
}
catch(Exception $e){
header('location:error.php');
}
ob_flush();
?>

<!--end of the page-->

