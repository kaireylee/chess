function Piece(img, piece, color, x, y, status){
    this.x = x;
    this.y = y; 
    this.img = img;
    this.piece = piece;
    this.color = color; 
    this.status = status; 
    
    this.show = function(){
        if(this.status === 'active'){
            image(img, this.x, this.y, 100, 100); 
        }
    }
    
    this.move = function(){
        this.x = mouseX-50;
        this.y = mouseY-50;
        this.show();
    }
    
    this.return = function(x, y) {
        this.x = x;
        this.y = y;
    }
}