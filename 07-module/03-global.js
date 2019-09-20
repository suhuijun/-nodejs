#!usr/bin/node

global.pi = Math.PI;

global.cricle = (r)=>{
  return{
    function mj(){
      return Math.PI*r*r
    },
             zc(){
      return 2*Math.PI*r
    },
             zj(){
      return 2*r
    }
  }
}

global.objCricle = {
  'mj':function (r){
    return Math.PI*r*r
  },
  'zc':function (r){
    return Math.PI*2*r
  },
  'zj':function(r){
    return 2*r
  }
}
