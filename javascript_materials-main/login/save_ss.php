<?php
    session_start();
    echo $_GET['callbackparam']."(".$Data.")";
    if(isset($_GET['user_login'])){
        $user=$_GET['user_login'];
        $_SESSION['user']=$user;
        header('Location:page.php');

    }
?>