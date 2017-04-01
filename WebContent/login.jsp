<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统登录</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/ext/resources/css/ext-all.css" />

<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/ext-all-debug.js"></script>
	
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/ext-lang-zh_CN.js"></script>	
	
</head>

<body style="background-image:url(images/dlbg.png)">
                <!--  <a href="hello">wswws</a> -->
           
 <script type="text/javascript">
        Ext.onReady(function () {
            var winLogin = Ext.create("Ext.window.Window", {
                width: 400,
                height: 280,
                //modal: true, // 窗口弹出，其他地方不可操作  
                title: '&nbsp;登陆 ',
                collapsible: true,  // 收缩按钮  
                closable: false, // 是否显示关闭窗口按钮  
                iconCls: 'key', // cog , database_gear  
                resizable: false, // 窗体是否可以拉伸  
                constrain: true,
                items: [{
                    xtype: 'panel',
                    width: '100%',
                    height: 100,
                    padding: '1px'
                    //html: "<img src='css/logo.png' alt='软件LOGO' height='100%' width='100%'/>"
                }, {
                    xtype: 'form',
                    width: '100%',
                    id: 'myform',
                    height: 140,
                    //frame: true,  
                    padding: '1px',
                    buttonAlign: 'center',
                    items: [{
                        xtype: 'textfield',
                        id: 'username',
                        name: 'username',
                        fieldCls: 'login_account',
                        fieldLabel: '账&nbsp;&nbsp;号&nbsp;&nbsp;',
                        width: 300,
                        margin: '10,10,10,10',
                        labelAlign: 'right',
                        allowBlank:false
                    }, {
                        xtype: "textfield",
                        id: 'password',
                        name: 'password',
                        fieldCls: 'login_password',
                        width: 300,
                        fieldLabel: '密&nbsp;&nbsp;码&nbsp;&nbsp;',
                        margin: '10,10,10,10',
                        labelAlign: 'right',
                        inputType: 'password',
                        allowBlank: false
                    }, {
                        xtype: 'panel',
                        width: '100%',
                        bodyStyle: 'border:0'
                       // html: "<p align='right'>版权所有：XXXX科技有限公司</p>"
                    }],
                    buttons: [{
                        text: '登陆',
                        layout: 'fit',
                        type: 'submit',
                        handler: function () {
                            var username = Ext.getCmp('username').getValue();
                            var password = Ext.getCmp('password').getValue();

                            if (username == "") {
                                Ext.Msg.alert("提示", "用户名不能为空，请输入用户名");
                            } else if (password == "") {
                                Ext.Msg.alert("提示", "密码不能为空，请输入用户名");
                            } else {
                                // 掩饰层 (遮罩效果)  
                             /*    var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "正在登陆，请稍后..." });
                                myMask.show(); */
                                Ext.Ajax.request({
                                    url: 'login',
                                    method: 'POST',
                                    params: {
                                        username: username,
                                        password: password
                                    },
                                    success: function (response, opts) {
                                         var sf = Ext.JSON.decode(response.responseText);
                                        if (sf.result) {
                                            window.location.href = "index";
                                        } else {
                                            Ext.Msg.alert("登陆失败", "用户名或密码错误");
                                        } 
                                    },
                                    failure: function (response, opts) {
                                        Ext.Msg.alert("提示", "登陆失败"); 
                                    }
                                    
                                })
                            }
                        }
                    }, {
                        text: '重置',
                        handler: function () {
                        	
                          // Ext.getCmp('myform').form.reset();
                        }
                    }]
                }],
                renderTo: Ext.getBody()
            });
           winLogin.show();
        })  
      
</script>

                   
</body>
</html>