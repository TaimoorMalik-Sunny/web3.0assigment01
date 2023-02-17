let ordinal_num= new Array(10);
ordinal_num = [1,2,3,4,5,6,7,8,9,10]

for (var i=0; i<ordinal_num.length; i++){
if(ordinal_num[i]===1){
    console.log(ordinal_num[i]+"st")
}
else if(ordinal_num[i]===2){
    console.log(ordinal_num[i]+"nd")

}else if(ordinal_num[i]===3){
    console.log(ordinal_num[i]+"rd")

}
else{
    console.log(ordinal_num[i]+"th")

}


}