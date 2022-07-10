const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let arr=[];
gameInfo.forEach((element,i) => {
        arr[i] = element.username + `!`;
        console.log(element.username);
   });
console.log(arr);

let winners=[];
gameInfo.forEach((element,i) => {
    element.score>5 ? winners[winners.length]=element.score: console.log(element.score);
});
console.log(winners);

let sum=0;
gameInfo.forEach(element => {
    sum+= element.score
});
console.log(sum);