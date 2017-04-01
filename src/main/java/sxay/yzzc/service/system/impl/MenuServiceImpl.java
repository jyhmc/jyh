package sxay.yzzc.service.system.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.MenuMapper;
import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.service.system.MenuService;

@Service
@Transactional
public class MenuServiceImpl implements   MenuService {

	
	@Autowired  private  MenuMapper menuMapper;
	
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
	public List<Menu> selectByPid() {
		// TODO Auto-generated method stub
		List<Menu> list = menuMapper.selectByPid(0);
		for (int i = 0; i < list.size(); i++) {
			List<Menu> children = menuMapper.selectByPid(list.get(i).getId());
			for (int j = 0; j < children.size(); j++) {
				children.get(j).setLeaf(true);
			}
			list.get(i).setChildren(children);
		}
		return list;
	}
	
	
	
	
	
}
