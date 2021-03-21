function mk() {

  let {PythonShell} = require("python-shell");
  PythonShell.run("/media/amit/1CF8742EF87407F2/compiler/my_proj/proj/fun.py", null, function (err) {
    if (err) throw err;
    console.log("finished");
  });
}

mk();

