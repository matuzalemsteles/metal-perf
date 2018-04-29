import {JSXComponent} from 'metal-jsx';

class Dot extends JSXComponent {
	enter() {
		this.state.hover = true;
    }

	leave() {
		this.state.hover = false;
	}

	render() {
		const s = this.props.size * 1.3;
		const style = {
			position: 'absolute',
			font: 'normal 15px sans-serif',
			textAlign: 'center',
			cursor: 'pointer',
			width: s + 'px',
			height: s + 'px',
			left: (this.props.x) + 'px',
			top: (this.props.y) + 'px',
			borderRadius: (s / 2) + 'px',
			lineHeight: (s) + 'px',
			background: this.state.hover ? '#ff0' : '#61dafb'
		};

		return (
			<div style={style} onmouseenter={this.enter.bind(this)} onmouseleave={this.leave.bind(this)}>
				{this.state.hover ? '**' + this.props.text + '**' : this.props.text}
            </div>
		);
	}
}

Dot.PROPS = {
	size: {
		value: 0
	},
	x: {
		value: 0
	},
	y: {
		value: 0
	},
	text: {
		value: null
	}
}

Dot.STATE = {
	hover: {
		value: false
	}
}

export default Dot;
