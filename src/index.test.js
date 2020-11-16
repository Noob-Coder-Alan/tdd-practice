import {exchangeClockwise, getBMI} from './index';


describe('getBMI', () => {
    it('It gets the BMI using units in metric', () => {
        expect(getBMI(170, 60, "metric")).toBe(20.8)
    });

    it('It gets the BMI using units in english', () => {
        expect(getBMI("5'7", 130,"english")).toBe(20.4)
    });
});


describe('exchangeClockwise', () => {
    it('(Odd no of students) Gets the recommended order of exchanging papers in clockwise.', () => {
        expect(exchangeClockwise(5,3)).toStrictEqual({
            preClockwise: [ 'A', 'B', 'C', 'D', 'E' ],
            postClockwise: [ 'C', 'D', 'E', 'A', 'B' ]
          })
    });

    it('(Odd no of students) Gets the recommended order of exchanging papers in clockwise.', () => {
        expect(exchangeClockwise(5,4)).toStrictEqual({
            preClockwise: [ 'A', 'B', 'C', 'D', 'E' ],
            postClockwise: [ 'B', 'C', 'D', 'E', 'A' ]
          })
    });

    it('(Even no of students) Gets the recommended order of exchanging papers in clockwise.', () => {
        expect(exchangeClockwise(6,3)).toStrictEqual({
            preClockwise: [ 'A', 'B', 'C', 'D', 'E', 'F' ],
            postClockwise: [ 'D', 'E', 'F', 'A', 'B', 'C' ]
          })
    });

    it('(Even no of students) Gets the recommended order of exchanging papers in clockwise.', () => {
        expect(exchangeClockwise(6,4)).toStrictEqual({
            preClockwise: [ 'A', 'B', 'C', 'D', 'E', 'F' ],
            postClockwise: [ 'C', 'D', 'E', 'F', 'A', 'B' ]
          })
    });
});