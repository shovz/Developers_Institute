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
const createNewArry=(str)=>{
    let newstr=[];
    for (let i =0;i<str.length;i++)
    {   
        if(!newstr.includes(temp[i])){
            newstr.push(temp[i]);
        }
    }
    return newstr;

}
const count=(newstr,str)=>{
    let counter=[];
    for (let i =0;i<newstr.length;i++)
    {   
        counter[i]=0;
        for (let j =0;j<str.length;j++)
        {   
            if(newstr[i]===str[j]){
                counter[i]++;
            }
        }
    }
    return counter;
}

const anagram=(str1,str2)=>{
    console.log(str1,str2);
    str1=shiftSpace(str1);
    console.log(str1);

    str2=shiftSpace(str2);
    console.log(str2);
    let newstr1= createNewArry(str1);
    let newstr2= createNewArry(str2);
    let counter1= count(newstr1,str1);
    let counter2= count(newstr2,str2);

    console.log(counter1);
    console.log(counter2);
}

anagram("Astronomer","Moon starer");
