function positions (firstPlace, secondePlace, lastPlace){

    const placing = [firstPlace, secondePlace, lastPlace]

    if (placing[0] === 'Daniel'){
        console.log(`1º - Daniel 2º - ${secondePlace} 3º - ${lastPlace}`)
    } 
    else if (placing[1] === 'Daniel'){
        console.log(`1º - Daniel 2º - ${firstPlace} 3º - ${lastPlace}`)
    }
    else if (placing[2] === 'Daniel'){
        console.log(`1º - ${firstPlace} 2º - Daniel 3º - ${secondePlace}`)
    }
 }
positions('Manoel', 'Rafael', 'Daniel')