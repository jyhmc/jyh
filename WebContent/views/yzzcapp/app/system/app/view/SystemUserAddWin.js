Ext.define('System.view.SystemUserAddWin', {
	extend : 'yzzc.core.CEWindow',
	alias : 'widget.SystemUserAddWin',
	title : '用户新增',
	autoSubmit : true,
	width : 650,
	url : __ctxPath + "/sys/userAdd",
	form : [ {
		fieldLabel : MustVal("所属部门", true),
		name : "deptname",
		itemId : "UserAdddeptname",
		allowBlank : false,
		readOnly : true
	}, {
		fieldLabel : MustVal("所属部门id", true),
		name : "deptid",
		hidden : true,
		allowBlank : false,
		itemId : "UserAdddeptId",
		readOnly : true
	}, {
		fieldLabel : MustVal("登陆名", true),
		name : "username",
		itemId : "UserAddusername",
		allowBlank : false,
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 20
	}, {
		inputType : 'password',
		fieldLabel : MustVal("密码", true),
		name : "password",
		itemId : "UserAddpassword",
		allowBlank : false,
		hidden : false
	}, {
		fieldLabel : MustVal("姓名", true),
		name : "name",
		itemId : "UserAddname",
		allowBlank : false,
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 30
	}, {
		  xtype: 'numberfield',
		fieldLabel : MustVal("年龄", false),
		name : "age",
		itemId : "UserAddage"
	}, {
		xtype : "combo",
		mode : "local",
		allowBlank : false,
		editable : false,
		triggerAction : "all",
		store : [["男", "男"], ["女", "女"]],
		fieldLabel : MustVal("性别", false),
		name : "sex",
		itemId : "UserAddsex",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	}, {
		fieldLabel : MustVal("职位", false),
		itemId : "UserAddposition",
		name : "position"
	}, {
		fieldLabel : MustVal("联系电话", false),
		itemId : "UserAddphone",
		name : "phone"
	}, {
		fieldLabel : MustVal("学历", false),
		itemId : "UserAddeducation",
		name : "education"
	}, {
		fieldLabel : MustVal("从业年限", false),
		name : "workyears",
		itemId : "UserAddworkyears",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	}, {
		fieldLabel : MustVal("执法资格证号", false),
		name : "certificates",
		itemId : "UserAddcertificates",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	} ]
})