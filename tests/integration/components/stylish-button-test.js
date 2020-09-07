import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | stylish button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#stylish-button}}
        template block text
      {{/stylish-button}}
    `);

    assert.ok(find('button'));
  });

  test('should have a default button class', async function(assert) {
    await render(hbs`
      {{#stylish-button}}
        template block text
      {{/stylish-button}}
    `);
    assert.ok(find('.button'));
  });

  test('should have a border class', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.ok(find('.button--border-thin'));
  });

  test('should render the text property', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.equal(find('button span').textContent.trim(), 'Open Project');
  });

  test('should render the block', async function(assert) {
    await render(
      hbs`{{#stylish-button type="wayra" border="thick" upperCase=true size="s" }}Open Project{{/stylish-button}}`
    );
    assert.equal(find('button').textContent.trim(), 'Open Project');
  });

  test('should perform the action when clicked', async function(assert) {
    this.set('result', '');
    this.set('buttonAction', () => {
      this.set('result', 'Hello World');
    });

    await render(hbs`
      <StylishButton @type="wayra" @border="thick" @upperCase=true @size="s" {{ on "click" this.buttonAction }}>Remove</StylishButton>
    <div id="result">{{ this.result }}</div>`);

    await click('button');

    assert.equal(find('#result').textContent.trim(), 'Hello World');

  });

  test('should have a shape class', async function(assert) {
    await render(hbs`{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}`);
    assert.ok(find('.button--round-s'));
  });

  test('should have a size class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.ok(find('.button--size-s'));
  });

  test('should have a text width class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.ok(find('.button--text-thick'));
  });

  test('should have a uppercase class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thick" shape="round-l" size="s" upperCase=true textWidth="thick" text="Open Project"}}`
    );

    assert.ok(find('.button--text-upper'));
  });

  test('should have an inverted class', async function(assert) {
    await render(
      hbs`{{stylish-button type="winona" border="thin" textWidth="thick" inverted=true text="Open Project"}}
    `
    );

    assert.ok(find('.button--inverted'));
  });
});
