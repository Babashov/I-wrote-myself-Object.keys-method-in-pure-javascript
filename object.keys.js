//  testObject.keys() method same as Object.keys in javascript

var testObject = {};

testObject.keys = (a,b=true)=>{

	function getProps() 
	{
		var testArr = [];

		for(var keysArg in a)
		{
			testArr.push(keysArg)
		}

		return testArr;
	}

	function getValues() 
	{
		var testArr = [];

		for(var keysArg in a)
		{
			testArr.push(a[keysArg])
		}

		return testArr;
	}

	
	return (a && b)  ? getProps() : {getValues}		


}

// ************ Demo Object *****************

var abc = {
	'0':'EhmedAga',
	'1':'Mehmet Aga'
}

// In native Javascript
console.log('Object keys: ' + Object.keys('salam'))

// My testObject.keys() method
console.log('Test Object keys: ' + testObject.keys(12345).length)

// I also get Object values with testObject.getValues() method
console.log('Test Object values: ' + testObject.keys('salam',false).getValues().length)

// Testing 
for(let ac = 0; ac < testObject.keys(abc).length;ac++)
{
	console.log('Abc Object is now show correctly: '+ abc[ac])
}
