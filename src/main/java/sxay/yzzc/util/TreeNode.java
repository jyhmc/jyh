package sxay.yzzc.util;

public class TreeNode {
	

	private String id;
	private String name;
	private String level;
	private String pid;
	private String BaselineStartDate;
	private String BaselineEndDate;
	private String StartDate;
	private String TaskType;
	private String PercentDone;
	private int Duration;
	protected TreeNode[] children = new TreeNode[0];

	public TreeNode(String treename) {
		this.setId("root");
		this.setName(treename);
	}

	public TreeNode() {
	}

	/**
	 * 增加子节点
	 * 
	 * @param tn
	 */
	private void addchildren(TreeNode tn) {
		TreeNode[] oldchildren = this.children.clone();
		this.children = new TreeNode[oldchildren.length + 1];
		for (int i = 0; i < oldchildren.length; i++) {
			this.children[i] = oldchildren[i];
		}
		this.children[this.children.length - 1] = tn;
	}

	/**
	 * 增加节点
	 * 
	 * @param tn
	 */
	public void addNode(TreeNode tn) {
		TreeNode parent = findparent(tn);
		if (parent == null) {
			this.addchildren(tn);
			return;
		}
		parent.addchildren(tn);

	}

	/**
	 * 找父
	 * 
	 * @param tn
	 * @return
	 */
	public TreeNode findparent(TreeNode tn) {
		// 当前即父
		if (getId().equals(tn.getPid())) {
			return this;
		} else {
			// 子节点中找父
			for (int i = 0; i < children.length; i++) {
				TreeNode t = children[i].findparent(tn);
				if (t != null) {
					return t;
				}
			}
		}
		return null;
	}

	public String toString() {
		StringBuffer sbf = new StringBuffer("{Id:'" + this.getId() + "'"
				+ ",Name:'" + this.getName() + "',BaselineStartDate:'"
				+ this.getBaselineStartDate() + "'," + "BaselineEndDate:'"
				+ this.getBaselineEndDate() + "'," + "StartDate:\""
				+ this.getStartDate() + "\"," + "TaskType:\"Important\","
				+ "PercentDone:" + this.getPercentDone() + ",Duration:"
				+ this.getDuration());

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
		StringBuffer sbf = new StringBuffer("{Id:'" + this.getId() + "'"
				+ ",Name:'" + this.getName() + "',BaselineStartDate:'"
				+ this.getBaselineStartDate() + "'," + "BaselineEndDate:'"
				+ this.getBaselineEndDate() + "'," + "StartDate:\""
				+ this.getStartDate() + "\"," + "TaskType:\"Important\","
				+ "PercentDone:" + this.getPercentDone() + ",Duration:"
				+ this.getDuration());

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
	}*/

	public static void main(String[] args) {

		TreeNode tn = new TreeNode("1");
		TreeNode tn1 = new TreeNode();
		tn1.setId("222");
		tn1.setName("name2");
		tn1.setPid("111");
		TreeNode tn3 = new TreeNode();
		tn3.setId("333");
		tn3.setName("name3");
		tn3.setPid("111");
		TreeNode tn21 = new TreeNode();
		tn21.setId("2121");
		tn21.setName("name2121");
		tn21.setPid("222");
		TreeNode tn22 = new TreeNode();
		tn22.setId("2122");
		tn22.setName("name2122");
		tn22.setPid("222");
		tn.addNode(tn1);
		tn.addNode(tn3);
		tn.addNode(tn21);
		tn.addNode(tn22);
		System.out.println(tn.toString());
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public TreeNode[] getChildren() {
		return children;
	}

	public void setChildren(TreeNode[] children) {
		this.children = children;
	}

	public String getBaselineStartDate() {
		return BaselineStartDate;
	}

	public void setBaselineStartDate(String baselineStartDate) {
		BaselineStartDate = baselineStartDate;
	}

	public String getBaselineEndDate() {
		return BaselineEndDate;
	}

	public void setBaselineEndDate(String baselineEndDate) {
		BaselineEndDate = baselineEndDate;
	}

	public String getStartDate() {
		return StartDate;
	}

	public void setStartDate(String startDate) {
		StartDate = startDate;
	}

	public String getTaskType() {
		return TaskType;
	}

	public void setTaskType(String taskType) {
		TaskType = taskType;
	}

	public String getPercentDone() {
		return PercentDone;
	}

	public void setPercentDone(String percentDone) {
		PercentDone = percentDone;
	}

	public int getDuration() {
		return Duration;
	}

	public void setDuration(int duration) {
		Duration = duration;
	}



}
