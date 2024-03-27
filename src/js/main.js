import '../scss/style.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.top-slider__inner', {
    modules: [Navigation, Pagination],
    // Тут дальше ставишь сколько слайдеров тебе надо в ряд показывать, расстояние между ними
});


/*
* Вот тут ссылка как подключать https://swiperjs.com/get-started,
* тут смотри что бы его юзать, надло сначала установить npm install swiper,
* потом подключить в файле где ты его юзаешь, вот так import Swiper from 'swiper',
* если нужна пагинация или навигация, то их тоже надо подключить, вот так
* import { Navigation, Pagination } from 'swiper/modules';
* и так же тебе надо в html написать разметку для слайдера
*  */


// $(function () {
//
//     $('.top-slider__inner').slick({
//
//     })
// })