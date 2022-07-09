
const input = document.querySelector('.inp')
document.querySelector('.snack-btn').onclick = () => { rendering('snack', 'Снэки') };
document.querySelector('.start-btn').onclick = () => { rendering('start', 'Старты') };
document.querySelector('.soup-btn').onclick = () => { rendering('soup', 'Супы') };
document.querySelector('.meat-btn').onclick = () => { rendering('meat', 'Мясо') };
document.querySelector('.fish-btn').onclick = () => { rendering('fish', 'Рыба') };
document.querySelector('.stake-btn').onclick = () => { rendering('stake', 'Стейки') };
document.querySelector('.sweet-btn').onclick = () => { rendering('sweet', 'Сладкое') };
document.querySelector('.garnish-btn').onclick = () => { rendering('garnish', 'Гарниры') };
document.querySelector('.dictionary-btn').onclick = () => { document.querySelector('h1').innerHTML = 'Cловарь' };
document.querySelector('.inp').oninput = Searcher;