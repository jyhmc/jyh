package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.pojo.system.Role;
import sxay.yzzc.service.system.RoleService;

@RestController
@RequestMapping(value = "sys")
public class RoleController {

	@Autowired
	private RoleService roleService;

	/**
	 * 根据父id查子节点
	 * 
	 * @param pid
	 * @return
	 */
	@RequestMapping("selectRole")
	public Map<String, Object> selectRole() {
		Map<String, Object> map = new HashMap<String, Object>();
	    List<Role>  list=roleService.selectRole();
		map.put("result", list);
		return map;
	}

	@RequestMapping("roleAdd")
	public Map<String, Object> roleAdd(Role role) {
		Map<String, Object> map = new HashMap<String, Object>();
	    roleService.roleAdd(role);
		map.put("success", true);
		return map;
	}

	@RequestMapping("roleDel")
	public Map<String, Object> roleDel(int id) {
		Map<String, Object> map = new HashMap<String, Object>();
        roleService.roleDel(id);
		map.put("success", true);
		return map;
	}

	@RequestMapping("roleEdit")
	public Map<String, Object> roleEdit(Role role) {
		Map<String, Object> map = new HashMap<String, Object>();
        roleService.roleEdit(role);
		map.put("success", true);
		return map;
	}

}
