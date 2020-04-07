<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="ModalJS.js" defer></script>
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>Elements Javascripts</title>
</head>
<body>
    <main role="main" class="container">
        <header>
            <h1>ModalJS</h1>
            <p>Affiche une feneêtre modal</p>
        </header>

        <a href="#" class="modal_btn_open" data-id-modal="modal">Cliquer ici pour ouvrire la modal</a>
        
        <!-- Modal -->
        <div id="modal" class="modal" aria-hidden="true">
            <div class="modal_container">
                <header class="modal_header">
                    <h4 class="modal_title">Modals JS</h4>
                    <a href="#" class="modal_btn_close">×</a>
                </header>
                <div class="modal_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit labore nostrum cupiditate eaque delectus, suscipit vero culpa saepe totam earum, iusto laboriosam eum veritatis, deleniti dolores nemo nam recusandae est! Eveniet itaque officiis tenetur. Minima vel rerum unde enim commodi, reiciendis, eum dolor ratione, magnam ut cumque doloribus aliquid!</p>
                </div>
                <footer class="modal_footer">
                    <a href="#" class="btn">Close Winddow</a>
                </footer>
            </div>
        </div>

        <!-- Seconde modal -->
        <a href="#" class="modal_btn_open" data-id-modal="seconde_modal">Cliquer ici pour ouvrire la deuxiemes modal</a>
        
        <!-- Modal -->
        <div id="seconde_modal" class="modal" aria-hidden="true" >
            <div class="modal_container">
                <header class="modal_header">
                    <h4 class="modal_title">Deuxiemes Modal</h4>
                    <a href="#" class="modal_btn_close">×</a>
                </header>
                <div class="modal_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit labore nostrum cupiditate eaque delectus, suscipit vero culpa saepe totam earum, iusto laboriosam eum veritatis, deleniti dolores nemo nam recusandae est! Eveniet itaque officiis tenetur. Minima vel rerum unde enim commodi, reiciendis, eum dolor ratione, magnam ut cumque doloribus aliquid!</p>
                </div>
                <footer class="modal_footer">
                    <a href="#" class="btn">Close Winddow</a>
                </footer>
            </div>
        </div>
    </main>
</body>
</html>