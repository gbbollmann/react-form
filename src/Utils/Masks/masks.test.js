import * as masks from './masks';

describe('Masks Test', () => {
    describe('applyCPFMask', () => {
        const { applyCPFMask } = masks;

        it('should return value with CPF mask applied', () => {
            const string = '13667481748';

            expect(applyCPFMask(string)).toBe('136.674.817-48');
        });
    });

    describe('applyCEPMask', () => {
        const { applyCEPMask } = masks;

        it('should return value with CEP mask applied', () => {
            const string = '22710010';

            expect(applyCEPMask(string)).toBe('22.710-010');
        });
    });

    describe('applyRGMask', () => {
        const { applyRGMask } = masks;

        it('should return value with RG mask applied', () => {
            const string = '257477489';

            expect(applyRGMask(string)).toBe('25.747.748-9');
        });
    });

    describe('applyPhoneMask', () => {
        const { applyPhoneMask } = masks;

        it('should return value with Phone mask applied', () => {
            const mobileNumber = '21964336536';
            const phoneNumber = '2124559279';

            expect(applyPhoneMask(mobileNumber)).toBe('(21) 96433-6536');
            expect(applyPhoneMask(phoneNumber)).toBe('(21) 2455-9279');
        });
    });
});
