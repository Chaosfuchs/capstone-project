import create from 'zustand';
import { persist } from 'zustand/middleware';

const toastTypes = {
  ADD: 1,
  EDIT: 2,
  DELETE: 3,
};

const useStore = create(
  persist(
    (set, get) => {
      return {
        characters: [],

        toasts: [
          {
            id: toastTypes.ADD,
            shown: false,
            title: 'Saved',
            description: 'Your Character was saved.',
          },
          {
            id: toastTypes.EDIT,
            shown: false,
            title: 'Updated',
            description: 'Your Character was updated.',
          },
          {
            id: toastTypes.DELETE,
            shown: false,
            title: 'Deleted',
            description: 'Your Character was deleted.',
          },
        ],

        addCharacter: newCharacter => {
          set(state => {
            state.toggleToast(toastTypes.ADD);
            return {
              characters: [newCharacter, ...state.characters],
            };
          });
        },

        deleteCharacter: id => {
          set(state => {
            state.toggleToast(toastTypes.DELETE);
            return {
              characters: state.characters.filter(
                deleteCharacter => deleteCharacter.id !== id
              ),
            };
          });
        },

        editCharacter: currentCharacter => {
          set(state => {
            state.toggleToast(toastTypes.EDIT);
            return {
              characters: state.characters.map(character =>
                character.id === currentCharacter.id
                  ? currentCharacter
                  : character
              ),
            };
          });
        },

        findCharacter: characterId => {
          return get().characters.find(
            character => characterId === character.id
          );
        },

        toggleToast: toastId => {
          set(state => {
            return {
              toasts: state.toasts.map(toast =>
                toast.id === toastId ? { ...toast, shown: true } : toast
              ),
            };
          });
          setTimeout(() => {
            set(state => {
              return {
                toasts: state.toasts.map(toast => ({ ...toast, shown: false })),
              };
            });
          }, 2000);
        },
      };
    },
    {
      name: 'rpg-sheet-creator',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => ['characters'].includes(key))
        ),
    }
  )
);

export default useStore;
