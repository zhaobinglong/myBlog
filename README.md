# 基于githubAction自动部署vuepress项目到github pages

github Action是一套自动化任务流，可以自动把项目部署到任意想部署的环境，不需要执行额外的工作，对于需要频繁部署过项目的开发者，一定会明白这个工具的重要性。

### 新建任务流文件
在项目根目录下，新建.github/workflows/nodejs.yml。这里的目录是固定的。nodejs是配置文件的名字，你可以取其他的名字，后缀名yml是固定的
```
|.github
|--|workflows
|--|--|nodejs.yml
```

### 任务流名字
给自动脚本取一个名字，Node.js CI，可以取任意的名字

``` yaml
name: Node.js CI
```

### 监听指定的分支提交
在这个示例中，监听了develop分支的push操作，每当develop分支发生push行为时，将自动执行接下来的steps。branches是一个数组，可以填写多个分支的名字
```yaml
on:
  push:
    branches: [ develop ]
```

### 执行命令
run代表要执行的命令，一个任务中，可能执行多个命令。当deveop发生push时，仓库自动执行npm install 和 npm run build 命令

```yaml
- run: |
    npm install 
    npm run build --if-present
```
::: tip
注意要在run后面加|，表示后面的命令在同一个上下文环境中执行
:::

### 部署
引用peaceiris/actions-gh-pages@v3，提前添加deploy_key，当监听到develop分支的代码提交后，如果我们想把编译后的文件部署到master分支上，则配置publish_branch为master，vuepress编译后的文件是在dist目录，publish_dir用来指定dist目录。这样action奇偶可以自动把dist目录下面的文件全部推送到master分支上
```yaml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
    publish_branch: master
    publish_dir: ./.vuepress/dist
```
### 添加deploy_key

``` yaml
# 在命令行执行
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# 你会得到两个文件:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```
接着, 打开仓库设置页面

点击Deploy Keys，添加public key，同时勾选Allow write access

点击Secrets，添加private key，命名为ACTIONS_DEPLOY_KEY

### Action市场
很多项目的部署命令都是类似的，完全没必要从头写。github也发现了这个问题，所以提供了Action市场。每个人可以贡献自己写的Action，当然也可以去use别人的action，比如有一个peaceiris/actions-gh-pages@v3的action，去引用它
```yaml
uses: peaceiris/actions-gh-pages@v3
```
如果你想查看这个action的原命令，拼接链接。下面是peaceiris/actions-gh-pages@v3的🔗

[https://github.com/peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)


### 参考
[GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

[持续集成](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)

[yaml语法参看](http://www.ruanyifeng.com/blog/2016/07/yaml.html)

[github-pages-action配置](https://github.com/marketplace/actions/github-pages-action)
