const tvShow = require('../src/encapsulation');

// for encapsulation.js
test('Test - tvShow Instantiation', () => {
    let show = new tvShow("New Girl");
    expect(show.name).toBe("New Girl");
});

test('Test - tvShow getName()', () => {
    let show = new tvShow("The Office");
    expect(show.getName()).toBe("The Office");
});

test('Test - tvShow setName()', () => {
    let show = new tvShow("Friends");
    show.setName("Toradora");
    expect(show.name).toBe("Toradora");
});