/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var a;
  var b;
  var c;
  var k;
  var number= [];

  for (n=0; n<preferences.length; n++){
    k= preferences[n];
    a=preferences[k-1];
    b=preferences[a-1];
    c=preferences[b-1]

    if (a,b,c==undefined || a==b || b==c|| c==a || a==c || preferences[c-1]!==a){
      continue;
    }
    else {
      number++;
      delete preferences[k-1, a-1, b-1];
    }
  }
  return number;
};
