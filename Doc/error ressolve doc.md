# Npm run build failed

I encountered this error and to ressolve this I added netlify.toml file by below command

```js
echo -e '[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
' > netlify.toml
```

And also added 

```js
[build]
  command = "CI= npm run build"
```