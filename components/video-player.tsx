import React from "react";
import ReactPlayer from "react-player/file";

const areEqual = (prevProps: any, nextProps: any) => {
  const { muted: prevMuted, playing: prevPlaying, url: prevUrl } = prevProps;
  const { muted: nextMuted, playing: nextPlaying, url: nextUrl } = nextProps;

  if (
    prevMuted === nextMuted &&
    prevPlaying === nextPlaying &&
    prevUrl === nextUrl
  )
    return true;
  return false;
};

const MemoisedReactPlayer = React.memo(ReactPlayer, areEqual);

const VideoPlayer = ({
  playing = true,
  assetReference = "https://d1hus0nx0ytxoz.cloudfront.net/out/v1/de86ede6d44a426886276e502c10ad79/26fab79877664df5bc4cb946a3aeb817/5efb491ddaba42b186fc2ea1575f8020/index.m3u8",
  assetPoster = "https://d1hus0nx0ytxoz.cloudfront.net/44e81037-213e-4c18-9b04-520aa49b78c1/thumbnails/84d157cc-2cc9-4514-a46c-dc12466d140f_thumb.0000000.jpg",
  muted = true,
  paused = false,
  handleProgress = (val: any) => {},
  setBuffering = (val: any) => {},
  handleDuration = (val: any) => {},
  handleEnd = () => {},
  loop = true,
}: any) => {
  return (
    <MemoisedReactPlayer
      muted={muted}
      loop={loop}
      playing={playing && !paused}
      playsinline={true}
      width="100%"
      height="100%"
      className="videoplayer"
      url={assetReference}
      progressInterval={300}
      onProgress={handleProgress}
      onDuration={handleDuration}
      onBuffer={() => setBuffering(true)}
      onBufferEnd={() => setBuffering(false)}
      onEnded={handleEnd}
      onError={(error: any) => {
        console.log("error????: ", error, assetReference, paused);
      }}
      controls={true}
      config={{
        file: {
          forceVideo: true,
          attributes: {
            autoPlay: false,
            poster: assetPoster,
            preload: "auto",
          },
        },
      }}
    />
  );
};

export default VideoPlayer;
