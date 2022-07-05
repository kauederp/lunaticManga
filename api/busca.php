<?php

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,'https://unionleitor.top/assets/busca.php?nomeManga='. str_replace(" ",'+',$_GET['nomeManga']));
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($ch);

