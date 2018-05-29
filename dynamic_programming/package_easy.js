/*
  背包问题解决就是装它 或者不装
  动态转移方程
  f[i][j]=max{
    f[i-1][j-a[i]]+b[i],
    f[i-1][j]
  }
*/

/**
    * @param m 表示背包的最大容量
    * @param n 表示商品个数
    * @param w 表示商品重量数组
    * @param p 表示商品价值数组
*/
function main(){
  var m = 10;  //背包重量
  var n = 3;   //商品个数
  var w = [3, 4, 5];  //重量
  var p = [4, 5, 6];  //价值
  var c = BackPack_Solution(m, n, w, p);
  console.log(c);
  var r = c[c.length-1];
  return r[r.length-1]
}

function BackPack_Solution(m, n, w, p){
  //c[i][v]表示前i件物品恰放入一个重量为m的背包可以获得的最大价值
  // var c[][] = new int[n + 1][m + 1];
  var c = []
  for(var i=0;i<=n;i++){
    c.push([]);
  }
  for (var  i = 0; i < n + 1; i++){
    c[i][0] = 0;
  }
  for (var j = 0; j < m + 1; j++){
    c[0][j] = 0;
  }
  for (var i = 1; i < n + 1; i++) {
    for (var j = 1; j < m + 1; j++) {
      //当物品为i件重量为j时，如果第i件的重量(w[i-1])小于重量j时，c[i][j]为下列两种情况之一：
      //(1)物品i不放入背包中，所以c[i][j]=c[i-1][j]的值
      //(2)物品i放入背包中，则背包剩余重量为j-w[i-1],所以c[i][j]=c[i-1][j-w[i-1]]+p[i]
      if (w[i - 1] <= j) {
        if (c[i - 1][j] < (c[i - 1][j - w[i - 1]] + p[i - 1])){
          c[i][j] = c[i - 1][j - w[i - 1]] + p[i - 1];
        }else{
          c[i][j] = c[i - 1][j];
        }
      }else{
        c[i][j] = c[i - 1][j];
      }

    }
  }
  return c;
}

console.log(main());
