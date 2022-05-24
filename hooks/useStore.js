import create from 'zustand';

const useStore = create(set => {
  return {
    characters: [],

    toasts: [
      {
        id: 1,
        shown: false,
        title: 'Saved',
        description:
          'Your Character was saved. Check it out under "My Characters"',
      },
    ],

    addCharacter: newCharacter => {
      set(state => {
        return {
          characters: [...state.characters, newCharacter],
        };
      });
    },
    addToast: newToast => {
      set(state => {
        return {
          toasts: [...state.toasts, newToast],
        };
      });
    },
    showToast: (toastId, visible) => {
      set(state => {
        return {
          toasts: state.toasts.map(toast =>
            toast.id === toastId ? { ...toast, shown: visible } : toast
          ),
        };
      });
    },
  };
});

export default useStore;
