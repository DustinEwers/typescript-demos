This application is based on the following template: 
http://blog.stevensanderson.com/2016/10/04/angular2-template-for-visual-studio/

There are several pre-requisites to install to get this to work properly. 

1. The latest version of .NET Core (> 1.0.1)
2. Visual Studio 2015 Update 3. Note that Update 2 is not enough. You need Update 3, because it fixes some issues with NPM, plus it’s a prerequisite for TypeScript 2.0.
3. TypeScript 2.0 for Visual Studio 2015. 
4. Node.js version 4 or later. 
5. Webpack (npm install -g webpack)
6. tslint and codelyzer (npm i codelyzer tslint typescript @angular/core@2.0.2 @angular/compiler@2.0.2 rxjs@5.0.0-beta.12 zone.js@0.6.21)

-------
Other tips: 

npm run pack will build the config and app webpack bundles
