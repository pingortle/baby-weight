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
      if (!this.hasFocus()) {
        const value = this.parent().gramValue() * this.gramFactor()
        console.log(`weightInput - setting value: ${value}`)
        this.value(value)
      }
    }
  ]
})
