package sxay.yzzc.pojo.basedata;

public class SourceDataWithBLOBs extends SourceData {
    private String bindpic;

    private String remark;

    public String getBindpic() {
        return bindpic;
    }

    public void setBindpic(String bindpic) {
        this.bindpic = bindpic == null ? null : bindpic.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}