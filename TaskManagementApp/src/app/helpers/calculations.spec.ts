import Calculations from "./calculations";

describe('Calculations', () => {
    it('should calculate the percentage standard deviation of a one-dimensional array', () => {
        const array = [1, 4, 6, 7]
        const result = Calculations.calculatePercentageStandardDeviationOfOneDimensionalArray(array)
        expect(result).toBeCloseTo(50.91750, 3);
    });


    it('should calculate the zero crossing percentage of an array', () => {
        const array = [-5, -1, 1, 4, 6, 7]
        const result = Calculations.zeroCrossingPercentage(array)
        expect(result).toBeCloseTo(16.666666, 3);
    });

    it('should calculate the average of a two-dimensional array', () => {
        const array = [
            [1, 4, 6, 7],
            [4, 1, 6, 7],
            [7, 6, 4, 1],
        ];
        const result = Calculations.calculateAverageOfTwoDimensionalArray(array)
        expect(result).toBeCloseTo(4.5, 1);
    });

    it('should get the most frequent value at each subarray', () => {
        const array = [
            [1, 4, 6, 1],
            [4, 1, 6, 4],
            [7, 7, 4, 1],
        ];
        const result = Calculations.getMostFrequentValueAtEachSubarray(array)
        expect(result).toEqual([1, 4, 7]);
    });

    it('should get the average value of each subarray after trimming percentage highest and lowest values', () => {
        const array = [
            [1, 4, 6, 7],
            [4, 1, 6, 7],
            [7, 6, 4, 1],
        ];
        const result = Calculations.getAverageValueOfEachSubarryAfterTrimmingPercentageHighestAndLowestValues(array, 25)
        expect(result).toEqual([5, 5, 5]);
    });
});