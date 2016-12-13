var test_date = [false, false, false, false, false]; //data but error
var test_lang = [false, false, false, false, false, false, false];

function func(str)
{
	var ln = document.getElementById(str);
	//var r = /[a-zA-Z]/i;
	var r1 = /[^\sa-zA-Zа-яА-Яії'-]/i;
	var r2 = /[^\s]/i;

	if(ln.value == "")
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";

		if(str == "first_name")
			test_date[0] = false;

		if(str == "last_name")
			test_date[1] = false;

		return;
	}

	if(r1.test(ln.value))
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";

		if(str == "first_name")
			test_date[0] = false;

		if(str == "last_name")
			test_date[1] = false;

		return;
	}
	else
	{
	  if(r2.test(ln.value)){

	  }
	  else{
	    		document.getElementById(str).style.backgroundColor = "#FE2E2E";

  		if(str == "first_name")
  			test_date[0] = false;

  		if(str == "last_name")
  			test_date[1] = false;

  		return;
	  }

	}

	document.getElementById(str).style.backgroundColor = "#58FA58";

	if(str == "first_name")
		test_date[0] = true;

	if(str == "last_name")
		test_date[1] = true;
}

function func_date_test(str)
{
	var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var ln = document.getElementById(str);
	var iter = 0;

	for(var k in ln.value)
	{
		if(ln.value[k] == ".")
			iter+=1;
	}

	if(iter != 2)
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";
		test_date[2] = false;
		return;
	}

	var arr = ln.value.split('.');
	var i = 0;

	for(var k in arr)
	{
		var n = Number(arr[k]);
		var s1 = String(n);

		if(s1 == "NaN")
		{
			document.getElementById(str).style.backgroundColor = "#FE2E2E";
			test_date[2] = false;
			return;
		}
		else
		{
			if(n <= 0){
				document.getElementById(str).style.backgroundColor = "#FE2E2E";
				test_date[2] = false;
				return;
			}

			if(k == 1)
			{
				if(n > 12)
				{
					document.getElementById(str).style.backgroundColor = "#FE2E2E";
					test_date[2] = false;
					return;
				}

				var nn = Number(arr[0]);

				if(nn > month[n-1])
				{
					document.getElementById(str).style.backgroundColor = "#FE2E2E";
					test_date[2] = false;
					return;
				}
			}

			if(k == 2 )
			{
				if(n > 2015 || n < 1900)
				{
					document.getElementById(str).style.backgroundColor = "#FE2E2E";
					test_date[2] = false;
					return;
				}
			}
		}
	}

	document.getElementById(str).style.backgroundColor = "#58FA58";
	test_date[2] = true;
}

function func_email_test(str)
{
	var ln = document.getElementById(str);
	var r = /[@]/i;
	var r1 = /[.]/i;
	var r2 = /[^a-z]/i;

	if(ln.value == "")
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";
		test_date[3] = false;
		return;
	}

	if(r.test(ln.value))
	{
		var iter = 0;

		for(var k in ln.value)
		{
			if(ln.value[k] == "@")
				iter+=1;
		}

		if(iter > 1)
		{
			document.getElementById(str).style.backgroundColor = "#FE2E2E";
			test_date[3] = false;
			return;
		}

		var arr = ln.value.split('@');

		if(r1.test(arr[1]))
		{
			iter = 0;

			for(var k in arr[1])
			{
				if(arr[1][k] == ".")
					iter+=1;
			}

			if(iter > 1)
			{
				document.getElementById(str).style.backgroundColor = "#FE2E2E";
				test_date[3] = false;
				return;
			}

			var arr1 = arr[1].split('.');

			var rrr = /[\s]/i;
			var rrr1 = /[^a-zA-Z]/i;

			if(rrr.test(arr1[0]))
			{
				document.getElementById(str).style.backgroundColor = "#FE2E2E";
				test_date[3] = false;
				return;
			}

			if(rrr1.test(arr1[0]))
			{
				document.getElementById(str).style.backgroundColor = "#FE2E2E";
				test_date[3] = false;
				return;
			}

			if(r2.test(arr1[1]))
			{
				document.getElementById(str).style.backgroundColor = "#FE2E2E";
				test_date[3] = false;
				return;
			}
			else
			{
				document.getElementById(str).style.backgroundColor = "#58FA58";
				test_date[3] = true;
			}
		}
		else
		{
			document.getElementById(str).style.backgroundColor = "#FE2E2E";
			test_date[3] = false;
			return;
		}
	}
	else
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";
		test_date[3] = false;
		return;
	}

	document.getElementById(str).style.backgroundColor = "#58FA58";
	test_date[3] = true;
}

