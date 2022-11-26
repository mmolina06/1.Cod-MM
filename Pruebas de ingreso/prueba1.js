function adultos (num){
    let cont = 0;
    let largo = num.length;
    for (let i = 0; i <= (num.length-1); i++){
    if (num[i]> 17 && num[i]< 70 ){
    cont = cont + 1;
    }
    }
    if (cont === largo){
      let condicion = true;
      return (condicion)
    } 
      let condicion = false;
      return (condicion)
    }
    
    console.log(adultos([28, 45, 19, 21, 18, 69
    ]))
    console.log(adultos([28, 45, 17, 21, 17, 70
    
    ]))
    console.log(adultos([28, 45, 71, 21
    
    ]))