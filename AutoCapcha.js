(function () {
    var WaitForReady = setInterval(function () {
        var tags_i = document.getElementsByTagName("button");
        for (var i = 0; i < tags_i.length; i++) {
            if (tags_i[i].textContent == "Approve" && !tags_i[i].disabled) {
                var tags_j = document.getElementsByTagName("input");
                for (var j = 0; j < tags_j.length; j++) {
                    if (tags_j[j].value == "remember") {
                        tags_j[j].click();
                        break;
                    }
                }
                tags_i[i].click();
                clearInterval(WaitForReady);
                break;
            }
        }
    }, 1000);
})();