function func_comment_test(str)
{
	var ln = document.getElementById(str);
	var msy = document.getElementById('msy');
  var r2 = /[^\s]/i;

  if(r2.test(ln.value)){
  }else{
    document.getElementById(str).style.backgroundColor = "#FE2E2E";
		test_date[4] = false;
    return;
  }

	if(ln.value == "")
	{
		document.getElementById(str).style.backgroundColor = "#FE2E2E";
		test_date[4] = false;
		msy.style.display = "none";
	}
	else
	{
		document.getElementById(str).style.backgroundColor = "#58FA58";
		test_date[4] = true;
		var i = 0;

		for(var j in ln.value){
		  i++;
		}

		msy.style.display = "block";

		if(i !== 0){
		  msy.innerHTML = "\n  Залишилось символів:\n  " + (200 - i);
		}

		if(200 - i == 0){
		  msy.innerHTML = "\n  Більше символів ввести не можна!";
		}


	}
}

function func_comment(str){

  var ln = document.getElementById(str);
  var msy = document.getElementById('msy');
  var i = 0;

  msy.innerHTML = "\n  Залишилось символів:\n  " + (500 - i);
  var r2 = /[^\s]/i;

  if(ln.value != "")
    if(r2.test(ln.value)){
    }else{
      msy.innerHTML = "\n  Пробіли не підходять!";
      return;
    }



	for(var j in ln.value){
		i++;
	}

	msy.style.display = "block";
	if(i !== 0){
		msy.innerHTML = "\n  Залишилось символів:\n  " + (500 - i);
	}

	if(500 - i == 0){
		msy.innerHTML = "\n  Більше символів ввести не можна!";
	}
}

function func_chbox(str)
{
	if(str == 0)
		var cb = document.getElementById("chbox1");
	if(str == 1)
		var cb = document.getElementById("chbox2");
	if(str == 2)
		var cb = document.getElementById("chbox3");
	if(str == 3)
		var cb = document.getElementById("chbox4");
	if(str == 4)
		var cb = document.getElementById("chbox5");
	if(str == 5)
		var cb = document.getElementById("chbox6");
	if(str == 6)
		var cb = document.getElementById("chbox7");

	if(cb.checked == true)
	{
		test_lang[str] = true;
	}
	else
	{
		test_lang[str] = false;
	}
}

function func_chbox1(str)
{
	if(str == 0)
		var cb = document.getElementById("chbox1");
	if(str == 1)
		var cb = document.getElementById("chbox2");
	if(str == 2)
		var cb = document.getElementById("chbox3");
	if(str == 3)
		var cb = document.getElementById("chbox4");
	if(str == 4)
		var cb = document.getElementById("chbox5");
	if(str == 5)
		var cb = document.getElementById("chbox6");
	if(str == 6)
		var cb = document.getElementById("chbox7");

	if(test_lang[str] == true)
	{
		test_lang[str] = false;
		cb.checked = false;
	}
	else
	{
		test_lang[str] = true;
		cb.checked = true;
	}
}

function f()
{
	func("first_name");
	func("last_name");
	func_date_test("date");
	func_email_test("email");
	func_comment_test("com");
	func_chbox(0);
	func_chbox(1);
	func_chbox(2);
	func_chbox(3);
	func_chbox(4);
	func_chbox(5);
	func_chbox(6);

	for(var i in test_date)
	{
		if(test_date[i] == false)
		{
			alert("Ви погано заповнили!");
			return;
		}
	}

	var iter = 0;

	for(var i in test_lang)
	{
		if(test_lang[i] == true)
		{
			iter+=1;
		}
	}

	if(iter == 0)
	{
		alert("Ви не вибрали мову!");
		return;
	}

	var obj = {
			first_name: document.getElementById('first_name').value,
			last_name: 	document.getElementById('last_name').value,
			date: 		document.getElementById('date').value,
			email: 		document.getElementById('email').value,
			com: 		document.getElementById('com').value,
			l1: test_lang[0],
			l2: test_lang[1],
			l3: test_lang[2],
			l4: test_lang[3],
			l5: test_lang[4],
			l6: test_lang[5],
			l7: test_lang[6]
		},
		objStringified = JSON.stringify(obj),
		objStringifiedAndEncoded = encodeURIComponent(objStringified);

	location.href = "1.html?"+objStringifiedAndEncoded;
}



