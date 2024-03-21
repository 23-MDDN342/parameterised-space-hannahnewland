
### 2024 MDDN342 Project 1: Parameterised Space

My idea and sketch for this design mimicked a snake pit; snakes slithering over and over each other repeatedly. I made my very rough sketch on illustrator, but in the actual code I plan to have the heads of the snakes as well, so it's more obvious what is actually happening.
I began by using codes from open processing as a guide. While this was helpful, none of the codes provided a very good starting point for what I wanted to do.
I ended up moving away from the open processing codes, and started building different code from scratch. This was when I ran into an exceptional number of issues. I couldn’t seem to work out how to get the ellipse I was using as a starting point for the movement to bounce or reflect off of the boundaries. I tried everything - the constrain() function, maps, vectors. What eventually worked was not having one ball, but having multiple. This worked because the front of the ball travelling on the x axis would be covered by the ball leaving that point on the y axis - I only had to use a map function to make sure the balls leaving after the previous weren’t visible until it was it’s time to shine! 

Once I finally had the movement working, I played around with the coordinates until I decided I wanted the main green snake to be in the middle. I then made snake heads on Adobe Illustrator and loaded them as images into the code. I also added a mouse/rat I made on illustrator as a reason the snake might be “compelled” to move. 

I then decided the sides of the canvas looked too empty, and added two additional snakes. 

The next wall I hit was how to make it loop. After trying things like a snake moving across the canvas or snake teeth chomping down on the canvas, I decided a simple rectangle fading in and out was the best solution. I quite like the final outcome of this in particular, I think it almost looks like someone blinking. 

I am really happy with the outcome of this code, I learned a lot on the way through all my attempts and mistakes.

