

function render(position,) {

    let cardList = '';
    position = position.map(({ id, img, name, contains, price }) => {
        cardList +=
            `
        <li class ="card">
            <div class="slider-line">
                <div class="slide inner-card">
                    <img class="products-img" src="${img}">
                    <span class="card-header">${name}</span>
                    <span >${price}</span>
                </div>
                <div class="slide inner-card">
                <span>${contains}</span>
                </div>
                
            </div>

        </li>   
            `

            ;
    });
    const everythingUL = `<ul class="card-section ">${cardList}</ul>`;
    document.querySelector('#everything').innerHTML = everythingUL;
}

function rendering(dish, header) {
    document.querySelector('h1').innerHTML = header
    let dishes = MENU.filter(item => item.id === dish);
    render(dishes);
}
// SEARCHER
let searchIcon = document.querySelector('.s-div')
searchIcon.onclick = function () {
    this.classList.add('hide')
    input.classList.remove('hide')
    input.classList.add('inputAnimation')
}

function Searcher() {

    // let menu = MENU.map(item => item.name.toLowerCase())
    let result = MENU.filter(item => item.name.includes(input.value));
    render(result);
};







