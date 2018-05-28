var tl = 0;
var chess_box = [];

var chess_board = function(row,column,x,y,size){
  if(size==1){
    return;
  }
  var siz = Math.floor(size/2);
  var t = tl+1;
  tl++;
  //中间点
  var center_row = row+siz;
  var center_col = column+siz;
  //左上
  if((x<center_row)&&(y<center_col)){ //在左上
    chess_board(row,column,x,y,siz);
  }else{ //不在左上
    chess_box[center_row-1][center_col-1] = t;
    chess_board(row,column,center_row-1,center_col-1,siz);
  }
  //左下
  if((x>=center_row)&&(y<center_col)){ //在左下
    chess_board(center_row,column,x,y,siz);
  }else{ //不在左下
    chess_box[center_row][center_col-1] = t;
    chess_board(center_row,column,center_row,center_col-1,siz);
  }
  //右上
  if((x<center_row)&&(y>=center_col)){ //在右上
    chess_board(row,center_col,x,y,siz);
  }else{ //不在右上
    chess_box[center_row-1][center_col] = t;
    chess_board(row,center_col,center_row-1,center_col,siz);
  }
  //右下
  if((x>=center_row)&&(y>=center_col)){ //在右下
    chess_board(center_row,center_col,x,y,siz);
  }else{ //不在右下
    chess_box[center_row][center_col] = t;
    chess_board(center_row,center_col,center_row,center_col,siz);
  }
}
function main (){
  var x = 2;
  var y = 1;
  var chess_size = 4;
  // 涂黑(x,y)，初始化L型牌编号
  for(var i =0 ;i<chess_size ;i++){
    chess_box.push([]);
  }
  chess_box[x][y] = "*";
  // 分治法填满棋盘
  chess_board(0, 0, x, y, chess_size);
  console.log(JSON.stringify(chess_box));
}
main();
