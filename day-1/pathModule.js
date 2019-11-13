// console.log(__filename);
// console.log(__dirname);
// console.log(console);

const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj.name);
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));
console.log(path.normalize('https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_join_paths'));