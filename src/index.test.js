import getBMI from './index'

describe('getBMI', () => {
    it('It gets the BMI using units in metric', () => {
        expect(getBMI(170, 60, "metric")).toBe(20.8)
    });
});

describe('getBMI', () => {
    it('It gets the BMI using units in english', () => {
        expect(getBMI("5'7", 130,"english")).toBe(20.4)
    });
});