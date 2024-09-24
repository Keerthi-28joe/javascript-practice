// Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
seats=[1,0,1,1,0,0,1,0];
available=0;
for(i=0;i<seats.length;i++){
    if(seats[i]==0){
        available++;
        }
}
console.log(available);