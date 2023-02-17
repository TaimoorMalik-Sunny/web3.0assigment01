let iinvitedshrink = new Array(10);

iinvitedshrink =['Ali','Ahmed','Aqib','Sunny','Adeel','Afaq']

console.log("<== you can invite only two people for dinner.==>")
for (var i=0; i<iinvitedshrink.length-2; i++){
    
    console.log(iinvitedshrink[i] +" sorry you can’t invite for dinner")
    iinvitedshrink.splice(i,1);
    i--;
}


console.log("<== Still invited ==>")
for (var i=0; i<iinvitedshrink.length++; i++){
    
    console.log(iinvitedshrink[i] +" you are still invited ")
    iinvitedshrink.splice(i,1);
    i--;    
}

console.log("<==Showing empty List==>")
for (var i=0; i<iinvitedshrink.length; i++){
    
    console.log(iinvitedshrink[i] +" No Data ")
        
}