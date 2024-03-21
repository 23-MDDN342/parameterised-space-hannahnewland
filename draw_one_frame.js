
let colors = ["#152614", "#1E441E", "#60992D"];

function preload(){

    imgMouse = loadImage('mouse.png');
    imgScale = loadImage('scale.png');
    imgSnakeHead = loadImage('snakehead.png');
}

// function for drawing the grid
    function draw_one_frame(cur_frac){
	width = 960;
	height = 540;
	let w = width;
	let h = height;
	fill("#1E441E");
	rect(0,0,w,h);
	

 
	noStroke();
    
    //stroke("#FFFFFF");

    let p1 = createVector(0,0); //top left hand corner vector point
    let p2 = createVector(width/4, 0); // top 1/4 across vector point
    let p3 = createVector(width/2,0); // top 1/2 across vector point
    let p4 = createVector(width*(3/4), 0); // top 3/4 across vector point
    let p5 = createVector(width, 0); // full way across vector point
    let p6 = createVector(0, height/2); //middle left hand side vector point
    let p7 = createVector(width/4, height/2); //middle 1/4 across vector point
    let p8 = createVector(width/2, height/2); //middle 1/2 across vector point
    let p9 = createVector (width*(3/4), height/2); //middle 3/4 across vector point
    let p10 = createVector(width, height/2);
    let p11 = createVector(0,height);
    let p12 = createVector(width/4, height);
    let p13 = createVector(width/2, height);
    let p14 = createVector (width*(3/4), height);
    let p15 = createVector (width, height);

    line(p1.x,p1.y,p11.x,p11.y);
    line(p2.x,p2.y,p12.x,p12.y);
    line(p3.x,p3.y,p13.x,p13.y);
    line(p4.x,p4.y,p14.x,p14.y);
    line(p5.x,p5.y,p15.x,p15.y);
    line(p1.x,p1.y,p5.x,p5.y);
    line(p6.x,p6.y,p10.x,p10.y);
    line(p11.x,p11.y,p15.x,p15.y);
    

		DrawSnakesFirstCentre(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
	}


// function for drawing the snakes
function DrawSnakesFirstCentre(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15){
	
rectMode(CENTER);
        

        if(cur_frac >0.9){
            image(imgMouse,455,240*cur_frac,10,10);
        } else{

            image(imgMouse,455,240*cur_frac);
        }

    ellipseMode(CENTER);

    push();
    translate(240,0);
	let animateCircleX1 = map(cur_frac, 0, 0.1, p1.x, p3.x,true);
    let animateCircleY1 = map(cur_frac,0.1, 0.2, p3.y,p15.y,true);
    let animateCircleX2 = map(cur_frac,0.2, 0.3,p1.x, p3.x, true);
    let animateCircleY2 = map(cur_frac, 0.3, 0.4, p1.y, p15.y-100,true);
    let animateCircleX3 = map(cur_frac, 0.4,0.5,p1.x,p2.x+140,true);
    let animateCircleY3 = map(cur_frac, 0.5,0.6,p3.y, p15.y-200,true);
    let animateCircleX4 = map(cur_frac, 0.6,0.7, p1.x,p3.x-200,true);
    let animateCircleY4 = map(cur_frac, 0.7, 0.8, p1.y, p8.y-100, true);
    let animateCircleX5 = map(cur_frac, 0.8, 0.9,p1.x, p2.x-100, true);
    

    let circleSize = map(cur_frac,0,1,70,100,true);
    let rectSizeW = map(cur_frac, 0.9, 1, 0, 960, true);
    let rectSizeH = map(cur_frac,0.9,1,0,540,true);
    
    
    let darkgreen = color("#152614");
    let calpolygreen = color("#1E441E");
    let asparagusgreen = color("#60992D");
noFill();
//stroke(random(colors));
// noiseColor = getNoiseValue(width, height*cur_frac, 0, "nColor", 0, 1, 500);
// stroke(lerpColor(calpolygreen, asparagusgreen, noiseColor));


stroke(asparagusgreen);


 for (let ii = 1; ii<animateCircleX1; ii++){
 
//  if (cur_frac>0.8){
//     push();
//     noStroke();
//     noFill();
//     circle(p1.y + animateCircleX1-(ii), p1.y,circleSize);
//     pop();
//  } else{

    circle(p1.y + animateCircleX1-(ii), p1.y,circleSize);
    
//  }
 }
 for (let ii = 1; ii<animateCircleY1; ii++){

// if (cur_frac>0.85){
//     push();
//     noStroke();
//     noFill();
//     circle(p3.x, animateCircleY1-(ii), circleSize);
//     pop();
//  } else{
   
    circle(p3.x, animateCircleY1-(ii), circleSize);
   
//  }
 }
 for (let ii = 1; ii<animateCircleX2; ii++){

// if ( cur_frac>0.9){
//     push();
//     noStroke();
//     noFill();
//     circle(p3.x - (animateCircleX2-(ii)), p15.y,circleSize);
//     pop();
//  } else{
   
    circle(p3.x - (animateCircleX2-(ii)), p15.y,circleSize);
//  }
 }
 for (let ii = 1; ii<animateCircleY2; ii++){

// if (cur_frac>0.95){
//     push();
//     noStroke();
//     noFill();
//     circle(p1.x, p15.y -(animateCircleY2-ii), circleSize);
//     pop();
//  } else{
   
    circle(p1.x, p15.y -(animateCircleY2-ii), circleSize);
//  }
}
for (let ii = 1; ii<animateCircleX3; ii++){
  
    // if (cur_frac>1){
    //     push();
    //     noStroke();
    //     noFill();
    //     circle(p1.x + animateCircleX3-(ii), p2.y+100,circleSize);
    //     pop();
    //  } else{
        circle(p1.x + animateCircleX3-(ii), p2.y+100,circleSize);
//  }
}
for (let ii = 1; ii<animateCircleY3; ii++){
    // if (cur_frac>1){
    //     push();
    //     noStroke();
    //     noFill();
    //     circle(p3.x-100, animateCircleY3-(ii)+100, circleSize);
    //     pop();
    //  } else{
       
            circle(p3.x-100, animateCircleY3-(ii)+100, circleSize);
    
        //  }
        }
 for (let ii = 1; ii<animateCircleX4; ii++){
    // if (cur_frac>1){
    //     push();
    //     noStroke();
    //     noFill();
    //     circle(p3.x - (animateCircleX4-(ii))-100, p15.y-100,circleSize);
    //     pop();
    //  } else{
       
           
                circle(p3.x - (animateCircleX4-(ii))-100, p15.y-100,circleSize);
            //  }
            }

for (let ii = 1; ii<animateCircleY4; ii++){
    // if (cur_frac>1){
    //     push();
    //     noStroke();
    //     noFill();
    //     circle(p1.x+100, p15.y-(animateCircleY4-(ii))-100, circleSize);
    //     pop();
    //  } else{
                
    circle(p1.x+100, p15.y-(animateCircleY4-(ii))-100, circleSize);
    //  }          
                }

for (let ii = 1; ii<animateCircleX5;ii++){

    // if (cur_frac>1){
    //     push();
    //     noStroke();
    //     noFill();
    //     circle(p1.x +(animateCircleX5 - (ii))+100, p8.y, circleSize);
    //     push();
    //     translate(-20,-50);
    //     image(imgSnakeHead,animateCircleX5+100, p8.y,100,100);
    //     pop();
    //     pop();
    //  } else{
    //  }          
    circle(p1.x +(animateCircleX5 - (ii))+100, p8.y, circleSize);
    push();
    translate(-20,-50);
    image(imgSnakeHead,animateCircleX5+100, p8.y,100,100);
    pop();
}
pop();


}