/*-
 * 增加对象控件
 * @author xingxw
 * 2013年1月18日
 * modify 2013年1月21日9:27:28
 * 配置项
 * url:url							// 提交的url
 * navbutton:true/false // 是否有上一步下一步
 * loadConfig : {
							url : '/PDM/testpage/xxw/navviewedit/tt.json',// 载入数据使用的url
							params : {// 载入数据用的参数
								x : 1
							}
						}
		checkin:true/false
		forms:[[],[],[]]			
 * 例子
 * Ext.onReady(function() {
			var a = new fahon.core.CreateEditView({
						title : 'caidan',
						url : '/PDM/testAction.do',// 提交的url
						 // 是否有上一步下一步
						navbutton : true,
						 //载入配置
						loadConfig : {
							url : '/PDM/testpage/xxw/navviewedit/tt.json',// 载入数据使用的url
							params : {// 载入数据用的参数
								x : 1
							}
						},
						 // 是否是检入操作
						checkin : true,
						forms : [[{
									fieldLabel : "父目录ID",
									name : "fhcontent.upcontentid",
									allowBlank : true,
									itemId : 'upcontentid',
									blankText : "不能为空",
									maxLengthText : "输入超过最大长度",
									maxLength : 36,
									regex : Mes.yiban,
									regexText : Mes.yiban_text
								}]]
					});
			a.on('afterformload', function(a, b) {
						alert(b.getForm().findField('upcontentid').getValue());
					});
			a.on('beforefinish', function(a, b) {
						alert('beforefinish');
					});
			a.on('beforecheckin', function(a, b) {
						alert('beforecheckin');
					});
			a.show();
		});
 */
