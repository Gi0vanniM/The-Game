// Giovanni Mierop
// 19A2

var ans;
var name;
var gender;


function startGame() {
    alert("*you wake up in an infamiliar place*\n"
        + "Your surroundings are shaking, it looks like you're in a van.\n"
        + "You can't really remember how you got here, everyhing is a little fuzzy.");

    alert("Guy: 'Hey, you. You're finally awake.\n"
        + "You were trying to raid Area 51, right?\n"
        + "Walked right into that Guard ambush, same as us, and that Naruto Runner over there.\n"
        + "Damn you Guards! We just want to see them Aliens.'");

    alert("You slowly start remembering what had happened that night, you vaguely remeber... aliens, were you helping them? One of the guards caught you and shot you with some weird sci-fi gun.");

    alert("Richard: 'BTW my name is, Richard, I was a Kyle runner.'");

    nameAndGender();

    alert("Richard: 'So your name is " + name + ", and you're a " + gender + ".'");

    seenAlien();


}

function nameAndGender() {
    name = prompt("Richard: 'So what's your name?", "Type your name here.'");
    ans = prompt("Richard: 'What gender do you identify as?'"
        + "\n\n1: Boi\n2: Whamen\n\nType 1 or 2 or something else idc");
    if (ans == 1) {
        gender = "boi";
    }
    if (ans == 2) {
        gender = "whamen";
    }
    else {
        gender = ans;
    }
    ans = "";
    ans = prompt("Richard: 'So you tried to raid Area 51 right?'"
        + "\n\n1.yes\n2.no\n\nType 1 or 2.")
}

function seenAlien() {
    ans = prompt("Richard: 'Alright " + name + " I guess were both going to prison. Did you atleast see any Aliens?'\n\n"
        + "1. yes\n"
        + "2. no\n\n"
        + "Type 1 or 2.");
    if (ans == "1") {
        alert("Richard: 'Yeah, sure man. [sarcasticly]'\n\n*one of the guards giggles*");
    }
    if (ans == "2") {
        alert("Richard: 'Too bad, we all tried.'\n\n*both guards giggle*");
    }
    else {
        alert("Richard: 'What?'");
    }
    ans = "";
}