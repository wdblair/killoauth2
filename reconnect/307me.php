<?php

// 307 Temporary Redirect
header("X-Frame-Options: SAMEORIGIN");
header("Location: https://www.facebook.com/login.php?email=&pass=", TRUE, 307);
