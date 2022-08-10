let renderStack = []
let slotList = []

function init() {

}


function CardOLD() {

}
let Card = function* (slot){
	const template = /*html*/`
	<div class="card">
		<div class="title">
			${this.title}
		</div>
		<div class="text">
			${this.text}
		</div>
		<div class="actions">
			${this.actions}
		</div>
	</div>
	`
	return new Promise((resolve, reject) => {
		slot.push()
	})
} 


class Component {
	title
	text
	constructor(title) {
		this.title = title

		
	}
}
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());