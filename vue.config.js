module.exports = {
  publicPath:'/',//根路径
  outputDir:'dist',//打包的时候生成的一个文件名
  assetsDir:'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
  lintOnSave:false,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'

  devServer: {
    disableHostCheck: true
  }

    }



