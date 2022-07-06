const input = document.querySelector('.inp')

document.querySelector('.snack-btn').onclick = () => { rendering('snack', 'Снэки') };
document.querySelector('.start-btn').onclick = () => { rendering('start', 'Старты') };
document.querySelector('.soup-btn').onclick = () => { rendering('soup', 'Супы') };
document.querySelector('.meat-btn').onclick = () => { rendering('meat', 'Мясо') };
document.querySelector('.fish-btn').onclick = () => { rendering('fish', 'Рыба') };
document.querySelector('.stake-btn').onclick = () => { rendering('stake', 'Стейки') };
document.querySelector('.sweet-btn').onclick = () => { rendering('sweet', 'Сладкое') };
document.querySelector('.garnish-btn').onclick = () => { rendering('garnish', 'Гарниры') };
document.querySelector('.dictionary-btn').onclick = () => {
    document.querySelector('h1').innerHTML = 'Cловарь'

};
document.querySelector('.inp').oninput = Searcher;
function render(position,) {

    let cardList = '';
    position = position.map(({ id, img, name, contains, price }) => {
        cardList +=
            `
        <li class ="card">
            <img class="products-img" src="${img}">
                <span class="card-header">${name}</span>
                <span >${price}</span>
                <span>${contains}</span>
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

    let result = MENU.filter(item => item.name.includes(input.value));
    render(result);
};








// function render(position) {

//     position = position.map(({ id, img, name, contains, price }) => {
//         let everythingUL = document.createElement('ul')
//         let everythingLI = document.createElement('li')
//         let slideBtn = document.createElement('button')
//         // let inner = document.createElement('div')
//         let cardlist = ''

//         cardlist +=
//             `<div class="slider-line">
//         <div class="card"><img class="products-img" src="${img}"/>
//         <span class="card-header">${name}</span>
//         <span >${price}</span></div>
//          <div class="card"><span>${contains}</span></div>
//         </div>` ;
//         everythingLI.innerHTML = cardlist
//         slideBtn.innerHTML = 'btn'

//         everythingLI.classList.add('card', 'slider')
//         everythingUL.classList.add('card-section')
//         slideBtn.classList.add('slideBtn')
//         everythingUL.appendChild(everythingLI)
//         // everythingLI.appendChild(inner)
//         everythingLI.appendChild(slideBtn)
//         document.querySelector('.card-section').appendChild(everythingUL)
//     });

//     let offset = 0;
//     const sliderLine = document.querySelector('.slider-line')
//     document.querySelector('.slideBtn').addEventListener('click', () => {
//         offset += 300;
//         if (offset > 300) { offset = 0 }
//         sliderLine.style.left = -offset + 'px';

//     })
//     // document.querySelector('#everything').innerHTML = everythingLI;
// }






