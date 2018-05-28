var pos = function(low,high,sum){
  this.low = low;
  this.high = high;
  this.sum = sum;
};

//mid左边找到最大，mid右边找到最大
var fenzhi_array=function( a , low, high, mid){
  var max_sum_left = -999999999;
  var max_left;
  var sum_left=0;
  for(var i=mid;i>=low;i--){
    sum_left += a[i];
    if(sum_left>=max_sum_left){
      max_sum_left=sum_left;
      max_left=i;
    }
  }

  var max_sum_right = -99999999;
  var max_right;
  var sum_right=0;
  for(var j=mid+1;j<=high;j++){
    sum_right += a[j];
    if(sum_right>=max_sum_right){
      max_sum_right = sum_right;
      max_right = j;
    }
  }
  // console.log(max_left,max_right,max_sum_left+max_sum_right);
  var p = new pos(max_left,max_right,max_sum_left+max_sum_right);
  return p;
}

//递归左边，递归右边，分治全部
var find_max_sub_array = function( a, low, high ){
  if(low==high){
    // console.log(low,high,a[low]);
    var p = new pos(low,high,a[low]);
    // console.log(JSON.stringify(p));
    return p;
  }else{
    var mid = Math.floor((low+high)/2);
    var p_l = find_max_sub_array(a,low,mid);
    var p_r = find_max_sub_array(a,mid+1,high);
    var cross = fenzhi_array(a,low,high,mid);
    if(p_l.sum>=p_r.sum&&p_l.sum>=cross.sum){
      return p_l;
    }else if(p_r.sum>=p_l.sum&&p_r.sum>=cross.sum){
      return p_r;
    }else{
      return cross;
    }
  }
}

var main= function(){
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
  var _pos = find_max_sub_array(a,0,a.length-1);
  console.log(JSON.stringify(_pos));
}

main();
