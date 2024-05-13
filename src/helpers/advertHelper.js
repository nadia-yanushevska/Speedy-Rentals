export function getTitle(...args) {
    return args.join(', ');
}
export function getKeyWords(address, rentalCompany, type, id, functionalities) {
    const [, city, country] = address.split(', ');
    return [city, country, rentalCompany, type, id, functionalities[0]];
}
