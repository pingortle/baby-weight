import './weight-input.html'

Template.weightInput.viewmodel({
  value: 0,
  gramValue: function (grams) {
    if (_.isUndefined(grams)) {
      return this.value() / this.gramFactor()
    } else {
      this.value(grams * this.gramFactor())
      return grams
    }
  },
  autorun: [
    function () {
      const gramValue = this.gramValue()
      this.parent().gramValue(gramValue)
    },
    function () {
      const gramValue = this.parent().gramValue()

      if (!this.hasFocus.value) {
        const value = gramValue * this.gramFactor()
        this.value(value)
      }
    }
  ]
})
