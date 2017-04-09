import { Mongo } from 'meteor/mongo'

class KennyWeightCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc
    ourDoc.createdAt = ourDoc.createdAt || new Date()
    return super.insert(ourDoc, callback)
  }
  latest() {
    return this.findOne({}, { sort: { createdAt: -1 } }) || { grams: 0 }
  }
}

export const KennyWeights = new KennyWeightCollection('kenny-weights')
