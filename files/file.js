const fs = require('fs'); //include fs module to  work on File System

// // ##### Write File

if(!fs.existsSync('sample/file.txt')){ //to verify file is exists or not

    fs.open('sample/file.txt', 'w', function(err, data){

        if(err){
            console.log(err);
        }else{
            console.log('File Opend successfully');

            fs.writeFile('sample/file.txt', 'Welcome to NodeJs', function(err, data){ //write file

                if(!err){
                    console.log('File write successfully');
                }else{
                    console.log(err);
                }

            })

        }

    })

}else{
   
    fs.writeFile('sample/file.txt', 'Welcome to NodeJs', function(err, data){

        if(err){
            console.log(err);
        }else{
            console.log('File write successfully');
        }

    })

}

// ##### Read File

if(fs.existsSync('./sample/sample.text')){

    fs.readFile('./sample/sample.text', function(err, data){

        if(!err){
            console.log(data.toString());
        }else{
            console.log(err);
        }

    })

}

// ##### Read File

if(fs.existsSync('./sample/sample-json.js')){

    const jsonData = require('../sample/sample-json');
    console.log(jsonData.userData[0]['data']);

}else{
    console.log('File not found')
}

// ##### Create Dir

if(!fs.existsSync('./sample')){

    fs.mkdir('./sample', function(err, data){

        if(!err){
            console.log('Directory created successfully.');
        }else{
            console.log(err);
        }

    })

}else{
    console.log('Dir is already exists');
}

// ##### Remove Dir

if(fs.existsSync('./sample')){

    fs.rmdir('./sample', function(err, data){

        if(!err){
            console.log('Dir removed successfully.');
        }else{
            console.log(err);
        }

    });

}else{
    console.log('Dir not found');
}

// ##### Unlink File

if(fs.existsSync('./sample/.gitadd')){

    fs.unlink('./sample/.gitadd', function(err, data){
        
        if(!err){
            console.log('File unlink successfully.');
        }else{
            console.log(err);
        }
        
    })

}else{
    console.log('File not found.');
}


if(!fs.existsSync('./sample/.gitkeep')){

    fs.open('./sample/.gitkeep', 'w', function(err, data){

        if(!err){
            console.log('"File added succesfully.');
        }else{
            console.log(err);
        }

    })

}else{
    console.log('File alredy exists');
}
