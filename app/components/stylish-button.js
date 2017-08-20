import StylishButton from 'ember-stylish-buttons/components/stylish-button';
import ENV from '../config/environment';

const config = ENV['ember-stylish-buttons'] || {};

export default StylishButton.extend({
  type: config.defaultTheme || 'winona'
});
