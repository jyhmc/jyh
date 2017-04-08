package sxay.yzzc.mapper.basedata;

import sxay.yzzc.pojo.basedata.YtqyInfo;

public interface YtqyInfoMapper {
    int deleteByPrimaryKey(String sid);

    int insert(YtqyInfo record);

    int insertSelective(YtqyInfo record);

    YtqyInfo selectByPrimaryKey(String sid);

    int updateByPrimaryKeySelective(YtqyInfo record);

    int updateByPrimaryKey(YtqyInfo record);
}