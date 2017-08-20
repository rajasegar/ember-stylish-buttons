/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-stylish-buttons',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if(target.app) {
      target = target.app;
    }

    this.app = target;

    // Use configuration  to decide which theme css files
    // to import, thus not populating the user's app
    this.importThemes(target);
    this._super.included.apply(this, arguments);
  },

  importThemes: function(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-stylish-buttons'] || {};
    var themes = [];
    var excludedBaseStyles = false;

    if(config) {
      var allThemes = [
        'antiman',
        'aylen',
        'isi',
        'itzel',
        'moema',
        'naira',
        'nina',
        'nuka',
        'pipaluk',
        'quidel',
        'rayen',
        'sacnite',
        'saqui',
        'shikoba',
        'tamaya',
        'ujarak',
        'wapasha',
        'wayra',
        'winona'
      ];
      var included = config.includedThemes;
      var excluded = config.excludedThemes;

      excludedBaseStyles = config.excludeBaseStyles || false;

      if(included && Array.isArray(included)) {
        themes = themes.concat(included);
      } else {
        themes = allThemes;
      }

      if(excluded && Array.isArray(excluded)) {
        themes = themes.filter(function(theme) {
          return excluded.indexOf(theme) === -1;
        });
      }

      themes = themes.filter(function(theme) {
        return theme && allThemes.indexOf(theme) !== -1;
      });
    }

    if(!excludedBaseStyles) {
      app.import('vendor/ember-stylish-buttons/base.css');
    }

    themes = themes.length ? themes : ['winona'];

    themes.forEach(function(theme) {
      app.import('vendor/ember-stylish-buttons/themes/' + theme + '.css');
    });
  }
};
