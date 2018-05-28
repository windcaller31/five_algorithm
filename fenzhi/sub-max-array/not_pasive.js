var a = [];
a.push(-2);
a.push(2);
a.push(-3);
a.push(4);
a.push(-1);
a.push(2);
a.push(1);
a.push(-5);
a.push(3);
console.log(main(a));

function main(a){
  var max=-99999999;
  var sum = 0;
  for(var i=0;i<=a.length-1;i++){
    sum+=a[i];
    if(sum>=max){
      max=sum;
    }else if(sum<0){
      sum=0;
    }
  }
  return max;
}
