var bottlesLeft;
var bottlesNum;
for(bottlesNum=99;bottlesNum>=0;bottlesNum--){
   	 bottlesLeft=bottlesNum-1;
	 if(bottlesNum===0){
	 	console.log("No more bottles of beer on the wall, no more bottles of beer.");
 	   console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
	 }
	 else{
		 console.log(bottlesNum +" bottles of beer on the wall, " + bottlesNum + " bottles of beer")
		 if(bottlesLeft===0){
		 	console.log("Take one down and pass it around," + "no More" + " bottles of beer on the wall.")
		 }
	 else{
		 console.log("Take one down and pass it around," + bottlesLeft + " bottles of beer on the wall.")
	     }
     	}

}
