<!DOCTYPE html>
<html>
<head>
<!--    variable declared -->
    <title><?php echo $variable_title ;?></title>
    <meta content="text/html; charset=utf-8" http-equiv="content-type" / >
    <title>Listings</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
<!--    <link href="style.css">-->
</head>
<body>

<!--navigation bar css-->
<nav class="navbar navbar-inverse">
<!--adding default link to the heading so that when users click there it should go to the default link-->
   <a href="default.php" title="" class="navbar-brand">
       <img src="uploades/picture.jpg" width="50" height="5">
    <ul class="nav navbar-nav navbar-right">
        <?php ob_start();
//        try catch
        try{
//     Adding private links and public links to the header
        if(!empty($_SESSION['person_id']))
        {
//private links
            echo
            '<li role="presentation" class="active"><a href="links.php"title="Admin page">Admin</a> </li>
            <li role="presentation" class="active"><a href="page.php"title="Page">Add Page</a> </li>
            <li role="presentation" class="active"><a href="listing.php"title="Page">Page</a> </li>
            <li role="presentation" class="active"><a href="table.php"title="Table page">User List</a> </li>
            <li role="presentation" class="active"><a href="upload.php" title="Upload">Upload</a></li>
            <li role="presentation" class="active"><a href="logout.php" title="Logout">LogOut</a></li>';
        }
        else
                {
                    $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200329020', 'gc200329020', 'zB*f8tPY');
                    $page_id = $_GET['page_id'];
                    $sql = "SELECT * FROM earth";
                    $cmd = $conn->prepare($sql);
                    $cmd->execute();
                    $pages = $cmd->fetchAll();

                    foreach ($pages as $page)
                        {
                            echo '<li role="presentation" class="active"> <a href="default.php?page_id=' . $page['page_id'] . ' "> ' . $page['title'] . '</a> </li>';
                     }

                    echo
                    '<li role="presentation" class="active"><a href="register.php"title="register to page">Register</a></li>
                     <li role="presentation" class="active"><a href="login.php" title="Login to page">Login</a></li>';
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