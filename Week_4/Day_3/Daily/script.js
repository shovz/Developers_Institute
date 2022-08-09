let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda=(carInventory)=>{
    let model  = carInventory.find(elm=>elm['car_make']==='Honda');
    return `This is a ${model.car_make} ${model.car_model} from ${model.car_year}`
}
getCarHonda(inventory);

const sortCarInventoryByYear=(carInventory)=>{
  let sorting  = carInventory.sort((x,y)=> x.car_year- y.car_year)
  console.log(sorting);
}
sortCarInventoryByYear(inventory);
