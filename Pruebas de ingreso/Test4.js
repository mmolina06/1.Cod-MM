function array() {

    let largo = (array.length);
    
    let array_2=[];
    for (let i = 0; i <= largo-1; i++) {
      array_2.push(array[i] * 2);
    }
    
    return(largo)
    }
    
    console.log(array([1, 2, 5, 6]));
    