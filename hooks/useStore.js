import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => {
      return {
        characters: [],

        toasts: [
          {
            id: 1,
            shown: false,
            title: 'Saved',
            description:
              'Your Character was saved. Check it out under "Characters"',
          },
        ],

        name: 'next-zustand',
        getStorage: () => ({
          setItem: (...args) => window.localStorage.setItem(...args),
          getItem: async (...args) =>
            new Promise(resolve => {
              if (typeof window === 'undefined') {
                resolve(null);
              } else {
                setTimeout(() => {
                  resolve(window.localStorage.getItem(...args));
                }, 0);
              }
            }),
          removeItem: (...args) => window.localStorage.removeItem(...args),
        }),

        addCharacter: newCharacter => {
          set(state => {
            return {
              characters: [newCharacter, ...state.characters],
            };
          });
        },
        toggleToast: (toastId, visible) => {
          set(state => {
            return {
              toasts: state.toasts.map(toast =>
                toast.id === toastId ? { ...toast, shown: visible } : toast
              ),
            };
          });
        },
      };
    },
    {
      name: 'rpg-sheet-creator',
    }
  )
);

export default useStore;
