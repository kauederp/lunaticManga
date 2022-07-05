<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="container-fluid p-0 m-0">
<div id="app">
    <header>
        <nav class="">
            <div class="d-flex flex-column p-0 text-center bg-dark ">
                <div><img class="col-2" src="imgs/logo.webp" alt=""></div>
            </div>
        </nav>
    </header>
    <main>
        <form class="mt-4 d-flex justify-content-center py-4" id="formPesquisa" action="" method="post">
            <div class="bg-dark p-4 rounded-5">
                <input placeholder="Pesquisar 🔎" type="text" name="nomeManga" id="pesquisaManga">
            </div>
        </form>
            <div id="mangas" class="d-flex flex-row flex-wrap shadow">
            
        </div>
    </main>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
</body>
</html>