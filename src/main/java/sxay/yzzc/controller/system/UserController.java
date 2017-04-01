package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.pojo.system.UserInfo;
import sxay.yzzc.service.system.UserInfoService;

@RestController
@RequestMapping(value = "sys")
public class UserController {

	@Autowired
	private UserInfoService userInfoService;

	/**
	 * 根据父id查子节点
	 * 
	 * @param pid
	 * @return
	 */
	@RequestMapping("selectByDeptId")
	public Map<String, Object> selectByDeptId(String deptId) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<UserInfo> list = userInfoService.selectByDeptId(deptId);
		map.put("result", list);
		return map;
	}

	@RequestMapping("userAdd")
	public Map<String, Object> userAdd(UserInfo user) {
		Map<String, Object> map = new HashMap<String, Object>();
		userInfoService.userAdd(user);
		map.put("success", true);
		return map;
	}

	@RequestMapping("userDel")
	public Map<String, Object> userDel(int userid) {
		Map<String, Object> map = new HashMap<String, Object>();
		userInfoService.userDel(userid);
		map.put("success", true);
		return map;
	}

	@RequestMapping("userEdit")
	public Map<String, Object> userEdit(UserInfo user) {
		Map<String, Object> map = new HashMap<String, Object>();
		userInfoService.userEdit(user);
		map.put("success", true);
		return map;
	}

}
