<?php
require_once('authentication.php');
$variable_title = null;
$variable_title = 'Submit';
//adding header
require_once('header.php'); ?>
<?php
$page_id = null;
$title = null;
$content = null;

if ((!empty($_GET['page_id'])) && (is_numeric($_GET['page_id']))) {
    //if we do, store in a variable
    $page_id = $_GET['page_id'];

    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');
// sql queery for executing and fetching
    $sql = "SELECT * FROM earth WHERE page_id = :page_id";
    $cmd = $conn->prepare($sql);
    $cmd->bindParam(':page_id', $page_id, PDO::PARAM_INT);
    $cmd->execute();
    $pages = $cmd->fetchAll();

//foreach looping
    foreach ($pages as $page) {
        $title = $page['title'];
        $content = $page['content'];
    }
//        disconnect
    $conn = null;
}
?>
<!--form for adding page title and page content-->
    <h1>Page</h1>
    <form method="post" action="pageSave.php" class="form-horizontal">
        <fieldset class="form-group">
            <label for="title" ><h4>Title</h4></label>
            <input name="title"  class="col-sm-2" value="<?php echo $title; ?>"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="content" ><h4>content</h4></label>
            <textarea name="content"   class="form-control" rows="3"></textarea>
        </fieldset>

        <input name="page_id" id="page_id"
               type="hidden" value="<?php echo $page_id; ?>" />
        <button class="col-sm-offset-2 btn btn-success">Submit</button>

    </form>

<!--adding footer-->
<?php require_once('footer.php'); ?>