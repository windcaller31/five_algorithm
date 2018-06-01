var total = 0;

function init_chess(n){
  var chess_box = [];
  for(var i=0;i<n;i++){
    chess_box.push([]);
    for(var j=0;j<n;j++){
      chess_box[i][j] = 0;
    }
  }
  var row = 0;
  push_queen(chess_box,row,n)
}

function push_queen(chess_box,row,n){
  // 如果 row == n则说明皇后都放上去了
  // 输出结果递归终止
  if(row==n){
    total++;
    console.log("第",total,"种解法");
    console.log(chess_box);
    return;
  }

  /**
   * 向这一行的每一个位置尝试排放皇后
   * 然后检测状态，如果安全则继续执行递归函数摆放下一行皇后
  */
  for(var i=0;i<n;i++){
    //开始摆放这一行
    //摆放这一行的皇后，之前要清掉所有这一行摆放的记录，防止污染棋盘 第二步之后会生效
    for(var j=0;j<n;j++){
      chess_box[row][j]=0;
    }
    chess_box[row][i]=1;
    if( is_safe(chess_box,row,i) ){
      //本行放置成功则继续下一行
      push_queen(chess_box,row+1,n);
    }
  }
}

function is_safe(chess_box,row,col){
  for(var step = 1;step<=row;step++){
    if(chess_box[row-step][col]==1){ //上方
      return false;
    }
    if(chess_box[row-step][col-step]==1){//左上
      return false;
    }
    if(chess_box[row-step][col+step]==1){//右上
      return false;
    }
  }
  return true;
}

init_chess(8);
