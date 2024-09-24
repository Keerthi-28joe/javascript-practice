// Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

const soldiers = [120, 300, 250, 180, 150];

let maxSoldiers = soldiers[0];  // Initialize with the number of soldiers in the first region

for (let i = 1; i < soldiers.length; i++) {
    if (soldiers[i] > maxSoldiers) {
        maxSoldiers = soldiers[i];  // Update maxSoldiers if current value is higher
    }
}

console.log(`The highest number of soldiers is: ${maxSoldiers}`);
