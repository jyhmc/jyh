package sxay.yzzc.pojo.basedata;

public class Station {
    private String stid;

    private String stname;

    private String starea;

    private String stunitnumber;

    private String stcomp;

    private String serialnumber;

    private Integer isstart;

    private String notes;

    public String getStid() {
        return stid;
    }

    public void setStid(String stid) {
        this.stid = stid == null ? null : stid.trim();
    }

    public String getStname() {
        return stname;
    }

    public void setStname(String stname) {
        this.stname = stname == null ? null : stname.trim();
    }

    public String getStarea() {
        return starea;
    }

    public void setStarea(String starea) {
        this.starea = starea == null ? null : starea.trim();
    }

    public String getStunitnumber() {
        return stunitnumber;
    }

    public void setStunitnumber(String stunitnumber) {
        this.stunitnumber = stunitnumber == null ? null : stunitnumber.trim();
    }

    public String getStcomp() {
        return stcomp;
    }

    public void setStcomp(String stcomp) {
        this.stcomp = stcomp == null ? null : stcomp.trim();
    }

    public String getSerialnumber() {
        return serialnumber;
    }

    public void setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber == null ? null : serialnumber.trim();
    }

    public Integer getIsstart() {
        return isstart;
    }

    public void setIsstart(Integer isstart) {
        this.isstart = isstart;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes == null ? null : notes.trim();
    }
}