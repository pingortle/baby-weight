import './weight-input.html'

Template.weightInput.viewmodel({
  value: 0,
  hasFocus: false,
  valueChanged: function () {
    const gramValue = this.value() / this.gramFactor()
    this.parent().gramValue(gramValue)
  },
  autorun: [
    function () {
      if (this.hasFocus()) {
        this.parent().focusedInput(this.vmId)
      }
    },
    function () {
      const gramValue = this.value() / this.gramFactor()
      this.parent().gramValue(gramValue)
    },
    function () {
      if (this.parent().focusedInput() !== this.vmId) {
        const value = this.parent().gramValue() * this.gramFactor()
        this.value(value)
      }
    },
  ]
})
