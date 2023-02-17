

var string1:string = '      sunny malik   ';

function strip(string1: string) {
    return string1.replace(/^\s+|\s+$/g, '');
        }
          
       
        console.log("Before string:'"+string1+"'");
           
        console.log("After string :'"+strip(string1)+"'");