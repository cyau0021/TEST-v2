<?php


switch ($_POST['action']) {
    case "createDB":
        createDatabase();
        break;
    case "getSuspects":
        getSuspects();
        break;
    case "checkIsKiller":
        checkIsKiller($_POST['suspectId']);
        break;
}

//A method to retreive al the suspects from the database
function getSuspects(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "detectiveCrawler";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM suspect";
    $result = $conn->query($sql);

    $finalResult = [];

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            array_push($finalResult,$row);
        }
        echo json_encode($finalResult);
    }


    //close the connection
    $conn->close();
}

function beginConnection(){
    $servername = "localhost";
    $username = "root";
    $password = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function createDatabase(){

    $conn = beginConnection();

    // Create database
    $sql = "CREATE DATABASE IF NOT EXISTS detectiveCrawler;";
    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully";
    } else {
        echo "Error creating database: " . $conn->error;
    }

    //Create the tables




    //close the connection
    $conn->close();

    echo "databasejeTESTMsg";
}

function checkIsKiller($suspectId){
    echo true;
}