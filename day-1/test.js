function candys(n, k, candy)
{
candy.sort(function(a,b){return b-a;});
let i=0;
const dest=candy[k-1];
var temp;
while(i<k)
{ 
    temp=candy[i]-dest;
    candy[i]-=temp;
    i++;
}
return candy;
}
console.log(candys(5,3,[20,10,30,15,35]));