> 一个可以快速从 QQ 音乐、虾米音乐和网易音乐获得歌曲搜索结果、歌曲链接信息和歌曲评论的第三方库。

如果想了解更多关于如何使用`music-api-next`的知识，请去[库的开发者的博客](https://godbmw.com/)进行交流。如果需要提出 issues，欢迎来[仓库地址](https://github.com/dongyuanxin/music-api-next)

[**DOCS**](https://godbmw.com/passage/62)

[**中文文档**](https://godbmw.com/passage/63)

## 安装

```
npm install music-api-next --save
```

网速不好的中国用户，请使用`cnpm`安装：

```
cnpm install music-api-next --save
```

## 快速开始

```javascript
const musicAPI = require("music-api-next");

// 搜索接口: 返回指定关键词的搜索信息
musicAPI
  .searchSong({
    key: "周杰伦",
    page: 1,
    limit: 10,
    vendor: "qq"
  })
  .then(songs => console.log(songs))
  .catch(error => console.log(error.message));

// 歌曲信息接口: 返回指定歌曲的信息
musicAPI
  .getSong({
    id: "003OUlho2HcRHC",
    vendor: "qq"
  })
  .then(meta => console.log(meta))
  .catch(error => console.log(error.message));

// 评论接口: 返回指定歌曲的评论
musicAPI
  .getComment({
    id: "003OUlho2HcRHC",
    page: 1,
    limit: 20,
    vendor: "qq"
  })
  .then(comments => console.log(comments))
  .catch(error => console.log(error.message));
```

## 本地服务器

```shell
git clone git@github.com:dongyuanxin/music-api-next.git
cd music-api-next
npm install
// 启动服务器的监听端口: 5050
node server.js
```

启动服务器后，你可以直接在浏览器中访问 url 来查看结果。

例如:

- Search API: `http://localhost:5050/search/song?key=周杰伦&page=1&limit=10&vendor=qq`
- Song API: `http://localhost:5050/get/song?id=003OUlho2HcRHC&vendor=qq`
- Comment API: `http://localhost:5050/get/comment?id=003OUlho2HcRHC&page=1&limit=10&vendor=qq`

## 配合`webpack`

首先，配合`webpack`进行打包。

```shell
git clone git@github.com:dongyuanxin/music-api-next.git
cd music-api-next
npm install
// use webpack to package program
// pacakged file named 'music-api-next.js' is placed in ./dist/
webpack
```

然后，你就可以直接移动打包好的`music-api-next.js`到工作目录。引用方法如下：

```javascript
const musicAPI = require("./music-api-next");

// ...
```

## API

- `musicAPI.searchSong(query)`:

  ```
  query: {
    key: String,
    page: Number,
    limit: Number,
    vendor: one of ['netease', 'xiami', 'qq']
  }
  ```

- `musicAPI.getSong(query)`:

  ```
  query: {
    id: String or Number,
    vendor: one of ['netease', 'xiami', 'qq']
  }
  ```

- `musicAPI.getComment(query)`:

  ```
  query: {
    id: String or Number,
    page: Number,
    limit: Number,
    vendor: one of ['netease', 'xiami', 'qq']
  }
  ```

## 警告

1. **请不要用于商业用途**
2. **目前版本只能运行于 NodeJS**
3. **请友好地调用 API，不要对这些音乐平台造成过大压力**

## 致谢

项目代码参考了以下 2 个开源项目。并且做了修复、改进和增加（在 NodeJS 中）。

1. [listen1_chrome_extension](https://github.com/listen1/listen1_chrome_extension): 由于接收到了腾讯的律师函，可能会在 2018 年底停止维护。
2. [musicAPI](https://github.com/LIU9293/musicAPI): 停止维护 1 年多了，很多 API 已经失效。
