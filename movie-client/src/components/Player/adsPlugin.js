import videojs from "video.js";

videojs.registerPlugin("exampleStitchedAds", function (options) {
  var player = this;

  options = options || {};
  options.stitchedAds = true;

  // Initialize contrib-ads.
  player.ads(options);

  player.on("canplay", function () {
    player.one("playing", function () {
      var havePlayedPreroll = false;
      var haveStartedMidroll = false;
      var haveStartedPostroll = false;
      var havePlayedMidroll = false;

      // Simulate a pre-roll immediately upon playback starting.
      player.ads.startLinearAdMode();

      // Simulate a mid-roll at 15 seconds and a post-roll at 5 seconds from
      // the end. Need to listen to both timeupdate and adtimeupdate because
      // redispatch will prefix during ads.
      player.on(["timeupdate", "adtimeupdate"], function (e) {
        var currentTime = player.currentTime();
        var duration = player.duration();

        // End the pre-roll.
        if (!havePlayedPreroll && currentTime >= 5) {
          havePlayedPreroll = true;
          player.ads.endLinearAdMode();
          return;
        }

        // Start the mid-roll.
        if (!haveStartedMidroll && currentTime >= 15) {
          haveStartedMidroll = true;
          player.ads.startLinearAdMode();
          return;
        }

        // End the mid-roll.
        if (!havePlayedMidroll && currentTime >= 20) {
          havePlayedMidroll = true;
          player.ads.endLinearAdMode();
          return;
        }

        // Start the post-roll.
        // The post-roll will be ended automatically via the `adended` event.
        if (!haveStartedPostroll && currentTime >= duration - 5) {
          haveStartedPostroll = true;
          player.ads.startLinearAdMode();
          return;
        }
      });
    });
  });
});