<?php
require('products_db.php');
require('components/header.php');

$title = get_product_title(1);
$img_url = get_img_url(10);

require('components/product_info.php');
require('components/footer.php');
