package sxay.yzzc.interceptor;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import sxay.yzzc.pojo.system.UserInfo;

/**
 * 攔截器，攔截未登錄用戶
 * 
 * @author guojun
 *
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {

	private String sendURI;
	private List<String> urlFilters;

	public String getSendURI() {
		return sendURI;
	}

	public void setSendURI(String sendURI) {
		this.sendURI = sendURI;
	}

	public List<String> getUrlFilters() {
		return urlFilters;
	}

	public void setUrlFilters(List<String> urlFilters) {
		this.urlFilters = urlFilters;
	}

	/**
	 * 
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub

		System.out.println("进入拦截器*****");
		HttpSession session = request.getSession();
		UserInfo user = (UserInfo) session.getAttribute("user");
		String contextPath = request.getContextPath();

		if (user == null) {
			/*if (request.getHeader("x-requested-with") != null
					&& request.getHeader("x-requested-with").equals("XMLHttpRequest")) { // ajax请求
				response.setHeader("sessionstatus", "timeout");
				return false;
			}*/
			response.sendRedirect(contextPath + "/login.jsp");
			return false;
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		super.postHandle(request, response, handler, modelAndView);
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		super.afterCompletion(request, response, handler, ex);
	}

	@Override
	public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
		super.afterConcurrentHandlingStarted(request, response, handler);
	}

	private boolean exclude(String uri, String basePath) {
		for (String s : urlFilters) {
			if ((s).equals(uri)) {
				return true;
			}
		}
		return false;
	}

}
