let sentence = "The movie is not that bad, I like it";
sentence= sentence.split(/[\s,]+/);
let wordNot = sentence.indexOf('not');
let wordBad  =  sentence.indexOf('bad');

console.log(wordBad);
console.log(wordNot);

if (wordBad> wordNot)
{   
    sentence.splice(wordNot,wordBad-wordNot+1,"Good")
    console.log(sentence);
}