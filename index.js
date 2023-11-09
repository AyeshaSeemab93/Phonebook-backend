const express = require('express');
const app = express();

const persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (req, res)=>{
  res.send('<h1>Welcome to home page</h1>')
})

app.get('/api/persons/', (req,res)=>{
  console.log('request to show all phonebook');
  res.json(persons);
})
app.get('/api/persons/:id', (req,res)=>{
const id = Number(req.params.id)
const note = persons.find(contact => contact.id === id);
if(!note){
   return res.status(404).end();
}

return res.json(note)
})

app.get('/info',(req, res)=>{
  console.log('here in info')
  const requestTime = new Date().toString();
    res.send(`
        <p>Phonebook has info for ${persons.length} people.</p>
        <p>${requestTime}</p>
    `);
})




//start server
const port = 3001;
app.listen(port);
console.log('server is running on ', port);
