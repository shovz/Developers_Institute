let sentence = prompt("enter a sentence");
sentence= sentence.split(/[\s,]+/);
let wordNot = sentence.indexOf('not') ;
let wordBad  =  sentence.indexOf('bad') +1;

console.log(wordBad);
console.log(wordNot);

if (wordBad> wordNot)
{
    sentence.splice(wordNot,wordBad-wordNot,"Good)")
    console.log(sentence);
}