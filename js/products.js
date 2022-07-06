let MENU = [
    // SNACKS
    {
        id: 'snack',
        name: 'маринады',
        img: '',
        contains: 'Капуста краснокочанная, огурцы кимчи, капуста цветная. Маринад: вода, чеснок, соль морская, перец чили, сахар.  Маринованные шампиньоны (горчичное масло, соль, соевый соус, кунжутное масло, мёд, тимьян, чеснок)',
        price: '450',
    },
    {
        id: 'snack',
        name: 'Хрустящие пельмени с цыпленком',
        img: 'https://delivery.originalbelgian.ru/static/products/978fef65-ce3e-4424-8be0-49d5ed148302.jpg',
        contains: 'Фарш-цыпленок, лук, соль, перец. Подаются со сметанно-чесночным соусом (сметана, креметта, чеснок, укроп). Украшается пером зеленого лука и шампурами.',
        price: '450',

    },
    {
        id: 'snack',
        name: 'Картофель фри с соусом гольф',
        img: 'https://delivery.originalbelgian.ru/static/products/45f1fd98-1d2c-4625-8441-c348749c5a63.jpg',
        contains: 'Картофель фри обжаривается во фритюре. Соус Гольф: Кисло-сладкий (репчатый лук, чили, паприка, оливковое масло, кетчуп, мед, консервированный ананас, соевый соус, имбирь) + майонез.',
        toppings: 'ДОП: Пармезан, чеддер, бекон, доп. соус',
        price: '380',
    },

    {
        id: 'snack',
        name: 'Гренки с сыром чеддер и чесноком',
        img: 'https://delivery.originalbelgian.ru/static/products/52bdfb37-a34e-4765-a9ec-d7ed1bcfbd7a.jpg',
        contains: 'Обжаренный во фритюре ржаной хлеб обваливается в чесноке и запекается с сыром Чеддер. Подается со сметанно-чесночным соусом (сметана, креметта, чеснок, укроп).',
        toppings: '',
        price: '380',
    },
    {
        id: 'snack',
        name: 'Картофель-фри с трюфельным соусом и сыром пармезан',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4pB7lW46cPJDhkXF3clOzfgHTbbn4cMCig&usqp=CAU',
        contains: 'Картофель фри обжаривается во фритюре. Замешивается с сыром Грана Падано и трюфельным маслом. Подается в сотейнике на деревянной доске вместе с трюфельным соусом (сливки, крем с шампиньонами и трюфелем).',
        price: 550 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Сыровяленый вепрь',
        img: 'https://delivery.originalbelgian.ru/static/products/b93fe886-7d67-4608-92bd-87bff61ee4be.jpg',
        contains: 'Сыровяленый окорок в специях, оливковое масло, подается без кинзы и паприки.',
        price: 540 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Сырные крокеты с малиново-перечным соусом',
        img: 'https://delivery.originalbelgian.ru/static/products/39db9c7f-5f2b-4366-b32a-c50110b01400.jpg',
        contains: 'Нежные сырные шарики из моцареллы панируются в яйце и сухарях Панко. Подаются с смородино-перечным соусом (смородина черная , крем бальзамик и много свежемолотого перца). ',
        price: 520 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Креветки-фри с соусом Ким-Чи',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPBgjdD1LsF20UFZuSk7gS48vqrKZjm1xlg&usqp=CAU',
        contains: 'Креветки (калибр 70/90 – цифры означают количество креветок на 1 кг), обваливаем в муке Семола (мука крупного помола из твердых сортов пшеницы), обжариваем во фритюре. Подаем с соусом Кимчи для креветок: Айоли (майонез, сметана, чеснок, тимьян) + кимчи + сладкий чили. ',
        price: 570 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Жареные креветки с чесноком и эстрагоном',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHvhAa2rO6oJ-GQ6F83aK0M5GDEyUvpovwg&usqp=CAU',
        contains: 'Креветки тигровые без панциря, обжаренные на сливочном масле с добавлением белого вина, масла растительного, тайского рыбного соуса, чеснока и эстрагона. Подаются в глубокой тарелке с подсушенной чиабаттой.',
        price: 680 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Морковно-сельдереевые палочки',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0Cx5uC3LoaMq8RT69pBDdgi6l_E0qmK8fQ&usqp=CAU',
        contains: '',
        price: 190 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Батат фри с сырным соусом',
        img: '',
        contains: 'Клубни батата, нарезанные соломкой, обжариваются во фритюре и подаются с соусом Дорблю (сливки, сыр дорблю)',

        price: 0,
    },
    {
        id: 'snack',
        name: 'Паштет из куриной печени, с компоте из вишни',
        img: '',
        contains: 'Куриная печень обжаривается с репчатым луком, белым вином, сливочным маслом и сливками. Далее блендеруется до однородной массы. Компоте* из вишни: мороженая вишня, ликер, сахар, пектин. Подаем с ржаным хлебом и украшаем микрозеленью.',
        price: 0,
    },
    {
        id: 'snack',
        name: 'Жульен из моллюсков',
        img: '',
        contains: 'Моллюск клем, отварные рапаны (двустворчатый хищный моллюск), замоченные древесные грибы (муэр), репчатый лук обжариваем на растительном масле, добавляем сливки, выпариваем, доводим до вкуса. Выкладываем в раковины из-под устриц, посыпаем сыром моцарелла, плавим горелкой, украшаем зелёным маслом. Подаём на тарелке с крупной морской солью.',
        price: 450,
    },
    {
        id: 'snack',
        name: 'Бастурма',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUewVqfy-VMcySFKcBXD912acl9lMKjgjkg&usqp=CAU',
        contains: '',
        price: 350 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Куриные крылышки',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthkqK5udKz_HtHWb9sVTFCjCc5dSehkEJpg&usqp=CAU',
        contains: 'Куриные крылья маринуются 12 часов в кисло-сладком соусе (репчатый лук, чили, паприка, оливковое масло, кетчуп, мед, консервированный ананас, соевый соус, имбирь), затем готовятся в течении 2-3 часов при низкой температуре в су-виде. При подаче крылья обжариваются во фритюре, затем глазируются на сковороде с кисло-сладким соусом, украшается кинзой.',
        price: 470 + ' ' + 'p',
    },
    {
        id: 'snack',
        name: 'Улитки по-бургундски',
        img: '',
        contains: 'Изысканное блюдо Средиземноморской кухни. Мясо улиток запекается в раковине со сливочным маслом, чесноком, луком и петрушкой. Подаются на крупной морской соли с широкими шпажками',
        price: 0,
    },
    {
        id: 'snack',
        name: 'Поп-корн из креветок и кальмаров',
        img: 'https://delivery.originalbelgian.ru/static/products/8d2a67ca-2720-4c7c-a512-12738f292171.jpg',
        contains: 'Попкорн – это креветки крупные и кальмары, нарезанные кольцами, панируем в креветочных чипсах и сухарях панко, жарим в фритюре. Подаем с долькой лайма. Спайси соус: икра тобико, майонез, табаджан.',
        price: 550 + ' ' + 'p',
    },
    // Cалаты и старты
    {
        id: 'start',
        name: 'Салат с баварскими колбасками',
        img: '',
        contains: '',
        price: 0,
    },
    {
        id: 'start',
        name: 'Тартар из говядины',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUAwfcWCsYNTLBoV_CWtEjgZt_ShEgBGh_Q&usqp=CAU',
        contains: '',
        price: 0,
    },
    {
        id: 'start',
        name: 'Таратар из лосося',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTca-yrPGjom4NICi4gpdYp2KHPLoxk-_lraw&usqp=CAU',
        contains: '',
        price: 0,
    },
    {
        id: 'start',
        name: 'Вителло тонато',
        img: '',
        contains: '',
        price: 0,
    },
    {
        id: 'start',
        name: 'Салат с камчатским крабом',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlKg9cGwQUmMQobCHUsIOn591CygeJuPWYQ&usqp=CAU',
        contains: '',
        price: 0,
    },
    // Супы
    {
        id: 'soup',
        name: 'Суп-гуляш по-фламандски',
        img: '',
        contains: '',
        price: 0,
    },
    {
        id: 'soup',
        name: 'Рыбный ватерзой',
        img: '',
        contains: '',
        price: 0,
    },
    {
        id: 'soup',
        name: 'Буйабес по-гентски',
        img: '',
        contains: '',
        price: 0,
    },
    {
        id: 'soup',
        name: 'Куриный бульон по-антверпенски',
        img: '',
        contains: '',
        price: 0,
    },
]
