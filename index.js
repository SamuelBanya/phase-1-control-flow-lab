function scuberGreetingForFeet(distance){
    if (distance <= 400) {
        return "This one is on me!";
    }    
    if (distance > 400 && distance < 2000) {
        return "That will be twenty bucks.";
    }
    if (distance > 2000 && distance < 2500) {
        return "I will gladly take your thirty bucks."
    }
    if (distance >= 2500) {
        return "No can do.";
    }
}

function ternaryCheckCity(city){
    // Write your code here!
    const message = city === "NYC" ? "Ok, sounds good." : "No go.";
    // const isAdult = age >= 18 ? true : false;
    return message;
}

function switchOnCharmFromTip(tip){
    // Write your code here!
    switch (tip) {
    case "generous":
        return "Thank you so much.";
    case "not as generous":
        return "Thank you.";
    default:
        return "Bye.";
    }
}

scuberGreetingForFeet(199);

scuberGreetingForFeet(205);

scuberGreetingForFeet(405);

scuberGreetingForFeet(2600);

ternaryCheckCity("NYC");

switchOnCharmFromTip("generous");

switchOnCharmFromTip("not as generous");

switchOnCharmFromTip();

