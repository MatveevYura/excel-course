console.log('Module')

async function start() {
  return await Promise.resolve('async Working')
}

start().then(console.log)
