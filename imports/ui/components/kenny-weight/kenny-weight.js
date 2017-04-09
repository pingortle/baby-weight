import { Meteor } from 'meteor/meteor'
import { KennyWeights } from '/imports/collections/kenny-weights'
import './kenny-weight.html'

Template.kennyWeight.viewmodel({
  grams: 0,
  subscriptions: [],
  latestWeight: function () {
    return KennyWeights.latest()
  },
  updatedAt: function () {
    return moment(this.latestWeight().createdAt).format('MM/DD/YYYY, h:mm:ss a')
  },
  weightConverter: function () {
    return ViewModel.findOne('weightConverter')
  },
  convertWeight: function () {
    this.weightConverter().gramValue(this.grams())
  },
  gramsChanged: function () {
    Meteor.call('updateKennyWeight', this.grams(), console.log)
  },
  autorun: function () {
    const grams = this.latestWeight().grams
    this.grams(grams)
  },
  onCreated: function () {
    this.subscriptions().push(Meteor.subscribe('kenny-weights'))
  },
  onDestroyed: function () {
    this.subscriptions().forEach((sub) => sub.stop())
    this.subscriptions.clear()
  }
})
