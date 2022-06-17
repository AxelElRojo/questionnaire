# Questionnaire App
A simple app I wrote in React. I've noticed that in many online tutorials and courses (specially free ones), there is no way to track your performance and learning progress, the purpose of this app is to let self learning students track their progress via simple exams.

This is aimed at software developers, but if you find use for it on another area, please use it.
## How to use
The app is hosted on Github pages, so you just need a JSON file hosted on the internet and its Base64 representation.
### The JSON file
The basic syntax is the following:
```json
{
	"title" : "",
	"lang" : "en|es",
	"questions" : [
		{
			"title" : "",
			"type" : "radio|open",
			"correct" : "",
			"options" : [
				"Only if type is radio"
			]
		}
	]
}
```
This file contains the questionnaire you want for your course. You can find an example under `public/example/`.
### The Base64
This is just the representation of the JSON file's URL, make sure it includes the "http://" at the beginning, like this:
Original: https://raw.githubusercontent.com/AxelElRojo/questionnaire/gh-pages/example/unix_en.json
Encoded: aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0F4ZWxFbFJvam8vcXVlc3Rpb25uYWlyZS9naC1wYWdlcy9leGFtcGxlL3VuaXhfZW4uanNvbg
### Linking to the JSON
The URL is encoded in Base64 and appended as a query parameter, under the name "url", the JSON is then loaded via Ajax. There is virtually no error handling, if something goes wrong, the app will only show a generic error message.
### Example
[Here](https://axelelrojo.github.io/questionnaire/?url=aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0F4ZWxFbFJvam8vcXVlc3Rpb25uYWlyZS9naC1wYWdlcy9leGFtcGxlL3VuaXhfZW4uanNvbg) you can find an example.
## Are results saved?
No, results are for the person using the app, they aren't saved and they aren't forwarded to any server.