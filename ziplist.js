const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(data1, data2) {
  const list3 = [];
  for (let i = 0; i < data1.length; i++) {
    list3.push(data1[i], data2[i]);
  }
  return list3;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second) {
  const zippedList = _.zip(first, second);
  return _.flatten(zippedList);
}

console.log(zipListTheSimpleWay(list1, list2));
