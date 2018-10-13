function double(arr){
  return Array.from(arr, function(elem){
    return elem*2;
  })
}


const result = double([1,2,3,4])
console.log(result);


function max(arr){
  return arr.find((elem) => elem > 3)
}

const res = max([1,2,3,4])
console.log(res);
