'use strict';

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');

  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );

  document.querySelector('head').appendChild(msViewportStyle);
}

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';

Vue.use(VueResource);
Vue.use(VueValidator);

Vue.directive('ajax', {
  bind: function() {
    this.el.addEventListener('submit', this.onSubmit.bind(this));
  },
  onSubmit: function(e) {
    e.preventDefault();

    var firstName = this.el[1].value,
      lastName = this.el[2].value,
      emailAddress = this.el[3].value;

    Vue.http.post('/post', {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress
    }).then(function() {
      vm.$set('success', true);
    }, function(response) {
      vm.$set('errors', response.data.message);
    });
  },
  onComplete: function() {
    console.log('onComplete');
  }
});

var vm = new Vue({
  el: 'body',
  validators: {
    email: {
      message: 'is invalid.',
      check: function(str) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(str);
      }
    },
    minlength: {
      message: function() {
        return 'is too short.';
      },
      check: Vue.validator('minlength')
    },
    maxlength: {
      message: function() {
        return 'is too long.';
      },
      check: Vue.validator('maxlength')
    },
    required: {
      message: function() {
        return 'is required.';
      },
      check: Vue.validator('required')
    }
  },
  data: {
    errors: false,
    success: false,
    fields: [{
      label: 'First Name',
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      validate: {
        minlength: 2,
        maxlength: 100,
        required: true
      }
    }, {
      label: 'Last Name',
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      validate: {
        minlength: 2,
        maxlength: 100,
        required: true
      }
    }, {
      label: 'Email Address',
      id: 'emailAddress',
      name: 'emailAddress',
      type: 'email',
      validate: {
        minlength: 3,
        maxlength: 254,
        email: true,
        required: true
      }
    }]
  },
  http: {
    headers: {
      'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value
    }
  }
});
