# React with redux app

React 16 app setup with Webpack 4, axios, react router 4 and Redux. More **information on the setup** [project](https://github.com/martin-corevski/react-basics) and [wiki](https://github.com/martin-corevski/react-basics/wiki/DIY-repository-setup). For the **http requests basics** [project](https://github.com/martin-corevski/react-basics-http) and [wiki](https://github.com/martin-corevski/react-basics-http/wiki/DIY-repository-setup). For **routing basics** [project](https://github.com/martin-corevski/react-basics-routing) and [wiki](https://github.com/martin-corevski/react-basics-routing/wiki/DIY-repository-setup). For **redux basics** [project](https://github.com/martin-corevski/react-basics-redux) and [wiki](https://github.com/martin-corevski/react-basics-redux/wiki/DIY-repository-setup)

---
## Install dependencies

```
cd path-to-your-project
npm install
```

### Additional install

```
npm i -g ntl
```

- By running **ntl** you can choose which script to run. For example **start**, **build**, **build:prod** and **watch** will be some of the choices. All of these scripts are in the `package.json` file in the scripts object.
- Command to start **ntl** and choose an option
```
ntl
```

### Without ntl

If you don't want to use ntl you can use the `npm run` command with the chosen script, examples:
- For development bundle
```
npm run build
```
- For production ready bundle
```
npm run build:prod
```
- For development server
```
npm run start
```
- For Webpack watch
```
npm run watch
```
---
License
---

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
