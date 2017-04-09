import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { KennyWeights } from '/imports/collections/kenny-weights'

Meteor.methods({
  updateKennyWeight(grams) {
    check(parseInt(grams), Number)
    KennyWeights.insert({ grams: grams })
  }
})
