import cat1 from "./../img/cat.jpg"
import cat2 from "./../img/cat1.jpg"
import cat3 from "./../img/cat2.jpg"
import cat4 from "./../img/cat3.jpg"
import cat5 from "./../img/cat10.jpg"
import cat6 from "./../img/cat5.jpg"
import cat7 from "./../img/cat6.jpg"
import cat8 from "./../img/cat12.jpg"
import cat9 from "./../img/cat8.jpg"
import cat10 from "./../img/cat9.jpg"
import cat11 from "./../img/cat11.jpg"
import tsu from "./../img/tsu.jpg"

const jobs = [
{
    title: 'WEB-разработчик',
    phone:'+7(999)-236-18-39',
    specialty: 'frontend',
    id:0,
    discription: 'Опыт работы не менее 2 лет в аналогичной должности. Знание JavaScript, HTML, CSS, JSON. Понимание REST- архитектуры. Опыт работы с...Разработка FrontEnd клиент-серверных приложений.',
    coin: '100000', 
    city:'Москва',
    name: 'MeowCorp',
    img: cat1,
    tasks:'разработка FrontEnd клиент-серверных приложений, разработка новых модулей и компонентов, верстка веб-страниц, оптимизация кода, код-ревью.',
    requirements: 'опыт работы не менее 2 лет в аналогичной должности; знание JavaScript, HTML, CSS, JSON; понимание REST- архитектуры; опыт работы с TFS; английский язык - на уровне чтения технической документации; мы используем Яндекс трекер (аналог JIRA).',
},
{
    title: 'Web-программист',
    phone:'+7(999)-192-65-12',
    specialty:'backend',
    id:1,
    discription: 'PHP- разработчик со знанием SQL, WordPress, с умением настроить Apache, умением работы в Linux-системах.',
    coin: '70000 - 110000',
    city:'Томск',
    name: 'MeowInc',
    img: cat2,
    tasks: 'PHP-разработчик со знанием SQL, WordPress, с умением настроить Apache, умением работы в Linux-системах',
    requirements: 'PHP-разработчик со знанием SQL, WordPress, с умением настроить Apache, умением работы в Linux-системах',
},
{
    title: 'PHP-программист',
    phone:'+7(999)-423-61-23',
    specialty:'backend',
    id:2,
    discription: 'Опыт разработки на PHP 5.6, 7 от 1 года. Опыт разработки на JavaScript (JQuery) от 1 года. Работа с API сервисов: AmoCRM, Google Docs и многие другие, в зависимости от задачи клиента',
    coin: '90000 - 100000',
    city:'Томск',
    name: 'Mew',
    img: cat3,
    tasks: 'Работа с API сервисов: AmoCRM, Google Docs и многие другие, в зависимости от задачи клиента; Написание скриптов интеграций различных сервисов между собой по API; Интеграции сайтов с CRM системами; Написание виджетов для CRM на PHP/JS; Разработка скриптов интеграций CRM системы с различными сервисами и виджетами',
    requirements: 'JavaScript, PHP, jQuery, Laravel, MySQL, Работа в команде.',
},
{
    title: 'Программист-разработчик C/ C++',
    phone:'+7(999)-721-78-12',
    specialty:"fullstack",
    id:3,
    discription: 'Знание одного или нескольких языков семейства С - Win32API. ОБЯЗАТЕЛЬНОЕ знание «С++». Сетевое и системное программирование. Опциональное знание Powershell.',
    coin: '79000 - 89000',
    city:'Новосибирск',
    name: 'TugTug',
    img: cat4,
    tasks:'Разработка, тестирование, поддержка, оптимизация и рефакторинг активно изменяющегося ПО для высокопроизводительных и отказоустойчивых телекоммуникационных устройств для x86_64 архитектур (С/С++ код, логику для коммутации фреймов и маршрутизации пакетов, скрипты под Linux, патчи к ядру, драйвера сетевых карт и др.)',
    requirements: 'C/С++ на уверенном уровне, Принципы работы ОС Linux; Знание межпроцессного взаимодействия, синхронизации, многопоточности и др. намногоядерных системах; Опыт работы в Linux окружении с gсс, make, gdb, strace, perf, valgrind; Знание алгоритмов и структур данных; Опыт работы с системами контроля версий (git/gitlab); Технический английский, умение читать документацию и RFC',
},
{
    title: 'Программист в ТГУ',
    phone:'+7(999)-264-19-42',
    specialty:"fullstack",
    id:4,
    discription: 'Нужен разработчик сайта, который сможет поддерживать его до конца своей жизни',
    coin: '40000-50000',
    city:'Томск',
    name: 'ТГУ',
    img: tsu,
    tasks:'Требуется поддерживать сервера, чтобы у студентов был интернет; С нуля создать новый сайт ТГУ, чтобы абитуриентам было всё понятно; С момента выхода на работу даётся дедлайн до конца июня!',
    requirements: 'В идеале знать SQL, PHP, CSS, JS и ООП; Минимальный стаж работы в коммерческой сфере 30лет; Иметь 3 высших образования; Не иметь вредных привычек, особенно курение!',
},
{
    title: 'PHP-программист (Junior)',
    phone:'+7(999)-345-12-43',
    specialty:"backend",
    id:5,
    discription: 'Компания IntelCat - один из российских лидеров в области рекламы в интернете. На рынке мы уже более 18 лет и продолжаем успешно развиваться.',
    coin: '40000 - 50000',
    city:'Новосибирск',
    name: 'IntelCat',
    img: cat5,
    tasks:'решать задачи от seo-специалистов по внесению корректировок в сайты; обеспечивать функционирование текущих сайтов клиентов компании; участвовать в коллективном поиске решения сложных задач; обязательно - профессионально расти и развиваться!)',
    requirements: 'высшее или незаконченное высшее образование; хорошее знание языков программирования (PHP, SQL, JavaScript); навыки работы с БД (MySQL, PostgreSQL); владение основами web-верстки, HTML, CSS; умение использовать регулярные выражения.',
},
{
    title: 'Программист Java',
    phone:'+7(999)-205-12-85',
    specialty:"backend",
    id:6,
    discription: 'Мы создаем цифровые сервисы для государственного сектора, с помощью которых происходит цифровая трансформация государственного управления в спорте, сельском хозяйстве, медицине, образовании и других сферах.',
    coin: '100000 - 120000',
    city:'Новосибирск',
    name: 'CatOvasiya',
    img: cat6,
    tasks:'Работой над проектами по сопровождению информационных систем. В первую очередь это анализ и исправление ошибок, которые возникают в процессе работы системы, разработка новых функций в существующих модулях, с проведением code review, взаимодействие с другими членами команды. Данный стек задач позволяет получить опыт работы с реальными проектами и научиться анализировать и исправлять ошибки в коде программы.',
    requirements: 'Знание языка Java; Опыт коммерческой разработки приветствуется; Понимание работы клиент-серверных приложений, сетевого протокола HTTP, а также о том как выстраивать REST API; Представление о реляционных базах данных (PostgreSQL, MySQL или др.) на уровне JOINов и индексов; Знание Spring Framework (Context, Data, Web) будет преимуществом',
},
{
    title: 'Программист/разработчик - стажер',
    phone:'+7(999)-953-01-73',
    specialty:"frontend",
    id:7,
    discription: 'Мы Компания, которая более 15 лет успешно работает в направлении Food retail. В Компании для разных направлений деятельности и решаемых задач порядка 20 интегрированных прикладных информационных систем. ',
    coin: '70000',
    city:'Москва',
    name: 'MEajOngW',
    img: cat7,
    tasks:'Выявление и устранение ошибок в ПО, ошибок пользователей. Доработка и обновление программ 1С в соответствии с требованиями учета в Компании; Составление инструкций для пользователей; Консультирование пользователей по вопросам использования программ 1С',
    requirements: 'высокая обучаемость, развитое логическое мышление, коммуникабельность; умение программировать на любом языке; умение работать в команде; теоретическое и практическое знание типовых конфигураций 1С:Предприятие будет вашим преимуществом;',
},
{
    title: 'Программист fullstack',
    phone:'+7(999)-012-43-93',
    specialty:"fullstack",
    id:8,
    discription: 'Мы разрабатываем игры. Сейчас ищем программиста на новый проект. Будут задачи как по бэку, так и по фронту. Готовы взять с человека небольшим опытом, но чтобы он был и главное большое желание развиваться как программист.',
    coin: '80000-120000',
    city:'Томск',
    name: 'NyamCat',
    img: cat8,
    tasks:'Если вам интересны только деньги и все равно где работать, то не приходите к нам, мы не сработаемся. Мы делаем игры которые приносят радость сотням тысяч людей ежедневно.',
    requirements: 'Умение писать бэкенд, подойдет PHP или Node.js; умение верстать (фронтенд), соответственно html, css; Плюсом будет React, работа с серверами, понимание работы вебсокетов',
},
{
    title: 'Junior С# (ASP.NET) Developer',
    phone:'+7(999)-019-28-53',
    specialty:"fullstack",
    id:9,
    discription: 'В команду .NET требуются начинающие разработчики, умеющие работать в команде и желающие профессионально расти.',
    coin: '150000-200000',
    city:'Москва',
    name: 'AmuNyamu',
    img: cat9,
    tasks:'Нам не нужен ваш многолетний опыт, он нам не интересен. Нам нужно ваше желание, трудолюбие, навыки программирования и настойчивость в работе перед трудностями.',
    requirements: '.NET, .NET Core, ASP.NET MVC, Web API; C#, T-SQL, HTML, JavaScript, CSS, JQuery, Knockout JS, Vue JS, Bootstrap; MS SQL Server, Entity Framework, LINQ; Знание английского языка на уровне чтения технической документации и написания комментариев к коду.',
},
{
    title: 'Backend разработчик программного обеспечения',
    phone:'+7(999)-023-12-75',
    specialty:"backend",
    id:10,
    discription: 'Компания WD — одна из крупных международных компаний в сфере инспекционных услуг, экспертизы, испытаний и сертификации. Стать сотрудником WD означает стать частью нашей миссии — делать мир лучше, безопаснее и технологичнее.',
    coin: '150000-170000',
    city:'Москва',
    name: 'WithoutDog',
    img: cat10,
    tasks:'Составление формализованных описаний решений, поставленных задач в соответствии с требованиями технического задания или других принятых в организации нормативных документов; Разработка алгоритмов решения, поставленных задач в соответствии с требованиями технического задания или других принятых в организации нормативных документов; Оценка и согласование сроков выполнения поставленных задач;',
    requirements: 'Среднее, либо дополнительное профессиональное образование по программе повышения квалификации или высшее образование; Опыт коммерческой разработки от 1 года; Опыт в работы с Azure DevOps приветствуется; Знание языков программирования: С#, SQL.',
},
{
    title: 'Web-программист',
    phone:'+7(999)-384-93-10',
    specialty:"fullstack",
    id:11,
    discription: 'Знание одного или нескольких языков семейства С - Win32API. ОБЯЗАТЕЛЬНОЕ знание «С++». Сетевое и системное программирование. Опциональное знание Powershell.',
    coin: '79000 - 89000',
    city:'Новосибирск',
    name: 'Kus',
    img: cat11,
    tasks:'Разработка модулей и компонентов для 1С-Битрикс; кастомизация модулей и компонентов; оценка задач и проектов; вакансия подразумевает разработку (70% рабочего времени) и руководство (30% рабочего времени).',
    requirements: 'Хорошее знание PHP, 1С-Битрикс; обмен данными/контентом, интеграция с внешними сервисами API, 1С; технический аудит, оптимизация кода с точки зрения нагрузки и производительности; поддержка безопасности и устранение ошибок; верстка, знание и опыт практического применения HTML, CSS, JavaScript (jQuery);',
},
]

export {jobs}