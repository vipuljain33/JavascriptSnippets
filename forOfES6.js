const arr = [1,2,3,4,5]

arr[0] = 10;

//console.log(arr[0]);

for(const cur of arr)
{
  if(cur === 2)
  {
    continue
  }
  console.log(cur);



}
