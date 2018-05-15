<?php

//Pi
//$pyscript = "test.py";
//$python = "python";


//local laptop Michael
$pyscript = "aTestScript.py";
$python = "C:\\Users\\mich2\\AppData\\Local\Programs\\Python\\Python36-32\\python.exe";


$input =  $_POST['lampje'];
$cmd = "$python $pyscript $input";

$result = exec($cmd,$output);
echo json_decode( $result) ;//echo somthing to return it to the ajax post


