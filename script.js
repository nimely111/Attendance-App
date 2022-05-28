const membersLinked = document.getElementById('members-link');
membersLinked.onchange = function () {
    let userOption = this.options[this.selectedIndex];// selectedIndex in a js property
    if(userOption.value != "nothing"){
        window.open(this.options[this.selectedIndex],)
    }
}
