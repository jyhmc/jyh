package sxay.yzzc.service.system;

import java.util.List;

import sxay.yzzc.pojo.system.UserInfo;

public interface UserInfoService {
	
	
	  UserInfo  login(UserInfo  user);
	
	  List<UserInfo>  selectByDeptId(String  deptId);

	  
	  void userAdd(UserInfo  user);
	  
	  void userEdit(UserInfo  user);
	  
	  void userDel(int userid);
	  
}
