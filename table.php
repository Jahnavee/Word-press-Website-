<?php ob_start(); //set page title ans embed header
//authentication check
require_once('authentication.php');
try{
//set page title and embed here
$variable_title = null;
$variable_title = 'Listings';
require_once('header.php'); ?>
<h1>Listing</h1>


<?php

//try
// connect
    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');

// turn on sql debugging

    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// write the query and fetch the game data

    $sql= "SELECT * FROM jupiter";

 $cmd = $conn->prepare($sql);
    $cmd -> execute();
    $persons = $cmd -> fetchAll();

//start the table and add the headings

    echo ' <table class="table table-bordered"><thead><th><a href="" title="FirstName"> First Name </a></th> <th><a href=""title="LastName"> Last Name </a></th><th><a href="" title="ID"> user ID </a></th><th><a href="" title="Delete"> Delete </a></th><th><a href="" title="Edit"> Edit</a></th></thead><tbody></tbody>';

// loop through the data, creating a new table row for each game and putting each value in a new column
    foreach($persons as $person)
    {
        echo
            '<tr><td>'. $person['firstName'].'</td>
    <td>'. $person['lastName'] .'</td>
    <td>'. $person['username'].'</td>

<td><a href="deleteTable.php?person_id=' . $person['person_id'].'" title="delete" onclick="return confirm(\'are you sure? \');">delete</a></td>
<td><a href="register.php?person_id=' . $person['person_id'].'">Edit</a></td>
    </tr>';

    }
//close the table
    echo '</thead></table>';
// disconnect
    $conn = null;
}
catch(Exception $e)
{
    mail('jahnaveeparmar@gmail.com','error',$e);
    header('location:error.php');
}

echo '<script src="scripts/sorttable.js"></script>';
require_once('footer.php');
ob_flush();
?>

