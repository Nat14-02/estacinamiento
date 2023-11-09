//Create a reference for canvas 
var canvas= document.getElementById("canva");
var ctx= canvas.getContext("2d");
//Give specific height and width to the car image
var greencar_width= 75;
var greencar_height= 100;
var backgroundimage = "parkingLot.jpg";
var greencar_image = "car2.png";
var background_imgTag
var greencar_imgTag

//Set initial position for a car image.
var greencar_x= 500;
var greencar_y= 300;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backgroundimage;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image; 
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == '38') { 
        up();
         console.log("arriba"); 
        }
        if(keyPressed == '40') { 
            down();
             console.log("abajo"); 
            }
            if(keyPressed == '37') { 
                left();
                 console.log("izquierda"); 
                }
                if(keyPressed == '39') { 
                    right();
                     console.log("derecha"); 
                    }
		
		
}

function up()
{
    if(greencar_y >=0)
    {
        greencar_y = greencar_y - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + greencar_x + " | y = " +greencar_y);
         uploadBackground();
         uploadgreencar();
    }
}
function down()
{
    if(greencar_y <=1000)
    {
        greencar_y = greencar_y + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + greencar_x + " | y = " +greencar_y);
         uploadBackground();
         uploadgreencar();
    }
}

function left()
{
    if(greencar_x >=0)
    {
        greencar_x = greencar_x - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + greencar_x + " | y = " +greencar_y);
         uploadBackground();
         uploadgreencar();
    }
}
function right()
{
    if(greencar_x <=1000)
    {
        greencar_x = greencar_x + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + greencar_x + " | y = " +greencar_y);
         uploadBackground();
         uploadgreencar();
    }
}