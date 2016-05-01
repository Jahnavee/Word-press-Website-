<?php
require_once('authentication.php');
$variable_title = null;
$variable_title = 'Blog writing';
require_once('header.php');

if(!empty($_GET['person_id'])  && (is_numeric($_GET['person_id']))) {
//if we do, store in a variable
    $person_id = $_GET['person_id'];

    require_once('authentication.php');

    $sql = "SELECT * FROM venus WHERE person_id = :person_id";

    $cmd = $conn->prepare($sql);
    $cmd -> bindParam(':person_id',$person_id ,PDO::PARAM_INT);
    $cmd -> execute();
    $jupiter = $cmd -> fetchAll();

    foreach($persons as $person)
    {

    }

    $conn = null;
}

?>

<h2>Blog</h2>
<div class="jumbotron">

</div>

<?php require_once('footer.php');?>
