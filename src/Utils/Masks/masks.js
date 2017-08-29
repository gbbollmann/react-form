import { removeNonNumerics, applyPattern } from '../Formatters/formatters';

export function applyCPFMask (value) {
    return applyPattern(removeNonNumerics(value), 'XXX.XXX.XXX-XX');
}

export function applyCEPMask (value) {
    return applyPattern(removeNonNumerics(value), 'XX.XXX-XXX');
}

export function applyRGMask (value) {
    return applyPattern(removeNonNumerics(value), 'XX.XXX.XXX-X');
}

export function applyPhoneMask (phoneNumber) {
    const sanitizedNumber = removeNonNumerics(phoneNumber);

    switch (sanitizedNumber.length) {
        case 9:
            return applyPattern(sanitizedNumber, 'XXXXX-XXXX');
        case 10:
            return applyPattern(sanitizedNumber, '(XX) XXXX-XXXX');
        case 11:
            return applyPattern(sanitizedNumber, '(XX) XXXXX-XXXX');
        default:
            return applyPattern(sanitizedNumber, 'XXXX-XXXX');
    }
}

export function applyCurrencyMask (currency) {
    // TODO: Add cents

    const pattern = Number(currency.replace(/(\.|,)/g, ''))
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
        .replace(/\d/g, 'X');

    return applyPattern(currency, pattern);
}
