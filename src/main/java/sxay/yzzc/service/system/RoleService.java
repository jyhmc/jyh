package sxay.yzzc.service.system;

import java.util.List;

import sxay.yzzc.pojo.system.Role;
import sxay.yzzc.util.TreeModel;
import sxay.yzzc.util.TreeUtil;

public interface RoleService {

	List<Role> selectRole();

	void  roleAdd(Role role);
	
	void  roleEdit(Role role);
	
	void  roleDel(int id);
	
	String selectRoleMenu(int roleid);
	
	void  roleMenuAdd(int roleid,int[] menus);

	TreeUtil selectRoleMenu2(int roleid);
}
