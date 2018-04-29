import {JSXComponent} from 'metal-jsx';
import defineWebComponent from 'metal-web-component';
import Triangle from './Triangle';

class App extends JSXComponent {
	attached() {
		let tick = this.tick.bind(this);

		this.seconds = 0;
		this.intervalID = setInterval(tick, 1000);
	}

	tick() {
		this.seconds = (this.seconds % 10) + 1;
	}

	render() {
		const elapsed = this.props.elapsed;
		const t = (elapsed / 1000) % 10;
		const scale = 1 + (t > 5 ? 10 - t : t) / 10;
		let containerStyle = {
			position: 'absolute',
			transformOrigin: '0 0',
			left: '50%',
			top: '50%',
			width: '10px',
			height: '10px',
			background: '#eee',
			transform: 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)'
		};

		return (
			<div style={containerStyle}>
				<div>
					<Triangle x={0} y={0} s={1000} seconds={this.seconds}></Triangle>
				</div>
			</div>
		);
	}
}

App.PROPS = {
	elapsed: {
		value: 0
	}
}

defineWebComponent('metal-demo', App);
