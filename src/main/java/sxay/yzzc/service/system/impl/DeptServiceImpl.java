package sxay.yzzc.service.system.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.DeptMapper;
import sxay.yzzc.pojo.system.Dept;
import sxay.yzzc.service.system.DeptService;

@Service
@Transactional
public class DeptServiceImpl implements  DeptService{

	
	@Autowired
	private  DeptMapper deptMapper;

	@Override
	public List<Dept> selectByPid(int pid) {
		// TODO Auto-generated method stub
		
		return deptMapper.selectByPid(pid);
	}

	@Override
	public Dept selectByNumber(String number) {
		// TODO Auto-generated method stub
		return deptMapper.selectByNumber(number);
	}

	@Override
	public Dept selectById(int id) {
		// TODO Auto-generated method stub
		return deptMapper.selectByPrimaryKey(id);
	}
	
	
	
}
