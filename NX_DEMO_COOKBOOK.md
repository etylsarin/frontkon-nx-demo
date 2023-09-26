## Nx Demo Cookbook

1. Install **Nx Console** VS Code extension

2. Create new Nx workspace

```
yarn create nx-workspace
```

3. Create new React host application

```
nx g @nx/react:application dashboard --routing
nx g @nx/react:host dashboard
```

4. Create new React remote application

```
nx g @nx/react:application login
nx g @nx/react:remote login --host=dashboard
```

5. Create new React component library

```
nx g @nx/react:library components --bundler=rollup --publishable --importPath=components --component=false
nx g @nx/react:component table --project=components
```

```
app.get('/api/dashboard', (req, res) => {
  res.send('Received a GET HTTP method');
});
```

6. Create a storybook for the component library

```
nx g @nx/react:storybook-configuration components
```

7. Add cypress component testing to the component library

```
nx g @nx/react:cypress-component-configuration --project=components
```

7. Create a new interfaces library

```
nx g @nx/workspace:library interfaces
```
