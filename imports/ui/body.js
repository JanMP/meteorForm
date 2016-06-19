import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import { Coffee } from '../api/coffee/coffee.js';
import '../api/coffee/methods.js';

import './body.html';

// autoform wants either the collection in window scope or from a helper that returns the collection. Since global scope is not the way to go anymore (and wasn't a good idea in the first place) we use the helper.
Template.body.helpers({
  Coffee() { return Coffee; }
})
