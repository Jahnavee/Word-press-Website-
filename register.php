<?php ob_start();

$variable_title = null;
$variable_title = 'Register';
//adding header
require_once('header.php'); ?>
<?php
$person_id = null;
$firstName = null;
$lastName = null;
$address = null;
$city = null;
$username = null;
$password = null;
$confirm = null;

if ((!empty($_GET['person_id'])) && (is_numeric($_GET['person_id']))) {
    //if we do, store in a variable
    $person_id = $_GET['person_id'];

    require_once('database.php');
// sql queery for executing and fetching
    $sql = "SELECT * FROM jupiter WHERE person_id = :person_id";
    $cmd = $conn->prepare($sql);
    $cmd->bindParam(':person_id', $person_id, PDO::PARAM_INT);
    $cmd->execute();
    $persons = $cmd->fetchAll();
//foreach looping
    foreach ($persons as $person) {
        $firstName = $person['firstName'];
        $lastName = $person['lastName'];
        $address = $person['address'];
        $city = $person['city'];
        $username = $person['username'];
        $password = $person['password'];
        $confirm = $person['confirm'];
    }
//        disconnect
    $conn = null;
}
ob_flush();
?>
<!--Form for registration-->
    <main class="container">
    <fieldset class="row">
    <fieldset class="col-md-offset-4 col-md-4">
    <h1>Registration</h1>
    <form method="post" action="registrationSave.php" class="form-horizontal">
        <fieldset class="form-group">
            <label for="firstName">First Name</label>
            <input class="form-control" name="firstName" required type="First name required"  placeholder="Name" value="<?php echo $firstName; ?>"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="lastName">Last Name</label>
            <input class="form-control" name="lastName" required type="Last name required" placeholder="Name" value="<?php echo $lastName; ?>"/>
        </fieldset>


        <fieldset class="form-group">
            <label for="address"> Address</label>
            <input class="form-control" name="address" required type="Address required" placeholder="Address" value="<?php echo $address; ?>"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="city">City</label>
            <input class="form-control" name="city" required type="City required" placeholder="City" value="<?php echo $city; ?>"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="username">UserID</label>
            <input class="form-control" name="username" required type="email" placeholder="Email" value="<?php echo $username; ?>"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="password">Password:</label>
            <input class="form-control" type="password" name="password" required type="password"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="confirm">Confirm Password:</label>
            <input class="form-control" type="password" name="confirm" required type="password" />
        </fieldset>


        <fieldset class="form-group text-right">
            <input type="submit" value="Register" class="btn btn-warning" />
        </fieldset>
    </form>

<!--adding footer-->
<?php require_once('footer.php'); ?>