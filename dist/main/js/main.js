$(document).ready(function(){
    if($('[toggle-menu]').length > 0){
        var toggleMenu = $('[toggle-menu]');
        var toggleListControl = []
        for(let val of toggleMenu){
            toggleListControl.push($(val).attr('toggle-menu'))
        }
        console.log(toggleListControl)
        for(let toggle of toggleListControl){
            toggleMenuClass(toggle);
        }
    }
})

function toggleMenuClass(value){
    let target = $(`[toggle-menu=${value}]`);
    console.log(target)
    target.click(function(e){
        e.preventDefault();
        if($('[over]').length > 0){
            $('#over').toggleClass('active');
        }
        $(`#${value}`).toggleClass('active');
    })
}