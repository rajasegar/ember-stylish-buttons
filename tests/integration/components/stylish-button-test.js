import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | stylish button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });


    // Template block usage:
    await render(hbs`
      {{#stylish-button}}
        template block text
      {{/stylish-button}}
    `);

    assert.dom('button').exists({ count: 1 });
  });

  test('should have a default button class', async function(assert) {
    await render(hbs`
      {{#stylish-button}}
        template block text
      {{/stylish-button}}
    `);
    assert.dom('.button').exists({ count: 1 });
  });

  test('should have a border class', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.dom('.button--border-thin').exists({ count: 1 });
  });

  test('should render the text property', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.dom('button span').hasText('Open Project');
  });

  test('should render the block', async function(assert) {
    await render(
      hbs`{{#stylish-button type="wayra" border="thick" upperCase=true size="s" }}Open Project{{/stylish-button}}`
    );
    assert.dom('button').hasText('Open Project');
  });

  test('should perform the action when clicked', async function(assert) {
    this.set('result', '');
    this.set('buttonAction', function(a, b) {
      this.set('result', a + ' ' + b);
    });

    await render(hbs`
      {{#stylish-button type="wayra" border="thick" upperCase=true size="s" action=(action buttonAction 'Hello' 'World') }}Remove{{/stylish-button}}
    <div id="result">{{ result }}</div>`);

    await click('button');

    assert.dom('#result').hasText('Hello World');

  });

  test('should have a shape class', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.dom('.button--round-s').exists({ count: 1 });
  });

  test('should have a size class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.dom('.button--size-s').exists({ count: 1 });
  });

  test('should have a text width class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.dom('.button--text-thick').exists({ count: 1 });
  });

  test('should have a uppercase class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.dom('.button--text-upper').exists({ count: 1 });
  });

  test('should have an inverted class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thin" textWidth="thick" inverted=true text="Open Project"}}
    `
    );

    assert.dom('.button--inverted').exists({ count: 1 });
  });
});
