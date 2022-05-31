const fs = require('fs');

if(!fs.existsSync('sample/file.txt')){

    fs.open('sample/file.txt', 'w', function(err, data){

        if(err){
            console.log(err);
        }else{
            console.log('File Opend successfully');

            fs.writeFile('sample/file.txt', 'Welcome to NodeJs', function(err, data){

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