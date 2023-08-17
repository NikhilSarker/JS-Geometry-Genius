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
  
})
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
  
})
let parallelogram_btn = document.getElementById('parallelogram_btn');
parallelogram_btn.addEventListener('click', function(){

})

function getInputValue(inputId){
  
}