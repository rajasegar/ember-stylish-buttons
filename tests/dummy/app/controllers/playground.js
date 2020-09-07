import Controller from '@ember/controller';
import {  action } from '@ember/object';
import {  tracked } from '@glimmer/tracking';
import { htmlSafe, w } from '@ember/string';
import esbStyles from 'dummy/constants/esbStyles';

const DEFAULT_STYLE = {
  border: null,
  shape: null,
  size: null,
  upperCase: false,
  inverted: false,
  textWidth: null
};


export default class PlaygroundController extends Controller {
  // buttonStyles: w('winona winona-pill winona-inverted ujarak wayra tamaya rayen pipaluk moema isi aylan saqui wapasha nuka antiman itzel naira quidel sacnite shikoba'),

  @tracked buttonStyle = { ...DEFAULT_STYLE, ...esbStyles[0]};

  @tracked border = '';
  @tracked shape = '';
  @tracked upperCase = '';
  @tracked inverted = '';
  @tracked size = '';
  @tracked textWidth = '';

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
