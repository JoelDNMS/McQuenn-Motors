<?php
$host = "localhost";
$users = "root";
$password = "";
$DB = "McQuenn";
$connection = mysqli_connect($host, $users, $password);
$conexaodb = mysqli_select_db($connection,$DB);

 if (mysqli_connect_errno()) {
    die("Error connection in database : ".
    mysqli_connect_error() . " ( " . mysqli_connect_errno() . " ) "
    ) ;
 }
 mysqli_query($connection, "SET NAMES 'utf8'");
 mysqli_query($connection, "SET character_set_connection=utf8");
 mysqli_query($connection, "SET character_set_client=utf8");
 mysqli_query($connection, "SET character_set_results=utf8");
?> 