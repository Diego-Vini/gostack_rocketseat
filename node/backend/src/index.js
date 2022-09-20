const express = require('express');

const { uuid } = require('uuidv4')

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;
/* 
  console.log(title);
  console.log(owner); */

  let results = title;
  
  if (results != 0) {
    results = projects.filter(project => project.title.includes(title))
    console.log(results)
    const validation = results.find(result => result.title.includes(title))
    console.log(validation)
    if(validation == undefined) {
        return response.json(projects);
    }

    return response.json(results);
  }
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = {id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: "Project not found" })
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;


    
    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: "Project not found" })
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
})


app.listen(3333, () => {
    console.log('Back-end started!🚀🚀🚀');
    console.log('http://localhost:3333/')
});