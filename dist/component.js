/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-scaleway/component', ['exports', 'ember', 'shared/components/node-driver/driver-scaleway/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-scaleway/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-scaleway/template'], function (exports, _ember, _uiMixinsDriver, _template) {

  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: 'scaleway',
    config: alias('model.scalewayConfig'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type        : 'scalewayConfig',
        commercialType: 'VC1S',
        region: 'AMS1',
        name: '',
        debug: false,
        image: 'ubuntu-xenial',
        ip: '',
        ipv6: false,
        organization: '',
        token: '',
        volumes: ''
      });

      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        'scalewayConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      if (!this.get('model.scalewayConfig.commercialType') ) {
        errors.push('Specifying a scaleway Instance Type is required');
      }

      if (!this.get('model.scalewayConfig.organization') ) {
        errors.push('Specifying a scaleway Organization is required');
      }

      if (!this.get('model.scalewayConfig.token') ) {
        errors.push('Specifying a scaleway Token is required');
      }

      if (!this.get('model.scalewayConfig.image') ) {
        errors.push('Specifying a scaleway Image is required');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("shared/components/node-driver/driver-scaleway/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"jnbtuCTY","block":"{\"symbols\":[],\"statements\":[[6,\"section\"],[9,\"class\",\"horizontal-form\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n    \"],[12,\"host/add-common\",[]],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"over-hr r-mt20 r-mb20\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"API Access\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Organization\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Scaleway Organization ID\",[20,[\"model\",\"scalewayConfig\",\"organization\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Token\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Scaleway API Token\",[20,[\"model\",\"scalewayConfig\",\"token\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"over-hr r-mt20 r-mb20\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Instance\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Instance Name\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Optionally specify the instance name\",[20,[\"model\",\"scalewayConfig\",\"name\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Region\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the location (par1,ams1)\",[20,[\"model\",\"scalewayConfig\",\"region\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Image\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the image\",[20,[\"model\",\"scalewayConfig\",\"image\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Type\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Specify the commercial type\",[20,[\"model\",\"scalewayConfig\",\"commercialType\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Additional Volumes\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Attach additional volume (e.g., 50G)\",[20,[\"model\",\"scalewayConfig\",\"volumes\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"over-hr r-mt20 r-mb20\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Network\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n         \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n           \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"IP Address\"],[8],[0,\"\\n         \"],[8],[0,\"\\n         \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Optionally specify the IP Address\",[20,[\"model\",\"scalewayConfig\",\"ip\"]]]]],false],[0,\"\\n         \"],[8],[0,\"\\n         \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n           \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"IPv6\"],[8],[0,\"\\n         \"],[8],[0,\"\\n         \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"model\",\"scalewayConfig\",\"ipv6\"]]]]],false],[0,\"\\n         \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"over-hr r-mt20 r-mb20\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Debug\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row form-group\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-2 form-label\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"form-control-static\"],[7],[0,\"Enable Debugging\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"model\",\"scalewayConfig\",\"debug\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[0,\"    \"],[12,\"host/add-options\",[]],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[0,\"  \"],[1,[25,\"top-errors\",null,[[\"errors\"],[[20,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[0,\"  \"],[1,[25,\"save-cancel\",null,[[\"save\",\"cancel\"],[\"save\",\"cancel\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}","meta":{}});;

});
