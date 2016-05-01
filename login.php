<?php ob_start();
$variable_title = 'Log In';

require_once('header.php');
ob_flush();
?>
<main class="container">
<div class="row">
    <div class="col-md-offset-4 col-md-4">
    <h1>Log In</h1>
    <form method="post" action="validate.php" class="form-horizontal">


        <fieldset class="form-group">
            <label for="username" >Username:</label>
            <input name="username" required type="email" class="form-control"/>
        </fieldset>

        <fieldset class="form-group">
            <label for="password" >Password:</label>
            <input type="password" name="password" required type="password" class="form-control"/>
            need to <a href="register.php">Register</a>
        </fieldset>


        <fieldset class="form-group text-right">
            <input type="submit" value="Login" class="btn btn-success" />
        </fieldset>
    </form>
    </div>
</div>
</main>
<?php require_once('footer.php'); ?>