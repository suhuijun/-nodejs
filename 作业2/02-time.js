#!usr/bin/node

function count(){
  var i,j,sum=0;
  for(i = 0;i<1000;++i){
    for(j = 0;j<1000;++j){
      sum+=1;
    }
  }
}

console.time("用时:");
count();
console.timeEnd("用时:");
