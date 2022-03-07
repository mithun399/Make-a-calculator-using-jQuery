function insertNumber(number) {
    var existingNumbers = $('#result').val()
    $('#result').val(existingNumbers + number)
}

function clearResult() {
    $('#result').val('')
}

function calculate() {
    var result = eval($('#result').val())
    $('#result').val(result)
}

function deleteNumbers() {
    var number = $('#result').val()
    if (number != '') {
        $('#result').val($('#result').val().slice(0, -1))
    }
}