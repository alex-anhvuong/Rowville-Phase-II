<?php
    require_once $_SERVER['DOCUMENT_ROOT'].'/Rowville-Phase-II/config.sample.php';

    class Database {

        protected $_dbconn;

        private $_dbhost;
        private $_dbname;
        private $_dbuser;
        private $_dbpass;

        public $connsuccess = true;
        public $connerror = '';

        function __construct() {
            $this->_dbhost = DBHOST;
            $this->_dbname = DBNAME;
            $this->_dbuser = DBUSER;
            $this->_dbpass = DBPASS;


            try {
                $conn = new PDO("mysql:host=$this->_dbhost;dbname=$this->_dbname", $this->_dbuser, $this->_dbpass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $this->_dbconn = $conn;
            } catch (Exception $e) {
                $this->connsuccess = false;
                $this->connerror = $e;
            }

            var_dump($conn);
        }

        function __destroy() {
            $this->_dbconn = null;
        }

        protected function executesql($dbh, $sql, $params) {
          //  Prepare the SQL query
          $statement = $dbh->prepare($sql);

          //  Execute
          try {
              $statement -> execute($params);
          } catch (Exception $e) {
              throw new Exception($e);
          }
        }
    }
?>
