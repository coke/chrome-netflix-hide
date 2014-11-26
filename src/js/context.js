(function() {

    function extractFlixID(url) {
        return url.match(/movieid=([^&]*)&/)[1];
    }

    function hideFlix(info, tab) {
        console.log(extractFlixID(info.linkUrl));
    }

    chrome.contextMenus.create({
        "title": "Hide Flick",
        "contexts": ["link"],
        "onclick": hideFlix
    });
})();
