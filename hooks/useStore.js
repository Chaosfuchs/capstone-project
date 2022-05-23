import create from 'zustand';

const useStore = create(set => {
  return {
    characters: [],

    addCharacter: newCharacter => {
      set(state => {
        return {
          characters: [...state.characters, newCharacter],
        };
      });
    },
  };
});

export default useStore;
