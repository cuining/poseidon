const execSync = require('child_process').execSync

let babel = `${__dirname}/../node_modules/.bin/babel`

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('\nBuilding ES modules ...')
exec(`${babel} src -d es --ignore *.test.js`, {
  BABEL_ENV: 'es'
})

console.log('Building CommonJS modules ...')
exec(`${babel} src -d lib --ignore *.test.js`, {
  BABEL_ENV: 'cjs'
})