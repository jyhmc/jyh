Ext.define('System.view.SystemUserEditWin', {
	extend : 'yzzc.core.CEWindow',
	alias : 'widget.SystemUserEditWin',
	title : '用户新增',
	autoSubmit : true,
	width : 650,
	url : __ctxPath + "/sys/userEdit",
	form : [ {
		fieldLabel : MustVal("userid", true),
		name : "userid",
		itemId : "UserEdituserid",
	    hidden : true,
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 20
	}, {
		fieldLabel : MustVal("登陆名", true),
		name : "username",
		itemId : "UserEditusername",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 20
	}, {
		inputType : 'password',
		fieldLabel : MustVal("密码", true),
		name : "password",
		itemId : "UserEditpassword",
		hidden : false
	}, {
		fieldLabel : MustVal("姓名", true),
		name : "name",
		itemId : "UserEditname",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 20
	}, {
		xtype : 'numberfield',
		fieldLabel : MustVal("年龄", false),
		name : "age",
		itemId : "UserAddage"
	}, {
		xtype : "combo",
		mode : "local",
		editable : false,
		triggerAction : "all",
		store : [ [ "男", "男" ], [ "女", "女" ] ],
		fieldLabel : MustVal("性别", false),
		name : "sex",
		itemId : "UserAddsex",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	}, {
		fieldLabel : MustVal("职位", false),
		itemId : "UserEditposition",
		name : "position"
	}, {
		fieldLabel : MustVal("联系电话", false),
		itemId : "UserEditphone",
		name : "phone"
	}, {
		fieldLabel : MustVal("学历", false),
		itemId : "UserEditeducation",
		name : "education"
	}, {
		fieldLabel : MustVal("从业年限", false),
		name : "workyears",
		itemId : "UserEditworkyears",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	}, {
		fieldLabel : MustVal("执法资格证号", false),
		name : "certificates",
		itemId : "UserEditcertificates",
		blankText : "不能为空",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	} ]
})