function main(a){
  var n = a.length;
  for (var i=0;i<=n-1;i++){ //选择排序
    for (var j=i+1;j<=n-1;j++){
      var t;
      if (a[j]+a[i]>a[i]+a[j]){//使两个数前后组合的结果最大
        t=a[j];//交换
        a[j]=a[i];
        a[i]=t;
      }
    }
  }
  console.log(a);
}

var a = ["7","13","4","246"];
main(a);
