export function getKeyWords(address, rentalCompany, type, id, functionalities) {
    const { city, country } = formatAddress(address);
    return [city, country, rentalCompany, type, id, functionalities[0]];
}

export function getExtendedKeyWords({ address, id, year, type, fuelConsumption, engineSize }) {
    const { city, country } = formatAddress(address);
    return { city, country, id, year, type, fuelConsumption, engineSize };
}
function formatAddress(address) {
    const [, city, country] = address.split(', ');
    return { city, country };
}

export function conditionsSplitter(conditions) {
    return conditions.split('\n');
}

export function splitCamelCase(word) {
    var output,
        i,
        l,
        capRe = /[A-Z]/;
    if (typeof word !== 'string') {
        throw new Error('The "word" parameter must be a string.');
    }
    output = [];
    for (i = 0, l = word.length; i < l; i += 1) {
        if (i === 0) {
            output.push(word[i].toUpperCase());
        } else {
            if (i > 0 && capRe.test(word[i])) {
                output.push(' ');
            }
            output.push(word[i]);
        }
    }
    return output.join('');
}