//-------------------------------------------------------------
var arr1 = new Array();

function load_body(arr)
{
	var div0 = document.getElementById('pic1');
	var div1 = document.getElementById('pic11');
	var div2 = document.getElementById('pic12');
	var div3 = document.getElementById('pic13');

	arr1 = arr;

	div0.style.background = 'url(' + arr[0] + ')';
	div1.style.background = 'url(' + arr[1] + ')';
	div2.style.background = 'url(' + arr[2] + ')';
	div3.style.background = 'url(' + arr[3] + ')';

	div0.style.backgroundSize = "cover";
	div1.style.backgroundSize = "cover";
	div2.style.backgroundSize = "cover";
	div3.style.backgroundSize = "cover";
}

function f1(i)
{
	var div0 = document.getElementById('pic1');
	var div1 = document.getElementById('pic11');
	var div2 = document.getElementById('pic12');
	var div3 = document.getElementById('pic13');

	var ttt = arr1[i];
	arr1[i] = arr1[0];
	arr1[0] = ttt;

	div0.style.background = 'url(' + arr1[0] + ')';
	div1.style.background = 'url(' + arr1[1] + ')';
	div2.style.background = 'url(' + arr1[2] + ')';
	div3.style.background = 'url(' + arr1[3] + ')';

	div0.style.backgroundSize = "cover";
	div1.style.backgroundSize = "cover";
	div2.style.backgroundSize = "cover";
	div3.style.backgroundSize = "cover";
}

function but1(ii)
{
	var div0 = document.getElementById('pic1');
	var div1 = document.getElementById('pic11');
	var div2 = document.getElementById('pic12');
	var div3 = document.getElementById('pic13');

	if(ii == 1)
	{
		var ttt1 = arr1[3];
		arr1[3] = arr1[2];
		arr1[2] = arr1[1];
		arr1[1] = arr1[0];
		arr1[0] = ttt1;
	}

	if(ii == 2)
	{
		var ttt2 = arr1[0];
		arr1[0] = arr1[1];
		arr1[1] = arr1[2];
		arr1[2] = arr1[3];
		arr1[3] = ttt2;
	}

	div0.style.background = 'url(' + arr1[0] + ')';
	div1.style.background = 'url(' + arr1[1] + ')';
	div2.style.background = 'url(' + arr1[2] + ')';
	div3.style.background = 'url(' + arr1[3] + ')';

	div0.style.backgroundSize = "cover";
	div1.style.backgroundSize = "cover";
	div2.style.backgroundSize = "cover";
	div3.style.backgroundSize = "cover";
}

