window.onload = function () {
    changeTitle();

    hover10010();

    vidiMapu();

    animate2("party", "PARTY", "// PARTY /");
    animate2("kadaJeRodj", "> Do 18-og novembra u 20h <", "< Do 18-og novembra u 20h >");

    updateTime();

    /* setTimeout(function(){
        alert("Molim te da mi javiš da li si u mogućnosti da dođeš")
    }, 10000) */
}

function updateTime() {
    var timeInterval = setInterval(function() {
        var date = moment('2018.11.18 20:00:00', 'YYYY.MM.DD HH:mm:ss');
        var now = moment();
    
        document.getElementById("counter").innerHTML = moment(date - now).format('DD [ dana ] HH:mm:ss');
    })
}

function hover10010() {
    var div = document.getElementById("number");
    var inner = document.getElementById("numberInner");
    var flag = false;
    div.addEventListener("mouseenter", function () {
        inner.innerHTML = "18-ti";
        flag = true;
    }, true)
    div.addEventListener("mouseout", function () {
        inner.innerHTML = "10010-ti";
        flag = false;
    }, true)
    div.onclick = function () {
        console.log("clicked")
        if (flag) {
            inner.innerHTML = "10010-ti";
            flag = !flag;
        }
        else {
            inner.innerHTML = "18-ti";
            flag = !flag;
        }
    }
}

function changeTitle() {
    var currentText;
    var a = "Pozivnica za 10010 | @mikac_inc"
    var b = "Pozivnica za 18 | @mikac_inc"
    var interval = setInterval(function () {
        currentText = a
        var timeout = setTimeout(function () {
            currentText = b
            document.title = currentText;
        }, 500)
        document.title = currentText;
    }, 1000)
}

function vidiMapu() {
    document.getElementById("mapa").addEventListener("click", function () {
        window.open("https://www.google.com/maps/place/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0+%D0%9A%D0%BB%D1%83%D0%B1/@43.3200613,21.8983783,17z/data=!4m5!3m4!1s0x4755b0b728c937f1:0xa5847df81f609354!8m2!3d43.3197491!4d21.8997193?hl=sr", '_blank');
    }, true)
}

function party() {
    /* var text = "ARTY"
	var i = 0
	var intervalParty = setInterval(function() {
			document.getElementById("party").appendChild(document.createTextNode(text[i]))
			i+=1
			if(i>text.length){
				document.getElementById("party").innerHTML = "P"
				i = 0
			}
    }, 500) */
}

function animate2(id, first, second) {
    var s = document.getElementById(id).innerHTML
    var a = first
    var b = second
    var interval = setInterval(function () {
        s = a
        var timeout = setTimeout(function () {
            s = b
            document.getElementById(id).innerHTML = s
        }, 500)
        document.getElementById(id).innerHTML = s
    }, 1000)
}