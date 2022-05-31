import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => {
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
          {
            id: 2,
            shown: false,
            title: 'Updated',
            description: 'Your Character was updated.',
          },
        ],

        addCharacter: newCharacter => {
          set(state => {
            return {
              characters: [newCharacter, ...state.characters],
            };
          });
        },

        deleteCharacter: id => {
          set(state => {
            return {
              characters: state.characters.filter(
                deleteCharacter => deleteCharacter.id !== id
              ),
            };
          });
        },

        editCharacter: oldCharacter => {
          set(state => {
            return {
              characters: state.characters.map(character =>
                character.id === oldCharacter.id ? oldCharacter : character
              ),
            };
          });
        },

        findCharacter: characterId => {
          return get().characters.find(
            character => characterId === character.id
          );
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
