function table(){
    var str ="";
    for(var i=1;i<10;i++){
    for (var j=1;j<i+1;j++){
    str += i + "*" + j + "=" + i*j + " ";
        if(i === j){
        str += "\n";
        }
    }
    };
    console.log(str);
}
table();