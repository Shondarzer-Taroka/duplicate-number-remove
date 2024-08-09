
let arr=[1,2,3,2,4,5,6,6]

  function duplicate(arr) {
    
    let arr2=[]
   
    for (let i = 0; i < arr.length; i++) {
       if (!arr2.includes(arr[i])) {
        arr2.push(arr[i])
       } 

     
    }

    console.log(arr2);

  }
  duplicate(arr)