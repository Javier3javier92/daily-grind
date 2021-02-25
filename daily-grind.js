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

    </p>
    `

    return myReturn;

}






switch (myDay) {


    case 1:
    today = "Monday";
    cofee = {
        name:"Bubble Tea",
        pic:"images/bubble-tea.jpg",
        alt: "A picture of a Drip coffee",
        day:"Wednesday",
        desc:"pink"

    };
break;

    case 2:
        today = "Tuesday";
        cofee = {
            color: "brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt: "A picture of a Drip coffee",
            day:"Wednesday",
            desc:brown

        };
    break;


    case 3:
        today = "Wednesday";
        cofee = {
            name:"Caramel",
            pic:"images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day:"Wednesday",
            desc:"yellow"

        };
    break;

    case 4:
    today = "Monday";
    cofee = {
        name:"Bubble Tea",
        pic:"images/bubble-tea.jpg",
        alt: "A picture of a Drip coffee",
        day:"Wednesday",
        desc:"brown"

    };
break;



}
console.log(coffee);
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByTagName("HTML")[0]
document.getElementById("coffee-hightlight").style.color = coffee.color;
//alert(today);