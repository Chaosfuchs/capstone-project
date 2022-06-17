import axios from 'axios';
import create from 'zustand';

const toastTypes = {
  ADD: 1,
  EDIT: 2,
  DELETE: 3,
};

const useStore = create((set, get) => {
  return {
    characters: [],

    loadCharacters: async () => {
      const response = await axios.get('/api/characters');
      const characters = response.data.data.map(character => ({
        ...character,
        id: character._id,
      }));
      set({ characters });
    },

    dices: [
      {
        id: 'd2',
        name: 'D2',
        sides: 2,
      },
      {
        id: 'd4',
        name: 'D4',
        sides: 4,
      },
      {
        id: 'd6',
        name: 'D6',
        sides: 6,
      },
      {
        id: 'd9',
        name: 'D9',
        sides: 9,
      },
      {
        id: 'd10',
        name: 'D10',
        sides: 10,
      },
      {
        id: 'd12',
        name: 'D12',
        sides: 12,
      },
      {
        id: 'd20',
        name: 'D20',
        sides: 20,
      },
      {
        id: 'd100',
        name: 'D100',
        sides: 100,
      },
    ],

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

    addCharacter: async newCharacter => {
      try {
        const response = await axios.post('/api/characters', newCharacter);
        const character = response.data.data;
        set(state => {
          state.toggleToast(toastTypes.ADD);
          return {
            characters: [
              { ...character, id: character._id },
              ...state.characters,
            ],
          };
        });
      } catch (error) {
        console.error(error);
      }
    },

    deleteCharacter: async id => {
      try {
        const response = await axios.delete('/api/characters', {
          data: { id },
        });
        const { _id } = response.data.data;
        set(state => {
          state.toggleToast(toastTypes.DELETE);
          return {
            characters: state.characters.filter(
              character => _id !== character.id
            ),
          };
        });
      } catch (error) {
        console.error(error);
      }
    },

    editCharacter: async currentCharacter => {
      try {
        const response = await axios.patch('/api/characters', currentCharacter);
        const character = response.data.data;
        set(state => {
          state.toggleToast(toastTypes.EDIT);
          return {
            characters: state.characters.map(character_ =>
              character_.id === character._id
                ? { ...character_, ...character }
                : character_
            ),
          };
        });
      } catch (error) {
        console.error(error);
      }
    },

    findCharacter: characterId => {
      return get().characters.find(character => characterId === character.id);
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

    currentRoll: -1,

    rollDice: diceId => {
      set(state => {
        const dice = state.dices.find(dice => dice.id === diceId);
        if (dice) {
          return {
            currentRoll: Math.floor(Math.random() * dice.sides) + 1,
          };
        }
        return {
          currentRoll: -1,
        };
      });
    },
  };
});

export default useStore;
