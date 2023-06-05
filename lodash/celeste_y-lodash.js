var celeste_y = {
  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },

  compact: function (array) {
    var result = []
    for (var items of array) {
      if (items) {
        result.push(items)
      }
    }
    return result
  },

  concat : function (array,...val){
    var result = array
    for(var i = 0;i<val.length;i++){
      if(Array.isArray(val[i])){
        for(var j = 0;j<val[i].length;j++){
          result.push(val[i][j])
        }
      }else{
        result.push(val[i])
      }
    }
    return result
  },

  difference : function (array,...val){
    val = this.flattenDeep(val)
    for(var i=0;i<val.length ;i++){
      var a = array.filter(it => it !== val[i])
      array = a
    }
     return a
  },

  
}