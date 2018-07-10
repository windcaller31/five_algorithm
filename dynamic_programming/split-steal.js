/*
  rn = max{pn, r1+rn-1,r2+rn-2,…..rn-1+r1}
  pn表示不切割的时候，其他表示切成两段，分别长i 和n-i，接着求解这两段的最优切割收益
  rn = max(pi + rn-i)
*/

//价格表p 和长度n
function cut_rod(p,n){
    if(n==0){
      return 0;
    }
    var q = -1;
    for(var i = 1;i<=n;i++){
      q = Math.max(q, p[i]+ cut_rod(p,n-i));
    }
    return q;
}

//o为钢条总长度。pn每加一厘米的
var pn = [1,5,8,9,10,17,17,20,24,30];
var o = 9;

console.log(cut_rod(pn,o));
