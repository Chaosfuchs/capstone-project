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
            description: 'Your Character was saved.',
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
              toasts: state.toasts.map(toast =>
                toast.id === 1 ? { ...toast, shown: true } : toast
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
              toasts: state.toasts.map(toast =>
                toast.id === 2 ? { ...toast, shown: true } : toast
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

        findCharacter: characterId => {
          return get().characters.find(
            character => characterId === character.id
          );
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
