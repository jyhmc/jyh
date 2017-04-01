package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.pojo.system.UserRole;
import sxay.yzzc.service.system.UserRoleService;

@RestController
@RequestMapping(value = "sys")
public class UserRoleController {

	@Autowired
	private UserRoleService userRoleService;

	@RequestMapping("userRole")
	public Map<String, Object> userRole(UserRole userrole) {
		Map<String, Object> map = new HashMap<String, Object>();
		userRoleService.userRole(userrole);
		map.put("success", true);
		return map;
	}

}
