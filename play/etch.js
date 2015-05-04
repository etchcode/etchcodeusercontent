var Etch = {};

var IDE, world;

Etch.initWorld = function(){
	var world;

	world = new WorldMorph(document.getElementById('world'));
	world.worldCanvas.focus();

	//the below lines were modified by Daniel. It used to be that it would just
	//Be new IDE_Morph.openIn(world), but this way we can capture the IDE_Morph 
	//and use it to load project strings
	IDE = new IDE_Morph()
	IDE.openIn(world);

	Etch.load(); //load the etch project

	//end modified lines
	setInterval(loop, 1);

	function loop() {
		world.doOneCycle();
	}
}

Etch.load = function(string){
	Etch.initWorld();
	
	IDE.rawOpenProjectString(string);
}