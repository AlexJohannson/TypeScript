type Week = {
    day: string;
    morning: number;
    afternoon: number;
    evening: number;
};


let temperature1: Week[] = [
    {
        day: 'monday',
        morning: +7,
        afternoon: +13,
        evening: +8
    },
    {
        day: 'tuesday',
        morning: +4,
        afternoon: +9,
        evening: +3
    },
    {
        day: 'wednesday',
        morning: +2,
        afternoon: +5,
        evening: +2
    },
    {
        day: 'thursday',
        morning: +1,
        afternoon: +4,
        evening: 0
    },
    {
        day: 'friday',
        morning: -2,
        afternoon: +3,
        evening: 0
    },
    {
        day: 'saturday',
        morning: -2,
        afternoon: -1,
        evening: -1
    },
    {
        day: 'sunday',
        morning: -3,
        afternoon: -2,
        evening: -4
    }
]
console.log(temperature1[1]);