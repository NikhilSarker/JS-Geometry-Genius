// Triangle calculation
let triangle_btn = document.getElementById('triangle_btn');
triangle_btn.addEventListener('click', function(){
  // Get triangle base value
  let triangle_base = document.getElementById('triangle_base');
  let triangle_base_text = triangle_base.value;
  let triangle_base_value = parseFloat(triangle_base_text);
  triangle_base.value = '';
// Get triangle height value
  let triangle_height = document.getElementById('triangle_height');
  let triangle_height_text = triangle_height.value;
  let triangle_height_value = parseFloat(triangle_height_text);
  triangle_height.value = '';
  let result = 0.5 * triangle_base_value * triangle_height_value;
  // Set the result
  let triangle_result = document.getElementById('triangle_result');
  triangle_result.innerText = result;
  addToCalculationEntry('Triangle', result);
  
})

// Rectangle calculation
let rectangle_btn = document.getElementById('rectangle_btn');
rectangle_btn.addEventListener('click', function(){
  // Get triangle base value
  let rectangle_width = document.getElementById('rectangle_width');
  let rectangle_width_text = rectangle_width.value;
  let rectangle_width_value = parseFloat(rectangle_width_text);
  rectangle_width.value = '';
// Get triangle height value
  let rectangle_length = document.getElementById('rectangle_length');
  let rectangle_length_text = rectangle_length.value;
  let rectangle_length_value = parseFloat(rectangle_length_text);
  rectangle_length.value = '';
  let result = rectangle_width_value * rectangle_length_value;
  // Set the result
  let rectangle_result = document.getElementById('rectangle_result');
  rectangle_result.innerText = result;
  addToCalculationEntry('Rectangle', result);
  
})


// parallelogram calculation

let parallelogram_btn = document.getElementById('parallelogram_btn');
parallelogram_btn.addEventListener('click', function(){
  let parallelogram_base_value = getInputValue('parallelogram_base');
  let parallelogram_height_value = getInputValue('parallelogram_height');
  let result = parallelogram_base_value * parallelogram_height_value;
  
  setValue('parallelogram_result', result);

  // Add to calculation entry
  addToCalculationEntry('Parallelogram', result);


})

// Reuseable get input value filed in number
function getInputValue(inputId){
  let input = document.getElementById(inputId);
  let inputIdText = input.value;
  let inputIdValue = parseFloat(inputIdText);
  input.value = '';
  return inputIdValue;

}

// Reuseable set to a span, p (input value)
function setValue(elementId, result){
  let element = document.getElementById(elementId);
  element.innerText = result;

} 
/*
  1. Get the element where you want to add dynamic HTML.
  2. Create an element you want to add.
  3. If needed add some classes.
  4. Set innerHTML it could be dynamic template string.
  5. Append the child that you just created

*/
// Add to calculation entry
function addToCalculationEntry(shapeType, result){
  
  let calculation_entry = document.getElementById('calculation_entry');
  let count = calculation_entry.childElementCount;
  let paragraph = document.createElement('p');
  paragraph.classList.add('my-5',);
  paragraph.classList.add('mx-2');
  // paragraph.innerHTML = shapeType + ' '+ result;
  paragraph.innerHTML = 
  `
  ${count + 1}. ${shapeType} ${result} cm<sup>2</sup> <button class="btn btn-success btn-sm ">Convert</button>
  `;
  calculation_entry.appendChild(paragraph);

}