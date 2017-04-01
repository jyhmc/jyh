package sxay.yzzc.mapper.system;

import java.util.List;
import java.util.Map;

import sxay.yzzc.pojo.system.Menu;

public interface MenuMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(Menu record);

	int insertSelective(Menu record);

	Menu selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(Menu record);

	int updateByPrimaryKey(Menu record);

	List<Menu> selectByPid(int pid);

	List<Menu> selectRoleMenu(int roleid);

	List<Menu> selectByRole(Map<String, Object> map);

}