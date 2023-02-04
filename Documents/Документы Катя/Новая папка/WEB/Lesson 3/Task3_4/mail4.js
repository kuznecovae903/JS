/*<script>
        let product = "Бананы";

        if (product == "Мандарины") {
            alert('Мандарины стоят 100 руб/кг.');
        } else if (product == "Бананы") {
            alert('Бананы и груши стоят 70 руб/кг.');
        } else if (product == 'Груши') {
            alert('Бананы и груши стоят 70 руб/кг.');
        } else {
            alert('Нет такого продукта.');
        }
        </script>
        */

const product = prompt('Введите фрукт: ').toLowerCase();// 'Бананы';
switch (product) {
    case 'мандарины':
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case 'груши':
        //alert('Бананы и груши стоят 70 руб/кг.'); - объединили, т.к. в одном параметре
        // break;
    case 'бананы':
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default:
        alert('Нет такого продукта.');
}