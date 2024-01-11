const FullTime=1;
const PartTime=2;
const maxhours=160;
const noofdays=20;
const wages_per_hrs=20;
let emphrs=0, totalemphrs=0, empwages=0, totalempwages=0, totalworkingdays=0;
while((totalemphrs<maxhours) || (totalworkingdays<noofdays))
{
totalworkingdays++;
empcheck=Math.floor(Math.random()*10)%3;
console.log(`Employee check is ${empcheck}`);
switch(empcheck)
{
    case FullTime:
        emphrs=8
    break;
    case PartTime:
        emphrs=4
    break;
    default:
        emphrs=0;
}
        totalemphrs+=emphrs;
console.log(`Total emp hrs ${totalemphrs}`);
empwages=emphrs*wages_per_hrs;
console.log(`Empwages ${empwages}`);
totalempwages+=empwages;
console.log(`total employeewage ${totalempwages}`);


}

