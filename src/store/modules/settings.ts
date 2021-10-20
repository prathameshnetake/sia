import { defineStore } from "pinia";
import { getMediaDevices } from "../../utils/media";

export const useSettings = defineStore("settings", {
  state: () => ({
    hello: "",
    video: {
      videoTracks: null as MediaStream | null,
    },
  }),
  getters: {
    getCameraListOptions: (state) => {
      return "prathamesh";
    },
    getActiveVideoStream: (state) => {
      return state.video.videoTracks;
    },
  },
  actions: {
    async getAvailableCamerasFromSystem() {
      const camList: any = await getMediaDevices();
      this.video.videoTracks = camList;
    },
  },
});
