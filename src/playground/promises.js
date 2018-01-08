const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Kestutis',
        //     age: 31
        // });
        reject('Something is wrong')
    }, 1500);
})

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
})