<?php
/* Ce script sera inclus en début des autres scripts pour donner accès à notre 
variable $bdd_connection (qui sera un pt d'entrée vers la database)
*/

// $NomDuVar = new PDO ('lienVersLeServer;'dbname=nomDeLabase','User','passWord');)
$bdd_connection= new PDO('mysql:host=localhost;dbname=notesjs','root','');

?>