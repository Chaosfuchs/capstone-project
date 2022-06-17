import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    /* The name of this character */
    type: String,
    required: [true, 'Please provide a name for this character.'],
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  information: {
    type: String,
    required: [true, 'Please provide some information about this character'],
    maxlength: [3000, 'Information cannot be more than 3000 characters'],
  },
  type: {
    type: String,
    required: [true, 'Please provide a name for this character.'],
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  image: {
    /* Characters image, if applicable */
    type: Object,
  },
});

export default mongoose.models.Character ||
  mongoose.model('Character', CharacterSchema);
