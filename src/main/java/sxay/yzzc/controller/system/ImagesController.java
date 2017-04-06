package sxay.yzzc.controller.system;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ImagesController {

	@RequestMapping(value = "images")
	public void images(HttpServletRequest request, HttpServletResponse response) throws IOException {

		File file = new File("e:/aaa.jpg");
		FileInputStream inputStream = new FileInputStream("e:/aaa.jpg");
		System.out.println("文件长度"+file.length());
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
