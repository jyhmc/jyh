package sxay.yzzc.service.system.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.UserRoleMapper;
import sxay.yzzc.pojo.system.UserRole;
import sxay.yzzc.service.system.UserRoleService;

@Service
@Transactional
public class UserRoleServiceImpl implements  UserRoleService{

	
	@Autowired
	private UserRoleMapper  userRoleMapper;

	@Override
	public void userRole(UserRole userrole) {
		// TODO Auto-generated method stub
		userRoleMapper.deleteByUserid(userrole.getUserid());
		userRoleMapper.insertSelective(userrole);
	}
	

}
