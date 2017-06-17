import Ember from 'ember';
import layout from '../templates/components/stylish-button';

const  {
  computed
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['button'],
  classNameBindings: [
    'buttonStyle',
    'buttonBorder',
    'buttonShape',
    'upperCase:button--text-upper',
    'inverted:button--inverted',
    'invertedAlt:button--inverted-alt',
    'buttonTextWidth',
    'buttonSize'

  ],
  attributeBindings: ['text:data-text'],
  buttonStyle: computed('type', function() {
    return `button--${this.get('type')}`;
  }),
  buttonBorder: computed('border', function() {
    return `button--border-${this.get('border')}`;
  }),
  buttonShape: computed('shape', function() {
    return this.get('shape') ? `button--${this.get('shape')}` : '';
  }),
  buttonSize: computed('size', function() {
    return this.get('size') ? `button--size-${this.get('size')}` : '';
  }),
  buttonTextWidth: computed('textWidth', function() {
    return this.get('textWidth') ? `button--text-${this.get('textWidth')}` : '';
  })

});
