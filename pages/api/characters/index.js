import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

export default async function handler(request, response) {
  await dbConnect();

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
        const { id, ...update } = request.body;
        let character = await Character.findByIdAndUpdate(id, update);

        if (character) {
          character = await Character.findById(id);
          response.status(201).json({ success: true, data: character });
        } else {
          response.status(404).json({ success: false });
        }
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const character = await Character.findByIdAndDelete(request.body.id);
        response.status(201).json({ success: true, data: character });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(405).send('Method not allowed');
      break;
  }
}
