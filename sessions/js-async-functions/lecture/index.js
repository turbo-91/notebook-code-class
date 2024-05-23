// async functions in js

// const status = navigator.getBattery()
// console.log(status)

// const number = createRandomNumber(2, 10)
// console.log(number)

// .then()
// createRandomNumber(3, 10)
// .then((result) => console.log(result))
// .catch((error) => console.log(error))
// .finally(() => console.log('this is finally'))


// async await 
// try catch
async function run() {
  try {
    const result = await createRandomNumber(1, 20)
    console.log(result)
  } catch(err) {
    console.log(err)
  } finally {
    console.log('finally')
  }
}
// run()

// async function run() {
// 	// try catch
// 	try {
// 		const result = await createRandomNumber(4, 7) 
// 		console.log(result)
// 	} catch(error) {
// 		console.log(error)
// 	} finally {
// 		console.log('finally again')
// 	}
// }

// run()
// console.log('running')



function createRandomNumber(min, max) {
  return new Promise(function (resolve, reject) {
    if (min === 1) {
      reject(new Error("invalid argument"));
    }
    setTimeout(function () {
      resolve(Math.floor(Math.random() * (max - min + 1) + min));
    }, 3000);
  });
}

function createAnotherNumber(min, max) {
  return new Promise(function (resolve, reject) {
    if (min === 1) {
      reject(new Error("invalid argument"));
    }
    setTimeout(function () {
      resolve(Math.floor(Math.random() * (max - min + 1) + min));
    }, 3000);
  });
}


Promise.all([createRandomNumber(2, 10), createAnotherNumber(11, 20)])
.then(result => console.log(result))
.catch(err => console.log(err))