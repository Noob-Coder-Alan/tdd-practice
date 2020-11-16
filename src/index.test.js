import getBMI from './index'
describe('getBMI', () => {
    it('It gets the BMI', () => {
        expect(getBMI(1,1)).toBe(2)
    });
});