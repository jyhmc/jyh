package sxay.yzzc.mapper.basedata;

import sxay.yzzc.pojo.basedata.Station;

public interface StationMapper {
    int deleteByPrimaryKey(String stid);

    int insert(Station record);

    int insertSelective(Station record);

    Station selectByPrimaryKey(String stid);

    int updateByPrimaryKeySelective(Station record);

    int updateByPrimaryKeyWithBLOBs(Station record);

    int updateByPrimaryKey(Station record);
}