<!DOCTYPE html>
<html>
<head>
    <!--    variable declared -->
    <title><?php echo $variable_title ;?></title>

</head>
<body>

<!--navigation bar css-->
<nav class="navbar navbar-inverse">

        <ul class="nav navbar-nav navbar-right">
            <?php ob_start();
            //        try catch
            try{
//     Adding private links and public links to the header
                if(!empty($_SESSION['city_id']))
                {
//private links
//                    echo
//                    '<li role="presentation" class="active"><a href="links.php"title="Admin page">Admin</a> </li>
//            <li role="presentation" class="active"><a href="page.php"title="Page">Add Page</a> </li>
//            <li role="presentation" class="active"><a href="listing.php"title="Page">Page</a> </li>
//            <li role="presentation" class="active"><a href="table.php"title="Table page">User List</a> </li>
//            <li role="presentation" class="active"><a href="upload.php" title="Upload">Upload</a></li>
//            <li role="presentation" class="active"><a href="logout.php" title="Logout">LogOut</a></li>';
                }
                else
                {
                    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');
                    $city_id = $_GET['city_id'];
                    $sql = "SELECT * FROM cities";
                    $cmd = $conn->prepare($sql);
                    $cmd->execute();
                    $pages = $cmd->fetchAll();

                    foreach ($pages as $page)
                    {
                        echo '<li role="presentation" class="active"> <a href="stores.php?city_id=' . $page['city_id'] . ' "> ' . $page[''] . '</a> </li>';
                    }

//                    echo
//                    '<li role="presentation" class="active"><a href="register.php"title="register to page">Register</a></li>
//                     <li role="presentation" class="active"><a href="login.php" title="Login to page">Login</a></li>';
                }
            }
            catch(Exception $e)
            {
//            adding location link to error if something wrong happens and email id so that admin can get message about error
                header('location:error.php');
                mail('jahnaveeparmar@gmail.com','product error',$e);
            }
            //        disconnection
            $conn = null;
            ob_flush();
            ?>
        </ul>
</nav>
<main class="container">
    <!--    end of header php file-->