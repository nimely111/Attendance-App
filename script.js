// converting the select object to array using the Array.from() method
// const selectMembersOption = Array.from(document.querySelector('#members-option').options).forEach(function(option_element){
//     // initializing the variables to be loop over
//     let  option_text = option_element.text;
//     let option_value = option_element.value;
//     let is_option_selected = option_element.selected;

//     console.log('Options text: ' +option_text);
//     console.log('Options value: ' +option_value);
//     console.log('Options selected: ' +(is_option_selected === true ? 'Yes' :  'No'));

//     console.log('\n\r');
// })

const selectMembersOption = document.querySelector('select');
const output = document.querySelector('#result');
selectMembersOption.addEventListener('change', () =>{
    output.innerText = selectMembersOption.value;
    console.log(selectMembersOption.value);
});