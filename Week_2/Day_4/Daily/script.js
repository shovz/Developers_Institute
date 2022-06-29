let sentence = prompt("please enter words separated by commas , ").split(/[, ]+/);

const longestWord = (words) => {
    let temp = 0;
    for (i=0;i <words.length;i++)
    {
        if (words[i].length>temp)
        {
            temp = words[i].length;
        }
    }
    return temp;
}

const stars = (sentence) => {

    let longest = longestWord(sentence);
    let star="";
    star += ("*".repeat(longest+4) + `\n`);
    for (i=0;i <sentence.length;i++)
    {
        star+= "* " + sentence[i] + " ".repeat(longest-sentence[i].length) +" *" + `\n`;
    }
    star += ("*".repeat(longest+4) + `\n`);
    // console.log(star);
    return star;
}



console.log(stars(sentence));

