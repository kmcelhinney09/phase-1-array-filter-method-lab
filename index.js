const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversTwo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(filterArr, matchStr){
    return filterArr.filter(function(name){
        return name.toLowerCase() === matchStr.toLowerCase();
    });
}

function fuzzyMatch(filterArr,matchStr){
    const numLetters = matchStr.length;
    return filterArr.filter(function (name){
        return name.substring(0,numLetters) === matchStr;    
    });
}

function matchName(filterArr, matchStr){
    return filterArr.filter(function(element){
       return element.name===matchStr;
    });
}