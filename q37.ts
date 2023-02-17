

let size ,msg= new Array(10);
size = ['l','m','s']
msg = ['i love Typescript','wow its greate ','yeah its good']


function makeShirtt(size: string, message: string){
    console.log("You have ordered of "+size+ "-sized shirt with the message:"+ message);
  }


for(var i=0 ; i<size.length; i++){
    makeShirtt(size[i],msg[i])

}

 



