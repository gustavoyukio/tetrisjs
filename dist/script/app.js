var pause=!1,Game={pieces:{type:{type_s:{color:"blue",position:{0:[0,1,0,0],1:[0,1,1,0],2:[0,0,1,0],3:[0,0,0,0]}}}},setting:{elemento:document.getElementById("game").getContext("2d"),blockSize:25,initialLeft:100,initialTop:0,level:0,velocity:600,pause:!1,initHeight:0,posLast:{left:100,top:0},newPos:{left:0,top:0}},init:function(){var a=this.pieces,b=this.setting,c=b.velocity-50*b.level;setInterval(function(){document.onkeydown=function(a){switch(a=a||window.event,a.keyCode){case 80:b.pause=b.pause?!1:!0;break;case 37:b.newPos.left=b.newPos.left-25;break;case 39:b.newPos.left=b.newPos.left+25;break;case 40:b.newPos.top=b.newPos.top+25}},600===b.initialTop&&(b.initialTop=-25,b.initialLeft=100,b.posLast.top=-25,b.posLast.left=100),b.pause||(Game.colision(a,b)?b.initialTop=600:Game.drawPieces(a,b))},c)},drawPieces:function(a,b){b.elemento.save();for(var c=3;c>=0;c--)for(var d=3;d>=0;d--)a.type.type_s.position[c][d]&&b.elemento.clearRect(b.initialLeft+25*d,b.initialTop+25*c-25,b.blockSize,b.blockSize);b.initialTop=b.initialTop+25+b.newPos.top,b.initialLeft=b.initialLeft+b.newPos.left,b.newPos.left=0,b.newPos.top=0,Game.colision(a),b.elemento.fillStyle=a.type.type_s.color,b.elemento.borderStroke="#eee";for(var c=3;c>=0;c--)for(var d=3;d>=0;d--)a.type.type_s.position[c][d]&&b.elemento.fillRect(b.initialLeft+25*d,b.initialTop+25*c,b.blockSize,b.blockSize);b.elemento.restore()},colision:function(){}};Game.init(pause);var footer=document.getElementsByTagName("footer")[0],nomesDasClasses={1:"container",2:"container flip"};footer.addEventListener("mouseover",function(){console.log(nomesDasClasses[2]),this.className=nomesDasClasses[2]}),footer.addEventListener("mouseout",function(){console.log(nomesDasClasses[1]),this.className=nomesDasClasses[1]});