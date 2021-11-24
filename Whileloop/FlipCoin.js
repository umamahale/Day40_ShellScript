let head = 0;
let tail = 0;
while (head < 11 && tail < 11){
	let coin = Math.floor(Math.random()*10) % 2;
	if (coin == 1 )
		head++;
	else
		tail++;
    if (head == 11)
	    console.log("head win"); 
    else if (tail == 11)
        console.log("tail win");
}