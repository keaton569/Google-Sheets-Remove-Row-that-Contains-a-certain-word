function myFunction() {
  var Sheet1 = SpreadsheetApp.getActiveSheet();
  var lastRow = Sheet1.getLastRow();
  
  //starts on row 2 because i had  a header column
  for( var i = 2; i < lastRow; i++){
    
    //IF the cell does not contain the item you are searching for
    // Then remove it
    //remember to remove the {}'s too - ex. "{item to look for}" could be "delete"
    if(!Sheet1.getRange(i, {column To Search}).getValue().match("{item to look for}")){
      
      //Lets you know how far along the code is. Super helpful on sheets bigger than 5k rows.
      SpreadsheetApp.getActiveSpreadsheet().toast(i);
      
      Sheet1.deleteRow(i);
      //reset row on row delete;
      i--;
    }
  }
 
}
