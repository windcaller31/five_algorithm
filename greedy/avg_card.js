function avg_card(a,n){
  var sum = 0;
  for(var i=0;i<=a.length-1;i++){
    sum+=a[i];
  }
  // var avg = Math.round(sum/n);
  var avg = Math.floor(sum/n);
  var step = 0;
  for(var j=0;j<n-1;j++){
    if(a[j]!=avg){
      a[j+1] = a[j+1] + a[j] - avg;
      a[j] = avg;
      step++;
    }
  }
  console.log(a);
  console.log(step);
  return step;
}

var arr = [9,8,17,6];
var len = 4;
avg_card(arr,len);
