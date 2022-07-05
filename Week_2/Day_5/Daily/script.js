const askNumber = () => {
    do 
    {
        num = prompt("enter a number bigger than 0");

    }  while(isValidNum(num)===false);
    return num;
}

const isValidNum = (num) => {
    let reg = /^\d+$/;
    if(!reg.test(num) || num<=0)
    {          
        return false;
    }
    return true;
}
const bottleSong =() =>{
    let bottles = askNumber();
    let i=1;
    while (bottles-i>0)
    {
        if (bottles>1)
        {
            console.log (`
            ${bottles} bottles of beer on the wall\n
            ${bottles} bottles of beer \n 
            Take ${i} down, pass them around\n
            ${bottles-i} bottles of beer on the wall
            `);
        }
        else {
            console.log (`
            ${bottles} bottle of beer on the wall\n
            ${bottles} bottle of beer \n 
            Take ${i} down, pass it around\n
            ${bottles-i} bottles of beer on the wall
            `);
        }
        bottles-=i;
        i++
    }

            console.log (`
            ${bottles} bottle of beer on the wall\n
            ${bottles} bottle of beer \n 
            Take ${bottles} down, pass it around\n
            0 bottles of beer on the wall
            `);
}