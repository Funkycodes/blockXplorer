import { create } from "zustand";

export const useGlobalStore = create(set => ({
  transitionStage: "idle",
}));