import fs from "node:fs"
import { execSync } from "node:child_process"

for (const key of Object.keys(process.env)) {
  if (key.toLowerCase().startsWith("npm_") || key === "INIT_CWD") {
    delete process.env[key]
  }
}

execSync("node ./node_modules/next/dist/bin/next build", {
  stdio: "inherit",
  env: process.env,
})

fs.writeFileSync("out/.nojekyll", "")
