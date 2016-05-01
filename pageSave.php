<?php ob_start();
require_once('authentication.php');
try{
//Store the form inputs in variables
    $title = $_POST['title'];
//$password = $_POST['password'];
    $content  =$_POST['content'];


// for edit
    $page_id = $_POST['page_id'];

// create a flag to track the comp. status
    $ok = true;

// do our form validation before saving
    if (empty($title)){
        echo ' REQUIRED<br />';
        $ok = false;
    }

    if (empty($content)){
        echo ' REQUIRED<br />';
        $ok = false;
    }


// Save only if the form is ok
    if($ok == true) {
//Connecting to database
        require_once('database.php');

        if(!empty($page_id))
        {
            $sql = "UPDATE earth SET title = :title , content = :content WHERE page_id = :page_id";
        }
//Set-up an SQL command to save the new game
        else {
            $sql = "INSERT INTO earth (title, content) VALUES (:title, :content)";
        }
//Set-up a command object
        $cmd = $conn->prepare($sql);

//Fill the placeholders with 4 inputs variables
        $cmd->bindParam(':title', $title, PDO::PARAM_STR, 50);
        $cmd->bindParam(':content', $content, PDO::PARAM_STR, 500);
//        $cmd->bindParam(':lastName', $lastName, PDO::PARAM_STR, 50);
        if (!empty($page_id))
        {
            $cmd ->bindParam(':page_id',$page_id ,PDO::PARAM_INT);}
//Execute the input
        $cmd->execute();

//Shoe message
//        echo 'Saved';
        require_once ('listing.php');
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
$store_name = $page['store_name'];
$address = $page['address'];
$city_id = $page['city_id'];
$phone = $page['phone'];
$manager = $page['manager'];