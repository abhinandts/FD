// import fs from 'node:fs'

// // const updated = await fs.appendFile('text.txt','\n new line added using appendFile New');

// // const data = await fs.readFile('text.txt','utf-8');

// // console.log(data);

// // await fs.unlink('a.txt');

// // const details = await fs.readdir('folder')
// // console.log(details)

// const readStream = fs.createReadStream('text.txt')



// import fs from 'fs'

// const readStream = fs.createReadStream('text.txt','utf-8');

// readStream.on('data',(chunk)=>{
//     console.log('received chunk:',chunk)
// })
// readStream.on('end',()=>{
//     console.log('finished reading file')
// })
// readStream.on('error',(err)=>{
//     console.log(err);
// })




// // reading file .................

// import fs from 'fs'

// const readStream = fs.createReadStream('text.txt', 'utf-8');

// readStream.on('data', (chunk) => {
//     console.log(chunk)
// })

// readStream.on('end', () => {
//     console.log("reading complete...");
// })

// readStream.on('error', (err) => {
//     console.log(err);
// })


// writing file....

// import fs from 'fs'

// const writeStream = fs.createWriteStream('output.txt')

// writeStream.write('Hello')

// writeStream.end(()=>{
//     console.log("finished writing....")
// })

// writeStream.on('error',(err)=>{
//     console.log(err)
// })


import fs from 'fs';

const readingStream = fs.createReadStream('text.txt','utf-8');

readingStream.on('data',(chunk)=>{
    console.log(chunk)
})

const writeStream = fs.createWriteStream('output.txt')

readingStream.pipe(writeStream);