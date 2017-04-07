package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

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
	 * @throws JsonProcessingException
	 */
	@RequestMapping(value = "selectRole", produces = "application/json; charset=UTF-8")
	public String selectRole(String callback) throws JsonProcessingException {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Role> list = roleService.selectRole();
		map.put("result", list);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		String json = mapper.writeValueAsString(map);
		StringBuffer str = new StringBuffer();
		// jsonp跨域调用方式
		if (callback != null) {
			str.append(callback);
			str.append("(");
			str.append(json);
			str.append(")");
		}else{
			str.append(json);
		}
		return str.toString();
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
