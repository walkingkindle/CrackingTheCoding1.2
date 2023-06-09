


function permutation (s1,s2){
    if (s1.length !== s2.length){
        return false;
    }
    var longer = s1.length > s2.length ? s1 : s2;
    var shorter = s1.length < s2.length ? s1 : s2;
    let counter = 0;
    for(i = 0; i < shorter.length; i++){
        if(longer.includes(shorter[i])){
           counter++;
        }
    }
    return permute = shorter.length === counter;
}