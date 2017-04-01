package sxay.yzzc.service.system.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.MenuMapper;
import sxay.yzzc.mapper.system.RoleMapper;
import sxay.yzzc.mapper.system.RoleMenuMapper;
import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.pojo.system.Role;
import sxay.yzzc.pojo.system.RoleMenu;
import sxay.yzzc.service.system.RoleService;
import sxay.yzzc.util.TreeModel;
import sxay.yzzc.util.TreeUtil;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;

	@Autowired
	private MenuMapper menuMapper;

	@Autowired
	private RoleMenuMapper roleMenuMapper;

	@Override
	public List<Role> selectRole() {
		// TODO Auto-generated method stub
		return roleMapper.selectRole();
	}

	@Override
	public void roleAdd(Role role) {
		// TODO Auto-generated method stub
		roleMapper.insertSelective(role);
	}

	@Override
	public void roleEdit(Role role) {
		// TODO Auto-generated method stub
		roleMapper.updateByPrimaryKeySelective(role);
	}

	@Override
	public void roleDel(int id) {
		// TODO Auto-generated method stub
		roleMapper.deleteByPrimaryKey(id);
	}

	@Override
	public String selectRoleMenu(int roleid) {
		// TODO Auto-generated method stub
		List<Menu> list = menuMapper.selectRoleMenu(roleid);
		List<TreeModel> tree = new ArrayList<>();

		TreeUtil t = new TreeUtil("root");
		t.setName(".");
		for (int i = 0; i < list.size(); i++) {

			TreeUtil td = new TreeUtil();
			td.setId(list.get(i).getId().toString());
			td.setPid(list.get(i).getPid().toString());
			td.setName(list.get(i).getText());
			td.setTaskType(list.get(i).getRemark());
			t.addNode(td);
		}

		System.out.println(t.toString());

		return t.toString();
	}
	
	@Override
	public TreeUtil selectRoleMenu2(int roleid) {
		// TODO Auto-generated method stub
		List<Menu> list = menuMapper.selectRoleMenu(roleid);
		List<TreeModel> tree = new ArrayList<>();

		TreeUtil t = new TreeUtil("root");
		t.setName(".");
		for (int i = 0; i < list.size(); i++) {

			TreeUtil td = new TreeUtil();
			td.setId(list.get(i).getId().toString());
			td.setPid(list.get(i).getPid().toString());
			td.setName(list.get(i).getText());
			td.setTaskType(list.get(i).getRemark());
			t.addNode(td);
		}

		System.out.println(t.toString());

		return t;
	}

	@Override
	public void roleMenuAdd(int roleid, int[] menus) {
		// TODO Auto-generated method stub
		roleMenuMapper.deleteByRoleid(roleid);
		List<RoleMenu> list = new ArrayList<>();
		for (int i = 0; i < menus.length; i++) {
			RoleMenu rm = new RoleMenu();
			rm.setRoleid(roleid);
			rm.setMenuid(menus[i]);
			list.add(rm);
		}
		roleMenuMapper.addRoleMenuBatch(list);
	}

}
