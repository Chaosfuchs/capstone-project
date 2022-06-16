import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case 'POST':
      response.status(201).send('Create data');
      break;
    case 'GET':
      try {
        const characters = await Character.find(
          {}
        ); /* find all the data in our database */
        response
          .status(200)
          .json({ success: 'Read Characters', data: characters });
      } catch (error) {
        response.status(400).json({ success: 'Method not implemented' });
      }

      response.status(200).send('Read data');
      break;
    case 'PATCH':
      response.status(200).send('Update data');
      break;
    case 'DELETE':
      response.status(200).send('Delete data');
      break;
    default:
      response.status(400).send('Method not implemented');
      break;
  }
}
