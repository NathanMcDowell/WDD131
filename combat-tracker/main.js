const character = {
    name: "John the Barbarian",
    hp: 20,
    roll: 13,
    resistances: []
};



const trackerBox = document.querySelector("#initiative-list")
// trackerBox.innerHTML = localStorage.getItem('John the Barbarian')

function initiativeHtmlMaker()
{
    let html = 
    `<thead>
        <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>HP</th>
            <th>Resistances</th>
        </tr>
    </thead>
    <tbody>`
    const allItems = Object.entries(localStorage);
    // console.log("allItems:");
    // console.log(allItems);
    allItems.slice().reverse().forEach(([key, value]) => {
        const character = JSON.parse(value)
        // console.log(character)
        html += `<tr>
        <td><button class="damage-button ${character.name}">Damage</button></td>
        <td><button class="heal-button ${character.name}" >Heal</button></td>
        <td>${character.name}</td>
        <td>${character.hp}</td>
        <td>${character.resistances}</td>
        <td>${character.roll}</td> 
        </tr>`// Delete the above line for the final part.
    })
    html += `</tbody>`;
    return html;
}

function submitHandler()
{
    const name = document.querySelector("#char-name").value;
    const hp = document.querySelector("#char-hp").value;
    const roll = document.querySelector("#dex-roll").value;
    const resistances = document.querySelector("#resistances").value;
    const character = {name, hp, roll, resistances};

    // console.log(character);
    if(name != ""){
        localStorage.setItem(name, JSON.stringify(character));
    }
    
    
    trackerBox.innerHTML = initiativeHtmlMaker();
    clearInputs();
}
function clearInputs()
{
    document.querySelector("#char-name").value = "";
    document.querySelector("#char-hp").value = "";
    document.querySelector("#dex-roll").value = "";
    document.querySelector("#resistances").value = "";

}
function deleteAll()
{
    document.querySelector("#character-creation");
    localStorage.clear();
    clearInputs();
    submitHandler();
}
function hpHandler(event)
{
    let isDamage = true;
    if(event.target.classList.contains("damage-button")){
        isDamage = true;
    } else if(event.target.classList.contains("heal-button")){
        isDamage = false;
    }
    
    let damage = document.querySelector("#damage-input").value;
    if (!isDamage)
    {
        damage *= -1;
    }
    const allItems = Object.entries(localStorage);
    allItems.slice().reverse().forEach(([key, value]) => {
        const character = JSON.parse(value)
        if(event.target.classList.contains(character.name))
        {
            character.hp -= damage;
            localStorage.setItem(character.name, JSON.stringify(character));
            
            trackerBox.innerHTML = initiativeHtmlMaker();
        }
    })
}
document.querySelector("#submit-button").addEventListener("click", submitHandler)
document.querySelector("#reset-button").addEventListener("click", deleteAll)
trackerBox.addEventListener("click", hpHandler)

trackerBox.innerHTML = initiativeHtmlMaker();