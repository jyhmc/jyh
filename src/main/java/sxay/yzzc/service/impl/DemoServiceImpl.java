package sxay.yzzc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sxay.yzzc.mapper.DemoMapper;
import sxay.yzzc.pojo.Demo;
import sxay.yzzc.service.DemoService;

@Service
public class DemoServiceImpl implements DemoService {

	  @Autowired
	  private  DemoMapper demoMapper;

	@Override
	public List<Demo> selectAll() {
		// TODO Auto-generated method stub
		List<Demo> list=demoMapper.selectAll();
		return list;
	}
	  
	  
	  
	
}
