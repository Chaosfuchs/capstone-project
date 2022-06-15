import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    /* The name of this character */
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  image: {
    /* Characters image, if applicable */
    type: String,
  },
});

export default mongoose.models.Character ||
  mongoose.model('Character', CharacterSchema);
