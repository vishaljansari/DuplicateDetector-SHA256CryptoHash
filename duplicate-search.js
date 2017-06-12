const
    dir = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    yargs = require('yargs')
    maindirectory = process.argv.slice(2).toString()

//let counter = 0

let alpha = {}

dir.readFiles(maindirectory,
  function(err, content, filedir, next) {

    if (err)
      throw err

    const hash = crypto.createHash('sha256')

    hash.update(content)
     //   console.log(content)

     alpha[filedir] = hash.digest('hex')

     next()

   },
   function(err, filedir) {
    if (err)
      throw err

    const key = Object.keys(alpha)
    const mapkey = Object.values(alpha)
    //    console.log(key)
     //   console.log(mapkey)
     for (let i = 0; i <= mapkey.length-1; i++) {
      for (let j = i+1; j <= mapkey.length-1; j++) {
        if (mapkey[i] === mapkey[j])
        {
          if(i !== j)
          {
           console.log(treeify.asTree({[key[i]]:{[key[j]]:''}}))
         }

       }
     }
   }
 })
