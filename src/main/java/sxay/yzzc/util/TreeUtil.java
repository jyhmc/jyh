package sxay.yzzc.util;

public class TreeUtil  extends TreeNode {
	public static void main(String[] args) {
		TreeUtil tu = new TreeUtil();
		//tu.test();
	}

	/*public void test() {
		List<String> list = new ArrayList<String>();
		String a = "[{'id':'1','pid':'','text':'任务管理',haschild:'1'},"
				+ "{'id':'11','pid':'1','text':'数据管理',haschild:'0'},"
				+ "{'id':'12','pid':'1','text':'数据管理',haschild:'0'},"
				+ "{'id':'13','pid':'1','text':'数据管理',haschild:'0'},"
				+ "{'id':'14','pid':'1','text':'数据管理',haschild:1},"
				+ "{'id':'141','pid':'14','text':'数据管理',haschild:0},"
				+ "{'id':'142','pid':'14','text':'数据管理',haschild:0},"
				+ "{'id':'143','pid':'14','text':'数据管理',haschild:0},"
				+ "{'id':'144','pid':'14','text':'数据管理',haschild:0},"
				+ "{'id':'2','pid':'','text':'数据管理',haschild:1},"
				+ "{'id':'21','pid':'2','text':'数据管理',haschild:0},"
				+ "{'id':'22','pid':'2','text':'数据管理',haschild:0}]";
		JSONArray ja = JSONArray.fromObject(a);
		
		TreeUtil t = new TreeUtil("root");
		for (int i = 0; i < ja.size(); i++) {
			TreeUtil td = getMenu(ja.getJSONObject(i));
			t.addNode(td);
		}
		System.out.println(t.toString());
	}*/

	public TreeUtil() {
	}

	public TreeUtil(String a) {
		super(a);
	}

/*	public TreeUtil getMenu(JSONObject jo) {
		String id = (String) jo.get("id");
		String pid = (String) jo.get("pid");
		String text = (String) jo.get("text");
		//Boolean checked = (Boolean) jo.get("haschild");
		TreeUtil tn1 = new TreeUtil();
		tn1.setId(id);
		tn1.setName(text);
		tn1.setPid(pid);
		//tn1.setTaskType(checked.toString());// 是否选择，借用
		return tn1;
	}*/

	/*public String toMenuString(Menu m) {
		return "'id':'" + m.getId() + "','pid':" + m.getpMenuId() + ",'text':'"
				+ m.getName() + "'";
	}*/

	public String toString() {
		StringBuffer sbf = new StringBuffer("{id:'" + this.getId() + "'"
				+ ",text:'" + this.getName() + "',checked:");
		String bltype = this.getTaskType();
		if (null==bltype||bltype.equals("0")) {
			sbf.append("false");
		} else {
			sbf.append("true");
		}

		if (this.children.length == 0) {
			
			sbf.append(",leaf:true}");
		} else {
			sbf.append(",expanded : true,children:[");
			for (int i = 0; i < this.children.length; i++) {
				sbf.append(this.children[i].toString()).append(",");
			}
			for (; sbf.toString().endsWith(",");) {
				sbf = new StringBuffer(sbf.substring(0, sbf.length() - 1));
			}
			sbf.append("]}");
		}
		return sbf.toString();
	}
	
	
	/*public String keyTreeToString() {
		StringBuffer sbf = new StringBuffer("{id:'" + this.getId() + "'"
				+ ",text:'" + this.getName() + "'" );
		if (this.children.length == 0) {
			sbf.append(",leaf:true}");
		} else {
			sbf.append(",expanded : true,children:[");
			for (int i = 0; i < this.children.length; i++) {
				sbf.append(this.children[i].keyTreeToString()).append(",");
			}
			for (; sbf.toString().endsWith(",");) {
				sbf = new StringBuffer(sbf.substring(0, sbf.length() - 1));
			}
			sbf.append("]}");
		}
		return sbf.toString();
	}*/
}
