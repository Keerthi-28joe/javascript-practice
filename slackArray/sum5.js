// Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.
water_levels=[30,50,20,40,60];
i=1;
temp=water_levels[0];
for(i=0;i<=water_levels.length;i++){
    if(water_levels[i]<temp){
        console.log(water_levels[i]);
    }
}