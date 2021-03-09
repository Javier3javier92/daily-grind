/*


Here is the info we'll need to change for eacch coffee
pic - Image src
alt - Alt tag
day -Day of week
name - Name of coffee
color - Color
desc - Description


*/




let myDate = new Date();
let myDay = myDate.getDay();
let today = ""; 
let coffee = "";

function coffeeTemplate(coffee){
    let myReturn = ""; 

    myReturn +=

    `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
    <strong class="feature">${coffee.day}'s Coffee Special:</strong><br> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}

    </p>
    `

    return myReturn;

}






switch (myDay) {

    case 0:
        today = "Sunday";
        coffee = {
            name:"Pumpkin spice latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Drip pumpkin spice latte",
            day:"Sunday",
            color:"white",
            desc: "pumkin spice latte"
        };
    break;
    case 1:
    today = "Monday";
    coffee = {
        name:"Bubble Tea",
        pic:"images/bubble-tea.jpg",
        alt: "A picture of a Bubble tea",
        day:"Monday",
        color:"pink",
        desc: "bubble tea"
    };
break;

    case 2:
        today = "Tuesday";
        coffee = {
            name:"Drip",
            pic:"images/drip.jpg",
            alt: "A picture of a Drip coffee",
            day:"Tuesday",
            color"brown",
            desc: "drip"
        };
    break;


    case 3:
        today = "Wednesday";
        coffee = {
            name:"Caramel",
            pic:"images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day:"wednesday",
            color:"yellow",
            desc: "caramel latte"

        };
    break;

    case 4:
    today = "Thursday";
    coffee = {
        name:"cold brew",
        pic:"images/cold-brew.jpg",
        alt: "A picture of a cold brew",
        day:"Thursday",
        color:"red",
        desc: "cold brew"

    };
break;
case 5:
    today = "Friday";
    coffee = {
        name:"frappaccino",
        pic:"images/frappaccino.jpg",
        alt: "A picture of a frappaccino",
        day:"Friday",
        color:"blue",
        desc: "frappaccino"

    };
break;
case 6:
    today = "Saturday";
    coffee = {
        name:"Mocha",
        pic:"images/mocha.jpg",
        alt: "A picture of a mocha",
        day:"Saturday",
      color:"green",
      desc: "mocha"
    };
break;


}
console.log(coffee);
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByTagName("HTML")[0]
//document.getElementById("coffee-hightlight").style.color = coffee.color;
//alert(today);