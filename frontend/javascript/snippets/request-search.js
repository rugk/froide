function applyToForm (requestSearch) {
  function submitForm () {
    requestSearch.submit()
  }
  var inputs = requestSearch.querySelectorAll('select, input[type="date"]')
  var i
  for (i = 0; i < inputs.length; i += 1) {
    var selectInput = inputs[i]
    selectInput.addEventListener('change', submitForm)
  }

  function dropdownSubmit (input) {
    return function (e) {
      e.preventDefault()
      input.value = this.dataset.value
      requestSearch.submit()
    }
  }

  var dropdowns = requestSearch.querySelectorAll('.dropdown')
  for (i = 0; i < dropdowns.length; i += 1) {
    var dropdown = dropdowns[i]
    var input = dropdown.querySelector('input')
    var dropdownLinks = dropdown.querySelectorAll('.dropdown-menu a')
    for (var j = 0; j < dropdownLinks.length; j += 1) {
      var dropdownLink = dropdownLinks[j]
      dropdownLink.addEventListener('click', dropdownSubmit(input))
    }
  }
}

var requestSearch = document.querySelector('.request-search')
if (requestSearch !== null) {
  applyToForm(requestSearch)
}
