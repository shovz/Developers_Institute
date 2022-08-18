
export const  getRobots = ()=>(dispacth)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        
        dispacth({type:"GET_ROBOTS",payload:data})
    })

}

export const  filterRobots = (search)=>(dispacth)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        let temp = data.filter(user=>(user.name.toLowerCase()).includes(search.toLowerCase()))
        dispacth({type:"GET_ROBOTS",payload:temp})
    })




}


