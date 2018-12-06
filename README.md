# vue-training

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

## About code styles

> Formatter: prettier. The default formatter integrated by Vetur, a plug-in of VSCode.

| Key           | Value   | Description                       |
| ------------- | ------- | --------------------------------- |
| singleQuote   | `true`  | Use single quotes                 |
| trailingComma | `es5`   | Tailing commas where valid in ES5 |
| semi          | `false` | No semicolons generally           |

## Why this repo?

For reasons list below, I created this repo to do some practices for be familiar with Vue.js.

- interested in Vue.js
- try to build blog base on VuePress and was not familiar with Vue.js
- an alternative choice to React.js

## So do what?

As usual, build a blog site with Vue.js.

It'll be a pretty lot of works.

Let's begin from the simplest step, just a list and a post viewer.

## Todo

Just a list for what I wanna implement.

Notice that do not mean task listed below must be implemented in the future. Things could be changed at anytime.

- [x] `basic` homepage for show post list
  - [x] `basic` base implement for show the post list
  - [x] `basic` pagination, just a load more button
  - [x] `basic` searching
- [ ] `basic` post viewer page, parse and display markdown posts
  - [x] `basic` base implement for display and parse markdown
  - [x] `basic` comment support with gitalk
  - [x] `basic` pagination, navigate to next/previous page
  - [ ] `basic` tags and timestamp or other accessories
  - [ ] show a placeholder when loading is not finished (current is appear suddenly when loading is finished)
- [ ] `basic` tags page
  - [ ] `basic` base implement for show a list of tags
  - [ ] `basic` tag filter
- [ ] `basic` theme settings, for change color themes
  - [ ] `basic` another transition for mouse hover on the post list, current one is not looks so good
  - [ ] `basic` dark colors
  - [ ] `basic` font settings
  - [ ] change markdown code block styles on the fly
- [ ] i18n if possible
- [ ] `basic` extract all configuration into single file for quick configure

## Dependencies

- `vue` - base
- `vue-router` - router
- `vuex` - state management
- `markdown-it` - parse markdown into html
- `markdown-it-task-list` - for a github like task list syntax of markdown
- `prismjs` - syntax highlight, current one is prism-tomorrow
- `github-markdown-css` - styling like github