Ext.define('yzzc.core.CEWindow', {
			extend : 'Ext.window.Window',
			alias : 'widget.cewindow',
			height : 500,
			width : 750,
			modal : true, /* 模式窗口 */
			maximizable : true,
			title : 'My Window',
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			url : null,
			/* 载入数据源配置 */
			loadConfig : null,
			constrainHeader:true,
			config : {
				/**
				 * form集合
				 * 
				 * @type
				 */
				btnFinish : null,
				/**
				 * 检入按钮
				 * 
				 * @type
				 */
				btnApply : null,
				/**
				 *  取消按钮
				 * 
				 * @type
				 */
				btnClose : null,
				/* 自动提交 */
				autoSubmit : true,
				/**
				 * container提示内容
				 * @type 
				 */
				changeDetails : null,
				/**
				 * form
				 * 
				 * @type
				 */
				winform : null,
				args:null
			},
			/**
			 * 提交
			 * 
			 * @param {}
			 *            callback
			 */
			submit : function(callback) {
				var me = this;
				if (me.valiForm()) {
					if (!me.autoSubmit) {

					} else {
						me.getWinform().getForm().submit({
									success : function(a, b) {
										Ext.ux.Toast.msg('提示', '注意: 信息保存成功');
										me.fireEvent('submit', a, b, me, me.getWinform().getForm(), me.getBtnFinish());
										if (Ext.isFunction(callback)) {
											callback.call(this)
										}
									},
									failure : function(a, b) {
										Ext.Msg.hide();
										var rtn = Ext.JSON.decode(b.response.responseText);
										Ext.Msg.alert('警告', rtn.msg);
										me.fireEvent('submit', a, b, me, me.getWinform().getForm(), me.getBtnFinish());
									}
								});
					}
				} else {
					Ext.Msg.hide();
					Ext.Msg.alert('警告', '注意: 缺失必需的信息');
					this.fireEvent('beforeerr', this, this.getBtnFinish());
				}
			},
			apply : function() {
				this.submit();
			},
			/**
			 * 点击完成按钮
			 */
			finish : function() {
				Ext.MessageBox.show({
					title : '请稍后...',
					msg : '处理中...',
					wait : true,
					waitConfig : {
						interval : 200
					}
				})
				var me = this;
				this.submit(function() {
							Ext.Msg.hide();
							me.close();
						});
			},

			/*
			 * 校验指定Form
			 */
			valiForm : function() {
				var me = this;
				var form = this.getWinform();
				return form.getForm().isValid();
			},
			setDfItem : function() {
				this.btnFinish = this.down('button[itemId=__TDMButton_Finish]');
				this.btnApply = this.down('button[itemId=__TDMButton_Apply]');
				this.btnClose = this.down('button[itemId=__TDMButton_Close]');
				this.changeDetails = this.down('container[itemId=_contDetails]');
				this.winform = this.down('form[itemId=__cewinform]');
			},
			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				var mycfg = me.loadConfig;
				me.autosSubmit = cfg.autoSubmit || me.autoSubmit;
				Ext.apply(mycfg, cfg.loadConfig);
				Ext.apply(me.loadConfig, mycfg);
				me.formtmp = Ext.clone(me.form);
				me.initConfig(cfg);
				me.callParent();
				me.setArgs(cfg);
//				me.callParent(arguments);
				me.setDfItem();
			},
			initComponent : function() {
				var me = this;
				var buttons = [];
				buttons.push({
							text : '完成',
							itemId : '__TDMButton_Finish',
							handler : Ext.bind(me.finish, me)
						});
				buttons.push({
							text : '应用',
							itemId : '__TDMButton_Apply',
							hidden : true,
							handler : Ext.bind(me.apply, me)
						});
				buttons.push({
							text : '关闭',
							itemId : '__TDMButton_Close',
							scope : this,
							handler : this.close
						});
				for (var i = 0; i < me.formtmp.length; i++) {
					if (me.formtmp[i].store) {
						var item = me.formtmp[i].store;
						var classname = item.$className;
						if (classname) {
							var store = Ext.create(classname);
							me.formtmp[i].store = store;
						}

					}
				}
				var form = Ext.create('Ext.form.Panel', {
							itemId : '__cewinform',
							border : false,
							url : me.url,
							title : '',
							flex : 1,
							autoScroll : true,
							width : 1000,
							defaults : {
								xtype : 'textfield',
								width : 560,
								labelWidth :120,
								margin : '8 10 8 10'
							},
							items : this.formtmp || []
						});
				me.items = [form, {
							xtype : 'container',
							height : 30,
							layout : {
								align : 'stretch',
								type : 'hbox'
							},
							items : [{
										xtype : 'container',
										itemId : '_contDetails',
										layout : {
											align : 'middle',
											type : 'hbox'
										},
										flex : 1,
										items : [{
													xtype : 'displayfield',
													value : '&nbsp;&nbsp;*&nbsp;&nbsp;表示必填字段\n',
													fieldLabel : '',
													hideLabel : true,
													width : 200
												}]
									}, {
										xtype : 'container',
										layout : {
											align : 'middle',
											pack : 'end',
											type : 'hbox'
										},
										defaults : {
											width : 70,
											xtype : "button",
											margins : {
												top : 6,
												right : 2,
												bottom : 4,
												left : 3
											}
										},
										flex : 1,
										items : buttons
									}]
						}];
//				me.callParent(arguments);
				me.callParent();
				
					me.on('afterrender', function() {
								var me = this;
								if(me.config.loadConfig==undefined && me.loadConfig==undefined){
									return;
								}
								var url,params;
								if(me.config.loadConfig.url==undefined){
									url = me.loadConfig.url;
									params = me.loadConfig.params;
								} else {
									url = me.config.loadConfig.url;
									params = me.config.loadConfig.params;
								}
								me.getWinform().getForm().load({
											url : url,
											params : params,
											success : function() {
												me.fireEvent('afterformload', me, me.getWinform());
											},
											failure : function() {
											}
										});
							})
							
/*							
				if (me.loadConfig && !me.loadConfig.cancel) {
					me.on('afterrender', function() {
								var me = this;
								alert("1---"+me.loadConfig.url);
								me.getWinform().getForm().load({
											url : me.loadConfig.url,
											params : me.loadConfig.params,
											success : function() {
												me.fireEvent('afterformload', me, me.getWinform());
											},
											failure : function() {
											}
										});
							})
				}else if (me.config.loadConfig) {
					me.on('afterrender', function() {
								var me = this;
								alert("1---"+me.loadConfig.url);
								alert("2---"+me.config.loadConfig.url);
								me.getWinform().getForm().load({
											url : me.config.loadConfig.url,
											params : me.config.loadConfig.params,
											success : function() {
												me.fireEvent('afterformload', me, me.getWinform());
											},
											failure : function() {
											}
										});
							})
				}*/
			}
		});
