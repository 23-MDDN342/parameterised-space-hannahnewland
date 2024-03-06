
let firstRun = true
let objs = [];
let colors = ['#DFDFDF', '#E46424', '#E50009', '#14B7DA', '#0881E6', '#FF75A5', '#FCD232', '#800204', '#04E29A', '#333333'];

function draw_one_frame(cur_frac) {
	if(firstRun){
		rectMode(CENTER);
		strokeWeight(2);
		let c = 8;
		let w = width / c;
		for (let i = 0; i < c; i++) {
			for (let j = 0; j < c; j++) {
				let x = i * w + w / 2;
				let y = j * w + w / 2;
				objs.push(new OBJ(x, y, w));
			}
		}


		firstRun = false
	}

	for (let i of objs) {
		i.show();
		i.move();
	}


 	}



function easeInOutQuad(x) {
	return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

class OBJ {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.col1 = this.col2 = this.col3;
		while (this.col1 == this.col2 || this.col2 == this.col3 || this.col1 == this.col3) {
			this.col1 = random(colors);
			this.col2 = random(colors);
			this.col3 = random(colors);
		}
		this.ang = int(random(4)) * (TAU / 4);

		this.t = -int(random(7)) * 100;
		this.t1 = 50;
		this.t2 = this.t1 + 50;
		this.ss1 = ((this.w * 2) / 3) * 2;
		this.ss2 = ((this.w * 2) / 3);
		this.d1 = this.ss1;
		this.d2 = this.ss2;
	}

	show() {
		push();
		translate(this.x, this.y);
		noStroke();
		fill(this.col1);
		square(0, 0, this.w);
		drawingContext.clip();
		rotate(this.ang);
		stroke(0);
		fill(this.col2);
		circle(this.w / 2, this.w / 2, this.d1);
		fill(this.col3);
		circle(this.w / 2, this.w / 2, this.d2);
		noFill();
		square(0, 0, this.w);
		pop();
	}

	move() {

		this.t++;
		if (0 < this.t && this.t < this.t1) {
			let n = norm(this.t, 0, this.t1 - 1);
			this.d1 = lerp(this.ss1, this.ss1 + this.w * 2.5, easeInOutQuad(n));
			this.d2 = lerp(this.ss2, this.ss2 + this.w * 2.5, easeInOutQuad(n));
		}
		if (this.t == this.t1 + 1) {
			this.col1 = this.col3;
			while (this.col1 == this.col2 || this.col2 == this.col3 || this.col1 == this.col3) {
				this.col2 = random(colors);
				this.col3 = random(colors);
			}
			this.ang = int(random(4)) * (TAU / 4);
		}
		if (this.t1 < this.t && this.t < this.t2) {
			let n = norm(this.t, this.t1, this.t2 - 1);
			this.d1 = constrain(lerp(this.ss1 - this.w * 2, this.ss1, easeInOutQuad(n)), 0, this.ss1);
			this.d2 = constrain(lerp(this.ss2 - this.w * 2, this.ss2, easeInOutQuad(n)), 0, this.ss2);
		}
		if (this.t2 <= this.t) {
			this.t = -int(random(7) + 1) * 100;
		}
	}
}