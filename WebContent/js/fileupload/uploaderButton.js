/*
 * If all uploads succeed: {"success":true} If an upload fails:
 * {"success":false,"error":"Reason for error!"}
 */
Ext
		.define(
				'UploadButtonPanel',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.uploadButtonPanel',
					usersetting : null,
					layout : {
						type : 'hbox'
					},
					constructor : function(cfg) {
						var me = this;
						this.addEvents({
							"startUpload" : true
						});
						me.usersetting = cfg.usersetting;
						me.flag = true;
						var btntext = '';
						var btnheight = 24;
						if (cfg.btntext) {
							btntext = cfg.btntext;
						} else {
							btntext = '选择文件...';
						}
						if (cfg.btnheight) {
							btnheight = cfg.btnheight;
						}
						me.addbtn = new Ext.Button({
							text : btntext,
							flex : 1,
							width : me.width,
							height : btnheight,
							itemId : 'addbtn',
							ref : '../addBtn'
						});
						me.items = [ me.addbtn ];
						me.uploadobj = null;
						me.listeners = {
							'afterrender' : function() {
								var buttonelm = me.items.items[0].el;
								var placeHolderId = Ext.id();
								buttonelm.setStyle({
									position : 'relative',
									display : 'block'
								});
								buttonelm.createChild({
									tag : 'div',
									id : placeHolderId
								});
								swfupload = new SWFUpload(
										{
											button_width : buttonelm.getWidth(),
											button_height : buttonelm
													.getHeight(),
											button_placeholder_id : placeHolderId,
											// 属性，解决this指向
											upload_url : me.uploadUrl,
											// flash_url : this.flashUrl,
											file_size_limit : me.fileSize
													|| (1024 * 1024 * 50),// 上传文件体积上限，单位MB
											file_post_name : me.filePostName,
											file_types : me.file_types, // 允许上传的文件类型
											file_types_description : "All Files", // 文件类型描述
											file_upload_limit : me.file_upload_limit
													|| "10000", // 限定用户一次性最多上传多少个文件，在上传过程中，该数字会累加，如果设置为“0”，则表示没有限制

											// file_queue_limit :
											// "10",//上传队列数量限制，该项通常不需设置，会根据file_upload_limit自动赋值

											post_params : me.postParams,
											use_query_string : true,// 是否需要传参

											debug : false,// 是否要debug
											button_cursor : SWFUpload.CURSOR.HAND,// 鼠标样式
											button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
											custom_settings : {// 自定义参数
												scope_handler : me
											},
											file_queued_handler : me.onFileQueued,// 队列中新增加一个文件时的处理函数

											file_dialog_start_handler : null,
											// this.onDialogStart,
											// file_dialog_start_handler :
											// function() {// 开始上传时
											// Ext.ux.Toast.msg('tt',
											// '开始上传aaa');
											// },// 当文件选取对话框弹出前触发的事件处理函数

											file_dialog_complete_handler : me.onDiaogComplete,// 当文件选取对话框关闭后触发的事件处理

											upload_start_handler : me.onUploadStart,//
											// 开始上传文件前触发的事件处理函数

											upload_success_handler : me.onUploadSuccess,// 文件上传成功后触发的事件处理函数
											swfupload_loaded_handler : function() {
											},// 当Flash控件成功加载后触发的事件处理函数
											upload_progress_handler : me.uploadProgress,// 更新进度的函数

											upload_complete_handler : me.onUploadComplete,// 完成后的回调
											upload_error_handler : me.onUploadError,// 上传错误处理
											file_queue_error_handler : me.onFileError
										});
								swfupload.uploadStopped = false;
								Ext.get(swfupload.movieName).setStyle({
									position : 'absolute',
									"z-index" : 10000,
									top : 0,
									left : -2
								});
								me.uploadobj = swfupload;
							},
							scope : me,
							delay : 100
						}
						me.callParent(arguments);
					},
					startUpload : function() {
						var me = this;
					},
					formatFileSize : function(_v, celmeta, record) {
						return Ext.util.Format.fileSize(_v);
					},
					formatFileState : function(n) {// 文件状态
						switch (n) {
						case -1:
							return '未上传';
							break;
						case -2:
							return '正在上传';
							break;
						case -3:
							return '<div style="color:red;">上传失败</div>';
							break;
						case -4:
							return '上传成功';
							break;
						case -5:
							return '取消上传';
							break;
						default:
							return n;
						}
					},
					onFileQueued : function(file) {
						var me = this.customSettings.scope_handler;
					},
					onUploadSuccess : function(file, serverData,
							responseReceived) {
						if (this.getStats().files_queued > 0
								&& this.uploadStopped == false) {
							this.startUpload();
						}
						var me = this.customSettings.scope_handler;
						// if (file.filestatus == -4) {
						// // ok
						// }
						me.fireEvent("onUploadSuccess", me, file, serverData,
								responseReceived);
					},
					onUploadError : function(file, errorCode, message) {
						var me = this.customSettings.scope_handler;
						//var tip = me.tip;
						 //tip(errorCode+message);
						//tip('上传异常，代码:' + errorCode + "信息:" + message);
					},
					tip : function(msg) {
						Ext.Msg.show({
							title : '提示',
							msg : msg,
							width : 280,
							icon : Ext.Msg.WARNING,
							buttons : Ext.Msg.OK
						});
					},
					onFileError : function(file, n) {
						var me = this.customSettings.scope_handler;
						var tip = me.tip;
						switch (n) {
						case -100:
							tip('待上传文件列表数量超限，不能选择！');
							break;
						case -110:
							tip('文件太大，不能选择！');
							break;
						case -120:
							tip('该文件大小为0，不能选择！');
							break;
						case -130:
							tip('该文件类型不可以上传！');
							break;
						}
					},
					onDiaogComplete : function() {
						var me = this.customSettings.scope_handler;
						/* 给uploaderPanel添加自定义事件 */
						if (me.fireEvent("setPostParams", me.uploadobj)) {
							me.uploadobj.startUpload();
						} else {
							return false;
						}
					}
				});

// Ext.onReady(function() {
// Ext.QuickTips.init();
// new Ext.Window({
// width : 650,
// title : '上传测试',
// height : 300,
// layout : 'fit',
// items : [{
// xtype : 'uploadButtonPanel',
// border : false,
// fileSize : 1024 * 1024 * 2,// 限制文件大小
// uploadUrl : __ctxPath + "/DocUploadServlet",
// filePostName : 'file', // 后台接收参数
// file_types : "*.jpg;*.gif;*.jpeg;*.bmp;*.png",// 可上传文件类型
// postParams : {
// time : function() {
// return new Date().toLocaleString();
// },
// doctype : 1,
// savePath : 'upload\\'
// } // 上传文件存放目录
// }]
// }).show();
// });
