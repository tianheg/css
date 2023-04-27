# CSS 

- [CSS reset](https://github.com/tianheg/.web/blob/main/reset.css)

```sh
sass-w .
```

```sh
sass-w () {
  sass --watch --update --no-source-map --style=compressed $1/style.scss:$1/style.css
}
```
