// Triangle calculation

let triangle_btn = document.getElementById('triangle_btn');
triangle_btn.addEventListener('click', function(){
  let triangle_base_value = getInputValue('triangle_base');
  let triangle_height_value = getInputValue('triangle_height');
  let result = 0.5 *  triangle_base_value * triangle_height_value;
  
  setValue('triangle_result', result);

  // Add to calculation entry
  addToCalculationEntry('Triangle', result);


})

// Rectangle calculation

let rectangle_btn = document.getElementById('rectangle_btn');
rectangle_btn.addEventListener('click', function(){
  let rectangle_width_value = getInputValue('rectangle_width');
  let rectangle_length_value = getInputValue('rectangle_length');
  let result = rectangle_width_value * rectangle_length_value;
  
  setValue('rectangle_result', result);

  // Add to calculation entry
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
// Rhombus calculation

let rhombus_btn = document.getElementById('rhombus_btn');
rhombus_btn.addEventListener('click', function(){
  let rhombus_first_diagonal_value = getInputValue('rhombus_first_diagonal');
  let rhombus_second_diagonal_value = getInputValue('rhombus_second_diagonal');
  let result = 0.5 * rhombus_first_diagonal_value * rhombus_second_diagonal_value;
  
  setValue('rhombus_result', result);

  // Add to calculation entry
  addToCalculationEntry('Rhombus', result);


})
// Pentagon calculation

let pentagon_btn = document.getElementById('pentagon_btn');
pentagon_btn.addEventListener('click', function(){
  let pentagon_perimeter_value = getInputValue('pentagon_perimeter');
  let pentagon_apothem_value = getInputValue('pentagon_apothem');
  let result = 0.5 * pentagon_perimeter_value * pentagon_apothem_value;
  
  setValue('pentagon_result', result);

  // Add to calculation entry
  addToCalculationEntry('Pentagon', result);


})
// Ellipse calculation

let ellipse_btn = document.getElementById('ellipse_btn');
ellipse_btn.addEventListener('click', function(){
  let ellipse_a_axis_value = getInputValue('ellipse_a_axis');
  let ellipse_b_axis_value = getInputValue('ellipse_b_axis');
  let pi = Math.PI;
  
  // let piToFixed = pi.toFixed(2);
  let result = pi * ellipse_a_axis_value * ellipse_b_axis_value;
  let resultToFixed = result.toFixed(2);
  
  setValue('ellipse_result', resultToFixed);

  // Add to calculation entry
  addToCalculationEntry('Ellipse', resultToFixed);


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