package sxay.yzzc.util;

import java.util.List;

/**
 * 
 * @author 构造属性菜单模型
 *
 */
public class TreeModel {
	
    private  String id ;
    private  String  text;
    private  int pid;
    private  String  url;
    private  int order;
    private  String  cls;
    private  boolean checked;
    private  boolean expanded;
    private  boolean leaf;
    protected TreeModel[]  children=new TreeModel[0];
    
    
    
    public TreeModel(String treename) {
		this.setId("root");
		this.setText(treename);
	}
    
    public TreeModel() {
	}
    
    
	/**
	 * 增加子节点
	 * 
	 * @param tn
	 */
	private void addchildren(TreeModel tn) {
		TreeModel[] oldchildren = this.children.clone();
		this.children = new TreeModel[oldchildren.length + 1];
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
	public void addNode(TreeModel tn) {
		TreeModel parent = findparent(tn);
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
	public TreeModel findparent(TreeModel tn) {
		// 当前即父
		if (getId().equals(tn.getPid())) {
			return this;
		} else {
			// 子节点中找父
			for (int i = 0; i < children.length; i++) {
				TreeModel t = children[i].findparent(tn);
				if (t != null) {
					return t;
				}
			}
		}
		return null;
	}

	/*public String toString() {
		StringBuffer sbf = new StringBuffer("{Id:'" + this.getId() + "'"
				+ ",Name:'" + this.getText());

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
    */
    
   

	public TreeModel[] getChildren() {
		return children;
	}
	public void setChildren(TreeModel[] children) {
		this.children = children;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public boolean isExpanded() {
		return expanded;
	}
	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}
	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getOrder() {
		return order;
	}
	public void setOrder(int order) {
		this.order = order;
	}
	public String getCls() {
		return cls;
	}
	public void setCls(String cls) {
		this.cls = cls;
	}
   
    
    
    
    

}
