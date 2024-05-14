export function prepareValues(elements) {
    const makesValue = elements.makes.value || 'All';
    const price = +elements.price.value || 300;
    const mileageFrom = +elements.mileageFrom.value || 1000;
    const mileageTo = +elements.mileageTo.value || 10000;

    return { make: makesValue, price, mileageFrom, mileageTo };
}

export function getPriceNumber(str) {
    return +str.slice(1);
}
