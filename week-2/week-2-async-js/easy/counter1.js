let counter = 0


/*
    setInterval will return and ID, which will be user futher
    to stop the interval. Will execute the set of instruction 
    during interval of time.
*/
const counterId = setInterval(() => {
    counter++
    console.log(counter)
}, 1000); // Here 1000ms = 1s

/*
    setTimeout will execute a set of instructions after a 
    certain interval of time.
*/

setTimeout(()=>{
    clearInterval(counterId)
},10*1000)