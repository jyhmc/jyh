package sxay.yzzc.service.system.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sxay.yzzc.mapper.system.UserInfoMapper;
import sxay.yzzc.pojo.system.UserInfo;
import sxay.yzzc.service.system.UserInfoService;

@Service
@Transactional
public class UserServiceImpl implements UserInfoService {

	@Autowired
	private UserInfoMapper userInfoMapper;

	@Override
	public UserInfo login(UserInfo user) {
		// TODO Auto-generated method stub
		return userInfoMapper.login(user);
	}

	@Override
	public List<UserInfo> selectByDeptId(String deptId) {
		// TODO Auto-generated method stub
		return userInfoMapper.selectByDeptId(deptId);
	}

	@Override
	public void userAdd(UserInfo user) {
		// TODO Auto-generated method stub
		userInfoMapper.insertSelective(user);
	}

	@Override
	public void userEdit(UserInfo user) {
		// TODO Auto-generated method stub
		userInfoMapper.updateByPrimaryKeySelective(user);
	}

	@Override
	public void userDel(int userid) {
		// TODO Auto-generated method stub
		userInfoMapper.deleteByPrimaryKey(userid);
	}

	
	
}
