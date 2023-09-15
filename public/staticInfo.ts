export const phoneNumber: string = "+375(29)111-11-11"
export const officialText: string = "© NM / 2023. MINSK / BELARUS"

export type workType = {
    id: string
    title: string
    text: string
}
export const workSteps: workType[] = [
    {
        id: '01',
        title: 'ОБСУЖДАЕМ',
        text: 'Обсуждаем проект в удобное для вас время'
    },
    {
        id: '02',
        title: 'ИССЛЕДУЕМ',
        text: 'Изучаем рынок и предлагаем уникальное решение'
    },
    {
        id: '03',
        title: 'СОЗДАЕМ',
        text: 'Реализуем готовый проект и демонстрируем вам'
    },
    {
        id: '04',
        title: 'ТЕСТИРУЕМ',
        text: 'Обкатываем процессы и вносим улучшения'
    },
    {
        id: '05',
        title: 'ОБУЧАЕМ',
        text: 'Учим ваших сотрудников пользоваться продуктом'
    },
    {
        id: '06',
        title: 'ЗАПУСКАЕМ',
        text: 'Сдаем проект и вы улучшаете бизнес-процессы'
    }
]

export const workStepsDesignPage: workType[] = [
    {
        id: '01',
        title: 'ПОСТАНОВКА ЗАДАЧИ',
        text: 'Обсудим проект и вместе найдем оптимальное решение.'
    },
    {
        id: '02',
        title: 'МАРКЕТИНГОВЫЕ РЕШЕНИЯ',
        text: 'Исследуем рынок и создаем уникальный дизайн в соответствии с ожиданиями аудитории.'
    },
    {
        id: '03',
        title: 'СОЗДАНИЕ КОНЦЕПТА',
        text: 'Вы получите макет, оцените дизайн и удобство'
    },
    {
        id: '04',
        title: 'ТЕСТИРУЕМ',
        text: 'Создаём полноценный проект, подключаем модули и презентуем вам.'
    },
    {
        id: '05',
        title: 'ОБУЧАЕМ',
        text: 'Окончательно проверяем продукт на наличие багов и ошибок, и запускаем проект.'
    },
    {
        id: '06',
        title: 'ЗАПУСКАЕМ',
        text: 'Научим ваших сотрудников пользоваться инструментами и администрировать продукт.'
    }
]

export type advantageType = {
    title: string
    text: string
    src: string
    hoverSrc: string
}
export type advantageTypeWorkingPage = {
    title: string
    src: string
    hoverSrc: string
}
export const advantagesList: advantageType[] = [
    {
        title: 'РАБОТАЕМ ОНЛАЙН ПО ВСЕМУ МИРУ',
        text: 'Нащи специалисты готовы решать любые задачи 24/7 из любой точки мира.',
        src: './../../../public/assets/marker_front.svg',
        hoverSrc: './../../../public/assets/marker_front_hover.svg'
    },
    {
        title: 'ПОЖИЗНЕННАЯ ТЕХПОДДЕРЖКА',
        text: 'Клиенты которым мы разрабатываем продукты с нуля получают эксклюзивные условия дальнейшего сопровождения.',
        src: './../../../public/assets/headphone_front.svg',
        hoverSrc: './../../../public/assets/headphone_front_hover.svg'
    },
    {
        title: 'ФОКУС НА ФОРМУЛЕ "ЦЕНА-КАЧЕСТВО"',
        text: 'Клиенты MARSERO четко понимают за что они платят.',
        src: './../../../public/assets/badge_front.svg',
        hoverSrc: './../../../public/assets/badge_front_hover.svg'
    }
    ,
    {
        title: 'УНИКАЛЬНЫЕ ПРОДУКТЫ ДЛЯ БИЗНЕСА',
        text: 'Мы выявляем слабые стороны ЦА \n' +
            'и делаем ваш продукт неотъемлемой частью их жизни.',
        src: './../../../public/assets/dart_board_front.svg',
        hoverSrc: './../../../public/assets/dart_board_front_hover.svg'
    }
    ,
    {
        title: 'ПРОВЕРЕННЫЕ РАЗРАБОТЧИКИ',
        text: 'Все, кто работает в MARSERO, проходят жесточайшие условия отбора. В приоритете качество - остальное детали.',
        src: './../../../public/assets/magnifying_glass_front.svg',
        hoverSrc: './../../../public/assets/magnifying_glass_front_hover.svg'
    }
]
export const advantagesListWorkingPage: advantageTypeWorkingPage[] = [
    {
        title: 'ПОЖИЗНЕННАЯ ТЕХПОДДЕРЖКА',
        src: './../../../public/assets/headphone_front.svg',
        hoverSrc: './../../../public/assets/headphone_front_hover.svg'
    },
    {
        title: 'ФОКУС НА ФОРМУЛЕ "ЦЕНА-КАЧЕСТВО"',
        src: './../../../public/assets/badge_front.svg',
        hoverSrc: './../../../public/assets/badge_front_hover.svg'
    }
    ,
    {
        title: 'ЛЮБОВЬ К СВОЕМУ ДЕЛУ',
        src: './../../../public/assets/heart_front.svg',
        hoverSrc: './../../../public/assets/heart_front_hover.svg'
    }
    ,
    {
        title: 'ПРОВЕРЕННЫЕ СПЕЦИАЛИСТЫ',
        src: './../../../public/assets/magnifying_glass_front.svg',
        hoverSrc: './../../../public/assets/magnifying_glass_front_hover.svg'
    }
]


