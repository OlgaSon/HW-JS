const me = { name: "Olga", surname: 'Petelskaya'};
const mother = { name: "Elena", surname: 'Petelskaya'};
const father = { name: "Valeriy", surname: 'Petelskiy'};
console.group('Person');
console.table({me, mother, father });
console.group('Address');
console.log('City: Minsk');
console.log('Street: Koltsova');
console.groupEnd();
console.groupEnd();