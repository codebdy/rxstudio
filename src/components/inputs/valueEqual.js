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

export{valueEqual}