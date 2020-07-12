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

// 截止
// https://github.com/xiaotiandada/You-Dont-Need-Lodash-Underscore#_first