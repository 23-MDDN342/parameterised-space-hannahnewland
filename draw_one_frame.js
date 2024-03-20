
let colors = ['#DFDFDF', '#E46424', '#E50009', '#14B7DA', '#0881E6', '#FF75A5', '#FCD232', '#800204', '#04E29A', '#333333'];



// function for drawing the grid
    function draw_one_frame(cur_frac){
	width = 960;
	height = 540;
	let w = width;
	let h = height;
	fill("#000000");
	rect(0,0,w,h);
	
 
	noStroke();
    
   
	//push();
    stroke("#FFFFFF");

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
    

		DrawSnakes(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
	}


// function for drawing the snakes
function DrawSnakes(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15){
	
    ellipseMode(CENTER);
    

	let animateCircleX1 = map(cur_frac, 0, 0.25, p1.x, p2.x,true);
    let animateCircleY1 = map(cur_frac,0.25, 0.5, p2.y,p8.y,true);
    let animateCircleX2 = map(cur_frac,0.5, 0.75,p1.x, p2.x, true);
    let animateCircleY2 = map(cur_frac, 0.75, 1, p1.y, p8.y,true);

    let circleSize = 50
    


 for (let ii = 0; ii<animateCircleX1; ii++){
 
//  if (cur_frac>0.25){
//     push();
//     noStroke();
//     noFill();
//     circle(p1.y + animateCircleX1, p1.y,circleSize);
//     pop();
//  } else{
fill("FFFFFF");
    stroke("FFFFFF");
    circle(p1.y + animateCircleX1-(ii), p1.y,circleSize);
// }
 }



 for (let ii = 0; ii<animateCircleY1; ii++){

// if (cur_frac<=0.25 ||cur_frac>0.5){
//     push();
//     noStroke();
//     noFill();
//     circle(p2.x, animateCircleY1, circleSize);
//     pop();
//  } else{
    fill("FFFFFF");
    stroke("FFFFFF");
    circle(p2.x, animateCircleY1-(ii), circleSize);
// }
 }



 for (let ii = 0; ii<animateCircleX2; ii++){

// if (cur_frac<=0.5|| cur_frac>0.75){
//     push();
//     noStroke();
//     noFill();
//     circle(p2.x - animateCircleX2, p8.y,circleSize);
//     pop();
//  } else{
    fill("FFFFFF");
    stroke("FFFFFF");
    circle(p2.x - (animateCircleX2-ii), p8.y,circleSize);
// }
 }



 for (let ii = 0; ii<animateCircleY2; ii++){

// if (cur_frac<= 0.75 || cur_frac>1){
//     push();
//     noStroke();
//     noFill();
//     circle(p1.x, p8.y -animateCircleY2, circleSize);
//     pop();
//  } else{
    fill("FFFFFF");
    stroke("FFFFFF");
    circle(p1.x, p8.y -(animateCircleY2-ii), circleSize);
//  }
}
}