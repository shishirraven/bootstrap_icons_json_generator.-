const fs = require('fs');
const path = require('path');

const directory = './icons'; // your directory path here

// Read all .md files in directory
const mdFiles = fs.readdirSync(directory)
  .filter(file => file.endsWith('.md'));

const jsonData = [];

// Process each .md file
mdFiles.forEach(file => {
  const filePath = path.join(directory, file);
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const lines = markdown.split("\n");
  let title, categories = [], tags = [], iconClass;
  let currentCategory = false, currentTag = false;
  for(let line of lines) {
    if(line.startsWith("title:")) {
      title = line.split(":")[1].trim();
    } else if(line.startsWith("categories:")) {
      currentCategory = true;
    } else if(line.startsWith("tags:")) {
      currentCategory = false;
      currentTag = true;
    } else if(line.startsWith("---")) {
      currentTag = false;
    } else if(currentCategory) {
      categories.push(line.replace(" -", "").trim());
    } else if(currentTag) {
      tags.push(line.replace(" -", "").trim());
    }
    // icon class is filename without extension
    iconClass = file.split(".")[0];

  }
  jsonData.push({
    title: title,
    category: categories,
    tags: tags,
    class: "bi-"+iconClass
  });
});

console.log(jsonData);


fs.writeFileSync('bootstrap-icon-data.json', JSON.stringify(jsonData));
console.log('Data written to file: bootstrap-icon-data.json');