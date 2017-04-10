
function checkbox(all ,list){
  /**
   *点击全部选中
   */
  all.click(function(){
  if($(this).prop('checked')){
    list.prop('checked',true)
  }else{
    list.prop('checked',false)
  }
  });


  list.click(function(){
  var count = 0;
  list.each(function(index,domE){      
    if($(domE).prop('checked')){
      count++;
    }
  })
  if(count === list.length){
    all.prop('checked',true)
  }else{
    all.prop('checked',false)
  }
  })
}