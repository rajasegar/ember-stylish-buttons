'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/playground.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/playground.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/playground.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/playground.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/stylish-button-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('stylish-button', 'Integration | Component | stylish button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });


    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZDWq5w7m",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"stylish-button\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$('button').length, 1);
  });

  (0, _emberQunit.test)('should have a default button class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "ZDWq5w7m",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"stylish-button\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.button').length, 1);
  });

  (0, _emberQunit.test)('should have a border class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "tScRV+Ng",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"text\"],[\"winona\",\"thin\",\"round-s\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.button--border-thin').length, 1);
  });

  (0, _emberQunit.test)('should render the text property', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "tScRV+Ng",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"text\"],[\"winona\",\"thin\",\"round-s\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('button span').text().trim(), "Open Project");
  });

  (0, _emberQunit.test)('should render the block', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "aNvNEba8",
      "block": "{\"statements\":[[6,[\"stylish-button\"],null,[[\"type\",\"border\",\"upperCase\",\"size\"],[\"wayra\",\"thick\",true,\"s\"]],{\"statements\":[[0,\"Open Project\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('button').text().trim(), "Open Project");
  });

  (0, _emberQunit.test)('should perform the action when clicked', function (assert) {
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });

    this.render(Ember.HTMLBars.template({
      "id": "qhunoHzB",
      "block": "{\"statements\":[[0,\"\\n    \"],[6,[\"stylish-button\"],null,[[\"type\",\"border\",\"upperCase\",\"size\",\"action\"],[\"wayra\",\"thick\",true,\"s\",[33,[\"action\"],[[28,[null]],[28,[\"buttonAction\"]],\"Hello\",\"World\"],null]]],{\"statements\":[[0,\"Remove\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"div\",[]],[15,\"id\",\"result\"],[13],[1,[26,[\"result\"]],false],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    this.$('button').click();

    assert.equal(this.$('#result').text(), 'Hello World');
  });

  (0, _emberQunit.test)('should have a shape class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "tScRV+Ng",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"text\"],[\"winona\",\"thin\",\"round-s\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.button--round-s').length, 1);
  });

  (0, _emberQunit.test)('should have a size class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "6zcwqDw5",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"size\",\"upperCase\",\"textWidth\",\"text\"],[\"winona\",\"thick\",\"round-l\",\"s\",true,\"thick\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$('.button--size-s').length, 1);
  });

  (0, _emberQunit.test)('should have a text width class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "6zcwqDw5",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"size\",\"upperCase\",\"textWidth\",\"text\"],[\"winona\",\"thick\",\"round-l\",\"s\",true,\"thick\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$('.button--text-thick').length, 1);
  });

  (0, _emberQunit.test)('should have a uppercase class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "6zcwqDw5",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"shape\",\"size\",\"upperCase\",\"textWidth\",\"text\"],[\"winona\",\"thick\",\"round-l\",\"s\",true,\"thick\",\"Open Project\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$('.button--text-upper').length, 1);
  });

  (0, _emberQunit.test)('should have an inverted class', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "wM7MKcRw",
      "block": "{\"statements\":[[1,[33,[\"stylish-button\"],null,[[\"type\",\"border\",\"textWidth\",\"inverted\",\"text\"],[\"winona\",\"thin\",\"thick\",true,\"Open Project\"]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$('.button--inverted').length, 1);
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/stylish-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stylish-button-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
