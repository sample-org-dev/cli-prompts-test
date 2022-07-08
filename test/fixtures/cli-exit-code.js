const enquirer = require("enquirer");

enquirer
  .prompt({
    type: "input",
    name: "text",
    message: "Please input some text",
  })
  .then(({ text }) => {
    if (!text) {
      process.exit(1);
    }
  });
