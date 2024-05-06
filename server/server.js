import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/connection.mjs';
import contactRoutes from './routes/contactRoutes.mjs';
import blogRoutes from './routes/blogRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());


connectDB().then(() => {
  
  app.use('/api/contacts', contactRoutes);
  app.use('/blog', blogRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});
