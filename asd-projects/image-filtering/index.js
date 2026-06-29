// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
  applyFilter(decreaseBlue);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var row = 0; row < image.length; row++) {
    for (var col = 0; col < image[row].length; col++) {
      //console.log(image[row][col]);
      var pixel = image[row][col];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[row][col] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function

// TODO 6: Create the keepInBounds function
function keepInBounds(theNumber){
  if(theNumber < 0){
    return 0;
  }
  if(theNumber > 255){
    return 255;
  }
  else{
    return theNumber;
  }
}
// TODO 4: Create reddify filter function
function reddify(pixelArray){
  pixelArray[RED] = 200;
}
// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray){
pixelArray[BLUE] = BLUE - 50;
pixelArray[BLUE] = keepInBounds(pixelArray[BLUE]);
}
// CHALLENGE code goes below here
