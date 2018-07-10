var q;
function Memorized_cut_rod(p, n){
    var r = [];
    for(var i = 0;i<=n;i++){
        r[i] = -1000000;
    }
    return Memorized_cut_rod_aux(p,n,r);
}

//最初的CUT_Rod引入备忘机制
function Memorized_cut_rod_aux(p,n,r){
    if(r[n]>=0){
      return r[n];//所需值已知
    }
    if(n==0){
      q = 0;
    }else{
      q = -10000000;
      for(var i = 1;i<=n;i++)
      q = Math.max(q, p[i]+Memorized_cut_rod_aux(p,n-i,r));
    }
    r[n] = q;
    return q;
}

//o为钢条总长度。pn每加一厘米的价格
var pn = [1,5,8,9,10,17,17,20,24,30];
var o = 9;
console.log(Memorized_cut_rod(pn,o));
