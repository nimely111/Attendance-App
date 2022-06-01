// const selectEachMember = document.getElementById('members-link');

// for(let i = 0; i < selectEachMember.length; i++){

//     console.log(selectEachMember[i]);


//     selectEachMember[i].addEventListener('click', (e)=>{
//         let clicked_element = e.target;
//         console.log(clicked_element);
//         console.log("Working");

//     })

// }



/**
 * 
Search

WEB DEVELOPMENT UPDATES JAVASCRIPT CSS UI / UX NODE.JS PHP CLOUD VIDEOS
How to Loop throughã€ˆselectã€‰Options with Javascript
JAVASCRIPT
Updated on December 23, 2019
Published on November 13, 2019

Use-Cases of this code snippet
Know how to iterate through all options of a <select> element. Get the label and value of each option. Find whether an option is selected or not.
Options of a <select> element can be looped over its "options" property. This property gives a list of all <option> elements inside it.

HTML
<select id="colors-dropdown">
    <option value="RED">Red</option>
    <option value="BLUE">Blue</option>
    <option value="YELLOW" selected>Yellow</option>
    <option value="PURPLE">Purple</option>
    <option value="PINK">Pink</option>
</select>
Javascript
Array.from(document.querySelector("#colors-dropdown").options).forEach(function(option_element) {
    let option_text = option_element.text;
    let option_value = option_element.value;
    let is_option_selected = option_element.selected;

    console.log('Option Text : ' + option_text);
    console.log('Option Value : ' + option_value);
    console.log('Option Selected : ' + (is_option_selected === true ? 'Yes' : 'No'));

    console.log("\n\r");
});
Result :

Option Text : Red
Option Value : RED
Option Selected : No

Option Text : Blue
Option Value : BLUE
Option Selected : No

Option Text : Yellow
Option Value : YELLOW
Option Selected : Yes

Option Text : Purple
Option Value : PURPLE
Option Selected : No

Option Text : Pink
Option Value : PINK
Option Selected : No
Concepts and Methods Involved
Getting all options in the select element : The options property of the <select> element gives a list of all <option> elements present in it (returned as a HTMLCollection object).
Getting label and value of an option element : The text property of an <option> element gives the label of the option. The value property gives the value of the option.
Finding whether options selected or not : The selected property of an option gives a boolean true or false depending on whether the option is selected or not. This holds for multi-select dropdown as well.
Why Array.from() is used ? : The options property of select element returns a HTMLCollection of all options (array-like, but not an array). To iterate over this, we need to convert this array-like object to a normal Javascript array using Array.from().
IN THIS TUTORIAL
Use-Cases of this code snippet
HTML
Javascript
Concepts and Methods Involved
RELATED TUTORIALS
Manipulation of HTML Select Element with Javascript
Looping through querySelectorAll() with Javascript
Hide Dropdown Arrow for Select Input with CSS appearance
COMMENTS


 

 

 

 
Email / Contact
Advertise
Privacy
UsefulAngle on Twitter
UsefulAngle on Facebook
© UsefulAngle.com 2016 - 2021. All code MIT license.
 */