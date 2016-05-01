<?php
require_once ('authentication.php');
//declaring variables
$variable_title = null;
$variable_title = 'Links';
//adding headers
require_once('header.php');
?>
<!--adding css to the table-->
    <table class="table table-bordered">
<!--adding links which directs to the diffrent pages-->
        <tr href="table.php">
            <td><a href="table.php">UserInfo</a></td>
            <td>  User Information table which includes FirstName, LastName, EmailId </td>
        </tr>

        <tr href="page.php">
            <td><a href="page.php">Page</a></td>
            <td>   Adding Pages </td>
        </tr>

        <tr href="upload.phpSSS">
            <td><a href="upload.php">Logo</a></td>
            <td>  Uploading pictures and Images </td>
        </tr>
    </table>
<?php require_once('footer.php');?>