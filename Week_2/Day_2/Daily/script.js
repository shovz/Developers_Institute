let sentence = "The movie is not that bad, I like it";
sentence= sentence.split(/[\s,]+/);
let wordNot = sentence.indexOf('not') +1;
let wordBad  =  sentence.indexOf('bad') +1;

console.log(wordBad);
console.log(wordNot);

if (wordBad> wordNot)
{
    console.log(sentence.splice(wordNot-1,wordBad-wordNot,"Good)"));
}