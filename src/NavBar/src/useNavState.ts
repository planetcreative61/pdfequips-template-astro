import type { RefObject } from "react";
import { create } from "zustand";

export interface NavStore {
  path: string;
  showConvertMenu: boolean;
  showEditMenu: boolean;
  expandSideNav: boolean;
  showLangMenu: boolean;
  convertToolsRef: RefObject<HTMLDivElement> | null;
  editMenuRef: RefObject<HTMLDivElement> | null;
  setConvertToolsRef: (
    convertToolsRef: RefObject<HTMLDivElement> | null
  ) => void;
  setShowLangMenu: (showLangMenu: boolean) => void;
  setEditMenuRef: (editMenuRef: RefObject<HTMLDivElement> | null) => void;
  setShowEditMenu: (showEditMenu: boolean) => void;
  setShowConvertMenu: (showConvertMenu: boolean) => void;
  setPath: (path: string) => void;
  setExpandSideNav: (expandSideNav: boolean) => void;
}

export const useNavState = create<NavStore>((set) => ({
  path: "",
  showConvertMenu: false,
  showEditMenu: false,
  expandSideNav: false,
  convertToolsRef: null,
  editMenuRef: null,
  showLangMenu: false,
  setPath: (path) => set({ path }),
  setShowConvertMenu: (showConvertMenu) => set({ showConvertMenu }),
  setShowEditMenu: (showEditMenu) => set({ showEditMenu }),
  setExpandSideNav: (expandSideNav) => set({ expandSideNav }),
  setConvertToolsRef: (convertToolsRef) => set({ convertToolsRef }),
  setEditMenuRef: (editMenuRef) => set({ editMenuRef }),
  setShowLangMenu: (showLangMenu) => set({ showLangMenu }),
}));
