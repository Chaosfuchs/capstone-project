import formidable from 'formidable';
import fs from 'fs';

const saveFile = async file => {
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(`./public/${file.name}`, data);
  await fs.unlinkSync(file.path);
  return;
};

export default async function imageUpload(request, response) {
  const form = new formidable.IncomingForm();
  form.parse(request, async function (error, fields, files) {
    await saveFile(files.file);
    return res.status(201).json({ status: 'send' });
  });
}
