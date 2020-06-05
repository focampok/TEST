var entrada="aaabbbc";
var copia = "";

for (var i = 0; i < entrada.length; i++) {

	if(entrada.charAt(i)=='a')
	{
		copia += 'b'
	}
	else if(entrada.charAt(i)=='b')
	{
		copia += 'a'
	}
	else {
		copia += entrada.charAt(i)
}
}

window.alert(copia)