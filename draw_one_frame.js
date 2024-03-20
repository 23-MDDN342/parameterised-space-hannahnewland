
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
    

	let animateCircleX = map(cur_frac, 0, 0.5, 0, 240);
    let animateCircleY = map(cur_frac,0, 1, 0,540);

 
let boundary1 = map(animateCircleX, 0, width, 0, 240);
let boundary2 = map(animateCircleX, 0, height, 0, (540/2));

circle(p1.y + animateCircleX, p1.y,100);
 circle(p3.x, animateCircleY, 100);
// for(let ii = 0; ii<boundary1; ii++){
//     stroke(random(colors));
//     circle(boundary1 -ii, p1.y, 50);
//     //circle(p2.x, boundary2, 50);
//     console.log(boundary1+ii);
//  }

}

 //let switch1 = map(cur_frac,0, 1, 0, 0.25);

 

	// for(let ii = 0; ii < Spacing; ii++){
	// 		let currentX = p1.x; 
    //         let currentY = p1.y; 
	// 			stroke(random(colors));
	// 			// let TravelEllipse = animateCircle - (ii*1);
    //             // //let boundaries = constrain(TravelEllipse, Spacing, w);
    //             // let boundaryX = constrain(TravelEllipse, 0, Spacing); // Adjusted boundary
    //             // let boundaryY = constrain(TravelEllipse,0, Spacing);
    //                 if(currentX < p2.x){
    //                     currentX++;
    //                 }
    //                 // if (cur_frac > 0.25 && currentY < vector2.y){
    //                 //     currentY++;
    //                 // }
    //                 console.log(p2.x)
                   
	// 			circle(currentX, currentY, HowManySquares*10);
    //             //console.log(currentX)
				
	// 			}
//    pop();

        
        
