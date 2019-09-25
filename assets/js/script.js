// Giovanni Mierop
// 19A2
// = == === >= <= || > < && ! ?

var ans;
var name;
var gender;
var lies = 0;
var class_ = "Florida men";
var seenAlien_;

function startGame() {
    console.log("Game Start - Intro");
    alert("*you wake up in an infamiliar place*\n"
        + "Your surroundings are shaking, it looks like you're in a van.\n"
        + "You can't really remember how you got here, everyhing is a little fuzzy.");

    alert("Guy: 'Hey, you. You're finally awake.\n"
        + "You were trying to raid Area 51, right?\n"
        + "Walked right into that Guard ambush, same as us, and that Naruto Runner over there.\n"
        + "Damn you Guards! We just want to see them Aliens.'");

    alert("You slowly start remembering what had happened that night, you vaguely remeber... aliens, were you helping them? "
        + "One of the guards caught you and shot you with some weird sci-fi gun.");
    alert("Richard: 'BTW my name is, Richard, I was a Kyle.'");

    nameAndGender();

    // alert("Richard: 'So your name is " + name + ", and you're a " + gender + ".'");
    alert(isGiovanni());
    if (gender != "boi") {
        alert("Richard: 'A whamen, eh?'");
    }

    seenAlien();

    doSomething0();

    alert("*you can hear the van driving*");
    alert("One of the guards look a bit off, he's acting kinda nervous.");

    alert("The weird guard nervously grabs a strange device and presses a button without the other guard knowing.");
    alert("Weird Guard: 'GET DOWN!'");
    alert("*the van crashes*");
    alert("After a what felt like an hour I woke up and saw the Weird Guard shoot the other Guard quickly before he was able to use his comms .");
    alert("The Weird Guard came to me and said 'Wake the fuck up Samurai we've got some shit to do'.\n"
        + "I got up and woke Richard up.\n"
        + "Meanwhile I see the Guard take off his clothes and then his... face. It was an Alien! And I believe I remember him from the raid");

    alienConvo0();

}

function nameAndGender() {
    console.log("Name, gender and class selection");
    console.log("Asking name");
    name = prompt("Richard: 'So what's your name?'", "Type your name here.");
    console.log("Asking gender");
    var nameAndGender_1 = prompt("Richard: 'What gender do you identify as?'"
        + "\n\n1: Boi\n2: Whamen\n\nType 1 or 2 or something else idc");
    if (nameAndGender_1 === "1") {
        gender = "boi";
        console.log("gender: boi")
    }
    else if (nameAndGender_1 === "2") {
        gender = "whamen";
        console.log("gender: whamen")
    }
    else {
        console.log("Game over");
        alert("Richard: 'Excuse me, what? There are no more than 2 genders!'");
        alert("[GAMEOVER]");
        // fail;
        TERMINATE_GAME_OVER; // Geeft een error maar is bedoeld om alles te stoppen
        // window.stop();
    }
    var nameAndGender_2 = prompt("Richard: 'So you tried to raid Area 51 right?'"
        + "\n\n1.yes\n2.no [lie]\n\nType 1 or 2.");
    if (nameAndGender_2 == "1") {
        console.log("Asking class");
        var nameAndGender_3 = prompt("Richard: 'Yeah, thought so. What class were you?'\n\n"
            + "1. Kyle\n"
            + "2. Naruto runner\n"
            + "3. Rock thrower\n"
            + "4. Karen\n"
            + "5. Furry\n"
            + "6. Anti-vaxxer\n"
            + "7. Florida men [DEFAULT]\n\n"
            + "Type 1, 2, 3, 4, 5, 6 or 7");
        switch (nameAndGender_3) {
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
                class_ = "Anti-vaxxer";
                break;
            case "7":
                class_ = "Florida men";
                break;
            default:
                class_ = "Florida men";
        }
    }
    if (nameAndGender_2 == "2") {
        console.log("lying to Richard");
        alert("Richard: 'What? Stop lying asshole.'\n\n"
            + "[lie failed: Richard will remeber that]");
        lies++;
    }
}

function seenAlien() {
    console.log("Scene - seen alien");
    console.log("Asking if seen aliens");
    var seenAlien0_1 = prompt("Richard: 'Alright " + name + " I guess were both going to prison. Did you atleast see any Aliens?'\n\n"
        + "1. yes\n"
        + "2. no\n\n"
        + "Type 1 or 2.");
    if (seenAlien0_1 == "1") {
        alert("Richard: 'Yeah, sure man. [sarcasticly]'\n\n*one of the guards giggles*");
        seenAlien_ = 1;
        var seenAlien0_2_how_many = prompt("Richard: 'Okay, how many aliens did you see?'");
        var aliens_seen_num = parseInt(seenAlien0_2_how_many, 10);
        var alsmdmfmefom = Number(seenAlien0_2_how_many);
        console.log(aliens_seen_num + " " + alsmdmfmefom);
        if (aliens_seen_num >= 50 && aliens_seen_num < 420) {
            alert("Richard: '" + aliens_seen_num + "!? Haha sure man as if you actually counted them.")
        }
        if (aliens_seen_num <= 0) {
            alert("Richard: 'Ok then.");
        }
        if (aliens_seen_num > 419 && aliens_seen_num < 1337) {
            alert("Richard: *mumbles* 'Pff lier'");
            lies++;
        }
        if (aliens_seen_num > 1337) {
            alert("Richard: '" + aliens_seen_num + " That sound very specific.");
        }
        else {
            alert("Richard: 'Cool story bro'");
        }
    }
    else if (seenAlien0_1 == "2") {
        alert("Richard: 'Too bad, we all tried.'\n\n*both guards giggle*");
        seenAlien_ = 2;
    }
    else {
        alert("Richard: 'What?'");
        seenAlien_ = 3;
    }
}

