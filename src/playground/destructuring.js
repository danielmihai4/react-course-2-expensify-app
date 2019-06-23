const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const[name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);