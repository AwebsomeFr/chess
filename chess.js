function chess (obj) {

	// REQUIRED. Define <tag> type.
	let elm = document.createElement(obj.type); 

	// OPTIONAL : define textual or HTML content. Only one is permitted.	
	if(obj.text) {
		elm.textContent = obj.text;
	}
	else if(obj.html) {
		elm.innerHTML = obj.html;
	}

	// OPTIONAL : define attributes (id, class, title, basic events...).
	if(obj.attributes) {
		for(const attribute in obj.attributes) {
			elm.setAttribute(attribute, obj.attributes[attribute]);
		}
	}
	
	// OPTIONAL : define advanced events.
	if(obj.events) {
		for(const event of obj.events) {
			elm.addEventListener(event.type, event.function);
		}
	}

	// OPTIONAL : append children.
	if(obj.children) {	
		for(const child of obj.children) {
			elm.appendChild(chess(child));
		}
	}

	return elm;

}