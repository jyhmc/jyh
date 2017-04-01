package sxay.yzzc.controller.system;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import sxay.yzzc.pojo.system.UserInfo;
import sxay.yzzc.service.system.UserInfoService;

@Controller
public class LoginController {

	@Autowired
	private UserInfoService userInfoService;

	/**
	 * 登录验证，返回登录状态
	 * 
	 * @return
	 */
	@RequestMapping("login")
	@ResponseBody
	public Map<String, Object> login(UserInfo user, HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		UserInfo u = userInfoService.login(user);
		if (u != null) {
			//將用戶信息存到session中
			HttpSession session = request.getSession();
			session.setAttribute("user", u);
			map.put("result", true);
		} else {
			map.put("result", false);
		}
		return map;
	}

	/**
	 * 登录成功后跳转到首页
	 * 
	 * @return
	 */
	@RequestMapping(value = "index", method = RequestMethod.GET)
	public String index() {
		return "index";
	}

	/**
	 * 用户退出
	 * 
	 * @return
	 */
	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request) {
		//将用户信息从session中删除
		request.getSession().removeAttribute("user");
		return "../login";
	}

}
