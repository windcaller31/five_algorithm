function main(n){
  var r = [];
  r[0]= 1;
  r[1]= 2;
  r[2]=3;
  for(var i=3;i<n;i++){
    r[i] = r[i-1] + r[i-2] + r[i-3];
  }
  return r[n-1];
}

console.log(main(10));
