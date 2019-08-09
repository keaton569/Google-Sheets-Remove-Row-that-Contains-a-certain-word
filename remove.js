function myFunction() {
  var Sheet1 = SpreadsheetApp.getActiveSheet();
  var lastRow = Sheet1.getLastRow();
  
  for( var i = 2; i < lastRow; i++){
    //var value = Sheet1.getValue(i, 4);
    if(!Sheet1.getRange(i, 4).getValue().match("DNU")){
      SpreadsheetApp.getActiveSpreadsheet().toast(i);
      Sheet1.deleteRow(i)
      i--;
    }
  }
 
}
