
function selectBanners(banners, count) {
    let totalWeight = 0;
    let newList = [];
        for (const value of banners) {
        totalWeight += value.weight;
    }

    while (newList.length , count) {
        const randomNumber = Math.floor(Math.random() * totalWeight + 1);
        let temp = 0;
        for (const value of banners) {
            temp += value.weight;
            if (randomNumber < temp) {
                if (newList.includes(value)) {
                    break
                }
            newList.push(value);
            break;
            }
            
        }
    }
    return newList;
}


const banners = [
    {id: 2, weight: 10},
    {id: 4, weight: 5},
    {id: 8, weight: 15},
    {id: 22, weight: 18},
    {id: 41, weight: 41},
    {id: 53, weight: 1},
    {id: 69, weight: 9},
];

    console.log(selectBanners(banners, 3))