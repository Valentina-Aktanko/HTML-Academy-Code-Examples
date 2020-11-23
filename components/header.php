<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title><?= $title ?> – <?= $name ?> </title>
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(69582727, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/69582727" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
</head>
<body class="page">
  <header class="page-header">
    <div class="container">
      <h1 class="page-title"><?= $title ?></h1>
      <p><i>По всем вопросам пишите:</i><br><a href="mailto:<?= $email ?>"><?= $email ?></a></p>
      <button class="theme-button" type="button">Изменить тему</button>
    </div>
  </header>
  <main>
