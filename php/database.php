<?php
    require_once $_SERVER['DOCUMENT_ROOT'].'/config.php';
    
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
                $conn = setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $this->_dbconn = $conn;
            } catch (Exception $e) {
                $this->connsuccess = false;
                $this->connerror = $e;
            }
        }    

        function __destroy() {
            $this->_dbconn = null;
        }
    }
?>