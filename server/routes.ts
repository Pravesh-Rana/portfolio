import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Resume download route
  app.get('/api/resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'Pravesh_CV_1750862832418.pdf');
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, 'Pravesh_Rana_Resume.pdf', (err) => {
        if (err) {
          console.error('Error downloading resume:', err);
          res.status(500).send('Error downloading resume');
        }
      });
    } else {
      res.status(404).send('Resume not found');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
