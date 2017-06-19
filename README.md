# ember-stylish-buttons

[![Build Status](https://travis-ci.org/rajasegar/ember-stylish-buttons.svg?branch=master)](https://travis-ci.org/rajasegar/ember-stylish-buttons) 
[![npm](https://img.shields.io/npm/dm/ember-stylish-buttons.svg)](https://www.npmjs.com/package/ember-stylish-buttons)
[![npm version](http://img.shields.io/npm/v/ember-stylish-buttons.svg?style=flat)](https://npmjs.org/package/ember-stylish-buttons "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


Some fresh styles & hover effects for the modern Ember button.

A collection of fresh button styles and effects for your Ember buttons. 
We use CSS transitions and pseudo-elements for most of the effects.

Drawing a great amount of inspiration from this Codrops [article](https://tympanus.net/codrops/2015/02/26/inspiration-button-styles-effects/)

## Demo
[Demo](http://ember-stylish-buttons.surge.sh)

<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/02/ButtonStyle_Itzel.gif"/>

## Installation
```shell
ember install ember-stylish-buttons
```

## Usage
```hbs
{{stylish-button type="winona" border="thin" shape="round-s"  text="Open Project"}}

{{#stylish-button type="wayra" border="thick" upperCase=true size="s" }}Remove{{/stylish-button}}

{{#stylish-button type="isi" textWidth="thick" upperCase=true size="s"}}
  <i class="button__icon icon icon-box"></i><span>Archive</span>
{{/stylish-button}}

{{stylish-button type="winona" border="thin" shape="round-s"  action=(action 'buttonAction') text="Open Project"}}
{{stylish-button type="winona" border="thin" shape="round-s"  action=(action 'buttonAction' 'Hello' 'World') text="Open Project"}}

```

## Properties
The **stylish-button** component takes the following list of properties to modify the styles and apperance of the button.

### type [String]
This parameter controls the overall style of the buttons.
Please find below the list of values it can take from the **Styles** section.

### action [Closure Action]
This parameter performs the click action with whatever action is passed along with parameters.
This is where you need to send your actions for the buttons.

### size [String]
This parameter controls the size of the button.
Possible values include:
- s => small
- m => medium
- l => large

### textWidth [String]
This parameter controls the bold property of the text in the button.
Possible values include:
- thin
- thick
- medium

### border [String]
This parameter controls the border thickness of the button.
Possible values include:
- thin
- thick

### upperCase [Boolean]
This parameter transforms the button text to uppercase.
Default value is **false**

### shape [String]
This parameter transforms the button to a pill shape with various border-radius dimensions.
Possible values include:
- round-s
- round-l
- round-m

## Styles
Ember stylish buttons come with about 18 different styles for button. 
Just give any one of the following values for the **type** attribute of the component.
- winona
- ujarak
- wayra
- tamaya
- rayen
- pipaluk
- moema
- isi
- aylen
- saqui
- wapasha
- nuka
- antiman
- itzel
- naira
- quidel
- sacnite
- shikoba


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
