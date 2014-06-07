var pause = false;

var Game = {

    pieces: {

        type: {

            type_s: {
                color: "blue",
                position: {
                    0: [0, 1, 0, 0],
                    1: [0, 1, 1, 0],
                    2: [0, 0, 1, 0],
                    3: [0, 0, 0, 0]
                }
            }

        }

    },

    setting: {
        elemento: document.getElementById("game").getContext('2d'),
        blockSize: 25,
        initialLeft: 100,
        initialTop: 0,
        level: 0,
        velocity: 600,
        pause: false,
        initHeight: 0,
        posLast: {
            left: 100,
            top: 0
        },
        newPos: {
            left: 0,
            top: 0
        }
    },

    init: function(pause) {

        var p = this.pieces;
        var s = this.setting;
        /* Resetar */
        /* Desenhar */
        var vel = s.velocity - (s.level * 50);

        setInterval(function() {

            // Botoes
            document.onkeydown = function(evt) {
                evt = evt || window.event;
                switch (evt.keyCode) {
                    case 80:
                        if (s.pause) {
                            s.pause = false;
                        } else {
                            s.pause = true;
                        }
                        break;
                    case 37:
                        s.newPos.left = s.newPos.left - 25;
                        break;
                    case 39:
                        s.newPos.left = s.newPos.left + 25;
                        break;
                    case 40:
                        s.newPos.top = s.newPos.top + 25;
                        break;
                }
            };

            // Verificacao para nova peça a ser colocada se a peça aual chegar no final
            if (s.initialTop === 600) {
                s.initialTop = -25;
                s.initialLeft = 100;
                s.posLast.top = -25;
                s.posLast.left = 100;
            }

            // Verificacao de pausa
            if (s.pause) {

            } else {

                // Verificar colision
                if (!Game.colision(p, s)) {

                    Game.drawPieces(p, s);

                } else {

                    s.initialTop = 600;
                }

            }

        }, vel);



    },

    drawPieces: function(p, s) {

        // Save
        s.elemento.save();

        // Limpas Antigo Elemento
        // Pegar posicao antiga do elemento
        
        for (var i = 3; i >= 0; i--) {
            for (var j =3; j >= 0; j--) {
                if (p.type.type_s.position[i][j]) {
                    s.elemento.clearRect(s.initialLeft + (j * 25), s.initialTop + (i * 25)-25, s.blockSize, s.blockSize);
                }
            }
        }

        s.initialTop = s.initialTop + 25 + s.newPos.top;
        s.initialLeft = s.initialLeft + s.newPos.left;

        // Resetamos os valores
        s.newPos.left = 0;
        s.newPos.top = 0;

        // Verificar colisoes
        Game.colision(p);

        // Redesenhar
        s.elemento.fillStyle = p.type.type_s.color;
        s.elemento.borderStroke = "#eee";
        for (var i = 3; i >=0; i--) {
            for (var j = 3; j >= 0; j--) {
                if (p.type.type_s.position[i][j]) {
                    s.elemento.fillRect(s.initialLeft + (j * 25), s.initialTop + (i * 25), s.blockSize, s.blockSize);
                }
            }
        }

        // restore
        s.elemento.restore();

    },

    colision: function(p) {
        
    }


}

Game.init(pause);

var footer = document.getElementsByTagName('footer')[0];

var nomesDasClasses = {
    1: "container",
    2: "container flip"
}

footer.addEventListener('mouseover', function() {
    console.log(nomesDasClasses[2]);
    this.className = nomesDasClasses[2];
});

footer.addEventListener('mouseout', function() {
    console.log(nomesDasClasses[1]);
    this.className = nomesDasClasses[1];
});