package sxay.yzzc.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.ws.Response;

import org.apache.catalina.connector.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sxay.yzzc.mapper.DemoMapper;
import sxay.yzzc.pojo.Demo;
import sxay.yzzc.pojo.system.Menu;
import sxay.yzzc.service.DemoService;
import sxay.yzzc.util.TreeModel;

@Controller
public class DemoController {

	@Autowired
	private DemoService demoService;

	@RequestMapping(value = "hello", method = RequestMethod.GET)
	public String hello() {

		return "index";

	}

	@RequestMapping(value = "test")
	@ResponseBody
	public Map<String, Object> test() {
         Map<String, Object>  map=new HashMap<>();
         List<Demo>  list=demoService.selectAll();
         map.put("result", list);
		return  map;
	}
	
	
	
	@RequestMapping(value = "tree")
	@ResponseBody
	public Map<String, Object> tree() {
         Map<String, Object>  map=new HashMap<>();
         List<Menu>  list=demoService.selectByPid();
         map.put("result", list);
		return  map;
	}
}
