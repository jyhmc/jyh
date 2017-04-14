<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>陕西省运政治超信息管理平台</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="../images/syzzicon.ico">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/syzzmain.css"  type="text/css" media="screen" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/syzzmain_pr.css" type="text/css" media="print" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/font-awesome.css" type="text/css" media="screen" />

<script type="text/javascript" src="<%=basePath%>js/calendar/WdatePicker.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/jquery-1.11.3.js"></script>
    
<!-- 上传附件 -->
	 <link rel="stylesheet" href="<%=basePath%>js/uploadify/uploadify.css" type="text/css"/>
	 <script type="text/javascript" src="<%=basePath%>js/uploadify/swfobject.js"></script>
	 <script type="text/javascript" src="<%=basePath%>js/uploadify/jquery.uploadify.js"></script>
	 
</head>
<body>
<div class="main">
<!--   <div class="ycdh"><i class="icon-map-marker"></i>您所在位置：<a href="#">一超四究</a>&gt;&gt;<a href="#">录入一般案件</a></div> -->
  <div class="rightcontent">
    <div class="lctbox">
      <ul>
      <!--   <li class="on">案件录入</li> -->
      <!--   <li>案件审核</li>
        <li>案件发送</li>
        <li>抄告处理</li>
        <li>反馈单处理</li> -->
      </ul>
    </div>
  </div>
  <!--rightnr-->
  <div class="rightnr">
  <form action="CaseInfo_add?mark=1" method="post" id="regForm" enctype="multipart/form-data">  
    <div class="rightnrtitle">陕西省超限运输违法案件信息录入</div>
    <table class="righttable">
      <colgroup>
      <col width="11%">
      <col width="19%">
      <col width="14%">
      <col width="19%">
      <col width="11%">
      <col width="26%">
      </colgroup>
      <tbody>
        <tr>
          <td class="tablebt" colspan="6">基本信息</td>
        </tr>
        <tr>
          <th>抄告单位</th>
          <td colspan="3"><input class="tablesrk" id="c.transferingUnit" type="text" name="c.transferingUnit" placeholder="请输入"></td>
          <th>抄告单编号</th>
          <td><input class="tablesrk" id="c.transferingUnitNum" type="text" name="c.transferingUnitNum" placeholder="请输入"></td>
        </tr>
        <tr>
          <th>查处单位</th>
          <td colspan="3"><input class="tablesrk" id="c.investigatedUnits" type="text" name="c.investigatedUnits" placeholder="请输入"></td>
          <th>证据</th>
          <td>
          <input type="file" name="file" onchange="PreviewImage(this);" id="selectFile"/>
			<input type="hidden" id="path" name="c.evidence"/>
          </td>
        </tr>
        <tr>
          <td class="tablebt" colspan="6">超限车辆基本情况</td>
        </tr>
        <tr>
          <th>车牌号码</th>
          <td><input class="tablesrk" id="c.licensePlateNo" type="text" name="c.licensePlateNo" placeholder="请输入"></td>
          <th>道路运输证编号</th>
          <td><input class="tablesrk" id="c.operatingPermitNo" type="text" name="c.operatingPermitNo" placeholder="请输入"></td>
          <th>车牌轴数</th>
          <td><input class="tablesrk" id="c.axleQuantity" type="text" name="c.axleQuantity" placeholder="请输入"></td>
        </tr>
        <tr>
          <td class="tablebt" colspan="6">车辆所属企业</td>
        </tr>
        <tr>
          <th>名称</th>
          <td colspan="2"><input class="tablesrk" id="c.truckOwnedEnterprises" type="text" name="c.truckOwnedEnterprises" placeholder="请输入"></td>
          <th>企业注册登记地</th>
          <td colspan="2"><input class="tablesrk" id="c.registrationPlace" type="text" name="c.registrationPlace" placeholder="请输入"></td>
        </tr>
        <tr>
          <td class="tablebt" colspan="6">货运装载企业</td>
        </tr>
        <tr>
          <th>运输货物</th>
          <td><input class="tablesrk" id="c.goodsType" type="text" name="c.goodsType" placeholder="请输入"></td>
          <th>货物装载单位名称</th>
          <td colspan="3"><input class="tablesrk" id="c.sourceEnterprises" type="text" name="c.sourceEnterprises" placeholder="请输入"></td>
        </tr>
        <tr>
          <td class="tablebt" colspan="6">驾驶员情况</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td><input class="tablesrk" id="c.driver" type="text" name="c.driver" placeholder="请输入"></td>
          <th>从业资格证号</th>
          <td><input class="tablesrk" id="c.qualificationCertificate" type="text" name="c.qualificationCertificate" placeholder="请输入"></td>
          <th>发证单位</th>
          <td><input class="tablesrk" id="c.certificateUint" type="text" name="c.certificateUint" placeholder="请输入"></td>
        </tr>
        <tr>
          <th>违法事实及<br>
            违法行为<br>
            简要描述</th>
          <td colspan="5"><dl class="jyms">
              <dd>
              20
                <input class="xhxsr" id="cb.year" type="text" name="cb.year" style="width:60px">
                年
                <input class="xhxsr" id="cb.month" type="text" name="cb.month" style="width:40px">
                月
                <input class="xhxsr" id="cb.day" type="text" name="cb.day" style="width:40px">
                日，
                <input class="xhxsr" id="cb.driver" type="text" name="cb.driver" style="width:70px">
                驾驶
                <input class="xhxsr" id="cb.licensePlateNo" type="text" name="cb.licensePlateNo" style="width:100px">
                从
                <input class="xhxsr" id="cb.sourceEnterprise" type="text" name="cb.sourceEnterprise" style="width:120px">
                装载（
                <input class="xhxsr" id="cb.goods" type="text" name="cb.goods" style="width:120px">
                ）行至
                <input class="xhxsr" id="cb.road" type="text" name="cb.road" style="width:60px">
                路
                <input class="xhxsr" id="cb.roadBranch" type="text" name="cb.roadBranch" style="width:60px">
                段被
                <input class="xhxsr" id="cb.managementUnit" type="text" name="cb.managementUnit" style="width:80px">
                查获，经检测，该车货总重
                <input class="xhxsr" id="cb.totalWeight" type="text" name="cb.totalWeight" style="width:60px">
                吨，超限
                <input class="xhxsr" id="cb.overWeight" type="text" name="cb.overWeight" style="width:60px">
                吨。属擅自超限运输。</dd>
              <dt class="color_blue">其他违法行为:</dt>
              <dd>
                <input id="c.otherIllegalFacts" type="text" name="c.otherIllegalFacts" class="msrk">
              </dd>
              <dt class="color_blue">法律文书案号:</dt>
              <dd>
                <input id="c.legalCopy" type="text" name="c.legalCopy" class="msrk">
              </dd>
            </dl></td>
        </tr>
        <tr>
          <th>移交人</th>
          <td><input class="tablesrk" id="c.transferPerson" type="text" name="c.transferPerson" placeholder="请输入"></td>
          <th>接收人</th>
          <td><input class="tablesrk" id="c.recipient" type="text" name="c.recipient" placeholder="请输入"></td>
          <th>接收时间</th>
          <td>
          <input type="text" name="c.receivingTime" class="ex_input" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'});" value="2016-08-25"/>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="dbanq">
      <input class="btn_blue w100 mal10 mar10" type="submit" value="提交审核">
      <!--  
      <input class="btn_ql w100 mal10 mar10" type="submit" value="存稿">
      -->
      <input class="btn_grey w100 mal10 mar10" type="reset" value="重新填写">
    </div>
    </form>
  </div>
  <!--rightnr end--> 
</div>
</body>
</html>
<script type="text/javascript">
function PreviewImage(imgFile) 
	   { 
	    var pattern = /(\.*.doc$)|(\.*.docx$)|(\.*.xls$)|(\.*.xlsx$)/;      
	    if(!pattern.test(imgFile.value)) 
	    { 
	     alert("系统仅支持doc/docx/xls/xlsx格式的文件");  
	     imgFile.focus(); 
	    } 
	    else 
	    { 
	     var path; 
	     if(document.all)//IE 
	     { 
	      imgFile.select(); 
	      //path = document.selection.createRange().text; 
	      path=$('#selectFile').val();
	     } 
	     else//FF 
	     { 
	      path = URL.createObjectURL(imgFile.files[0]);
	     } 
	     $('#path').val(path);
	    } 
	   } 
</script>