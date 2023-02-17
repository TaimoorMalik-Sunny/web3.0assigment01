let current_user , new_users = new Array(5);
current_user = ['sunny', 'taimoor47', 'Adeel', 'admin','afaq']
new_users = ['sunny', 'numan', 'sufi', 'hasham','Afaq']




for (var i=0 ; i<current_user.length ; i++){

    for (var j=i; j<new_users.length ; j++){

        if (new_users[j]===current_user[i]){
            console.log(new_users[j] + " username is available as " + current_user[i])

        }
        else{
            console.log(new_users[j] +" new user is not avalable "+current_user[i])
        }
    }


}