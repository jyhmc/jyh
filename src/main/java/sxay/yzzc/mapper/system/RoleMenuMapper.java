package sxay.yzzc.mapper.system;

import java.util.List;

import sxay.yzzc.pojo.system.RoleMenu;

public interface RoleMenuMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(RoleMenu record);

	int insertSelective(RoleMenu record);

	RoleMenu selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(RoleMenu record);

	int updateByPrimaryKey(RoleMenu record);

	int deleteByRoleid(Integer roleid);

	int addRoleMenuBatch(List<RoleMenu> list);
}