
## bootstrap 2与3版本区别


1. 彻底的重写，从桌面优先 (Desktop First)的设计方式，变成和Zurb的 Foundation 一样的移动优先 (Mobile First) 全新的栅格系统 (Grid System)，更加强大！如果你用过Foundation的栅格系统 (Grid System)就有体会了。

2. 再见，IE7！最低从IE 8开始支持（版本2兼容IE6,7,8）。而且因为设计已经变成移动优先，所以对IE8的支持也需要respond.js我相信Bootstrap 4时肯定会放弃对IE8的支持，就像现在的Foundation 4一样

3. 扁平化设计，极简风格。这个你应该从Bootstrap文档的风格也可以看出来了，不过可能是暂时的

4. 更小的文件体积，Bootstrap.min.css的体积减少了40%以上。

5.  更优秀的组件！


## bootsrap2 升级到3

1. 文档的改变
2. 一些全局css样式的改变
3. 栅格系统(相对于2版本中的3层，3版本中有4层)
* col-xs  对应手机设备
* col-sm  对应平板设备
* col-md  对应普通桌面设备
* col-lg  对应宽屏设备
4. 组件的改进与删减，包括： 按钮、表格、导航栏等
5. 还有就是RC 2修复了RC 1中的超多Bug
6. 其他补充

*  默认情况下，基于文本的表单控件现在只收到最小的样式。对于焦点颜色和圆角，将.form-control元素上的类应用到样式。
*  .form-control默认情况下，应用类的基于文本的表单控件现在为100％宽。包装输入内部<div class="col-*"></div>以控制输入宽度。
*  .badge 不再有上下文（-success，-primary等）。
*  .btn还必须使用.btn-default“默认”按钮。
*  .row 现在是流动的
*  默认情况下，图像不再响应。使用.img-responsive流体<img>大小。
*  现在的图标现在.glyphicon是基于字体的。图标还需要基础和图标类（例如.glyphicon .glyphicon-asterisk）。
*  Typeahead已经被淘汰，赞成使用Twitter Typeahead。
*  模态标记显着改变。的.modal-header，.modal-body和.modal-footer部分现在包裹在.modal-content和.modal-dialog更好的移动造型和行为。此外，你应该不再适用.hide于.modal在您的标记。
*  从v3.1.0开始，由remotemodal选项加载的HTML 现在注入到.modal-content（从v3.0.0到v3.0.3，进入.modal）而不是.modal-body。这样，您也可以轻松更改模态的页眉和页脚，而不仅仅是模态体。
*  该button.js的复选框和收音机功能现在插件都使用data-toggle="buttons"，而不是data-toggle="buttons-checkbox"或data-toggle="buttons-radio"在他们的标记。
*  JavaScript事件命名空间。例如，要处理模态“show”事件，请使用'show.bs.modal'。对于标签“显示”使用'shown.bs.tab'等


[查看官方详细文档](http://getbootstrap.com/migration/)