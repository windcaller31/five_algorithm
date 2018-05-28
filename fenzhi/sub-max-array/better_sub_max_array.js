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
console.log(get_max_array(a));

function get_max_array(array){
  var len = array.length;
  var max = -999999999;
  for(var i=0;i<=array.length-1;i++){
    var sum = 0;
    for(var j=i;j<=array.length-1;j++){
      console.log(array[j]);
      sum += array[j];
      if(max<sum){
        max = sum;
      }
    }
  }
  return max;
}
