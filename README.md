<div align="center">
    <img src="./.github/jinx.jpg" style="width: 280px; height: 150px;"/>
</div>
<h1 align="center">VSCode Theme Jinx</h1>
<p align="center">Yet another VSCode glowing theme.</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=vincent-the-gamer.jinx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/vincent-the-gamer.jinx.svg?color=4d9375&amp;label=Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

<p align="center">
    <b><i>There's a「Jinx」on your computer, lol😄.</i></b>
</p>

# Installation

Search `jinx` in VSCode extension menu.

# Enable Glowing Effect

Provide your path to `glow.css` in `settings.json`.

> [!WARNING]
> `file://` is required!!!!

macOS:

```json
"jinx.imports": [
    "file:///Users/{USER_NAME}/.vscode/extensions/vincent-the-gamer.jinx-{plugin-version}/glow.css"
],
```

Windows: 
```json
"jinx.imports": [
    "file://C:/Users/{USER_NAME}/.vscode/extensions/vincent-the-gamer.jinx-{plugin-version}/glow.css"
],
```

Linux:

```json
"jinx.imports": [
    "file:///home/{USER_NAME}/.vscode/extensions/vincent-the-gamer.jinx-{plugin-version}/glow.css"
],
```

Then, run `Enable Jinx Glowing`

- `Ctrl + Shift + P` or `Command + Shift + P`
- Input `enable jinx glowing`

And happy hacking~~~ ☆´∀｀☆

# Preview

## Normal
![theme](./.github/theme.png)

## Glowing
![glowing](./.github/glowing.png)

# Publish
```shell
pnpm run build
pnpm run publish
```

# Changelog
View [Changelog](./CHANGELOG.md)

# License
[MIT](./LICENSE)
