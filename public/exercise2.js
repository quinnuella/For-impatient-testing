//const { resolve } = require("path")

const invokeAfterDelay = async(f, delay) => {
  const response = await new Promise ((resolve, reject) => {
    const cb = resolve(f)
    setTimeout(cb, delay)
  })
  console.log(response)
  return await response
}

const data = invokeAfterDelay(Math.random(), 1000)
  data.then(result => console.log(data))

  //ex3
  console.log('produceRandomAfterDelay:')
  
  const produceRandomAfterDelay = async() => {
    const [n1, n2] = await Promise.all([invokeAfterDelay(Math.random(), 1000), invokeAfterDelay(Math.random(), 2000)])
    console.log('sum', n1+n2)
  }

  produceRandomAfterDelay()

  //ex4
  const loopProduceRandomAfterDelay = async(n) => {
    let parr = []
    for(let i = 0; i<n; i++){
      parr[i] = invokeAfterDelay(Math.random(), 1000)
    }
    const [n1, ...others] = await Promise.all(parr)
    let sum = n1 
    for(let n of others) sum += n
    console.log(`the sum of ${n} numbers r: `, sum)
   
  }

  loopProduceRandomAfterDelay(10)