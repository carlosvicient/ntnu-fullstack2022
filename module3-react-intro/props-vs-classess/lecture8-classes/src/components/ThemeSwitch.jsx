import React, { Fragment } from 'react';

//invert function can only invert stated colors. If bg is not defined, it will not work. 
// If bg is not defined, we can assume it is white and we write it manually. 
const cssString = `
    html { filter: invert(100%); background: #fefefe; }
    * { background-color: inherit }
`;

const rasterCss = 'img:not([src*=".svg"]), video, [style*="url("] { filter: invert(100%) }';

class ThemeSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: cssString,
            active: localStorage.getItem(this.props.storeKey) === 'true' || (!localStorage.getItem(this.props.storeKey) && matchMedia('(prefers-color-scheme: dark)').matches)
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <Fragment>
                <button aria-pressed={this.state.active} onClick={this.toggle}>
                    Inverted theme:{' '}
                    <span aria-hidden="true">{this.state.active ? 'On' : 'Off'}</span>
                </button>
                <style media={this.state.active ? 'screen' : 'none'}>
                    {/* According to Pickering, switching between media none and screen 
                    will not apply the styles in all browsers and rewriting the style 
                    forces the browswer to repaint the UI */}
                    {this.state.active ? this.state.css.trim() : this.state.css}
                </style>
            </Fragment>
        );
    }

    componentDidMount() {
        //check if preserveRasters (img)
        let css = cssString;
        if (this.props.preserveRasters) {
            css += ` ${rasterCss}`;
        }
        this.setState({ css: css });
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem(this.props.storeKey, this.state.active);
    }

    toggle() {
        this.setState((prevState) => ({
            active: !prevState.active
        }));
    }

    static defaultProps = {
        preserveRasters: true,
        storeKey: 'ThemeSwitch'
    }
}

export default ThemeSwitch;