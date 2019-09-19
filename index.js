const Investors = [
    {first: 'Albert', last: 'Einstein', year: 1990, passed: 2015},
    {first: 'Issac', last: 'Newton', year: 1991, passed: 1999},
    {first: 'Galileo', last: 'Galilei', year: 1992, passed: 2089},
    {first: 'Marie', last: 'Curie', year: 1993, passed: 2018},
    {first: 'Johannes', last: 'Kepler', year: 1994, passed: 1996},
    {first: 'Max', last: 'Planck', year: 1995, passed: 2020},
];


const people = [
    'Jolyn, Kozak', 'Josh, Zupan', 'Delma, Mccrum', 'Shirlene, Gaughan', 
    'Ines, Meinecke', 'Beckie, Cromwell', 'Vernia, Maser', 'Zoila, Threlkeld', 
    'Fredricka, Brathwaite', 'Keira, Mcevoy', 'Demetra, Sabatino', 'Alix, Felberbaum', 
    'Christiana, Kilbane', 'Tatum, Mcgillis', 'Alton, Bahl', 'Heike, Brezinski', 
    'Kaitlin, Aultman', 'Tonia, Coffey', 'Velma, Head', 'Roselyn, Freeman'
];

//array.prototype.filter()
const fifteen = Investors.filter(inventor => inventor.year >= 1991 && inventor.year < 2015);
console.table(fifteen);

//array.prototype.map()
const fullNames = Investors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);

//array.prototype.sort()
    // const ordered = Investors.sort((a,b) => {
    //     if(a.year > b.year){
    //         return 1;
    //     }
    //     else {
    //         return -1;
    //     }
    // });
const ordered = Investors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//array.prototype.reduce()
//how many years did all the inventors live?
const totalYears = Investors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears  + ' ' + 'years');

//sort the inventors by years lived
const oldest = Investors.sort((a,b) => {
    lastGuy = (a.passed - a.year);
    nextGuy = (b.passed - b.year);
    return lastGuy > nextGuy ? -1 : 1;
})
console.table(oldest);

//sort the people alphabetically by last name
const alpha = people.sort((lastOne, firstOne) => {
    const [aLast, afirst] = lastOne.split(', ');
    const [bLast, bfirst] = firstOne.split(', ');
    return aLast > bLast ? 1 : -1;
})
console.log(alpha);

//sum of the instences of each of these
const data = ['car', 'car', 'walk', 'truck', 'bike', 'car', 'truck', 'walk', 'jungle', 'walk', 'bike', 'bike', 'bike'];

const transportation = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(transportation); 