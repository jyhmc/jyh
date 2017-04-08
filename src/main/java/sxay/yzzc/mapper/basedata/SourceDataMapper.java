package sxay.yzzc.mapper.basedata;

import sxay.yzzc.pojo.basedata.SourceData;
import sxay.yzzc.pojo.basedata.SourceDataWithBLOBs;

public interface SourceDataMapper {
    int deleteByPrimaryKey(String sid);

    int insert(SourceDataWithBLOBs record);

    int insertSelective(SourceDataWithBLOBs record);

    SourceDataWithBLOBs selectByPrimaryKey(String sid);

    int updateByPrimaryKeySelective(SourceDataWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SourceDataWithBLOBs record);

    int updateByPrimaryKey(SourceData record);
}