function alienConvo0() {
    console.log("Scene - convo with alien");
    console.log("Asking if remember anything");
    var alienConvo0_1 = prompt("Alien: 'Finally I couldn't take it anymore in that human suit. At last " + name
        + " we meet again, I reckon you don't remember much from the raid last night.'\n\n"
        + "1. I don't remember anything.\n"
        + "2. I remember a tiny bit, little flashes but not much.\n"
        + "3. AAAH WHAT THE FUCK ARE YOU!? [DEFAULT]\n\n"
        + "Type 1, 2 or 3");
    if (alienConvo0_1 == "1" || alienConvo0_1 == "2") { // dont remember anything
        console.log("dont remember anything");
        alert("Glipglab: 'Oh well, I have some explaining to do then. My name is Glipglab."
            + "Last night you and your friends raided Area 51 and broke me and some other aliens out. "
            + "When we tried to escape, the guards killed your friends. You are the only one to survive so they used amnestics on you.'");
        alert("Glibglab: 'We're gonna break the other aliens out of Area 51.'");
    }
    // else if (alienConvo0_1 == "2") { // remember a bit
    //     console.log("remember a bit");
    //     alert("");
    // }
    else { // AAH WHAT THE FUCK ARE YOU
        console.log("AAH WTF");
        var alienConvo0_2 = prompt("Glipglab: 'Dude relax, it's me, Glipglab. You helped me escape from Area 51 last night! Trust me!'\n\n"
            + "1. Trust Glipglab\n"
            + "2. Throw rock\n"
            + "3. Try to fight the alien [DEFAULT]\n\n"
            + "Type 1, 2 or 3");
        if (alienConvo0_2 == "1") { //trust
            console.log("trust alien");
            alert("Glipglab: 'Ok good, the others are waiting for us, we're gonna break the other aliens out of Area 51.'");
            alert("You: 'Ah really? I'm already lucky to be alive man.'");
        }
        if (alienConvo0_2 == "2") { // throw rock
            console.log("throw rock (gameover)");
            alert("You try to throw a rock at him but you miss. The Alien just knocks you dead.\n\n"
                + "[GAMEOVER]");
            TERMINATE_GAME_OVER; // Error yes ik weet mieneer
        } else { // default try to fight
            console.log("default - fight alien (gameover)");
            alert("You try to fight the Alien but you're still too weak. The Alien just knocks you dead.\n\n"
                + "[GAMEOVER]");
            TERMINATE_GAME_OVER; // Error yes ik weet mieneer
        }
    }
    var alienConvo0_3 = prompt("Glibglab: 'So are you in? Do you wanna raid Area 51 again?"
        + "This time you got me and my other alien friends that are waiting!\n\n"
        + "1. Yes I'm in!\n"
        + "2. No I'd like to go home.\n");
    if (alienConvo0_3 == "1") {
        alert("Glipglab: 'Well what are we waiting for then! Let's frickin go!");
        alert("[TO BE CONTIUED...]");
        alert("[YOU WIN]\n\nClick OK to get your reward!");
        alert("YOUR REWARD:\n\n[NOTHING]\n\nHOORAY!\nDid you honestly suspect a reward?");
        TERMINATE_GAME_WON;
    }
    else if (alienConvo0_3 == "2") {
        alert("Glipglab: 'Ugghh... Well... If you really want to... I'm alway in favor of freedom of choice so, see ya!");
        alert("[YOU WIN]\n\nClick OK to get your reward!");
        alert("YOUR REWARD:\n\n[NOTHING]\n\nHOORAY!\nDid you honestly suspect a reward?");
        TERMINATE_GAME_WON;
    }
}

function doSomething0() {
    console.log("do something while driving");
    var doSomething0_1 = prompt("The van is moving you decide what to do in de meantime.\n\n"
        + "1. Try to escape\n"
        + "2. Talk to guard\n"
        + "3. Nothing [DEFAULT]\n");
    if (doSomething0_1 == "1" && !(class_ == "Florida men")) {
        alert("You try to escape but there is two guards with you. "
            + "One of the guards notices and just bitch slaps you in the face.");
        doSomething0();
        return;
    }
    if (doSomething0_1 == "1" && class_ == "Florida men") {
        console.log("florida men ending");
        alert("You being Florida men, means you can easily handle a couple of guards.");
        alert("You dismanlte both guards in the back of the van and then knock them both down.");
        alert("You then take their gun and keys to go to the drivers area where you disable the other guards and safely stop the van.");
        alert("You then throw all the guards out of the van, one of the guards had blue blood but you didn't really think of it.");
        alert("You then free all the prisoners and go home as if nossthing had happened.");
        alert("[YOU WIN]\n\nClick OK to get your reward!");
        alert("YOUR REWARD:\n\n[NOTHING]\n\nHOORAY!\nDid you honestly suspect a reward?");
        TERMINATE_GAME_WON;
    }
    if (doSomething0_1 == "2") {
        alert("You try to talk to the guards, both of them ignore you.");
        doSomething0();
        return;
    }
    else {
        alert("You decide to just lean back and enjoy the ride as long as you can.");
    }
}

function isGiovanni() {
    var reply = (name == "Giovanni" ? "Richard: 'Why hello there " + name + " the " + class_ + " that identifies as a " + gender + ".'" :
        "Richard: 'So your name is " + name + ", and you're a " + gender + ".'");
    return reply + "";
}