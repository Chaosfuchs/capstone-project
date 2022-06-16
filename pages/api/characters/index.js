import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

export default async function handler(request, response) {
  await dbConnect();

  console.log(request.body);

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
        response.status(204).json({ success: true, data: characters });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'PATCH':
      try {
        const { _id, ...rest } = request.body;
        const character = await Character.findByIdAndUpdate(_id, rest);
        response.status(204).json({ success: true, data: character });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const character = await Character.findByIdAndDelete(request.body._id);
        response.status(200).json({ success: true, data: character });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).send('Method not implemented');
      break;
  }
}
