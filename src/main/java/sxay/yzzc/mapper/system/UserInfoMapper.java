package sxay.yzzc.mapper.system;

import java.util.List;

import sxay.yzzc.pojo.system.UserInfo;

public interface UserInfoMapper {
	
    int deleteByPrimaryKey(Integer userid);

    int insert(UserInfo record);

    int insertSelective(UserInfo record);

    UserInfo selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(UserInfo record);

    int updateByPrimaryKey(UserInfo record);
    
    UserInfo login(UserInfo user);
    
    List<UserInfo> selectByDeptId(String deptId);
    
}