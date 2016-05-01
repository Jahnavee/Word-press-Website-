<?php ob_start();
//declaring variables
$variable_title = null;
$variable_title = 'Home Page';
//adding header
require_once('header.php');
ob_flush();
?>
<?php
//getting page_id which is unique id
if(!empty($_GET['page_id']))
{
    $page_id = $_GET['page_id'];
}
else
{
    $page_id = '';
}
//connecting to database
require_once('database.php');
//selecting sql queery from database table
$sql = "SELECT * FROM earth WHERE page_id = :page_id";
//adding parameters
$cmd = $conn->prepare($sql);
$cmd->bindParam(':page_id', $page_id, PDO::PARAM_INT);
$cmd->execute();
$pages = $cmd->fetchAll();

//foreach loop
foreach($pages as $page)
{
    $title = $page['title'];
    $content = $page['content'];
    $_SESSION['title'] = $page['title'];
    echo "<h1 style='color: black'><center>".$title."</center></h1>";
    echo "<h4 style= color:darkslategrey>".$content."</h4>";
}
//disconnect
$conn = null;
ob_flush();
?>
<!--<div class="col-md-12" style="text-align: center; "><img style="margin-top: 10px;" src="stamps.jpg"></div>-->

<?php require_once('footer.php');?>

