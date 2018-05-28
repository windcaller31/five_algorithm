function get_max_array(array){
  var max = -99999999;
  for(var i=0; i<=array.length-1; i++){
    for(var j=i;j<=array.length-1;j++ ){
      var sum = 0;
      for(var k=i; k<=j; k++){
        sum += array[k];
      }
      if(sum > max){
        max = sum;
      }
    }
  }
  return max;
}


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
