var shell = require('shelljs');

if (shell.exec("dotnet build").code !== 0) {
  shell.exit(1);
}