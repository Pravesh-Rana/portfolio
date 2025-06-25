import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    const pdfPath = join(process.cwd(), 'attached_assets', 'Pravesh_CV_1750862832418.pdf');
    const pdfBuffer = readFileSync(pdfPath);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Pravesh_Rana_Resume.pdf"');
    res.send(pdfBuffer);
  } catch (error) {
    res.status(404).json({ error: 'Resume not found' });
  }
}