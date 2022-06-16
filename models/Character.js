import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    /* The name of this character */
    required: [true, 'Please provide a name for this character.'],
    maxlength: [30, 'Name cannot be more than 50 characters'],
  },
  information: {
    required: [true, 'Please provide a information for this character'],
    maxlength: [3000, 'Information cannot be more than 3000 characters'],
  },
  type: {
    required: [true, 'Please provide a name for this character.'],
    maxlength: [30, 'Name cannot be more than 50 characters'],
  },
  image: {
    /* Characters image, if applicable */
    type: String,
  },
});

export default mongoose.models.Character ||
  mongoose.model('Character', CharacterSchema);
