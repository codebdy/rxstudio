function valueEqual(a, b){
  if(Array.isArray(a) && Array.isArray(b)){
    let aValue = a.concat()
    let bValue = b.concat()
    return aValue.sort().toString() === bValue.sort().toString() 
  }
  else{
    return a === b
  }
}

function cloneValue(val){
  if(Array.isArray(val)){
    return val.concat()
  }
  return val
}

export{valueEqual, cloneValue}