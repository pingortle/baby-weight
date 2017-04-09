import './weight-input.html'

Template.weightInput.viewmodel({
  value: 0,
  hasFocus: false,
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
      console.log(`weightInput - setting parent gramValue: ${gramValue}`)
      this.parent().gramValue(gramValue)
    },
    function () {
      const gramValue = this.parent().gramValue()
      if (!this.hasFocus.value) {
        const value = gramValue * this.gramFactor()
        console.log(`weightInput - setting value: ${value}`)
        this.value(value)
      }
    }
  ]
})
