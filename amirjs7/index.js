//  tamrin 1

// class MyHashSet {

//     arr=[]

//     add(number) {
//       this.arr.push(number)
//       console.log(this.arr)
//     }

//     remove (number){
//         if ( this.arr.includes(number)) {
            
//            this.arr.splice(this.arr.indexOf(number),1)
//            console.log(this.arr)

//         } else {
//             console.log('not found')
//         }
//     }

//     contains(number) {
      
//         if ( this.arr.includes(number)) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }

// // example
// const MyHashSet1= new MyHashSet();
// MyHashSet1.add(1);
// MyHashSet1.add(2);
// MyHashSet1.add(5);
// MyHashSet1.contains(5);
// MyHashSet1.remove(6);
// MyHashSet1.remove(2);
// MyHashSet1.remove(3);
// MyHashSet1.add(6);
// MyHashSet1.remove(5);


// tamrin 2

const userInput=prompt('please enter a Url')


function fetchData(Url) {
     
    const abortController= new AbortController();
    const signal= abortController.signal;

    fetch(Url,{signal}).then((response)=>{
        if (!response.ok) {
            throw Error(response.status + "  fail to fetch data")
        }
        return response.json();
    }) .then(json => console.log(json)).catch((err)=>{

        if (err.name=== 'AbortError') {
            console.log('fetch request timeout');
        }

        console.log(err)
    })

    setTimeout(()=>{
        abortController.abort();
    },2100)
}

console.log (fetchData(userInput))