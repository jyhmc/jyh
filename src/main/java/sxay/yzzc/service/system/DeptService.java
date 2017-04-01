package sxay.yzzc.service.system;

import java.util.List;

import sxay.yzzc.pojo.system.Dept;

public interface DeptService {
	
	 List<Dept> selectByPid(int pid);
	 
	 Dept  selectByNumber(String number);
	 
	 Dept  selectById(int id);

}
