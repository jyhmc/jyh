package sxay.yzzc.controller.system;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.pojo.system.Dept;
import sxay.yzzc.pojo.system.UserInfo;
import sxay.yzzc.service.system.DeptService;

@RestController
@RequestMapping(value="sys")
public class DeptController {

	
	@Autowired
	private DeptService  deptService;
	
	
	/**
	 * 根据父id查子节点
	 * @param pid
	 * @return
	 */
	@RequestMapping("selectByPid")
	public  Map<String, Object>  selectByPid(int node){
		Map<String, Object>   map=new HashMap<String, Object>();
		List<Dept> list=deptService.selectByPid(node);
		map.put("result", list);
		return map;
	}
	
	
	@RequestMapping("selectByLogin")
	public  Map<String, Object>  selectByLogin(int node,HttpServletRequest request){
		Map<String, Object>   map=new HashMap<String, Object>();
		UserInfo u=(UserInfo)request.getSession().getAttribute("user");
		List<Dept> list=new ArrayList<>();
		Dept d=deptService.selectByNumber(u.getDeptid().toString());
		if(node==0){
			 list.add(d);
		}else{
			 list=deptService.selectByPid(node);
		}
		
		map.put("result", list);
		return map;
	}
}
