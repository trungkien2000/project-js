test1Day = function() {
    var day = '';
    for (var i = 1; i <= 31; i++) {
        day = '<option value="' + i + '">' + i + '</option>';
        document.write(day);
    }
}

test1Month = function() {
    var month = '';
    for (var i = 1; i <= 12; i++) {
        month = '<option value="' + i + '">' + i + '</option>';
        document.write(month);
    }
}

test1Year = function() {
    var year = '';
    for (var i = 1980; i <= 2020; i++) {
        year = '<option value="' + i + '">' + i + '</option>';
        document.write(year);
    }
}

test2Submit = function() {
    if (!test2CheckNumber()) {
        alert('Hãy nhập số!')
    }
    var x = document.getElementById("xvalue").value;
    var y = document.getElementById("yvalue").value;
    var result = Number(x) + Number(y);
    document.getElementById('svalue').value = result;
}

test2CheckNumber = function() {
    var x = document.getElementById("xvalue").value;
    var y = document.getElementById("yvalue").value;
    if (Number(x) != x || Number(y) != y) {
        return false;
    }
    return true;
}

test3Bold = function() {
    var text = document.getElementById('test3Text').value;
    var out = document.getElementById('test3Output');
    out.style.fontWeight = "bold";
    out.innerHTML = text;
}

test4ChangeColor = function() {
    var r = 0;
    var g = 0;
    var b = 0;
    var randomColor = '';
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('test4Text').style.color = randomColor;
}

test5Start = function() {
    var count = 0;
    setInterval(function() {
        count++;
        document.getElementById('test5Output').value = count;
    }, 1000);
}

test5Stop = function() {

}