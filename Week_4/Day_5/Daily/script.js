const shiftSpace=(str)=>{
    let temp = Array.from(str.toLowerCase());
    temp.sort();
    for(let i =0;i<temp.length;i++){
        if(temp[0]===" "){
            temp.shift();
        }
    }
    return temp;

}

const anagram=(str1,str2)=>{
    str1=shiftSpace(str1);
    str2=shiftSpace(str2);
    
    if(str1.length!=str2.length){
        console.log("not anagram"); 
    }
    else{
        for (let i =0;i<str1.length;i++)
        {   
            if(str1[i]!=str2[i]){
                return console.log("not anagram"); 
            }
        }
        console.log("anagram"); 
    }

}

anagram("The Morse Code","Here come dots");
