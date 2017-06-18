
$(function() {

   var html = $('#profile').html();

   var data = {
        profile_title: 'Анциферова Уляна Володимирівна',
        profile_image_url: 'img/ulyana.jpg',
        profile_content: 'Студентка Української Академії Друкарства',
        study_title: 'Хочу вчити фронтенд тому що:',
        study_reasons: ['Фронтенд це цікаво!',
                        'Високооплачувана робота',
                        'Доводиться працювати по ночам'],
        phone_title: 'Мій контактний телефон:',
        phone_number: '0930330848',
        vk_title: 'Мій профіль ВКонтакті:',
        vk_url: 'https://vk.com/',
        vk_link: 'vk.com',
        feedback_title: 'Мій фідбек:',
        feedback_content: 'Love FrontEnd<3'
    };

   var content = tmpl(html,data);

   $('body').append(content);

});