
var  EarlyLife = document.getElementById("EarlyLife_Head");
var  They_all_call_me = document.getElementById("They_all_call_me_Head");
var  family = document.getElementById("family_Head");
var  legacy = document.getElementById("legacy_Head");
var  quotes = document.getElementById("quotes_Head");

EarlyLife.addEventListener ("click", function() {
    document.documentElement.scrollTop = 0;
})

They_all_call_me.addEventListener ("click", function() {
    document.getElementById("They_all_call_me").scrollIntoView();
    window.scrollBy(0,-200);
})
family.addEventListener ("click", function() {
    document.getElementById("family").scrollIntoView();
    window.scrollBy(0,-200);
})
legacy.addEventListener ("click", function() {
    document.getElementById("legacy").scrollIntoView();
    window.scrollBy(0,-200);
})
quotes.addEventListener ("click", function() {
    document.getElementById("quotes").scrollIntoView();
})

