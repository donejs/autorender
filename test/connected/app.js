import DefineMap from "can-define/map/map";
import route from "can-route";

export default DefineMap.extend({
	count: {
		type: 'number',
		default: 0,
		serialize: false
	},

	connectedCallback(el) {
		const button = el.querySelector("#increment");

		this.listenTo(button, "click", () => {
			this.count++;
		});

		return () => this.stopListening();
	}
});
