// Giovanni Mierop
// 19A2

var ans;
var name;
var gender;
var lies = 0;
var class_;

function startGame() {
    alert("*you wake up in an infamiliar place*\n"
        + "Your surroundings are shaking, it looks like you're in a van.\n"
        + "You can't really remember how you got here, everyhing is a little fuzzy.");

    alert("Guy: 'Hey, you. You're finally awake.\n"
        + "You were trying to raid Area 51, right?\n"
        + "Walked right into that Guard ambush, same as us, and that Naruto Runner over there.\n"
        + "Damn you Guards! We just want to see them Aliens.'");

    alert("You slowly start remembering what had happened that night, you vaguely remeber... aliens, were you helping them? One of the guards caught you and shot you with some weird sci-fi gun.");

    alert("Richard: 'BTW my name is, Richard, I was a Kyle.'");

    nameAndGender();

    alert("Richard: 'So your name is " + name + ", and you're a " + gender + ".'");

    seenAlien();

    alert("One of the guards looks nervous")


}

function nameAndGender() {
    name = prompt("Richard: 'So what's your name?'", "Type your name here.");
    ans = prompt("Richard: 'What gender do you identify as?'"
        + "\n\n1: Boi\n2: Whamen\n\nType 1 or 2 or something else idc");
    if (ans == "1") {
        gender = "boi";
        console.log("gender: boi")
    }
    else if (ans == "2") {
        gender = "whamen";
        console.log("gender: whamen")
    }
    else {
        alert("Richard: 'Excuse me, what? There are no more than 2 genders!'");
        alert("[GAMEOVER]");
        // fail;
        terminate; // Geeft een error maar is bedoeld om alles te stoppen
        // window.stop();
    }
    ans = "";
    ans = prompt("Richard: 'So you tried to raid Area 51 right?'"
        + "\n\n1.yes\n2.no [lie]\n\nType 1 or 2.")
    if (ans == "1") {
        ans = prompt("Richard: 'Yeah, thought so. What class were you?'\n\n"
            + "1. Kyle\n"
            + "2. Naruto runner\n"
            + "3. Rock thrower\n"
            + "4. Karen\n"
            + "5. Furry\n"
            + "6. Florida men\n"
            + "7. Anti-vaxxer\n\n"
            + "Type 1, 2, 3, 4, 5, 6 or 7");
        switch (ans) {
            case "1":
                class_ = "Kyle";
                break;
            case "2":
                class_ = "Naruto runner";
                break;
            case "3":
                class_ = "Rock thrower";
                break;
            case "4":
                class_ = "Karen";
                break;
            case "5":
                class_ = "Furry";
                break;
            case "6":
                class_ = "Florida men";
                break;
            case "7":
                class_ = "Anti-vaxxer";
                break;
            default:
                class_ = "Florida men";
        }
    }
    if (ans == "2") {
        alert("Richard: 'What? Stop lying asshole.'\n\n"
            + "[lie failed: Richard will remeber that]");
        lies = +1;
    }
}

function seenAlien() {
    ans = prompt("Richard: 'Alright " + name + " I guess were both going to prison. Did you atleast see any Aliens?'\n\n"
        + "1. yes\n"
        + "2. no\n\n"
        + "Type 1 or 2.");
    if (ans == "1") {
        alert("Richard: 'Yeah, sure man. [sarcasticly]'\n\n*one of the guards giggles*");
    }
    else if (ans == "2") {
        alert("Richard: 'Too bad, we all tried.'\n\n*both guards giggle*");
    }
    else {
        alert("Richard: 'What?'");
    }
    ans = "";
}