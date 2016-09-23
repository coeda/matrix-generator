function matrixGenerator(rows,columns){
  let columnArr = [];
  for(i = 0; i < columns; i++){
    let rowArr = [];
    for(j = 0; j < rows; j++){
      let newRandomNumber = Math.floor(Math.random() * 100) +1;
      rowArr.push(newRandomNumber);
    }
    rowArr.sort(function compare(a,b){
      return a-b;
    });
  columnArr.push(rowArr);
  }
  return columnArr;
}