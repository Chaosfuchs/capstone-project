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
    { name: 'characters' }
  )
);

export default useStore;
