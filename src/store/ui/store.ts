import { create } from 'zustand'

interface State {
    isSideMenuOpen: Boolean;
    openSideMenu: ()=>void;
    closeSideMenu: ()=>void;
    isSearchOpen:Boolean;
    openSearch: ()=>void;
    closeSearch: ()=>void;

}

export const useUiStore = create<State>((set) => ({
   isSideMenuOpen: false,
   openSideMenu: () => set((state) => ({ isSideMenuOpen: true })),
   closeSideMenu: () => set((state) => ({ isSideMenuOpen: false })),

   isSearchOpen: false,
   openSearch: () => set((state) => ({ isSearchOpen: true })),
   closeSearch: () => set((state) => ({ isSearchOpen: false })),
}));


