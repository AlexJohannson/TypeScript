type Courses = {
    title: string;
    monthDuration: number;
}[];



let coursesAndDurationArray1: Courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray1[0].monthDuration >= 5) {
    console.log('Super!');
} else {
    console.log('Bad');
}

if (coursesAndDurationArray1[1].monthDuration >= 5) {
    console.log('Super!');
} else {
    console.log('Bad');
}

if (coursesAndDurationArray1[2].monthDuration >= 5) {
    console.log('Super!');
} else {
    console.log('Bad');
}

if (coursesAndDurationArray1[3].monthDuration >=5) {
    console.log('Super!');
} else {
    console.log('Bad');
}

if (coursesAndDurationArray1[4].monthDuration >= 5) {
    console.log('Super!');
} else {
    console.log('Bad');
}

if (coursesAndDurationArray1[5].monthDuration >= 5) {
    console.log('Super!');
} else {
    console.log('Bad');
}