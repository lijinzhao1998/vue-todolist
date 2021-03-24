# 任务管理系统前端代码
# 注意完整代码在complete分支！！！！！
当前分支只是前期的一个架子用来快速开发其他vue程序使用
登录需要有后台代码的支持后台代码在https://github.com/lijinzhao1998/-
```
登录名 admin
密码 123
```
也可以修改login.vue‘将注释下面代码并将下方注释代码解开
```
用户名 11111
密码  随意
```
                            
                            
                            //到后台验证用户
                        this.$axios.post('/login',this.mymodel).then(res =>{
                            if(res.data != "404"){

                                this.mymodel = res.data
                                localStorage.setItem("userInfo",JSON.stringify(this.mymodel));
                                this.$store.commit('login', this.mymodel)
                                let path = this.$route.query.redirect
                                console.log(this.mymodel)
                                this.$router.replace({path: path === '/' || path === undefined ? '/AppIndex' : path})
                                //this.$router.push('/AppIndex')
                            }else{
                                this.$message({
                                    message: '用户名或密码错误，请重新输入',
                                    type: 'error'
                                })
                               // this.$router.push('/login')
                            }
                        })
                        
 运行截图：
 ```
登录
```
![图片](https://raw.githubusercontent.com/lijinzhao1998/VUE--todolist/a/login.png)
```
注册
```
![图片](https://github.com/lijinzhao1998/VUE--todolist/blob/a/adduser.png)
```
添加任务
```
![图片](https://raw.githubusercontent.com/lijinzhao1998/VUE--todolist/a/add.png)
```
任务列表
```
![图片](https://raw.githubusercontent.com/lijinzhao1998/VUE--todolist/a/todo.png)
```
欢迎页面
```
![图片](https://raw.githubusercontent.com/lijinzhao1998/VUE--todolist/a/todolist.png)
```
用户信息
```
![图片](https://raw.githubusercontent.com/lijinzhao1998/VUE--todolist/a/userinfo.png)

   
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
