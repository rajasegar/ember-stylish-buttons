/**
   Ember Stylish buttons
   Some fresh styles & hover effects for the modern button

   ## Installation

   ```shell
   ember install ember-stylish-buttons
   ```

   ## Usage:

   ```hbs
   <StylishButton @type="winona" @border="thin" @shape="round-s"  @text="Open Project"/>

   <StylishButton @type="wayra" @border="thick" @upperCase=true @size="s" >Remove</StylishButton>

   <StylishButton @type="isi" @textWidth="thick" @upperCase=true @size="s">
   <i class="button__icon icon icon-box"></i><span>Archive</span>
   </StylishButton>
   ```

   @public
   @class ember-stylish-buttons

*/

import Component from '@glimmer/component';

export default class StylishButton extends Component {

  /**
     buttonStyle computed property is derived from the **type** attribute

     @public
     @method buttonStyle
     @param {String} type
     @return {String}
  */

  get buttonStyle() {
    return this.args.type ? `button--${this.args.type}` : 'button--winona';
  }

  /**
     buttonBorder computed property is derived from the **border** attribute

     @public
     @method buttonBorder
     @param {String} type
     @return {String}
  */
  get buttonBorder() {
    return `button--border-${this.args.border}`;
  }
  /**
     buttonShape computed property is derived from the **shape** attribute

     @public
     @method buttonShape
     @param {String} type
     @return {String}
  */
  get buttonShape() {
    return this.args.shape ? `button--${this.args.shape}` : '';
  }
  /**
     buttonSize computed property is derived from the **size** attribute

     @public
     @method buttonSize
     @param {String} type
     @return {String}
  */
  get buttonSize() {
    return this.args.size ? `button--size-${this.args.size}` : '';
  }
  /**
     buttonTextWidth computed property is derived from the **textWidth** attribute

     @public
     @method buttontextWidth
     @param {String} type
     @return {String}
  */
  get buttonTextWidth() {
    return this.args.textWidth ? `button--text-${this.args.textWidth}` : '';
  }

  get upperCase() {
    return this.args.upperCase ? 'button--text-upper' : '';
  }

  get inverted() {
    return this.args.inverted ? 'button--inverted' : '';
  }

  get invertedAlt() {
    return this.args.invertedAlt ? 'button--inverted-alt' : '';
  }

  get className() {
    return `button ${this.buttonStyle} ${this.buttonBorder} ${this.buttonShape}
    ${this.buttonTextWidth} ${this.buttonSize} ${this.upperCase}
    ${this.inverted} ${this.invertedAlt} ${this.args.customClasses}`;
  }

}
