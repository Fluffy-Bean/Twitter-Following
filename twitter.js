// ==UserScript==
// @name         Following Tab
// @version      0.1
// @description  Fuck you twitter
// @author       Fluffy Bean
// @match        *twitter.com/home*
// @match        *twitter.com*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==
function clickTab (jNode) {
    try {
        setTimeout(function(){
            jNode[0].childNodes[1].childNodes[0].click();
            console.log("Switched to Following!");
        }, 500);
    } catch (error) {
        console.log("Error!!!!!!", error);
    };
};

waitForKeyElements("[role='tablist']", clickTab);
