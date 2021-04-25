const arr = [1, 2, 3, 4, 5];

const newarr = arr.map(( value, index, array ) => {
    return value + 10;
});

console.log(newarr);

const newli = arr.map(( value, index, array ) => {
    return `<li key="${index}">${value}</li>`;
});

console.log(newli);