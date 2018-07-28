/**
   Ember Stylish buttons
   Some fresh styles & hover effects for the modern button

   ## Installation

   ```shell
   ember install ember-stylish-buttons
   ```

   ## Usage:

   ```hbs
   \{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}

   \{{#stylish-button type="wayra" border="thick" upperCase=true size="s" }}Remove{{/stylish-button}}

   \{{#stylish-button type="isi" textWidth="thick" upperCase=true size="s"}}
   <i class="button__icon icon icon-box"></i><span>Archive</span>
   \{{/stylish-button}}
   ```

   @public
   @class ember-stylish-buttons

*/

import Component from '@ember/component';

import { computed } from '@ember/object';
import layout from '../templates/components/stylish-button';

export default Component.extend({
  layout,
  /**
     Changing the tagName property to button to render a button element by default.

     @public
     @property tagName
     @type String
     @default "button"
  */

  tagName: 'button',

  /**
     Binding a default ".button" class for the button

     @public
     @property classNames
     @type Array
     @default "['button']"
  */

  classNames: ['button'],
  classNameBindings: [
    'buttonStyle',
    'buttonBorder',
    'buttonShape',
    'upperCase:button--text-upper',
    'inverted:button--inverted',
    'invertedAlt:button--inverted-alt',
    'buttonTextWidth',
    'buttonSize',
    'customClasses'
  ],
  attributeBindings: ['text:data-text'],
  /**
     buttonStyle computed property is derived from the **type** attribute

     @public
     @method buttonStyle
     @param {String} type
     @return {String}
  */

  buttonStyle: computed('type', function() {
    return `button--${this.get('type')}`;
  }),
  /**
     buttonBorder computed property is derived from the **border** attribute

     @public
     @method buttonBorder
     @param {String} type
     @return {String}
  */
  buttonBorder: computed('border', function() {
    return `button--border-${this.get('border')}`;
  }),
  /**
     buttonShape computed property is derived from the **shape** attribute

     @public
     @method buttonShape
     @param {String} type
     @return {String}
  */
  buttonShape: computed('shape', function() {
    return this.get('shape') ? `button--${this.get('shape')}` : '';
  }),
  /**
     buttonSize computed property is derived from the **size** attribute

     @public
     @method buttonSize
     @param {String} type
     @return {String}
  */
  buttonSize: computed('size', function() {
    return this.get('size') ? `button--size-${this.get('size')}` : '';
  }),
  /**
     buttonTextWidth computed property is derived from the **textWidth** attribute

     @public
     @method buttontextWidth
     @param {String} type
     @return {String}
  */
  buttonTextWidth: computed('textWidth', function() {
    return this.get('textWidth') ? `button--text-${this.get('textWidth')}` : '';
  }),
  /**
     click action for the button

     Gets the action passed in the **action** attribute and call it with
     whatever arguments passed 

     @public
     @method click
  */
  click() {
    this.get('action')(...arguments);
  }

});
