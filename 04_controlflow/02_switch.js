// switch () {
//     case value:
        
//         break;

//     default:
//         break;
// }


//you have a bunch of keys and you need to find the correct key for the lock so you will try one by one is nothing but switch case

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//if we didnt write break then it will not execute remaining code so its quite old type lang so we have to write the break
//and when case got match then it will execute the all code except the default satement.


const month1 = "march"
switch (month1) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
