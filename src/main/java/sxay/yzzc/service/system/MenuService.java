package sxay.yzzc.service.system;

import java.util.List;

import sxay.yzzc.pojo.system.Menu;

public interface MenuService {
	
	List<Menu>  selectMenu(int pid);
	
	List<Menu>  selectMenuByRole(int pid,int roleid);
	
	void  menuAdd(Menu menu);
	void  menuEdit(Menu menu);
	void  menuDel(int id);

	List<Menu> selectByPid(int roleid);
	
}
