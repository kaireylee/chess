var wking, wqueen, wbishop, wknight, wrook, wpawn;
var bking, bqueen, bbishop, bknight, brook, bpawn;
var oldX, oldY;
var movingP; 
var moveCount = 0; 
var dragging = false; 
var pieceArray; 


var alternate = true; 
var count = 0; 
function preload(){
    wking = loadImage('pieces/wking.png');
    wqueen = loadImage('pieces/wqueen.png');
    wbishop = loadImage('pieces/wbishop.png');
    wknight = loadImage('pieces/wknight.png');
    wrook = loadImage('pieces/wrook.png');
    wpawn = loadImage('pieces/wpawn.png');
    
    bking = loadImage('pieces/bking.png');
    bqueen = loadImage('pieces/bqueen.png');
    bbishop = loadImage('pieces/bbishop.png');
    bknight = loadImage('pieces/bknight.png');
    brook = loadImage('pieces/brook.png');
    bpawn = loadImage('pieces/bpawn.png');   
}

function setup() {
    createCanvas(800, 800);
    placePieces(); 
    pieceArray = [whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8, 
                whiteRookL, whiteBishopL, whiteKnightL, whiteQueen, whiteKing, whiteBishopR, whiteKnightR, whiteRookR,
                blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, 
                blackRookL, blackKnightL, blackBishopL, blackQueen, blackKing, blackBishopR, blackKnightR, blackRookR];
    board = new board(pieceArray); 
    
}

function draw() { 
    background(150);
    drawBoard();
    board.update(); 
}

function mousePressed(){ 
    oldX = mouseX-(mouseX%100);
    oldY = mouseY-(mouseY%100);
    
}

function mouseDragged(){
    if(dragging == false){
        for(var i = 0; i < pieceArray.length; i++){ 
            if(dist(pieceArray[i].x +50, pieceArray[i].y +50, mouseX, mouseY) < 50){ 
                board.pieceArray[i].move();
                movingP = i; 
                dragging = true;
            }
        }
    }
    else{
        board.pieceArray[movingP].move();
    }
}

function mouseReleased(){
    dragging = false; 
    
    if(board.legalMove(pieceArray[movingP], mouseX, mouseY, oldX, oldY)){
        for(var i = 0; i < pieceArray.length; i++){
            if(dist(pieceArray[movingP].x, pieceArray[movingP].y, pieceArray[i].x, pieceArray[i].y) < 50 && pieceArray[i] != pieceArray[movingP]){
                console.log(i);
                board.capture(i);
            }
        }
        pieceArray[movingP].x = mouseX-(mouseX%100);
        pieceArray[movingP].y = mouseY-(mouseY%100);
    }
    else{
        pieceArray[movingP].x = oldX;
        pieceArray[movingP].y = oldY; 
    }
}

function drawBoard(){
    for(var x = 0; x<width; x+=width/8){
        for(var y = 0; y<height; y+=width/8){
            if(count == 8){
                alternate = !alternate;
                count = 0; 
            }
            if(alternate == true){
                fill(51);
                alternate = false; 
            }
            else{
                fill(250, 250, 250); 
                alternate = true; 
            }
            count++; 
            rect(x, y, width/8, height/8); 
        }
    }
}

function placePieces(){
    whiteRookL = new Piece(wrook, 'rook', 'white', 0,  7*(height/8), 'active');
    whiteKnightL = new Piece(wknight, 'knight', 'white', width/8, 7*(height/8), 'active');
    whiteBishopL = new Piece(wbishop, 'bishop', 'white', 2*(width/8), 7*(height/8), 'active');
    whiteQueen = new Piece(wqueen, 'queen', 'white', 3*(width/8), 7*(height/8), 'active');
    whiteKing = new Piece(wking, 'king', 'white', 4*(width/8), 7*(height/8), 'active'); 
    whiteBishopR = new Piece(wbishop, 'bishop', 'white', 5*(width/8), 7*(height/8), 'active'); 
    whiteKnightR = new Piece(wknight, 'knight', 'white', 6*(width/8), 7*(height/8), 'active'); 
    whiteRookR = new Piece(wrook, 'rook', 'white', 7*(width/8), 7*(height/8), 'active'); 
    
    whitePawn1 = new Piece(wpawn, 'pawn','white', 0, 6*(height/8), 'active');
    whitePawn2 = new Piece(wpawn, 'pawn','white', width/8, 6*(height/8), 'active');
    whitePawn3 = new Piece(wpawn, 'pawn','white', 2*(width/8), 6*(height/8), 'active');
    whitePawn4 = new Piece(wpawn, 'pawn','white', 3*(width/8), 6*(height/8), 'active');
    whitePawn5 = new Piece(wpawn, 'pawn','white', 4*(width/8), 6*(height/8), 'active');
    whitePawn6 = new Piece(wpawn, 'pawn','white', 5*(width/8), 6*(height/8), 'active');
    whitePawn7 = new Piece(wpawn, 'pawn','white', 6*(width/8), 6*(height/8), 'active');
    whitePawn8 = new Piece(wpawn, 'pawn','white', 7*(width/8), 6*(height/8), 'active');
    
    blackRookL = new Piece(brook, 'rook', 'black', 0,  0, 'active');
    blackKnightL = new Piece(bknight, 'knight', 'black', width/8, 0, 'active');
    blackBishopL = new Piece(bbishop, 'bishop', 'black', 2*(width/8), 0, 'active');
    blackQueen = new Piece(bqueen, 'queen', 'black', 3*(width/8), 0, 'active');
    blackKing = new Piece(bking, 'king', 'black', 4*(width/8), 0, 'active'); 
    blackBishopR = new Piece(bbishop, 'bishop', 'black', 5*(width/8), 0, 'active'); 
    blackKnightR = new Piece(bknight, 'knight', 'black', 6*(width/8), 0, 'active'); 
    blackRookR = new Piece(brook, 'rook', 'black', 7*(width/8), 0, 'active'); 
    
    blackPawn1 = new Piece(bpawn, 'pawn','black', 0, height/8, 'active');
    blackPawn2 = new Piece(bpawn, 'pawn','black', width/8, height/8, 'active');
    blackPawn3 = new Piece(bpawn, 'pawn','black', 2*(width/8), height/8, 'active');
    blackPawn4 = new Piece(bpawn, 'pawn','black', 3*(width/8), height/8, 'active');
    blackPawn5 = new Piece(bpawn, 'pawn','black', 4*(width/8), height/8, 'active');
    blackPawn6 = new Piece(bpawn, 'pawn','black', 5*(width/8), height/8, 'active');
    blackPawn7 = new Piece(bpawn, 'pawn','black', 6*(width/8), height/8, 'active');
    blackPawn8 = new Piece(bpawn, 'pawn','black', 7*(width/8), height/8, 'active');
}

