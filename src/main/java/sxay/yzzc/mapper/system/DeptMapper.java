package sxay.yzzc.mapper.system;

import java.util.List;

import sxay.yzzc.pojo.system.Dept;

public interface DeptMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(Dept record);

    int insertSelective(Dept record);

    Dept selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Dept record);

    int updateByPrimaryKey(Dept record);
    
    List<Dept> selectByPid(int pid);
    
    Dept selectByNumber(String number);
    
    
}