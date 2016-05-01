<?php
//delaring variable.
$variable_title = null;
$variable_title = 'pages';
//adding header to the page
require_once('header.php');
?>

<!--adding css table to the page-->
    <table class="table table-bordered">
        <tr href="login.php">
            <td><a href="login.php">Home page</a> </td>
        </tr>

        <tr href="table.php">
            <td><a href="table.php">UserInfo</a> </td>
        </tr>

        <tr href="http://apple.com">
            <td>Pages</td>
        </tr>
        <tr href="http://google.com">
            <td>Logo</td>
        </tr>
    </table>

<!--adding footer to the page-->
<?php require_once('footer.php');?>