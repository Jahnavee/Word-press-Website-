<?php ob_start();
//require_once ('authentication.php');
$variable_title = null;
$variable_title='Saving';
// adding header to the page
require_once ('header.php');

//try and catch command
try{
//Store the variables
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$city = $_POST['city'];
$username = $_POST['username'];
$password = $_POST['password'];
$confirm= $_POST['confirm'];
$person_id = $_POST['person_id'];

$ok=true;

//validation
if(empty($firstName))
{
    echo 'first name is required <br />';
    $ok = false;
}

if(empty($lastName))
{
    echo 'last name is requires <br />';
    $ok = false;
}

if(empty($address)){
    echo'address is required<br/>';
   $ok = false;
}

if(empty($city)){
    echo'city is required<br/>';
    $ok = false;
}

if(empty($username))
{
    echo 'username is required <br />';
    $ok = false;
}

if(empty($password))
{
    echo'Password is required<br/>';
    $ok = false;
}

if(empty($confirm))
{
    echo'Password must be match<br/>';
    $ok = false;
}


if ($ok){
    //connect
//    require_once ('database.php');
    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');
$sql = "select username from jupiter where username = :username";
//    $cmd = $conn->prepare($sql);
//    $cmd->bindParam(':person_id', $person_id, PDO::PARAM_INT);

        if (isset($person_id)) {
            $sql = "UPDATE jupiter SET firstName = :firstName, lastName = :lastName,address = :address,city = : city,username = : username,
                WHERE perosn_id = : person_id";
        } else {
            //set up sql insert
            $sql = "INSERT INTO jupiter(firstName,lastName,address,city,username,password)VALUES(:firstName,:lastName,:address,:city,:username,:password)";
        }
        // hash the password
        $hashed_password = hash('sha512', $password);

        //fill the params and execute
        $cmd = $conn->prepare($sql);
        $cmd->bindParam(':firstName', $firstName, PDO::PARAM_STR, 50);
        $cmd->bindParam(':lastName', $lastName, PDO::PARAM_STR, 50);
        $cmd->bindParam(':address', $address, PDO::PARAM_STR, 90);
        $cmd->bindParam(':city', $city, PDO::PARAM_STR, 50);
        $cmd->bindParam(':username', $username, PDO::PARAM_STR, 50);
        $cmd->bindParam(':password', $hashed_password, PDO::PARAM_STR, 128);
        if (isset($person_id)) {
            $cmd->bindParam(':person_id', $person_id, PDO::PARAM_INT);
        }
        $cmd->execute();

        //disconnect

    echo 'Your registration was successful. Click to <a href="login.php" title="Login" >Login</a>';

}
}
catch(Exception $e){
    header('location:error.php');
    mail('jahnaveeparmar@gmail.com','product error',$e);


}
require_once ('footer.php');
ob_flush();
?>