//-------------------------------------------------------------
function but_try()
{
	var t = document.getElementById('text1');

	if(t.value == '')
	{
		alert("Error! введіть число!!!");
		return;
	}
	var n = 0.0;
	var tt = /[,]/i;

	if(tt.test(t.value))
	{
		var arr = t.value.split(',');
		var sss = arr[0] + "." + arr[1];

		n = Number(sss);

		var s1 = String(n);

		if(s1 == "NaN")
			alert("error");
		else
			alert("good");
	}
	else
	{
		n = Number(t.value);

		var s = String(n);

		if(s == "NaN")
			alert("error");
		else
			alert("good");
	}

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==
function func1(str){
    var u = document.getElementsByClassName('ul111');


    if(str == "true") {
        if (u[0].style.display == "" || u[0].style.display == "none") {

            u[0].style.display = "block";

            return;
        }

        if (u[0].style.display == "block") {

            u[0].style.display = "none";
            return;
        }
    }
    else{
        if(str == "true1") {
            if (u[1].style.display == "" || u[1].style.display == "none") {

                u[1].style.display = "block";

                return;
            }

            if (u[1].style.display == "block") {

                u[1].style.display = "none";
                return;
            }
        }

        //u[0].style.display = "none";
        //u[1].style.display = "none";


        var d = document.getElementsByClassName('ul11');

        if(str == "falsemain")
        d[0].style.display = "block";
        if(str == "falsegames")
        d[1].style.display = "block";
        if(str == "falsefilms")
        d[2].style.display = "block";
        if(str == "falseserials")
        d[3].style.display = "block";
        if(str == "falsebooks")
        d[4].style.display = "block";
    }
}

function func2(){
          var d = document.getElementsByClassName('ul11');
        d[0].style.display = "none";
        d[1].style.display = "none";
        d[2].style.display = "none";
        d[3].style.display = "none";
        d[4].style.display = "none";
}

var who = 0;

function chan(str) {
    var l = document.getElementsByClassName('li1');
    var el = [[/Part1/, /Part2/, /Part3/], /B1/, /B2/, /B3/];

    if (who == 0) {
        if (str == "b1") {
            l[0].innerHTML = l[0].innerHTML.replace(el[0][0], 'B1');
            l[1].innerHTML = l[1].innerHTML.replace(el[0][1], 'B1');
            l[2].innerHTML = l[2].innerHTML.replace(el[0][2], 'B1');
            who = 1;
            return;
        }

        if (str == "b2") {
            l[0].innerHTML = l[0].innerHTML.replace(el[0][0], 'B2');
            l[1].innerHTML = l[1].innerHTML.replace(el[0][1], 'B2');
            l[2].innerHTML = l[2].innerHTML.replace(el[0][2], 'B2');
            who = 2;
            return;
        }

        if (str == "b3") {
            l[0].innerHTML = l[0].innerHTML.replace(el[0][0], 'B3');
            l[1].innerHTML = l[1].innerHTML.replace(el[0][1], 'B3');
            l[2].innerHTML = l[2].innerHTML.replace(el[0][2], 'B3');
            who = 3;
            return;
        }
    }

    if (who == 1) {
        if (str == "b1") {
            l[0].innerHTML = l[0].innerHTML.replace(el[1], 'B1');
            l[1].innerHTML = l[1].innerHTML.replace(el[1], 'B1');
            l[2].innerHTML = l[2].innerHTML.replace(el[1], 'B1');
            who = 1;
            return;
        }

        if (str == "b2") {
            l[0].innerHTML = l[0].innerHTML.replace(el[1], 'B2');
            l[1].innerHTML = l[1].innerHTML.replace(el[1], 'B2');
            l[2].innerHTML = l[2].innerHTML.replace(el[1], 'B2');
            who = 2;
            return;
        }

        if (str == "b3") {
            l[0].innerHTML = l[0].innerHTML.replace(el[1], 'B3');
            l[1].innerHTML = l[1].innerHTML.replace(el[1], 'B3');
            l[2].innerHTML = l[2].innerHTML.replace(el[1], 'B3');
            who = 3;
            return;
        }
    }

    if (who == 2) {
        if (str == "b1") {
            l[0].innerHTML = l[0].innerHTML.replace(el[2], 'B1');
            l[1].innerHTML = l[1].innerHTML.replace(el[2], 'B1');
            l[2].innerHTML = l[2].innerHTML.replace(el[2], 'B1');
            who = 1;
            return;
        }

        if (str == "b2") {
            l[0].innerHTML = l[0].innerHTML.replace(el[2], 'B2');
            l[1].innerHTML = l[1].innerHTML.replace(el[2], 'B2');
            l[2].innerHTML = l[2].innerHTML.replace(el[2], 'B2');
            who = 2;
            return;
        }

        if (str == "b3") {
            l[0].innerHTML = l[0].innerHTML.replace(el[2], 'B3');
            l[1].innerHTML = l[1].innerHTML.replace(el[2], 'B3');
            l[2].innerHTML = l[2].innerHTML.replace(el[2], 'B3');
            who = 3;
            return;
        }
    }

    if (who == 3) {
        if (str == "b1") {
            l[0].innerHTML = l[0].innerHTML.replace(el[3], 'B1');
            l[1].innerHTML = l[1].innerHTML.replace(el[3], 'B1');
            l[2].innerHTML = l[2].innerHTML.replace(el[3], 'B1');
            who = 1;
            return;
        }

        if (str == "b2") {
            l[0].innerHTML = l[0].innerHTML.replace(el[3], 'B2');
            l[1].innerHTML = l[1].innerHTML.replace(el[3], 'B2');
            l[2].innerHTML = l[2].innerHTML.replace(el[3], 'B2');
            who = 2;
            return;
        }

        if (str == "b3") {
            l[0].innerHTML = l[0].innerHTML.replace(el[3], 'B3');
            l[1].innerHTML = l[1].innerHTML.replace(el[3], 'B3');
            l[2].innerHTML = l[2].innerHTML.replace(el[3], 'B3');
            who = 3;
            return;
        }
    }

}

function func11(str){

    var d = document.getElementsByClassName('ul111');
  if(str == "point2")
  d[0].style.display = "block";
  if(str == "point3")
  d[1].style.display = "block";

}

function func22(){
  var d = document.getElementsByClassName('ul111');

  d[0].style.display = "none";

  d[1].style.display = "none";

}