export const techSrcList: string[] = [
    '/assets/tech_1.svg',
    '/assets/tech_2.svg',
    '/assets/tech_3.svg',
    '/assets/tech_4.svg',
    '/assets/tech_5.svg',
    '/assets/tech_6.svg',
    '/assets/tech_7.svg',
    '/assets/tech_8.svg',
    '/assets/tech_9.svg',
    '/assets/tech_10.svg',
    '/assets/tech_11.svg',
    '/assets/tech_12.svg',
    '/assets/tech_13.svg',
    './../../../public/assets/tech_14.svg',
    './../../../public/assets/tech_15.svg',
]

export const infoMail: string = 'info@marsero.org'

export type categoryType = {
    btnText: string
    src: string
    id: string
    title: string
    text: string
}
export const categoriesList: categoryType[] = [
    {
        btnText: 'Интернет-магазин',
        src: './../../../public/assets/categories_1.png',
        id: '01',
        title: 'ИНТЕРНЕТ-МАГАЗИН',
        text: 'Откройте собственный онлайн-магазин или полноценный маркетплейс'
    },
    {
        btnText: 'Корпоративный сайт',
        src: './../../../public/assets/categories_2.png',
        id: '02',
        title: 'КОРПОРАТИВНЫЙ САЙТ',
        text: 'Создайте лицо вашего бизнеса в интернете'
    },
    {
        btnText: 'Landing page',
        src: './../../../public/assets/categories_3.png',
        id: '03',
        title: 'LANDING PAGE',
        text: 'Выгодный способ продавать товары или услуги'
    },
    {
        btnText: 'Интернет-портал',
        src: './../../../public/assets/categories_4.png',
        id: '04',
        title: 'ИНТЕРНЕТ-ПОРТАЛ',
        text: 'Публикуйте контент и создавайте сообщество клиентов и партнеров'
    },
    {
        btnText: 'Дизайн приложений',
        src: './../../../public/assets/categories_5.png',
        id: '05',
        title: 'ДИЗАЙН ПРИЛОЖЕНИЙ',
        text: 'Удивляйте простотой и красотой приложения на IOs и Android'
    },
    {
        btnText: 'Редизайн',
        src: '/assets/categories_6.png',
        id: '06',
        title: 'РЕДИЗАЙН',
        text: 'Освежите дизайн вашего продукта — обгоняйте конкурентов'
    }
]

export const categoriesListWorkingPage: categoryType[] = [
    {
        btnText: 'Мобильные приложения',
        src: './../../../public/assets/categories_7.png',
        id: '01',
        title: 'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ',
        text: 'Откройте собственный онлайн-магазин или полноценный маркетплейс'
    },
    {
        btnText: 'Платежные банковские системы',
        src: './../../../public/assets/categories_8.png',
        id: '02',
        title: 'ПЛАТЕЖНЫЕ БАНКОВСКИЕ СИСТЕМЫ',
        text: 'Создайте лицо вашего бизнеса в интернете'
    },
    {
        btnText: 'Прочее ПО',
        src: './../../../public/assets/categories_9.png',
        id: '03',
        title: 'ПРОЧЕЕ ПО',
        text: 'Выгодный способ продавать товары или услуги'
    },
    {
        btnText: 'Сервисы для парсинга данных',
        src: './../../../public/assets/categories_10.png',
        id: '04',
        title: 'СЕРВИСЫ ДЛЯ ПАРСИНГА ДАННЫХ',
        text: 'Публикуйте контент и создавайте сообщество клиентов и партнеров'
    },
    {
        btnText: 'Сервисы для моделирования',
        src: './../../../public/assets/categories_11.png',
        id: '05',
        title: 'СЕРВИСЫ ДЛЯ МОДЕЛИРОВАНИЯ',
        text: 'Удивляйте простотой и красотой приложения на IOs и Android'
    }
]

export const circlesList: string[] = [
    '/assets/Ellipse_1.svg',
    '/assets/Ellipse_2.svg',
    '/assets/Ellipse_3.svg',
    '/assets/Ellipse_4.svg'
]

export const circleListWorkingPage: string[] = [
    '/assets/Ellipse_5.svg',
    '/assets/Ellipse_6.svg',
    '/assets/Ellipse_7.svg',
    '/assets/Ellipse_8.svg'
]