
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function MBTColor(color,code)
{
    $('.cat__mouth-contour,.cat__chest_inner,.cat__tail').css('background','#'+ color) //This Changes the color of the cat
    $('#MBTcode').html('code:' +code)
    $('#dnamouth').html(code)
}
function EyesColor(color,code)
{
    $('.cat__eye').find('span').css('background','#'+ color) //This Changes the color of the cat
    $('#Eyescode').html('code:' +code)
    $('#dnaeyes').html(code)
} 
function EarsColor(color,code)
{
    $('.cat__ear--left,.cat__ear--right, .cat__paw--left, .cat__paw--right,.cat__paw-right_inner,.cat__paw-left_inner').css('background','#'+ color) //This Changes the color of the cat
    $('#Earscode').html('code:' +code)
    $('#dnaears').html(code)
} 
//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num) //update the dna number string
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes() //reset
            $('#eyeName').html('Chill')
            eyesType1() //reset border to change the eye
            break
        case 3:
            normalEyes() //reset
            $('#eyeName').html('Up')
            eyesType2() //reset border to change the eye
            break
        case 4:
            normalEyes() //reset
            $('#eyeName').html('Spooky')
            eyesType3() //reset border to change the eye
            break
    }
}
function normalEyes()
{
    $('.cat__eye').find('span').css('border','none')
}
function eyesType1()
{
    $('.cat__eye').find('span').css('border-top','15px solid')
}
function eyesType2()
{
    $('.cat__eye').find('span').css('border-bottom','15px solid')
}
function eyesType3()
{
    $('.cat__eye').find('span').css({'border-top':'15px solid','border-bottom':'15px solid'})
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#DecoName').html('Basic')
            break
        case 2:
            normaldecoration()
            $('#DecoName').html('Tangy')
            tangy_deco_left()
            break
        case 3:
            normaldecoration()
            $('#DecoName').html('Invert')
            invert()
            break
        case 4:
            normaldecoration()
            $('#DecoName').html('Windmill')
            windmill()    
            break
        case 5:
            normaldecoration()
            $('#DecoName').html('Alien')
            normaldecoration2()    
            break
    }
}

function tangy_deco_left()
{
    $('.cat__head-dots_first').css({ "transform": "rotate(20deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-20deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })

}
function invert()
{
    $('.cat__head-dots').css({ "transform": "rotate(-180deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(-180deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-180deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
function windmill()
{
    $('.cat__head-dots').css({ "transform": "translate(0%,17%)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "50% 50% 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(90deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-90deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
    // transform: translate(0%, 31%);
}
function normaldecoration2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "50% 50% 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(-180deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 0" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-1800deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 0"})
}
async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
function micol(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the color of the cat
    $('#middledecor').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function sicol(color,code) 
{
    $('.cat__head-dots_first , .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat
    $('#sidedecor').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function animationVariation(num)
{
    console.log(num)
    $('#dnaanimation').html(num);
    switch(num)
    {
        case 1:
            $('#animationName').html('head')
            animationtype1();
            break;
        case 2:
            $('#animationName').html('tail')
            animationtype2();
            break;
        case 3:
            $('#animationName').html('ears')
            animationtype3();
            break;
        case 4:
            $('#animationName').html('Right ear')
            animationtype4();
            break;
        case 5:
            $('#animationName').html('Left ear')
            animationtype5();
            break;
        case 6:
            $('#animationName').html('attention')
            animationtype6();
            break;
        
    }
}
function animationtype1(){
    resetAnimation();
    $("#head").addClass("movingHead");
}

function animationtype2(){
    resetAnimation();
    $("#tail").addClass("movingTail");
}
//both ears
function animationtype3(){
    resetAnimation();
    $("#rightEar").addClass("movingEarsRight");
    $("#leftEar").addClass("movingEarsLeft");  
}

function animationtype4(){
    resetAnimation();
    $("#rightEar").addClass("moving-Single-EarRight");
}

function animationtype5(){
    resetAnimation();
    $("#leftEar").addClass("moving-Single-EarLeft");
}
//attention
function animationtype6(){
    resetAnimation();
    $(".cat__ear").addClass("wiggleEar");
}

function resetAnimation(){
    $("#head").removeClass("movingHead");
    $("#tail").removeClass("movingTail");
    $("#rightEar").removeClass("movingEarsRight");
    $("#leftEar").removeClass("movingEarsLeft");;
    $("#rightEar").removeClass("moving-Single-EarRight");
    $("#leftEar").removeClass("moving-Single-EarLeft");
    $(".cat__ear").removeClass("wiggleEar");
}