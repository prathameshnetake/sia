export const getMedia = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    return stream;
    /* use the stream */
  } catch (err) {
    console.error(err);
  }
};

export const getMediaDevices = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log(devices);
};

export const getAllAvailableCameras = async () => {
  try {
    return (await navigator.mediaDevices.enumerateDevices()).filter(
      (c) => c.kind === "videoinput"
    );
  } catch (e) {
    console.log(e);
  }
};
