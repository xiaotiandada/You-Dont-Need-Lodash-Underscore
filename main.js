// https://github.com/xiaotiandada/You-Dont-Need-Lodash-Underscore

// Array

{
  const chunk = (input, size) => {
    return input.reduce((arr, item, idx) => {
      return idx % size === 0
        ? [...arr, [item]]
        : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
  };
  
  console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3))
}

{
  let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  const difference = array => array.reduce((a, b) => a.filter(i => !b.includes(i)))

  console.log(difference(arrays))
}


{
  const flattenDeep = arr => Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)), []) : [arr]

  console.log(flattenDeep([1, [[2], [3, 4]], 5]))
}

{
  // flat

  const flattenDeep = arr => arr.flatMap(subArray => Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

  console.log(flattenDeep([1, [[2], [3, 4]], 5]))

}

// https://github.com/xiaotiandada/You-Dont-Need-Lodash-Underscore#_intersection