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

{
  let arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  
  const intersection = array => array.reduce((a, b) => a.filter((c => b.includes(c))))

  console.log(intersection(arrays))
}

{
  let array = ['one', 'two', 'three']
  const grouped = arrary => arrary.reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})

  console.log(grouped(array))
}


{
  const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x] : x}), {})
  console.log(keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id'))
}

{
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

  const sortBy = key => (a, b) => (a[key] > b[key] ? 1 : ((b[key] > a[key]) ? -1 : 0))
  let sortArr = fruits.concat().sort(sortBy('name'))
  console.log('sortArr', sortArr)

  console.log('sortArr', fruits.concat().sort(sortBy('amount')))
}

https://github.com/xiaotiandada/You-Dont-Need-Lodash-Underscore#_debounce