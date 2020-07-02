const express = require("express");
const app = express();
const { uuid, isUuid } = require("uuidv4");

const projects = [];

app.use(express.json());
app.get("/", (request, response) => {
  response.json(projects);
});

function logRequest(request, response, next) {
  const { method, url } = request;

  const logRequest = `[${method.toUpperCase()}]${url}`;

  console.time(logRequest);
  next();
  console.timeEnd(logRequest);
}
function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id))
    return response.status(400).json({ error: "Invalid project ID." });
  else next();
}

app.use(logRequest);
app.use("/projects/:id", validateProjectId);

app.get("/projects", (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;
  return response.json(results);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };
  projects.push(project);
  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0)
    return response.status(404).json({ error: "project not found" });

  const project = {
    id,
    title,
    owner,
  };
  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0)
    return response.status(404).json({ error: "project not found" });

  projects.splice(projectIndex, 1);
  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("[Starting] Starting backend 🚀");
});
