import Controller from '@ember/controller';
import {  action } from '@ember/object';
import {  tracked } from '@glimmer/tracking';
import { htmlSafe, w } from '@ember/string';

const DEFAULT_STYLE = {
  border: null,
  shape: null,
  size: null,
  upperCase: false,
  inverted: false,
  textWidth: null
};

const esbStyles = [
  {
    name: 'winona',
    caption: 'Winona',
    className: 'winona',
    border: 'thin',
    shape: 'round-s'
  },
  {
    name: 'winona-pill',
    caption: 'Winona Pill',
    className: 'winona',
    border: 'thick',
    shape: 'round-l',
    size: 's',
    upperCase: true,
    textWidth: 'thick'
  },
  {
    name: 'winona-inverted',
    caption: 'Winona Inverted',
    className: 'winona',
    border: 'thin',
    inverted: true,
    textWidth: 'thick'
  },
  {
    name: 'ujarak',
    caption: 'Ujarak',
    className: 'ujarak',
    border: 'thin',
    textWidth: 'thick'
  },
  {
    name: 'ujarak-pill',
    caption: 'Ujarak Pill',
    className: 'ujarak',
    border: 'medium',
    shape: 'round-s',
    upperCase: true,
    textWidth: 'thick'
  },
  {
    name: 'ujarak-inverted',
    caption: 'Ujarak Inverted',
    className: 'ujarak',
    border: 'thick',
    size: 's',
    upperCase: true,
    inverted: true,
    textWidth: 'thick'
  },
  {
    name: 'wayra',
    caption: 'Wayra',
    className: 'wayra',
    border: 'thick',
    upperCase: true,
    size: 's'
  },
  {
    name: 'wayra-pill',
    caption: 'Wayra-Pill',
    className: 'wayra',
    border: 'thin',
    shape: 'round-s'
  },
  {
    name: 'wayra-inverted',
    caption: 'Wayra-Inverted',
    className: 'wayra',
    border: 'medium',
    upperCase: true,
    size: "s",
    textWidth: "thick",
    inverted: true
  }
];

export default class PlaygroundController extends Controller{
  // buttonStyles: w('winona winona-pill winona-inverted ujarak wayra tamaya rayen pipaluk moema isi aylan saqui wapasha nuka antiman itzel naira quidel sacnite shikoba'),

  @tracked
  buttonStyle = { ...DEFAULT_STYLE, ...esbStyles[0]};

  buttonStyles = esbStyles;
  borderOptions =  w('thin medium thick');
  shapeOptions = w('round-s round-m round-l');
  widthOptions = w('thin medium thick');
  sizeOptions = w('s m l');

  get currentStyle() { 
    return this.buttonStyle.caption; 
  }

  
  get currentBorder() {
    let _border = this.buttonStyle.border;
    return !_border ? '' : `@border="${_border}"`;
  }

  get currentShape() {
    let _shape = this.buttonStyle.shape;
    return !_shape ? '' : `@shape="${_shape}"`;
  }

  get currentUpperCase() {
    return this.buttonStyle.upperCase === true ? '@upperCase=true' : '';
  }

  get currentInverted() {
    return this.buttonStyle.inverted === true ? '@inverted=true' : '';
  }

  get currentSize() {
    let _size = this.buttonStyle.size;
    return !_size ? '' : `@size="${_size}"`;
  }

  get currentTextWidth() {
    let _tw = this.buttonStyle.textWidth;
    return !_tw ? '' : `@textWidth="${_tw}"`;
  }

  get code() {
    return htmlSafe(`<StylishButton
    type="${this.buttonStyle.className}"
    ${this.currentBorder}
    ${this.currentShape}
    ${this.currentSize}
    ${this.currentUpperCase}
    ${this.currentInverted}
    ${this.currentTextWidth}
    @text="Open Project"
    />`);
  }


  @action
    changeStyle(event) {
      const style = event.target.value;
      let _style = esbStyles.find((s) => s.name === style);
      let newStyle = Object.assign({},DEFAULT_STYLE, _style);
      this.buttonStyle = newStyle;
    }

  @action
  updateBorder(event) {
    this.buttonStyle.border = event.target.value;
  }

  @action
  updateShape(event) {
    console.log(event.target.value);
  }
}
