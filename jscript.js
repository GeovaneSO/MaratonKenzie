
//a posição do parâmetro no array é considerado a posição do atleta 

// Daniel possui bônus, sempre vai subir uma posição

// function positions (firstPlace, secondePlace, lastPlace){

//     const placing = [firstPlace, secondePlace, lastPlace]

//     if(placing[0] === 'Daniel'){
//         console.log(placing)
//     } else {
//         for (let i = 0; i < placing.length; i++){
//             if (placing[i] === 'Daniel'){               
//                 placing[i] = placing[i - 1]
//                 placing[i - 1] = 'Daniel'
//             }
//         }
//         console.log(placing)
//     }
// }
// positions('Manoel', 'Daniel', 'Rafael')










function positions (firstPlace, secondePlace, lastPlace){

    const placing = [firstPlace, secondePlace, lastPlace]

    if(placing[0] === 'Daniel'){
        console.log(`1º - Daniel 2º - ${secondePlace} 3º - ${lastPlace}`)
    } 
    else if (placing[1] === 'Daniel'){
        console.log(`1º - Daniel 2º - ${firstPlace} 3º - ${lastPlace}`)
    }
    else if(placing[2] === 'Daniel'){
        console.log(`1º - ${firstPlace} 2º - Daniel 3º - ${secondePlace}`)
    }
 }
positions('Manoel', 'Daniel', 'Rafael')
    
    // if (('Rafael' == placing[0]) && ('Daniel' == placing[1])){
    //     console.log('1º Colocado é Daniel')
    // } 
    // else if (('Rafael' == placing[1]) && ('Daniel' == placing[2])){
    //     console.log('1º Colocado é Manoel')
    // }
    //  else if (('Manoel' == placing[0]) && ('Daniel' == placing[1])){
    //     console.log('1º Colocado é Daniel')
    // } 
    // else if (('Manoel' == placing[1]) && ('Daniel' == placing[2])){
    //     console.log('1º Colocado é Rafael')
    // }
    //  else{
    //     console.log('1º Colocado é Daniel')
    // }
