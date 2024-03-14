
let firstRun = true
let objs = [];
let colors = ['#DFDFDF', '#E46424', '#E50009', '#14B7DA', '#0881E6', '#FF75A5', '#FCD232', '#800204', '#04E29A', '#333333'];
let c = 0;

function draw_one_frame(cur_frac){

	width = 960;
	height = 540;

	let w = width;
	let h = height;

noStroke();
fill("#000000");
rect(0,0,w,h);

let HowManySquares = 6;

let SquareSize = w/HowManySquares;
let SpacingAmount = w/HowManySquares -1 ;

for(let across =0; across < w / SpacingAmount-1; across++){
	for(let down = 0; down +1 < h / SpacingAmount; down++ ){
		//fill(random(colors));
		stroke("#FFFFFF");
		rect(SpacingAmount*across, SpacingAmount*down, SquareSize);
		let animateCircle = map(cur_frac, 0, 1, 0, SpacingAmount);
		push();
		for(let ii = 0; ii < SpacingAmount; ii++){
		fill(random(colors));
		stroke(random(colors));
		let TravelEllipse = animateCircle - (ii*1);
        ellipse(TravelEllipse, 10, HowManySquares*5);
		ellipse(SpacingAmount+40, TravelEllipse, HowManySquares*5);
		// ellipse(startX- (ii*1), 50, HowManySquares*5);
		}
		pop();

	}
}
}


