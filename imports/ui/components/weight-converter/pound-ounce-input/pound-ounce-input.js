import '../weight-input'
import './pound-ounce-input.html'

Template.poundOunceInput.viewmodel({
  gramValue: 0,
  // gramValue: function (value) {
  //   if(_.isUndefined(value))
  //   {
  //     console.log(this.poundInput(), this)
  //     const gramValue = this.poundInput().gramValue() + this.ounceInput().gramValue()
  //     console.log(`retreiving gramValue ${gramValue}`)
  //     return gramValue
  //   }
  // },
  hasFocus: function () {
    const hasFocus = this.poundInput().hasFocus() || this.ounceInput().hasFocus()
    console.log(`retreiving hasFocus ${hasFocus}`)
    return hasFocus
  },
  poundInput: function () {
    console.log('retreiving poundInput')
    return _(this.children()).first()
  },
  ounceInput: function () {
    console.log('retreiving ounceInput')
    return _(this.children()).last()
  },
  autorun: [
    function () {
      const gramValue = this.poundInput().gramValue() + this.ounceInput().gramValue()
      console.log(`setting parent gramValue: ${gramValue}`)
      this.parent().gramValue(gramValue)
    },
    function () {
      const gramValue = this.parent().gramValue()
      if (!this.hasFocus()) {
        const pounds = Math.floor(gramValue * this.poundInput().gramFactor())
        console.log(`setting pounds: ${pounds}`)
        this.poundInput().value(pounds)

        const ounces = gramValue * this.ounceInput().gramFactor() % 16
        console.log(`setting ounces: ${ounces}`)
        this.ounceInput().value(ounces)
      }
    }
  ]
})
