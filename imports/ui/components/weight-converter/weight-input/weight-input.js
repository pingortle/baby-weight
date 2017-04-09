import './weight-input.html'

Template.weightInput.viewmodel({
  value: 0,
  hasFocus: false,
  gramValue: function () {
    return this.value() / this.gramFactor()
  },
  autorun: [
    function () {
      const gramValue = this.gramValue()
      this.parent().gramValue(gramValue)
    },
    function () {
      if (!this.hasFocus()) {
        const value = this.parent().gramValue() * this.gramFactor()
        this.value(value)
      }
    }
  ]
})
