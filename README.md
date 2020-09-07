# ember-stylish-buttons

![Build and Deploy](https://github.com/rajasegar/ember-stylish-buttons/workflows/CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-stylish-buttons/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-stylish-buttons?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-stylish-buttons.svg?style=flat)](https://npmjs.org/package/ember-stylish-buttons "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-stylish-buttons.svg?branch=master)](http://emberobserver.com/addons/ember-stylish-buttons)

Some fresh styles & hover effects for the modern Ember button.

A collection of fresh button styles and effects for your Ember buttons. 
We use CSS transitions and pseudo-elements for most of the effects.

Drawing a great amount of inspiration from this Codrops [article](https://tympanus.net/codrops/2015/02/26/inspiration-button-styles-effects/)

## Demo

[Demo](https://rajasegar.github.io/ember-stylish-buttons/)

Play with different options for the component and customize and get the template code to use in your application.
[Playground](https://rajasegar.github.io/ember-stylish-buttons/#/playground)

<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/02/ButtonStyle_Itzel.gif"/>

## Installation

```shell
ember install ember-stylish-buttons
```

## Usage

```hbs
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Open Project" />

<StylishButton @type="wayra" @border="thick" @upperCase={{true}} @size="s">Remove</StylishButton>

<StylishButton @type="isi" @textWidth="thick" @upperCase={{true}} @size="s">
  <i class="button__icon icon icon-box"></i><span>Archive</span>
</StylishButton>
```

## Properties

The **stylish-button** component takes the following list of properties to modify the styles and apperance of the button.

### type [String]

This parameter controls the overall style of the buttons.
Please find below the list of values it can take from the **Styles** section.

```hbs
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Open Project" />
```

### action [Closure Action]

This parameter performs the click action with whatever action is passed along with parameters.
This is where you need to send your actions for the buttons.

```hbs
<StylishButton @type="winona" @border="thin" @shape="round-s" @action={{action "buttonAction"}} @text="Open Project" />
<StylishButton @type="winona" @border="thin" @shape="round-s" @action={{action "buttonAction" "Hello" "World"}} @text="Open Project" />
```

### size [String]

This parameter controls the size of the button.
Possible values include:

-   s => small
-   m => medium
-   l => large

```hbs
<StylishButton @type="wayra" @border="thick" @upperCase={{true}} @size="s">Remove</StylishButton>
```

### textWidth [String]

This parameter controls the bold property of the text in the button.
Possible values include:

-   thin
-   thick
-   medium

```hbs
<StylishButton @type="isi" @textWidth="thick" @upperCase={{true}} @size="s">
  <i class="button__icon icon icon-box"></i><span>Archive</span>
</StylishButton>
```

### border [String]

This parameter controls the border thickness of the button.
Possible values include:

-   thin
-   thick

```hbs
<StylishButton @type="ujarak" @border="thin" @textWidth="thick" @text="Publish" />
```

### upperCase [Boolean]

This parameter transforms the button text to uppercase.
Default value is **false**

```hbs
<StylishButton @type="ujarak" @border="thick" @upperCase={{true}} @size="s" @inverted={{true}} @textWidth="thick" @text="Publish" />
```

### shape [String]

This parameter transforms the button to a pill shape with various border-radius dimensions.
Possible values include:

-   round-s
-   round-l
-   round-m

```hbs
<StylishButton @type="winona" @border="thick" @shape="round-l" @size="s" @upperCase={{true}} @textWidth="thick" @text="Open Project" />
```

### customClasses [String(s)]

This parameter adds your custom classnames to the component class list.
It is useful to override the styles with your own classnames.

```hbs
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Primary" @customClasses="btn-primary" />
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Success" @customClasses="btn-success" />
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Info" @customClasses="btn-info" />
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Warning" @customClasses="btn-warning" />
<StylishButton @type="winona" @border="thin" @shape="round-s" @text="Danger" @customClasses="btn-danger" />

```

## Styles

Ember stylish buttons come with about 18 different styles for button. 
Just give any one of the following values for the **type** attribute of the component.

-   winona (default)
-   ujarak
-   wayra
-   tamaya
-   rayen
-   pipaluk
-   moema
-   isi
-   aylen
-   saqui
-   wapasha
-   nuka
-   antiman
-   itzel
-   naira
-   quidel
-   sacnite
-   shikoba

## Configuring

Add a configuration for `ember-stylish-buttons` to include only the themes that you will use.

```js
ENV['ember-stylish-buttons'] = {
  includedThemes: ['winona', 'ujarak', 'shikoba'],
  excludedThemes: ['wapasha'],
  excludeBaseStyles: false, // defaults to false
  defaultTheme: 'winona',    // defaults to 'winona'
};
```

To exclude or not include a theme, means that it's css styles will not be bundled with your application, thus not polluting your app.

> **Note:** including a blank array e.g. `includeThemes: []` will not include any themes, leaving
> you to define your own theme styles. See the `vendor/ember-stylish-buttons/themes` directory
> for reference.

> **Note:** you may also want to set `excludeBaseStyles: true` so that this addon doesn't include the styles
> used by all the themes.

A big Thanks to [Ilya Radchenko](https://github.com/knownasilya) for making this configuration possible to have
a small memory footprint of css in your app when you are using the addon.

## Running

-   `ember serve`
-   Visit your app at <http://localhost:4200>.

## Running Tests

-   `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
-   `ember test`
-   `ember test --server`

## Building

-   `ember build`

For more information on using ember-cli, visit <https://ember-cli.com/>.

## Credits

-   [Mary Lou](https://github.com/crnacura)
-   [Ilya Radchenko](https://github.com/knownasilya)
