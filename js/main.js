// Triangle calculation

let triangle_btn = document.getElementById('triangle_btn');
triangle_btn.addEventListener('click', function(){
  let triangle_base_value = getInputValue('triangle_base');
  let triangle_height_value = getInputValue('triangle_height');
  let result = 0.5 *  triangle_base_value * triangle_height_value;
    // Validation
    if(isNaN(triangle_base_value) || isNaN(triangle_height_value)){
      // alert('Please give number not string!');
      // Display the error message
      let triangle_error_message = document.getElementById('triangle_error_message');
      let h3 = document.createElement('h3');
      h3.style.color = 'red';
      h3.innerText = 'Please give number not string!';
      triangle_error_message.appendChild(h3);

      return;
    }
  
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
   // Validation
   if(isNaN(rectangle_width_value) || isNaN(rectangle_length_value)){
    // alert('Please give number not string!');
    let rectangle_error_message = document.getElementById('rectangle_error_message');
    let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'Please give number not string!';
    rectangle_error_message.appendChild(h3);
    return;
  }
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
   // Validation
   if(isNaN(parallelogram_base_value) || isNaN(parallelogram_height_value)){
    // alert('Please give number not string!');
    let parallelogram_error_message = document.getElementById('parallelogram_error_message');
    let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'Please give number not string!';
    parallelogram_error_message.appendChild(h3);
    return;
  }
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
   // Validation
   if(isNaN(rhombus_first_diagonal_value) || isNaN(rhombus_second_diagonal_value)){
    // alert('Please give number not string!');
    let rhombus_error_message = document.getElementById('rhombus_error_message');
    let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'Please give number not string!';
    rhombus_error_message.appendChild(h3);
    return;
  }
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
   // Validation
   if(isNaN(pentagon_perimeter_value) || isNaN(pentagon_apothem_value)){
    // alert('Please give number not string!');
    let pentagon_error_message = document.getElementById('pentagon_error_message');
    let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'Please give number not string!';
    pentagon_error_message.appendChild(h3);
    return;
  }
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
   // Validation
   if(isNaN(ellipse_a_axis_value) || isNaN(ellipse_b_axis_value)){
    // alert('Please give number not string!');
    let ellipse_error_message = document.getElementById('ellipse_error_message');
    let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'Please give number not string!';
    ellipse_error_message.appendChild(h3);
    return;
  }
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

/*
*** Data Validation:
    1. Set the proper type of the input field.Example(number, text, email and file),
    2. check type using typeof.
    3. isNaN is checking whether input is number or not.
*/