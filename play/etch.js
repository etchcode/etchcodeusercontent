function etch(){};

etch.prototype.load = function(){
	var match = document.location.hash.match(/#present:hideControls:(.+)/);
	
	if(match){
		this.loadUrl(match[1]);
	}
	else{
		//this will almost certainly never be shown because if the url is invalid
		//Etch.restrict should have already come into play
		IDE.showMessage("Error. Invalid project url.");
	}
}

etch.prototype.loadUrl = function(url){
	//load a Snap! xml file from the given url
	//return: true for success false for error
	var request = new XMLHttpRequest();
	
	request.addEventListener("load", function(event){
		//we successfuly loaded the xml	
		if(request.status == 200){ //this was a success
			IDE.rawOpenProjectString(request.responseText); //load the data we just got as a project
		}
		else{
			IDE.showMessage("Error retrieving project. Please report this.\
				\n(Code LoadUrl:Response Code:"+request.status+")");
		}
		
	}, false);
	request.addEventListener("error", function(event){
		//there was an error
		IDE.showMessage("Error retrieving project. Please report this.\
			\n(Code LoadUrl:Error Listener)");
		
	}, false);
	
	request.open("GET", url);
	
	request.send()
}

etch.prototype.restrict = function(){
	//show error messages if the user would end up with a view that would allow editing the project
	//or something else like that the we don't want. 
	//(This is a reccomendation and will always be overridable by the user)
	
	if(document.location.hash.search(/\#present\:hideControls\:(.+)/)!==0){
		// if they are not set up to see a file in present view
		document.body.innerHTML="<h1>Error. Please enter a valid url.</h1>";
	}
}

var Etch = new etch();