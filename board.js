function board(pieceArray){
    this.pieceArray = pieceArray; 
    
    this.update = function(pieceArray){
        for(var i = 0; i < this.pieceArray.length; i++){
            this.pieceArray[i].show(); 
        }
    } 
    
    this.legalMove = function(piece, newX, newY, oldX, oldY){
        newX -= newX%100;
        newY -= newY%100; 
        if(newX < 0 || newX > width-(width/8) || newY < 0 || newY > height-(height/8))
            return false; 
        switch(piece.piece){
            case(piece.piece = 'pawn'):
                if(newY === oldY - height/8 && piece.color === 'white'){ //pawn moves 1 square forwards
                    return true;
                    break;
                }
                else if(newY === oldY + height/8 && piece.color === 'black'){ //pawn moves 1 square forwards
                    return true;
                    break;
                }
                else
                    return false;
                    break;
            case(piece.piece = 'queen'):
                if(newY-oldY === newX-oldX || newY+oldY === newX+oldX || newY-oldY === oldX-newX || newY === oldY || newX === oldX){
                    return true;
                    break;
                }
                else
                    return false;
                    break;
            case(piece.piece = 'king'):
                //if(((newY-newY%100) === oldY-100 || newY)){
                    return true;
                    break;
                //}
            case(piece.piece = 'bishop'):
                if(newY-oldY === newX-oldX || newY+oldY === newX+oldX || newY-oldY === oldX-newX){
                    return true;
                    break;
                }
                else
                    return false;
                    break;
            case(piece.piece = 'rook'):
                if(newY === oldY || newX === oldX){
                    return true;
                    break;
                }
                else
                    return false;
                    break;
            case(piece.piece = 'knight'):
                if((newY === oldY + height/4 && (newX === oldX - width/8)) || (newY === oldY + height/4 && (newX === oldX - width/8)) || (newY === oldY - height/4 && (newX === oldX + width/8)) || (newY === oldY - height/4 && (newX === oldX - width/8)) || ((newX === oldX + width/4) && (newY === oldY - height/8)) || ((newX === oldX + width/4) && (newY === oldY + height/8)) || ((newX === oldX - width/4) && (newY === oldY - height/8)) || ((newX === oldX - width/4) && (newY === oldY + height/8))){
                    return true;
                    break;
                }
            else
                console.log(newX , newY, oldX, oldY);
                return false; 
                break;
        }
    }
    
    this.capture = function(position){
        console.log(position);
        this.pieceArray[position].status = 'inactive'; 
        console.log('captured: ' + this.pieceArray[position].piece);
    }
}