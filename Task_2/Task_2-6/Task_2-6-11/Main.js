var CourseOkten = /** @class */ (function () {
    function CourseOkten(title, monthDuration, hourDuration, modules) {
        this.title = title;
        this.monthDuration = monthDuration;
        this.hourDuration = hourDuration;
        this.modules = modules;
        this.title = title;
        this.monthDuration = monthDuration;
        this.hourDuration = hourDuration;
        this.modules = modules;
    }
    return CourseOkten;
}());
var coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
var sass = coursesArray.filter(function (course) {
    return course.modules.indexOf('sass') !== -1;
});
var docker = coursesArray.filter(function (course) {
    return course.modules.indexOf('docker') !== -1;
});
console.log(sass);
console.log(docker);
