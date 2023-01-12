# bootstrap_icons_json_generator.-
Reads the Official Bootstrap Icon Repository and builds JSON from .md files.

JavaScript code that reads Markdown (.md) files containing Bootstrap icon information, extracts the icon title, category, and tags, and converts them to a JSON 


##vTo run the code, you need to have Node.js installed on your computer.

1. Paste the into the directory that contains "icons" direcotry. 
2. Open a terminal or command prompt window.
3. Navigate to the directory where you have saved the JavaScript file with the code.
4. Run the command node extract_to_json.js.js to execute the code. 

Make sure the icons directory contain .md files. 

## Sample JSON

```
[
  {
    "title": "0 circle fill",
    "category": ["Shapes"],
    "tags": ["number", "numeral"],
    "class": "bi-0-circle-fill"
  },
  {
    "title": "0 circle",
    "category": ["Shapes"],
    "tags": ["number", "numeral"],
    "class": "bi-0-circle"
  },
  {
    "title": "0 square fill",
    "category": ["Shapes"],
    "tags": ["number", "numeral"],
    "class": "bi-0-square-fill"
  },
  ...
]
```

## Pregenerated JSON File. Bootstrap Icons v1.10.0


[https://github.com/shishirraven/json_of_bootstrap_icons](Download JSON from this Repo)


