<?php
    require $_SERVER['DOCUMENT_ROOT'].'/Rowville-Phase-II/php/database.php';

    class DatabaseSetup Extends Database {

        function createTables() {
            $sql = "CREATE TABLE IF NOT EXISTS users (
                id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                firstname VARCHAR(30) NOT NULL,
                lastname VARCHAR(30) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                passhash VARCHAR(128) NOT NULL
            ); CREATE TABLE IF NOT EXISTS analytics (
                id INT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                dt_stamp TIMESTAMP NOT NULL,
                page_accessed VARCHAR(100) NOT NULL,
                device_type VARCHAR(50) NOT NULL,
                ip_address VARCHAR(16) NOT NULL
            ); CREATE TABLE IF NOT EXISTS userprog (
                id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                user_id INT(9) NOT NULL,
                step_complete INT(6) NOT NULL
            ); CREATE TABLE IF NOT EXISTS content (
                id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                page_id VARCHAR(30) NOT NULL,
                content_html LONGTEXT NOT NULL
            )";

            $this->_dbconn->exec($sql);

            $this->_createAdminUser();
<<<<<<< HEAD
          }

          private function _createAdminUser() {

          }
=======
        }

        private function _createAdminUser() {
            
        }
>>>>>>> d4722eb4cd1600a25b384756e5e43eddb2a8f936
    }

?>
