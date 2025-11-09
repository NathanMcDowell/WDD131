
const characterCard = {
    img: "snortleblat.webp",
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    dead: false,
    doDamage: function(){
        if (this.health <= 0)
        {
            this.name = "Dead " + this.name
        } else {
            this.health = this.health - 20;
        } 
        renderCard(characterCard)
    },
    levelUp: function(){
        this.level += 1;
        renderCard(characterCard)
    }
};




function cardTemplate(characterCard){
    
    return `<img src="${characterCard.img}" alt="picture of snortleblat" class="image">
            <h1 class="name">${characterCard.name}</h1>
            <div class="stats">
                <p id="class">Class: ${characterCard.class}</p>
                <p id="level">Level: ${characterCard.level}</p>
                <p id="health">Health: ${characterCard.health}</p>
            </div>
            <div class="buttons">
                <button id="attackButton">Attacked</button>
                <button id="levelButton">Level Up</button>
            </div>`

        };
function renderCard(card){
    const cardEl = document.querySelector(".card");
    const html = cardTemplate(card);
    cardEl.innerHTML = html;
    const damageButton = document.querySelector("#attackButton");
    const levelButton = document.querySelector("#levelButton");
    damageButton.addEventListener("click", () => characterCard.doDamage());
   levelButton.addEventListener("click", () => characterCard.levelUp());
    
}

renderCard(characterCard);


