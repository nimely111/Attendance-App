Array.from(document.querySelector('#colors-dropdown').options).forEach((option_element) => {
    let option_text = option_element.text;
    let option_value = option_element.value;
    let is_option_selected = option_element.selected;

    console.log('option text: ' +option_text);
    console.log('option value: ' +option_value);
    console.log('option selected: ' +(is_option_selected === true ? 'Yes' : 'No'));

    console.log('\n\r');

})