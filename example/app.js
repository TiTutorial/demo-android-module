// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var demo = require('titutorial.demo');
Ti.API.info("module is => " + demo);

label.text = demo.addStrings("Hello", "World");

Ti.API.info("module tag property is => " + demo.tag);
demo.setTag("testing");
Ti.API.info("module tag property is => " + demo.tag);
demo.setHintText("Username");
Ti.API.info("module hintText property is => " + demo.hintText);
Ti.API.info("module value property is => " + demo.value);
demo.value = "Karthi";
Ti.API.info("module value property is => " + demo.value);
Ti.API.info("module constant PAGE_LIMIT is => " + demo.PAGE_LIMIT);

if (Ti.Platform.name == "android") {
	var proxy = demo.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

