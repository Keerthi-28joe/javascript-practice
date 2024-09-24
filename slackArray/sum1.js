// Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
train_departures = [10, 15, 7, 20, 5];
early = train_departures[0];
for (i = 1; i < train_departures.length;i++)  {
        early = train_departures[i];
    }
console.log(early);