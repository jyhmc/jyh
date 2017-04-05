package sxay.yzzc.service.system.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.MenuMapper;
import sxay.yzzc.mapper.system.UserRoleMapper;
import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.pojo.system.UserRole;
import sxay.yzzc.service.system.MenuService;

@Service
@Transactional
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuMapper menuMapper;

	@Autowired
	private UserRoleMapper userRoleMapper;

	@Override
	public List<Menu> selectMenu(int pid) {
		// TODO Auto-generated method stub
		return menuMapper.selectByPid(pid);
	}

	@Override
	public void menuAdd(Menu menu) {
		// TODO Auto-generated method stub
		menuMapper.insertSelective(menu);
	}

	@Override
	public void menuEdit(Menu menu) {
		// TODO Auto-generated method stub
		menuMapper.updateByPrimaryKeySelective(menu);
	}

	@Override
	public void menuDel(int id) {
		// TODO Auto-generated method stub
		menuMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<Menu> selectByPid(int userid) {
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<>();
		int roleid = userRoleMapper.selectByUserid(userid).getRoleid();
		map.put("pid", 0);
		map.put("roleid", roleid);
		List<Menu> list = menuMapper.selectByPidRole(map);
		for (int i = 0; i < list.size(); i++) {
			map.put("pid", list.get(i).getId());
			List<Menu> children = menuMapper.selectByPidRole(map);
			for (int j = 0; j < children.size(); j++) {
				children.get(j).setLeaf(true);
			}
			list.get(i).setChildren(children);
		}
		return list;
	}

	@Override
	public List<Menu> selectMenuByRole(int pid, int roleid) {
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<>();
		map.put("pid", pid);
		map.put("roleid", roleid);
		return menuMapper.selectByPidRole(map);
	}

}
