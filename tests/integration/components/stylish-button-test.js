import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stylish-button', 'Integration | Component | stylish button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  // Template block usage:
  this.render(hbs`
    {{#stylish-button}}
      template block text
    {{/stylish-button}}
  `);

  assert.equal(this.$('button').length, 1);
});

test('should have a default button class', function(assert) {
  this.render(hbs`
    {{#stylish-button}}
      template block text
    {{/stylish-button}}
  `);
  assert.equal(this.$('.button').length, 1);
});

test('should have a border class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
  assert.equal(this.$('.button--border-thin').length, 1);
});

test('should render the text property', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
  assert.equal(this.$('button span').text().trim(), "Open Project");
});

test('should render the block', function(assert) {
  this.render(hbs`{{#stylish-button type="wayra" border="thick" upperCase=true size="s" }}Open Project{{/stylish-button}}`);
  assert.equal(this.$('button').text().trim(), "Open Project");
});

test('should perform the action when clicked', function(assert) {
  this.set('result', '');
  this.set('buttonAction', function(a, b) {
    this.set('result', a + ' ' + b);
  });

  this.render(hbs`
    {{#stylish-button type="wayra" border="thick" upperCase=true size="s" action=(action buttonAction 'Hello' 'World') }}Remove{{/stylish-button}}
  <div id="result">{{ result }}</div>`);

  this.$('button').click();

  assert.equal(this.$('#result').text(),'Hello World');

});

test('should have a shape class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
  assert.equal(this.$('.button--round-s').length, 1);
});

test('should have a size class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`);

  assert.equal(this.$('.button--size-s').length, 1);
});

test('should have a text width class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`);

  assert.equal(this.$('.button--text-thick').length, 1);
});

test('should have a uppercase class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`);

  assert.equal(this.$('.button--text-upper').length, 1);
});

test('should have an inverted class', function(assert) {
  this.render(hbs`{{stylish-button type="winona" border="thin" textWidth="thick" inverted=true text="Open Project"}}
`);

  assert.equal(this.$('.button--inverted').length, 1);
});
