import { Meteor } from 'meteor/meteor';
import { Coffee } from './coffee';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertCoffee = new ValidatedMethod({
  name: 'coffee.insert',
  validate: CoffeeSchema.validator(),
  run(coffee) {
    // if (!this.userId) {
    //   throw new Meteor.Error('unauthorized', 'You must be logged in to add a new coffee!');
    // }

    Coffee.insert(coffee);
  },
});