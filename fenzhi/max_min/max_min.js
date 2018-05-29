var get_max_min = function(a,b){
  var m = [];
  if(a<b){
    m[0] = a;
    m[1] = b;
  }else{
    m[0] = b;
    m[1] = a;
  }
  return m;
}

var get_result = function(a,n1,n2){
  if((n2-n1+1) == 1){
    return get_max_min(a[n2],a[n2]);
  }else if((n2-n1+1) == 2){
    return get_max_min(a[n1],a[n2]);
  }else{
    var mid = Math.floor(n1+(n2-n1)/2) ;
    var lm = get_result(a,n1,mid);
    var rm = get_result(a,mid,n2);

    console.log("lm得到的值:", lm[0], lm[1]);
    console.log("rm得到的值:", rm[0], rm[1]);

    var result = [];
    if(lm[0] < rm[0]){
       result[0] = lm[0];
    }else{
       result[0] = rm[0];
    }
    if(lm[1] < rm[1]){
       result[1] = rm[1];
    }else{
       result[1] = lm[1];
    }
    return result;
  }
}

var a = [6,10,32,8,19,20,2,14];
console.log(get_result(a,0,a.length-1));
