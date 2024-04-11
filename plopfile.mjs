export default (plop) => {
  plop.setGenerator("package", {
    description: "@std-types package generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "package name",
        validate: (value) => {
          if (!value) {
            return "package name is required";
          }
          if (!/^[a-z][a-z0-9-]*$/.test(value)) {
            return "package name must be lowercase and contain only letters, numbers, and hyphens and must begin with a letter";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "description",
        message: "package description",
        default: "",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: ".plop/templates/package",
        templateFiles: ".plop/templates/package/**",
      },
    ],
  });
};
