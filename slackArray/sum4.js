// Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
const populations = [50, 60, 70, 80, 90];
let totalPopulation = 0; 
for (let i = 0; i < populations.length; i++) {
    totalPopulation += populations[i];  // Add each population to the total
}
const averagePopulation = totalPopulation / populations.length;

console.log("The average population is:", averagePopulation);
