# Programming Track Survey

#### _A short survey to help a prospective student strategize about what programming path is right for them. Code review for Epicodus 8.10.18_

## By Dustin Starke

### Description

This project demonstrates the capacity to use JavaScript and jQuery in tandem with html and css as well as the capability to run scripts and create forms that gather user input data.

## Setup/Installation Requirements

 Clone this repository. Open in a simple HTTP server. Requires JavaScript and jQuery libraries. It is found at [Github Pages](dustgit.github.io/Track-suggester).

## Known Bugs

There is an known bug in displaying the result for cSharp as a valid response due to the variable cSharp being undefined. It is displayed as one error and one warning:

* jquery-3.3.1.js:3818 jQuery.Deferred exception: cSharp is not defined ReferenceError: cSharp is not defined
    at HTMLDocument.<anonymous> (file:///Users/seanbrochin/Desktop/Coding/track-suggester/js/scripts.js:103:17)
    at mightThrow (file:///Users/seanbrochin/Desktop/Coding/track-suggester/js/jquery-3.3.1.js:3534:29)
    at process (file:///Users/seanbrochin/Desktop/Coding/track-suggester/js/jquery-3.3.1.js:3602:12) undefined
jQuery.Deferred.exceptionHook @ jquery-3.3.1.js:3818
process @ jquery-3.3.1.js:3606
setTimeout (async)
(anonymous) @ jquery-3.3.1.js:3640
fire @ jquery-3.3.1.js:3268
fireWith @ jquery-3.3.1.js:3398
fire @ jquery-3.3.1.js:3406
fire @ jquery-3.3.1.js:3268
fireWith @ jquery-3.3.1.js:3398
ready @ jquery-3.3.1.js:3878
completed @ jquery-3.3.1.js:3888
jquery-3.3.1.js:3827 Uncaught ReferenceError: cSharp is not defined
    at HTMLDocument.<anonymous> (scripts.js:103)
    at mightThrow (jquery-3.3.1.js:3534)
    at process (jquery-3.3.1.js:3602)_

## Technology Used

* Bootstrap v3.3.7
* Google font Do Hyeon
* JavaScript
* jQuery v3.3.1
* CSS
* HTML

## Support and contact details

Feel free to contact Dustin.starke@gmail.com

### Legal

Copy, use, and repurpose as one sees fit. Copyright (c) 2018 Dustin Starke.
This software is licensed under the MIT License.
