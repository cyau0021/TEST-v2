<?php


switch ($_POST['action']) {
    case "createDB":
        createDatabase();
        break;
    case "getSuspects":
        getSuspects();
        break;
    case "getInitialQuestions":
        getInitialQuestions();
        break;
    case "getSequelQuestions":
        getSequalQuestions($_POST['questionId']);
        break;
    case "getPersonOfInterest":
        getPersonOfInterest();
        break;
}

//A method to retreive al the suspects from the database
function getSuspects(){
    $conn = beginConnection();

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

function getPersonOfInterest() {
    $conn = beginConnection();

    $sql = "SELECT * FROM personofinterest WHERE id = 1";


    $result = $conn->query($sql);

    $finalResult = [];

    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
            array_push($finalResult, $row);
        }
        echo json_encode($finalResult);
    }

    //close the connection
    $conn->close();

}

function getInitialQuestions() {
    $conn = beginConnection();

    $sql = "SELECT * FROM interviewquestion WHERE PersonOfInterest_id = 1 AND hoofdvraag IS null";

    $result = $conn->query($sql);

    $finalResult = [];

    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
            array_push($finalResult, $row);
        }

        echo json_encode($finalResult);
    }

    //close the connection
    $conn->close();
}

function getSequalQuestions($id) {


    $conn = beginConnection();

    $sql = "SELECT * FROM interviewquestion WHERE PersonOfInterest_id = 1 AND hoofdvraag = " . $id;


    $result = $conn->query($sql);

    $finalResult = [];

    if ($result->num_rows > 0) {

        while($row = $result->fetch_assoc()) {
            array_push($finalResult, $row);
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
    $dbname = "detectiveCrawler";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
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
