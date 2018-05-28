var find = function(a,from,to){
  var r ;
  if(from ==( to-1 ) ){
    r = a[from] < a[to]? from : to;
  }else{
    var mid = Math.floor((from+to)/2);
    var one = mid;
    var two = mid+1;
    var sum_one=0;
    var sum_two=0;
    for(var i=from;i<=one;i++){
      sum_one+=a[i];
    }
    for(var i=two;i<=to;i++){
      sum_two+=a[i];
    }
    if(sum_one==sum_two){
      r = -1;
    }
    if(sum_one<sum_two){
      r = find(a,from,one);
    }else{
      r = find(a,two,to);
    }
  }
  return r;
}

var arr = [];
arr[0]=2;
arr[1]=2;
arr[2]=2;
arr[3]=2;
arr[4]=2;
arr[5]=2;
arr[6]=2;
arr[7]=2;
arr[8]=2;
arr[9]=1;
arr[10]=2;
arr[11]=2;
arr[12]=2;
arr[13]=2;
arr[14]=2;
arr[15]=2;
console.log(find(arr,0,15));
