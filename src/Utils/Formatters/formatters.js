export function removeNonNumerics (text) {
    return removeByRegexp(text, /[\D]/gi);
}

export function removeSpecialChars (text) {
    return removeByRegexp(text, /[^\d\wáàâãéèêíïóôõöúüçñÁÀÂÃÉÈÊÍÏÓÒÖÚÜÇÑ]/gi);
}

export function removeByRegexp (text, regexp) {
    return typeof text === 'string' ? text.replace(regexp, '') : '';
}

export function applyPattern (text, pattern) {
    let textWithPattern = '';
    let auxText = removeSpecialChars(text);

    pattern.split('').forEach((char) => {
        if (auxText === '') {
            return textWithPattern;
        }

        if (char.match(/[0Xx]/)) {
            textWithPattern += auxText.substr(0, 1);
            auxText = auxText.substr(1, auxText.length);
        } else {
            textWithPattern += char;
        }
    })

    return textWithPattern;
}