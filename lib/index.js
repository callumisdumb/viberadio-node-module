const fs = require('fs');
const path = require('path');

function getPackageModules(filePath) {
  const moduleExports = require(filePath);
  const exported = {};

  for (const key in moduleExports) {
    if (typeof moduleExports[key] === 'function') {
      exported[key] = moduleExports[key];
    }
  }

  return exported;
}

function getAllPackageModules(directoryPath) {
  const fileNames = fs.readdirSync(directoryPath);
  const exported = {};

  fileNames.forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isFile() && fileName.endsWith('.js')) {
      const moduleFunctions = getPackageModules(filePath);
      Object.assign(exported, moduleFunctions);
    }
  });

  return exported;
}

const directoryPath = path.resolve(__dirname, 'modules');
const exportedFunctions = getAllPackageModules(directoryPath);
module.exports = exportedFunctions;
