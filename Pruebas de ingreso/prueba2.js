
function cheapProducts(array){
    let array_2 = []
    for (let i = 0; i <= (array.length-1); i++){
  
      if(array[i].price < 10){
      array_2.push(array[i].name);
      }
    }
  
  return  (array_2)
  }
  
      const products1 = [ 
        { name: "rice", price: 10 }, 
        { name: "panela", price: 5 }, 
        { name: "pasta", price: 16 }, 
        { name: "eggs", price: 8 }
      ];
  
      const products2 = [ 
        { name: "rice", price: 10 }, 
        { name: "panela", price: 20 }, 
        { name: "pasta", price: 16 }, 
        { name: "eggs", price: 37 },
      ];
  
    console.log(cheapProducts(products1));
    console.log(cheapProducts(products2)); 
    