// ==UserScript==
// @name         Following Tab
// @version      0.1
// @description  Fuck you twitter
// @author       Fluffy Bean
// @match        *twitter.com/home*
// @match        *twitter.com/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

function clickTab (jNode) {
    try {
        // Add delay otherwise wont click button
        setTimeout(function(){
            // Set tab to variable for easier management
            var tab = jNode[0].childNodes[1].childNodes[0];

            // DEBUG
            //console.log(tab.ariaSelected, tab.href, tab.tabIndex);

            // BUG: Clicks tabs of profile, following, etc...
            // AND check if its not already selected, otherwise yeets to top of page
            if (tab.href == 'https://twitter.com/home' || tab.href == '/home') {
                if (tab.ariaSelected == 'false' || tab.tabIndex == '-1') {
                    tab.click();
                    console.log("Switched to Following!");
                } else {
                    console.log("Already selected");
                }
            } else {
                console.log("Not home tab");
            };
        }, 500);
    } catch (error) {
        // ono, error occured!
        console.log("Error!!!!!!", error);
    };
};

// When a tab found, clicky clicky
waitForKeyElements("[role='tablist']", clickTab, false);
