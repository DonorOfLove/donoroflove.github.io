const ruBtn = document.getElementById('ru__button'), engButton = document.getElementById('eng__button')

const languages = document.getElementsByClassName('h__languages')[0], eng = document.getElementById('eng'),
    ru = document.getElementById('ru')

const contacts = document.getElementById('contacts')
const skills = document.getElementById('skills')
const fullName = document.getElementsByClassName('full-name')[0],
    profession = document.getElementsByClassName('profession')[0],
    city = document.getElementsByClassName('city')[0], age = document.getElementsByClassName('age')[0]

const exp = document.getElementById('experience')
const handyman = document.getElementById('handyman')
const loader = document.getElementById('loader')
const adjuster = document.getElementById('adjuster')
const education = document.getElementById('educatin'), mscoe = document.getElementById('mscoe')

const projects = document.getElementById('projects')

const about_text = document.getElementById('about_text'), about = document.getElementById('about'),
    everlast = document.getElementById('everlast'), todo = document.getElementById('todo'),
    rps = document.getElementById('rps'),
    git = document.getElementById('git')

ruBtn.addEventListener('click', () => {
    languages.textContent = 'ЯЗЫКИ:', eng.innerText = 'Английский:b1', ru.innerText = "Русский: родной",
        contacts.textContent = 'КОНТАКТЫ:', skills.textContent = 'НАВЫКИ:', fullName.textContent = 'Езовитов Станислав Андреевич',
        profession.textContent = 'ФРОНТЕНД-РАЗРАБОТЧИК', city.textContent = '📍 г.Минск, метро Спортивная',
        age.textContent = '20 лет', exp.textContent = 'Опыт работы:', handyman.innerText = 'Разнорабочий',
        loader.textContent = 'Грузчик', adjuster.textContent = '"ОАО" Интеграл: наладчик технологического оборудования',
        education.textContent = 'Образование', mscoe.textContent = 'Минский Государственный Колледж Электроники. Специальность:Мехатроника( программирование промышленных контроллеров ). Мехатроник'
    projects.textContent = 'Мои проекты:', about.textContent = 'Обо мне:', about_text.textContent = 'В свободное от работы и учебы вреся,' +
        ' я занимаюсь музыкой(соло гитарист в группе), кастомизацией одежды, спортом. На текущий момент продолжаю изучать фронт-енд, и жажду получать' +
        ' реальный коммерческий опыт на реальном проекте',
        everlast.textContent='Мини-игра на реакте',todo.innerText='Список дел на реакте',
        rps.innerText='Камень-ножницы-бумага на ванильном js',git.innerText='Вы так же можете посмотреть код этих и других проектов на моем'

})
engButton.addEventListener('click', () => {
    languages.textContent = 'LANGUAGES:', eng.innerText = 'English:b1', ru.innerText = "Russian: natal",
        contacts.textContent = 'CONTACTS:', skills.textContent = 'SKILLS:', fullName.textContent = 'Ezovitov Stanislav Andreevich',
        profession.textContent = 'FRONTEND-DEVELOPER', city.textContent = '📍 Minsk, metro Sportivnaya',
        age.textContent = '20 year old', exp.textContent = 'Experience:', handyman.innerText = 'Handyman',
        loader.textContent = 'Loader', adjuster.textContent = '"JSC" Integral as an adjuster of technological equipmen',
        education.textContent = 'Education:', mscoe.textContent = 'Minsk State College of Electronics.\n' +
        'Specialization: Mechatronics( industrial controller programming).\n' +
        'Mechatronic.',about_text.textContent = 'In free from work and study time, I am engaged in music (solo guitarist in a band), customization of clothes, sports. At this time keep learning front-end, and thirst to get real commercial experience on a real project.',
        everlast.textContent='MiniGame on React: ',todo.innerText='To Do on React:',projects.innerText='My projects:'
        rps.innerText='rock paper & scissors on vanil js: ',git.innerText='You can also view code of this project and others on my',about.textContent = 'About me:',
            about_text.textContent = 'In free from work and study time, I am engaged in music (solo guitarist in a band), customization of clothes, sports. At this time keep learning front-end, and thirst to get real commercial experience on a real project.'

})

