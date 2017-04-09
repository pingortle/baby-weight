import { Meteor } from 'meteor/meteor'
import { KennyWeights } from '/imports/collections/kenny-weights'

const MAX_LIMIT = 25
const DEFAULT_LIMIT = 1

Meteor.publish('kenny-weights', function (limit) {
  limit = limit > MAX_LIMIT ? MAX_LIMIT : limit || DEFAULT_LIMIT
  return KennyWeights.find({}, { sort: { createdAt: -1 }, limit: limit })
})
