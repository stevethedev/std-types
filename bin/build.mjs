import { build } from "esbuild";
import { readdir, writeFile, readFile, rm, stat } from "fs/promises";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dtsPlugin } from "esbuild-plugin-d.ts";

const main = async () => {
  const suffix = getSuffix();
  const suffixedPackageNames = await getSuffixedPackageNames();
  await rm(getOutputsPath(), { recursive: true, force: true });
  const packages = await getPackages();
  await Promise.all(
    packages.map(async (pkg) => {
      await buildPackage(pkg, suffix, suffixedPackageNames);
    }),
  );
};

const getSuffixedPackageNames = async () => {
  return process.argv
    .filter((arg) => arg.startsWith("--suffix-package="))
    .map((arg) => arg.split("=")[1]);
};

const getSuffix = () => {
  const suffix =
    process.argv.find((arg) => arg.startsWith("--suffix="))?.split("=")[1] ??
    "";
  if (!/^[a-zA-Z0-9-]*$/.test(suffix)) {
    throw new Error(`Invalid suffix: ${suffix}`);
  }
  return suffix;
};

const getPackagesPath = (...subPath) => getRootPath("packages", ...subPath);
const getOutputsPath = (...subPath) => getRootPath("dist", ...subPath);

const getRootPath = (...subPath) => {
  const pathname = fileURLToPath(new URL(".", import.meta.url));
  return resolve(pathname, "..", ...subPath);
};

const getPackages = async () => {
  const paths = await readdir(getPackagesPath());
  const mappedPaths = await Promise.all(
    paths.map(async (path) => ({
      isDir: await stat(getPackagesPath(path)).then((stat) =>
        stat.isDirectory(),
      ),
      path,
    })),
  );
  return mappedPaths
    .filter((mappedPath) => mappedPath.isDir)
    .map((mappedPath) => mappedPath.path);
};

const buildPackage = async (pkg, suffix, suffixedPackageNames) => {
  const entryPoint = "index.ts";
  const tsconfig = readTsConfig();

  await build({
    entryPoints: [getPackagesPath(pkg, entryPoint)],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "esm",
    outfile: getOutputsPath(pkg, "index.mjs"),
    external: ["@std-types/*"],
    plugins: [
      dtsPlugin({
        tsconfig: {
          ...tsconfig,
          compilerOptions: {
            ...tsconfig.compilerOptions,
            rootDir: getPackagesPath(pkg),
            outDir: getOutputsPath(pkg),
          },
        },
      }),
    ],
  });

  await build({
    entryPoints: [getPackagesPath(pkg, entryPoint)],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "cjs",
    outfile: getOutputsPath(pkg, "index.cjs"),
    external: ["@std-types/*"],
  });

  try {
    const license = await readFile(getRootPath("LICENSE"));
    await writeFile(getOutputsPath(pkg, "LICENSE"), license);
  } catch (error) {
    // ignore
  }

  try {
    const readme = await readFile(getPackagesPath(pkg, "README.md"));
    await writeFile(getOutputsPath(pkg, "README.md"), readme);
  } catch (error) {
    // ignore
  }

  const basePackageJson = await readBasePackageJson();
  const {
    name,
    dependencies,
    devDependencies,
    peerDependencies,
    version,
    ...packageJson
  } = await readPackageJson(pkg);

  const isSuffixed = suffixedPackageNames.includes(name);
  const newVersion = isSuffixed ? `${version}-${suffix}` : `${version}`;

  await writePackageJson(pkg, {
    ...packageJson,
    name,
    private: undefined,
    version: newVersion,
    main: "index.cjs",
    module: "index.mjs",
    types: "index.d.ts",
    peerDependencies: peerDependencies,
    repository: basePackageJson.repository,
    bugs: basePackageJson.bugs,
    homepage: basePackageJson.homepage,
  });
};

const readPackageJson = async (pkg) => {
  const buffer = await readFile(getPackagesPath(pkg, "package.json"));
  const string = buffer.toString();
  return JSON.parse(string);
};

const readBasePackageJson = async () => {
  const buffer = await readFile(getRootPath("package.json"));
  const string = buffer.toString();
  return JSON.parse(string);
};

const readTsConfig = async () => {
  const buffer = await readFile(getRootPath("tsconfig.json"));
  const string = buffer.toString();
  return JSON.parse(string);
};

const writePackageJson = async (pkg, json) => {
  await writeFile(
    getOutputsPath(pkg, "package.json"),
    JSON.stringify(json, null, 2),
  );
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
