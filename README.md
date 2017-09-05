# react-template-server
An example of a system where a server (in this case Node.js + Express) serves up server-rendered
React components as page templates.

## How to run it

```sh
# clone the repo
git clone https://github.com/Lokeh/react-template-server.git

# install dependencies for our service
cd react-template-server && yarn

# install dependencies for our component library
cd components && yarn

# build our basic counter app
cd apps/counter && yarn && yarn build:client

# run the server
cd ../../../
node index.js
```

## Use case
- We can share UI components (styling, structure, logic and behavior) between server-side rendered templates
and client-side rendered dynamic apps.
- Gain performance and SEO benefits of mounting pre-rendered dynamic apps (using e.g. React, Ember FastBoot)

## Project structure

`index.js` contains all the code for the actual rendering server. It is very simple; it imports a page template dynamically
using `require` and calls a `render` method. Therefore, the page template is what is actually responsible for knowing how to
render itself - allowing us to evolve the rendering engine as needs change (e.g. more complex/less complex requirements for
certain pages, or transitioning to a different technology).

`components/` represents a project that contains all UI code and components; styling, logic, behavior, etc.
  - `pages/` contains page components meant to be rendered on the server (for the most part)
  - `common/` contains common UI code (components, functions, etc.)
  - `layouts/` contains common UI layouts and structures
  - `apps/` contains client-side applications

None of this is prescriptive; it is simply an example.
