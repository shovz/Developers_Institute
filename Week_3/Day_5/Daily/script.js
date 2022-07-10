let table = document.createElement("table");


for (let i=0;i<7;i++){
    let row = document.createElement("tr");
    for(let i=0;i<7;i++){
        let col = document.createElement("td");
        col.setAttribute(`style`,`height:100px;width:100px;`);
        row.append(col);
    }
    row.setAttribute(`style`,`height:130px;width:100px;background-color:lightblue`);
    table.append(row);
}
document.body.append(table);

const createStar=(rowIndex,colIndex)=>{
    for(let i=0;i<7;i++)
    {
        console.log(rowIndex,colIndex);
        if(rowIndex===0){
            if(colIndex>1 && colIndex <5){table.children[rowIndex].children[colIndex].textContent="*"}
            else{ table.children[rowIndex].children[colIndex].textContent=" "}
        }
        else if(rowIndex!=0 &&rowIndex!=3){
            
            if(colIndex===1 || colIndex===5){table.children[rowIndex].children[colIndex].textContent="*"}
            else{ table.children[rowIndex].children[colIndex].textContent=" "}
        }
        else{
            if(colIndex>=1 && colIndex<=5){table.children[rowIndex].children[colIndex].textContent="*"}
            else{ table.children[rowIndex].children[colIndex].textContent=" "}
        }
    }

}

const createColStar = (rowIndex,num)=>{
    for(let i=0;i<7;i++)
    {
        if(num===0){createStar(rowIndex,i)}
        if(num===5){createStar(rowIndex,i)}
        else{createStar(rowIndex,i,num)}
    }
}

const createRowStar = ()=>{
    for(let i=0;i<7;i++)
    {
        if(i===0){createColStar(i,3);}
        if(i===5){createColStar(i,5);}
        else{createColStar(i,1);}
    }
}

table.setAttribute(`style`,`font-size:3em;margin :auto;width:80%; text-align:center;font-weight:bold`);
createRowStar();