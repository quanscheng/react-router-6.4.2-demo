# react-router-6.4+ tutorial

## intall dependencies

```
npm install react-router-dom localforage match-sorter sort-by
```

## run

```
npm run dev
```

## prepare styles

`src/index.css`, `src/contacts.js`

## Delete unused files

```
src
├── contacts.js
├── index.css
└── main.jsx
```

## add router

`main.js`

### 1.创建`src/routes`和`src/routes/root.jsx`

此时点击 your name / your friend 按钮会报 404 找不到页面的错误(这是 react-router 的默认错误页面)

### 2.创建错误页面`src/error-page.jsx`

### 3.设置<ErrorPage>为 errorElement 根路由

### 4.创建 `src/routes/contact.jsx`

### 5.点击 your name 按钮出现联系组件

此组件并未在根组件内

### 6.嵌套路由

我们希望联系人组件像这样在布局内部呈现。`<Root>`即布局组件

> 您现在将再次看到根布局，但右侧是一个空白页面。我们需要告诉根路由我们希望它在哪里渲染它的子路由。我们使用`<Outlet>`.

### 7.路由异步数据获取 loader

### 8.useLoaderData 用法
