import { getIncreasingMeasurementCount } from '../src/day1/puzzle1.js';

describe('Day 1 Puzzle', () => {
    it('should count increasing measurements', () => {
        const testMeasurements = [
            0,
            1,
            2,
            2,
            3,
            2,
            1,
            2,
            0
        ];

        expect(getIncreasingMeasurementCount(testMeasurements)).toBe(4);
    });
});
