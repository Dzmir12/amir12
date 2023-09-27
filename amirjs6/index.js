

// tamrin 1

let mainarr=[[],[],[]]

for (let i = 0; i < 9; i++) {
    
    const userInput=prompt('please enter number between 0,1,2')
    mainarr[0].push(userInput)

    if (mainarr[0].length > 3) {

       let a= mainarr[0].pop()
       mainarr[1].push(a)
    }

    if (mainarr[1].length > 3) {

        let a= mainarr[1].pop()
        mainarr[2].push(a)
    }

   

    console.log( mainarr);
    
}
