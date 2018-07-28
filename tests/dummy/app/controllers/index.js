import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    buttonAction(s1, s2) {
      console.log(s1, ' ', s2); // eslint-disable-line
    }
  }
});
