import {JSXComponent} from 'metal-jsx';
import Dot from './Dot';

const targetSize = 25;

class Triangle extends JSXComponent {
    render() {
        let s = this.props.s;
        if (s <= targetSize) {
            return (
                <Dot
                  x={this.props.x - (targetSize / 2)}
                  y={this.props.y - (targetSize / 2)}
                  size={targetSize}
                  text={this.props.seconds.toString()}
                ></Dot>
            );
        }

        s = s / 2;

        let slowDown = true;
        if (slowDown) {
            let e = performance.now() + 0.8;
            while (performance.now() < e) {
            // Artificially long execution time.
            }
        }

        return (
            <div>
                <Triangle
                    x={this.props.x}
                    y={this.props.y - (s / 2)}
                    s={s}
                    seconds={this.props.seconds}
                ></Triangle>
                <Triangle
                    x={this.props.x - s}
                    y={this.props.y + (s / 2)}
                    s={s}
                    seconds={this.props.seconds}
                ></Triangle>
                <Triangle
                    x={this.props.x + s}
                    y={this.props.y + (s / 2)}
                    s={s}
                    seconds={this.props.seconds}
                ></Triangle>
            </div>
        );
    }
}

Triangle.PROPS = {
    x: {
        value: 0
    },

    y: {
        value: 0
    },

    s: {
        value: 0
    },

    seconds: {
        value: 0
    }
};

export default Triangle;
