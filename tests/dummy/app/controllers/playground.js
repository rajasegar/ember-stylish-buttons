import Ember from 'ember';

const {
  computed,
  String: { w, htmlSafe }
} = Ember;

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

export default Ember.Controller.extend({
  // buttonStyles: w('winona winona-pill winona-inverted ujarak wayra tamaya rayen pipaluk moema isi aylan saqui wapasha nuka antiman itzel naira quidel sacnite shikoba'),
  buttonStyle: computed(function() {
    return Object.assign({}, DEFAULT_STYLE, esbStyles[0]);
  }),
  buttonStyles: esbStyles,
  borderOptions: w('thin medium thick'),
  shapeOptions: w('round-s round-m round-l'),
  widthOptions: w('thin medium thick'),
  sizeOptions: w('s m l'),
  currentStyle: computed.reads('buttonStyle.caption'),
  currentBorder: computed('buttonStyle.border', function() {
    let _border = this.get('buttonStyle.border');
    return !_border ? '' : `border="${_border}"`;
  }),
  currentShape: computed('buttonStyle.shape', function() {
    let _shape = this.get('buttonStyle.shape');
    return !_shape ? '' : `shape="${_shape}"`;
  }),
  currentUpperCase: computed('buttonStyle.upperCase', function() {
    return this.get('buttonStyle.upperCase') === true ? 'upperCase=true' : '';
  }),
  currentInverted: computed('buttonStyle.inverted', function() {
    return this.get('buttonStyle.inverted') === true ? 'inverted=true' : '';
  }),
  currentSize: computed('buttonStyle.size', function() {
    let _size = this.get('buttonStyle.size');
    return !_size ? '' : `size="${_size}"`;
  }),
  currentTextWidth: computed('buttonStyle.textWidth', function() {
    let _tw = this.get('buttonStyle.textWidth');
    return !_tw ? '' : `textWidth="${_tw}"`;
  }),
  code: computed('buttonStyle.{border,shape,upperCase,inverted,size,textWidth}', function() {
    return htmlSafe(`{{#stylish-component
    type="${this.get('buttonStyle.className')}"
    ${this.get('currentBorder')}
    ${this.get('currentShape')}
    ${this.get('currentSize')}
    ${this.get('currentUpperCase')}
    ${this.get('currentInverted')}
    ${this.get('currentTextWidth')}
    text="Open Project"
    }}`);
  }),
  actions : {
    changeStyle(style) {
      let _style = esbStyles.find((s) => s.name === style);
      let newStyle = Object.assign({},DEFAULT_STYLE, _style);
      this.set('buttonStyle', newStyle);
    }
  }
});
