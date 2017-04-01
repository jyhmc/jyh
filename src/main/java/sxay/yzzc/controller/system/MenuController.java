package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.service.system.MenuService;

@RestController
@RequestMapping(value = "sys")
public class MenuController {

	@Autowired
	private MenuService menuService;

	@RequestMapping(value = "tree")
	public Map<String, Object> tree() {
		Map<String, Object> map = new HashMap<>();
		List<Menu> list = menuService.selectByPid();
		map.put("result", list);
		return map;
	}

	/**
	 * 根据父id查子节点
	 * 
	 * @param pid
	 * @return
	 */
	@RequestMapping("selectMenu")
	public Map<String, Object> selectMenu(int node) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Menu> list = menuService.selectMenu(node);
		map.put("result", list);
		return map;
	}

	@RequestMapping("menuAdd")
	public Map<String, Object> menuAdd(Menu menu) {
		Map<String, Object> map = new HashMap<String, Object>();
		menuService.menuAdd(menu);
		map.put("success", true);
		return map;
	}

	@RequestMapping("menuDel")
	public Map<String, Object> menuDel(int id) {
		Map<String, Object> map = new HashMap<String, Object>();
		menuService.menuDel(id);
		map.put("success", true);
		return map;
	}

	@RequestMapping("menuEdit")
	public Map<String, Object> menuEdit(Menu menu) {
		Map<String, Object> map = new HashMap<String, Object>();
		menuService.menuEdit(menu);
		map.put("success", true);
		return map;
	}

}
