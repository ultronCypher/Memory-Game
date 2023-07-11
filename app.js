const cardArray=[
    {
        name:"afterhours",
        img:"images/afterhours.jpg",
    },
    {
        name:"beautybehindmadness",
        img:"images/beautybehindmadness.jpg",
    },
    {
        name:"houseofballoons",
        img:"images/houseofballoons.jpg",
    },
    {
        name:"mydearmelancholy",
        img:"images/mydearmelancholy.jpg",
    },
    {
        name:"starboy",
        img:"images/starboy.png",
    },
    {
        name:"trilogy",
        img:"images/trilogy.jpg",
    },
    {
        name:"afterhours",
        img:"images/afterhours.jpg",
    },
    {
        name:"beautybehindmadness",
        img:"images/beautybehindmadness.jpg",
    },
    {
        name:"houseofballoons",
        img:"images/houseofballoons.jpg",
    },
    {
        name:"mydearmelancholy",
        img:"images/mydearmelancholy.jpg",
    },
    {
        name:"starboy",
        img:"images/starboy.png",
    },
    {
        name:"trilogy",
        img:"images/trilogy.jpg",
    }
];
console.log(cardArray);
cardArray.sort(()=>0.5-Math.random());
const gridDisplay=document.querySelector("#grid");
const resultDisplay=document.querySelector("#result");
let cardsChosen=[];
let cardsChosenIDs=[];
const cardsWon=[];
function createGrid(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("style","padding:1px");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        gridDisplay.append(card);
    }
}
createGrid();
function checkMatch(){
    const cards=document.querySelectorAll("img");
    if(cardsChosenIDs[0]==cardsChosenIDs[1]){
        cards[cardsChosenIDs[0]].setAttribute("src","images/blank.png");
        cards[cardsChosenIDs[1]].setAttribute("src","images/blank.png");
        alert("You clicked the same image!");
    }
    if(cardsChosen[0]==cardsChosen[1]){
        alert("You found a match!");
        cards[cardsChosenIDs[0]].setAttribute("src","images/white.png");
        cards[cardsChosenIDs[1]].setAttribute("src","images/white.png");
        cards[cardsChosenIDs[0]].removeEventListener("click",flipCard);
        cards[cardsChosenIDs[1]].removeEventListener("click",flipCard);
        cardsWon.push(cardsChosen);
    }else{
        cards[cardsChosenIDs[0]].setAttribute("src","images/blank.png");
        cards[cardsChosenIDs[1]].setAttribute("src","images/blank.png");
        alert("sorry try again");
    }resultDisplay.textContent=cardsWon.length;
    cardsChosen=[];
    cardsChosenIDs=[];
    if(cardsWon.length==cardArray.length/2){
        resultDisplay.innerHTML="Congratulations You found all of them!"
    }
}
function flipCard(){
    const cardID=this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIDs.push(cardID);
    this.setAttribute("src",cardArray[cardID].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500);
    }
}