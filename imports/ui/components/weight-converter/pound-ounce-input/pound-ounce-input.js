import '../weight-input'
import './pound-ounce-input.html'

const POUND_FACTOR = 0.00220462
const OUNCE_FACTOR = 0.035274
const OUNCES_IN_POUND = 16

Template.poundOunceInput.viewmodel({
  poundValue: 0,
  ounceValue: 0,
  hasFocus: function () {
    const hasFocus = this.poundInputHasFocus() || this.ounceInputHasFocus()
    return hasFocus
  },
  autorun: [
    function () {
      const gramValue = this.poundValue() / POUND_FACTOR + this.ounceValue() / OUNCE_FACTOR
      this.parent().gramValue(Math.round(gramValue))
    },
    function () {
      const gramValue = this.parent().gramValue()
      if (!this.hasFocus()) {
        const pounds = Math.floor(gramValue * POUND_FACTOR)
        this.poundValue(pounds)

        const ounces = Math.round(gramValue * OUNCE_FACTOR) % OUNCES_IN_POUND
        this.ounceValue(ounces)
      }
    },
    function () {
      const ounces = this.ounceValue()
      if (ounces >= OUNCES_IN_POUND) {
        this.ounceValue(ounces % OUNCES_IN_POUND)
        this.poundValue(this.poundValue.value + 1)
      }

      if (ounces < 0) {
        this.ounceValue(OUNCES_IN_POUND - 1)
        this.poundValue(this.poundValue.value - 1)
      }
    }
  ]
})
