var channels = ["zombiunicorn", "sampai", "dizzykitten", "legendarylea", "2mgovercsquared", "sheevergaming", "itshafu", "deernadia", "alinity", "skyasi", "freecodecamp"];

function retrieveStreams(allChannels) {
    for (var channel in allChannels) {
        var curChan = allChannels[channel];
        $.ajax({
            url: `https://api.twitch.tv/kraken/streams/${curChan}?client_id=zhbhx2t8u91ulftkoavd571ck82ctv`
        }).done(function (data) {
            if (data.stream != null) {
                console.log(data);
                var actChan = data.stream.channel.display_name.toLowerCase();
                $("#" + actChan).css("background-color", "#E0F2E9");
                $("#"+actChan+"-img").attr("src", data.stream.preview.medium);
                $("#" + actChan + "-span").text(data.stream.game+": "+ data.stream.channel.status);
            }
        })
    }
}

$(document).ready(function () {
    retrieveStreams(channels);
});
//https://api.twitch.tv/kraken/streams/alinity?client_id=zhbhx2t8u91ulftkoavd571ck82ctv
