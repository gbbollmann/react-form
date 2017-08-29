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

    if (sanitizedNumber.length >= 11) {
        return applyPattern(sanitizedNumber, '(XX) XXXXX-XXXX');
    }

    return applyPattern(sanitizedNumber, '(XX) XXXX-XXXX');
}