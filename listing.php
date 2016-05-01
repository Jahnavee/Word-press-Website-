<?php ob_start();
require_once('authentication.php');
//declaring variables
$variable_title = null;
require_once('header.php');
?>
<h1>Pages</h1>
<a href="page.php">ADD PAGE</a>
<?php
try{
//    connecting to database
    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// write the query to fetch the page data
    $sql = "SELECT * FROM earth";
// run the query and store the results into memory
    $cmd = $conn->prepare($sql);
    $cmd->execute();
    $pages = $cmd->fetchAll();
// start the table and add the headings
    echo '<table class="table table-bordered"><thead><th><a href="" title="Title">Title</a></th><th>Edit</th><th>Delete</th></thead><tbody>';
    /* loop through the data, creating a new table row for each page
    and putting each value in a new column */
    foreach ($pages as $page) {
        echo '<tr><td>' . $page['title'] . '</td>
        <td><a href="page.php?page_id=' . $page['page_id'] . '">Edit</a></td>
        <td>
        <a href="deletePage.php?page_id=' . $page['page_id'] .
            '" onclick="return confirm(\'Are you sure?\');">
            Delete</a></td></tr>';
    }
// close the table
    echo '</tbody></table>';
// disconnect
    $conn = null;
}
catch(Exception $e)
{
    header('location:error.php');
    mail('jahnaveeparmar@gmail.com','product error',$e);
}
require_once('footer.php');
ob_flush();
?>
