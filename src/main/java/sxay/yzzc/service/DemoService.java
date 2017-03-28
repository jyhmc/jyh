package sxay.yzzc.service;

import java.util.List;

import sxay.yzzc.pojo.Demo;
import sxay.yzzc.pojo.system.Menu;

public interface DemoService {
     
	   List<Demo>  selectAll();
	   List<Menu>  selectByPid();
	   
}
