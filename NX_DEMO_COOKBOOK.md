## Nx Demo Cookbook

1. Install **Nx Console** VS Code extension

2. Create new Nx workspace

```
yarn create nx-workspace
```

3. Create new React host & remote applications

```
nx g @nx/react:host host --remotes=remote
```

4. Create new React component library

```
nx g @nx/react:library --name=components --bundler=rollup --publishable --importPath=components --component=false
nx g @nx/react:component frontkon --project=components
```


5. Create a storybook for the component library

```
nx g @nx/react:storybook-configuration components
```

6. Add cypress component testing to the component library

```
nx g @nx/react:cypress-component-configuration --project=components --build-target=components:build
```

7. Show dependency graph

```
nx graph
```

8. Migrate nx to the latest version

```
nx migrate latest
```