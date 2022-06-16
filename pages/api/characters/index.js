import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

export default async function handler(request, response) {
  await dbConnect();

  console.log(-1, request.body);

  switch (request.method) {
    case 'POST':
      try {
        const character = await Character.create(request.body);
        response.status(201).json({ success: true, data: character });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'GET':
      try {
        const characters = await Character.find({});
        response.status(200).json({
          success: true,
          data: characters,
        });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'PATCH':
      try {
        const { _id, ...update } = request.body;
        let character = await Character.findByIdAndUpdate(_id, update);

        if (character) {
          character = await Character.findById(_id);
          response.status(201).json({ success: true, data: character });
        } else {
          response.status(404).json({ success: false });
        }
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      console.log('Attempting to delete');
      try {
        console.log(0, request.body);
        const character = await Character.findByIdAndDelete(request.body.id);
        console.log(1, character);
        response.status(201).json({ success: true, data: character });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).send('Method not implemented');
      break;
  }
}
