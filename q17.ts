let invitedshrink = new Array(10);

invitedshrink =['Ali','Ahmed','Aqib','Sunny','Adeel','Afaq']

console.log("<== you can invite only two people for dinner.==>")
for (var i=0; i<invitedshrink.length-2; i++){
    
    console.log(invitedshrink[i] +" sorry you can’t invite for dinner")
    invitedshrink.splice(i,1);
    i--;
}


console.log("<== Still invited ==>")
for (var i=0; i<invitedshrink.length; i++){
    
    console.log(invitedshrink[i] +" you are still invited ")
    invitedshrink.splice(i,1);
    i--;    
}

console.log("<==Showing empty List==>")
for (var i=0; i<invitedshrink.length; i++){
    
    console.log(invitedshrink[i] +" No Data ")
        
}
