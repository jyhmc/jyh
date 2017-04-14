package sxay.yzzc.controller.system;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import sxay.yzzc.pojo.system.UserInfo;
import sxay.yzzc.service.system.UserInfoService;

@Controller
public class ImagesController {

	@Autowired
	private UserInfoService userInfoService;

	@RequestMapping(value = "images")
	public void images(HttpServletRequest request, HttpServletResponse response, String filename) throws IOException {

		if (filename != null && !filename.equals("")) {

			File file = new File(request.getServletContext().getRealPath("/") + "userpic/" + filename);
			FileInputStream inputStream = new FileInputStream(
					request.getServletContext().getRealPath("/") + "userpic/" + filename);
			System.out.println("文件长度" + file.length());
			byte[] data = new byte[(int) file.length()];
			inputStream.read(data);
			response.setContentType("image/png");
			OutputStream stream = response.getOutputStream();
			stream.write(data);
			stream.flush();
			inputStream.close();
			stream.close();
		}

	}
	
	@RequestMapping(value = "dabian")
	public void dabian(HttpServletRequest request, HttpServletResponse response, String filename) throws IOException {

		

			File file = new File("e:/jyh/123.gif");
			FileInputStream inputStream = new FileInputStream("e:/jyh/123.gif");
			System.out.println("文件长度" + file.length());
			byte[] data = new byte[(int) file.length()];
			inputStream.read(data);
			response.setContentType("image/gif");
			OutputStream stream = response.getOutputStream();
			stream.write(data);
			stream.flush();
			inputStream.close();
			stream.close();
		
			

	}

	@RequestMapping(value = "upload")
	@ResponseBody
	public Map<String, Object> upload(HttpServletRequest request, String userid) throws IOException {
		Map<String, Object> map = new HashMap<>();
		/*
		 * CommonsMultipartResolver multipartResolver = new
		 * CommonsMultipartResolver( request.getSession().getServletContext());
		 * 
		 * if (multipartResolver.isMultipart(request)) { // 将request变成多部分request
		 * 
		 * }
		 */
		MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
		// 获取multiRequest 中所有的文件名
		Iterator<String> iter = multiRequest.getFileNames();

		MultipartFile file = multiRequest.getFile(iter.next());
		String filename = null;
		if (file != null) {
			filename = UUID.randomUUID().toString()
					+ file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
			String path = request.getServletContext().getRealPath("/") + "userpic/" + filename;
			// 上传
			file.transferTo(new File(path));
		}
		// System.out.println("download" + file.getName());
        UserInfo u=new UserInfo();
        u.setUserid(Integer.parseInt(userid));
        u.setPicture(filename);
        userInfoService.userEdit(u);
		map.put("success", true);
		map.put("filename", filename);
		return map;
	}

	@RequestMapping(value = "download")
	public void download(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("download");

	}

}
