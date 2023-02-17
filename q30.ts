let User_name = new Array(5);
User_name = ['sunny', 'taimoor47', 'Adeel', 'admin','afaq']


for (var i=0 ; i<User_name.length ; i++){
    if (User_name[i] === 'admin') {
        console.log("Hello "+ User_name[i] +" , would you like to see a status report ?")
      }
    else{
        console.log("Hello " +User_name[i] + " , thank you for logging in again")
        
    } 

}