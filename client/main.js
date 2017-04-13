import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Tracker } from 'meteor/tracker'

import '/imports/ui/components/weight-converter'
import '/imports/ui/components/kenny-weight'

import { KennyWeights } from '/imports/collections/kenny-weights'

Tracker.autorun(() => document.title = `Baby Weight - Latest: ${ KennyWeights.latest().grams }`)
