package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.service.system.RoleService;
import sxay.yzzc.util.TreeModel;
import sxay.yzzc.util.TreeUtil;

@RestController
@RequestMapping(value = "sys")
public class RoleMenuController {

	@Autowired
	private RoleService roleService;

	@RequestMapping(value = "roleMenu", produces = "application/json; charset=UTF-8")
	public String roleMenu(int roleid) {
		String a = roleService.selectRoleMenu(roleid);
		return a;
	}

	@RequestMapping("roleMenuAdd")
	public Map<String, Object> roleMenuAdd(int roleid, int[] menus) {
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println("数组大小" + menus.length);
		roleService.roleMenuAdd(roleid, menus);
		map.put("success", true);
		return map;
	}

}
