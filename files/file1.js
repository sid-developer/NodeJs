const fs = require('fs');

//----------------Read File

// if(fs.existsSync('./sample/sample.text')){

//     fs.readFile('./sample/sample.text', (err, data) => {

//         if(err){
//             console.log('Unable to read');
//         }else{
//             console.log(data.toString());
//         }
    
//     })

// }else{
//     console.log('File not found');
// }

//-----------------Write File

// if(fs.existsSync('./sample/sample.text')){

//     fs.writeFile('./sample/sample.text', ('Welcome again to NodeJs \r\n'),(err, data) =>{
//         if(err){
//             console.log('Unable to write file');
//         }else{
//             console.log('File write successfully');
//         }
//     })

// }else{
//     console.log('File not found');
// }


// ----------------Append File

    // \n - move the cursor to the next line
    // \r - move the cursor start of the current live
    // \t - provide 6 character space 

    // if(fs.existsSync('./sample/sample.text')){

    //     fs.appendFile('./sample/sample.text', 'Welcome back to NodeJs \r\n', (err, data) => {

    //         if(err){
    //             console.log('Unable to append data');
    //         }else{
    //             console.log('Data append successfully');
    //         }
        
    //     })

    // }

//-------------------Delete File

// if(fs.existsSync('./sample/test.text')){

//     fs.unlink('./sample/test.text', (err, data) => {

//         if(err){
//             console.log('Unable to unlink the file');
//         }else{
//             console.log('File Unlink successfully');
//         }
    
//     })

// }else{

//     console.log('File not found');

// }

// ------------------Delete Folder

// fs.rmdir('./sample/test', (err, data) => {

//     if(err){
//         console.log('Unable to delete Directory');
//     }else{
//         console.log('Directory deleted successfully');
//     }

// })

// -----------------Create Directory

// fs.mkdir('./sample/test', (err, data) => {

//     if(err){
//         console.log('Unable to create Directory');
//     }else{
//         console.log('Directory created successfully');
//     }

// })

// ------------------Create File

fs.open('./sample/test.text','w',(err, data) =>{
    if(err){
        console.log('Unablet to open file');
    }else{
        console.log(data);
    }
})
