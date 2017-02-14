let helloWorld = => "Hello World!"


function test (behaviorDescription, testSubject, expectedValue) {
	if (testSubject === expectedValue ) {
		console.log("Test Passed:", behaviorDescription);
	} else {
		console.log("FAILED:", behaviorDescription)
	}
}


test(`should return 'Hello World!'`, helloWorld(), 'Hello World!')
