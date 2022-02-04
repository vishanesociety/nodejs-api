const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

const { Student } = require('./models');


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/student', require('./src/routes/api/student'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})