// merge function
const merge = (arr1, arr2) => {
  var arr3 = []
  arr3 = arr1.concat(arr2).sort()
  return arr3
}

// test
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ])
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ])
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ])