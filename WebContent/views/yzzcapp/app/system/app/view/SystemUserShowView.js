Ext.define('System.view.SystemUserShowView',
				{
					extend : 'Ext.window.Window',
					itemId : 'SystemUserShowView',
					requires : [ 'Ext.draw.Text' ],
					alias : 'widget.SystemUserShowView',
					height : 330,
					modal : true,
					width : 600,
					layout : {
						align : 'stretch',
						type : 'vbox'
					},
					title : '用户信息',
					initComponent : function() {
						var me = this;
						Ext
								.applyIf(
										me,
										{
											items : [ {
												xtype : 'panel',
												flex : 1,
												layout : {
													align : 'stretch',
													type : 'vbox'
												},
												title : '',
												items : [ {
													xtype : 'panel',
													flex : 3,
													border : 0,
													layout : {
														align : 'stretch',
														type : 'hbox'
													},
													items : [
															{
																xtype : 'container',
																flex : 2,
																border : 0,
																padding : 10,
																layout : {
																	align : 'stretch',
																	type : 'vbox'
																},
																items : [
																		{
																			xtype : 'image',
																			itemId : 'UserImage',
																			src : __ctxPath+'/images',
																			flex : 3,
																			margin : '5 5 5 5'
																		},
																		{
																			xtype : 'uploadButtonPanel',
																			itemId : 'PhotoUploadButton',
																			border : false,
																			fileSize : 1024 * 1024 * 2,// 限制文件大小
																			uploadUrl : __ctxPath
																					+ "/upload",
																			filePostName : 'file', // 后台接收参数
																			file_types : "*.jpg;*.gif;*.jpeg;*.bmp;*.png"// 可上传文件类型
																		} ]
															},
															{
																xtype : 'form',
																itemId : 'UserDetailForm',
																border : 0,
																flex : 3,
																padding : 5,
																items : [
																		{
																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			itemId : 'UserDetailFormId',
																			fieldLabel : 'id',
																			hidden:true,
																			name : 'userid',
																			readOnly : true
																		},
																		{
																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '登陆名',
																			name : 'username',
																			readOnly : true
																		},
																		{
																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '姓名',
																			name : 'name',
																			readOnly : true
																		},
																		{

																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '年龄',
																			name : 'age',
																			readOnly : true

																		},
																		{

																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '性别',
																			name : 'sex',
																			readOnly : true

																		},
																		{

																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '职位',
																			name : 'position',
																			readOnly : true

																		},
																		{

																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '联系电话',
																			name : 'phone',
																			readOnly : true

																		},
																		{

																			xtype : 'textfield',
																			margin : '5 5 5 5',
																			fieldLabel : '执法资格证',
																			name : 'certificates',
																			readOnly : true

																		},

																		{
																			xtype : 'panel',
																			title : '',
																			hidden : true,
																			height : 70,
																			border : 0,
																			layout : {
																				align : 'stretch',
																				type : 'hbox'
																			},
																			items : [
																					{
																						xtype : 'text',
																						text : '电子签名',
																						margin : '25 25 0 5',
																						width : 50
																					},
																					{
																						xtype : 'image',
																						src : '',
																						itemId : 'personNameImage',
																						readOnly : true,
																						margin : '5 5 5 5',
																						labelWidth : 100
																					} ]
																		},
																		{
																			xtype : 'uploadButtonPanel',
																			itemId : 'PersonNamePhotoUploadButton',
																			margin : '5 5 5 180',
																			width : 70,
																			hidden : true,
																			height : 80,
																			btntext : '更换签名',
																			border : false,
																			fileSize : 1024 * 1024 * 2,// 限制文件大小
																			uploadUrl : __ctxPath
																					+ "/base/uploadPersonNamePubEmployeeAction.do",
																			filePostName : 'file', // 后台接收参数
																			file_types : "*.jpg;*.gif;*.jpeg;*.bmp;*.png"// 可上传文件类型
																		} ]
															} ]
												} ]
											} ]
										});
						me.callParent(arguments);
					}
				});