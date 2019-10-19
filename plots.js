function init() {
  var data = [{
    values: [1, 23,0,1, 59, 73],
    labels: ['American Indian or Alaska Native', 'Black or African American', 'Asian','Multiple', 'Unknown', 'White'],
    type: "pie"
  }];
  var layout = {
    height: 600,
    width: 800
  };
  Plotly.plot("pie", data, layout);
}
function updatePlotly(newdata) {
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}
function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":     //Alabama
    data = [1, 23,0,1, 59, 73];
    break;
  case "dataset2":     //Alaska
    data = [8, 6, 1, 1, 15,27];
    break;
  case "dataset3":     //Arizona
    data = [57, 205, 13, 46, 730,777];
    break;
  case "dataset4":   //Arkansas
    data = [0, 39, 1, 6, 62,122];
    break;
  case "dataset5":     //California
    data = [19, 886, 87, 309, 3176,3106];
    break; 
  case "dataset6":       //Colorado
    data = [8, 110, 2, 19, 336,576];
    break; 
  case "dataset7":        //Connecticut
    data = [1, 120, 5, 25, 481,390];
    break; 
  case "dataset8":        //Delaware
    data = [0, 18, 0, 4, 59,46];
    break; 
  case "dataset9":      //District of Columbia
    data = [0, 393, 4, 33, 180,118];
    break; 
  case "dataset10":    //Florida
    data = [1, 148, 1, 4, 374,386];
    break; 
  case "dataset11":   //Georgia
    data = [0, 69, 1, 2, 102,89];
    break; 
  case "dataset12":   //Idaho
    data = [0, 5, 0, 8, 109,139];
    break; 
  case "dataset13":   //Illinois
    data = [0, 145, 4, 10, 230,360];
    break; 
  case "dataset14":  //Indiana
    data = [2, 72, 3, 5, 233,282];
    break; 
  case "dataset15":   //Iowa
    data = [1, 6, 1, 3, 43,40];
    break; 
  case "dataset16":   //Kansas
    data = [4, 57, 2, 12, 202,268];
    break;  
  case "dataset17":  //Kentucky
    data = [2, 234, 8, 43, 611,753];
    break;
  case "dataset18":   //Louisiana
    data = [0, 70, 1, 3, 46,41];
    break; 
  case "dataset19":  //Maine
    data = [0, 6, 1, 4, 108,213];
    break;
  case "dataset20":  //Maryland
    data = [0, 61, 3, 2, 218,128];
    break;
  case "dataset21": //Massachussets
    data = [0, 382, 23, 22, 1385,1128];
    break;
  case "dataset22":  //Michigan
    data = [15, 591, 7, 63, 1201,1264];
    break;
  case "dataset23":   //Minnesota
    data = [28, 185, 17, 10, 361,362];
    break;
  case "dataset24":   //Mississippi
    data = [0, 46, 0, 3, 28,28];
    break;
  case "dataset25": //Missouri
    data = [1, 197, 5, 14, 294,330];
    break;
  case "dataset26": //Montana
    data = [19, 2, 0, 3, 114,110];
    break;
  case "dataset27":   //Nebraska
    data = [5, 32, 2, 10, 124,111];
    break;
  case "dataset28":   //Nevada
    data = [0, 98, 1, 4, 125,191];
    break;
  case "dataset29":  //New Hampshire
    data = [0, 2, 1, 3, 89,85];
    break;
  case "dataset30":  //New Jersey
    data = [7, 173, 31,16, 1896,1294];
    break;
  case "dataset31": //New Mexico
    data = [4, 10, 3,0, 50,58];
    break;
  case "dataset32":  //New York
    data = [10, 569, 35,388, 2986,785];
    break; 
  case "dataset33":   //North Carolina
    data = [1, 214, 4,21, 434,384];
    break;          
  case "dataset34":   //North Dakota
    data = [26, 15, 1,17, 83,91];
    break; 
  case "dataset35":   //Ohio
    data = [5, 551, 5,56, 1109,1070];
    break;  
  case "dataset36":   //Oklahoma
    data = [8, 33, 0,6, 85,142];
    break; 
  case "dataset37":   //Oregon
    data = [9, 35, 1,10, 386,347];
    break;       
  case "dataset38":   //Pennsylvania
    data = [0, 44, 2,11, 192,174];
    break;    
  case "dataset39":   //Rhode Island
    data = [0, 11, 0,0, 71,28];
    break;  
  case "dataset40":   //South Carolina
    data = [1, 181, 3,11, 218,201];
    break;  
  case "dataset41":   //South Dakota
    data = [33, 18, 2, 4,70,64];
    break;             
  case "dataset42":   //Tennessee
    data = [1,400, 7, 28,411,677];
    break;               
  case "dataset43":   //Texas
    data = [3,224, 7, 45,456,624];
    break;       
  case "dataset44":   //Utah
    data = [16,24, 7, 10,237,242];
    break;       
  case "dataset45":   //Vermont
    data = [0,4, 1, 0,66,64];
    break;
  case "dataset46":   //Virginia
    data = [0,156, 4, 31,643,345];
    break;
  case "dataset47":   //Washington
    data = [38,315, 30, 47,1066,1000];
    break;
  case "dataset48":   //West Virginia
    data = [1,32, 0, 3,90,160];
    break;
  case "dataset49":   //Wisconsin
    data = [6,112, 4,16,177,157];
    break;
  case "dataset50":   //Wyoming
    data = [1,0, 0, 1,4,10];
    break;
  default:
        data = [0, 0, 0, 0];
  }
  updatePlotly(data);
}
init();
