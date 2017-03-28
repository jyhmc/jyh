package sxay.yzzc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sxay.yzzc.mapper.DemoMapper;
import sxay.yzzc.mapper.system.MenuMapper;
import sxay.yzzc.pojo.Demo;
import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.service.DemoService;

@Service
public class DemoServiceImpl implements DemoService {

	@Autowired
	private DemoMapper demoMapper;

	@Autowired
	private MenuMapper menuMapper;

	@Override
	public List<Demo> selectAll() {
		// TODO Auto-generated method stub
		List<Demo> list = demoMapper.selectAll();
		return list;
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
