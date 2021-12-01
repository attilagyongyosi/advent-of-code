import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { EOL } from 'os';
import * as fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function processInput() {
    const input = fs.readFileSync(resolve(__dirname, 'puzzle1-input.txt'), { encoding: 'utf-8' });
    return input.trim().split(EOL).map(measurement => +measurement);
}

export function getIncreasingMeasurementCount(measurements) {
    let increasedMeasurementCounter = 0;
    measurements.forEach((measurement, index) => {
        if (measurements[index] > measurements[index - 1]) { increasedMeasurementCounter++; }
    });

    return increasedMeasurementCounter;
}

const measurements = processInput();

console.table(measurements);
console.info(`Measurements: ${measurements.length}`);
console.info(getIncreasingMeasurementCount(measurements));
