export const getMediaDevices = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return [];
    }
    // request user for media devices
    const streams = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    const videoTracks = streams;
    console.log(videoTracks);

    return videoTracks;
  } catch (e) {
    console.error("ERR: While getting media devices ", e);
  }

  return [];
};
