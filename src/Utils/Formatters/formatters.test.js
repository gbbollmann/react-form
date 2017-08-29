import * as formatters from './formatters';

describe('Formatters Test', () => {
    describe('removeByRegexp', () => {
        const { removeByRegexp } = formatters;

        it('should only receive string type', () => {
            const emptyList = [null, undefined, false, 123, NaN, true, function () {}, {}, []];
            const definedList = ['', 'null', 'undefined', 'false', '123', 'NaN', 'true', 'function () {}', '{}', '[]'];

            emptyList.forEach((item) => {
                expect(removeByRegexp(item)).toBe('');
            })

            definedList.forEach((item) => {
                expect(removeByRegexp(item)).toBeDefined();
            })
        });
    });

    describe('removeNonNumerics', () => {
        const { removeNonNumerics } = formatters;

        it('should return only numbers', () => {
            const string = '123abc-_=5+{6}';

            expect(removeNonNumerics(string)).toBe('12356');
        });
    });

    describe('removeSpecialChars', () => {
        const { removeSpecialChars } = formatters;

        it('should only return alphanumeric and latin letters', () => {
            const string = '1!@2%¨3*(À)+=êªºÍ$"õü';

            expect(removeSpecialChars(string)).toBe('123ÀêÍõü');
        });
    });

    describe('applyPattern', () => {
        const { applyPattern } = formatters;

        it('should return values with your patterns', () => {
            const textList = ['12121234', '12312312312', '1234567890', '1234'];
            const patternList = ['00/00/0000', '000.000.000-00', '(00) 0000-0000', '(00)00-0000'];
            const textWithPatternList = ['12/12/1234', '123.123.123-12', '(12) 3456-7890', '(12)34'];

            textList.forEach((item, i) => {
                expect(applyPattern(item, patternList[i])).toBe(textWithPatternList[i]);
            })
        });
    });
});