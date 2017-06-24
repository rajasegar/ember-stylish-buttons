import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    buttonAction(s1, s2) {
      console.log(s1, ' ', s2); // eslint-disable-line
    }
  }
});
