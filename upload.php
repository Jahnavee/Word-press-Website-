<?php ob_start();
require_once('authentication.php');
//declaring variable
$variable_title = null;
$variable_title = 'Home Page';
//adding header to the page
require_once('header.php');
ob_flush();
?>

<!--adding css to the page -->
<div class="jumbotron">
    <p><h3><center>Upload your Pictures and Images here</center></h3></p>
    <p><h3><center> Make The way you want</center></h3></p>

<!-- form for upload the picture-->
<center><form method="post"action="saveUpload.php"  enctype="multipart/form-data">
        <input type="file" name="file"/>
        <button>Upload picture</button>
</form></center>
</div>
<!--adding the footer to the page-->
<?php require_once('footer.php');?>