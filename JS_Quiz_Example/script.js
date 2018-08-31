// Volkan Uğur ARSLAN
// 19.06.2018

/* Suppose that you're working in a small town administration and you r in charge of 2 town elements.
1) parks
2) Streets

3 Parks - 4 Streets. ( Name and Build year )

Requests
1) Tree density of each park. A = trees / park area
2) Average age of park B = Sum Park Ages / park nums
3) Name of the park that has more than 1.000 Trees

4) Total and average length of the town's streets

5) Size classification of all streets:
Tiny / Small / Normal / Big / Huge 
(If unkonwn default option is Normal)

Datas should be printed on the Console.

- Classes
- SubClasses
- Strings
- Parameters
- Maps
- Arrow Function
- Destructuring

------------------------------------------------------------------------------------------------
*/

// Element Class
class Elements{
    constructor (name, year){
    this.name = name;
    this.year = year;
    }
}

// Park Class
class Park extends Elements{
    constructor (name, year, tree, area) {
    super(name, year);
    this.tree = tree;
    this.area = area;
    }
    treeDensity() {
        const density = this.tree / this.area;
        console.log (`${this.name} Park has a tree density of ${density} trees per square km.`);
    }
}
// Street Class
class Street extends Elements{
    constructor (name, year, length, size = 3) {
    super(name, year);
    this.size = size;
    this.length = length;
    }
    classifyStreet() {
        const field = new Map();
        field.set(1, "tiny");
        field.set(2, "small");
        field.set(3, "normal");
        field.set(4, "big");
        field.set(5, "huge");
        console.log(`${this.name} street build in ${this.year}. It's a ${field.get(this.size)} size street.`);
    }
}

// Parks DataBase
let allParks = [
    new Park ("Havuzlu", 1995, 765, 5000),
    new Park ("Oyuncaklı", 2000, 435, 2000),
    new Park ("Sporcu", 1990, 1972, 8500)
]


// Streets DataBase
let allStreets = [
    new Street ("Arabalı", 1990, 5, 2),
    new Street ("Ihlamur", 2000, 20, 4),
    new Street ("Sahil", 1980, 12, 1),
    new Street ("Gazi", 2010, 25, 5),
    new Street ("Yeni", 2015, 45 )
]

// Average Calc
/*
function aveCalc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}
*/

// Age Calc
function ageCalc(buildYear){
    let actualAge = new Date().getFullYear() - buildYear;
    return (actualAge);
}

// Park Reports
function parkReports (p) {
    console.log(" ----- PARK REPORTS -----");
    
    // Density
    p.forEach (el => el.treeDensity());
    
    //Average
    let yearsAndYears = 0;
    p.forEach (el => yearsAndYears += ageCalc(el.year));
    console.log (`Our ${p.length} parks have an average year of ${yearsAndYears/p.length} years. `);
    
    // Trees > 1000
    let i = p.map(el => el.tree).findIndex(treenum => treenum > 999);
    console.log(`${p[i].name} park has got at least 1000 trees.`);
    
}

// Street Reports
function streetReports (s) {
    console.log(" ----- STREET REPORTS -----");
    
    // Summarize
    
    // İnfo
    
}

// Main Function
function mainApp(PD, SD) {
    
    parkReports(PD);
    
    console.log (" ");
    
    streetReports(SD);
}
mainApp(allParks, allStreets);