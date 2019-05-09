<?php
    $_SERVER['DOCUMENT_ROOT'].'/php/database.php';

    class Analytics Extends Database {

        public function __construct() {
          parent::__construct();
        }

        private function getClientOS() {
          $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
          if(strpos($agent, 'windows nt')) {
              $platform = 'windows';
          } elseif(strpos($agent, 'macintosh')) {
              $platform = 'mac';
          } elseif(strpos($agent, 'ipod')) {
              $platform = 'ipod';
          } elseif(strpos($agent, 'ipad')) {
              $platform = 'ipad';
          } elseif(strpos($agent, 'iphone')) {
              $platform = 'iphone';
          } elseif (strpos($agent, 'android')) {
              $platform = 'android';
          } elseif(strpos($agent, 'unix')) {
              $platform = 'unix';
          } elseif(strpos($agent, 'linux')) {
              $platform = 'linux';
          } else {
              $platform = 'other';
          }
          return $platform;
        }

        private function getRealIpAddr(){
        	if (!empty($_SERVER['HTTP_CLIENT_IP'])){//check ip from share internet
        		$ip=$_SERVER['HTTP_CLIENT_IP'];
        	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){//check ip is pass from proxy
        		$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        	} else{
        		$ip=$_SERVER['REMOTE_ADDR'];
        	}
        	return $ip;
        }

        function addLogEntry() {
          date_default_timezone_set('Australia/Melbourne');
          $userAccessTime = date('Y-m-d h:i:s', time());
          // echo $userAccessTime."<br>";

          $userDeviceOS = $this->getClientOS();
          // echo $userDeviceOS."<br>";

          $userIPAddr = $this->getRealIpAddr();
          // echo $userIPAddr;

          $sql = "INSERT INTO analytics (dt_stamp, page_accessed, device_type, ip_address) VALUES (?, ?, ?, ?)";
          $params = [$userAccessTime, 0, $userDeviceOS, $userIPAddr];
          $this->executesql($this->_dbconn, $sql, $params);
        }
    }

?>
