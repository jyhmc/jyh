package sxay.yzzc.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sxay.yzzc.pojo.system.UserInfo;

/**
 * 已廢棄
 * @author jyh
 *
 */
public class LoginFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub

	}

	/**
	 * 用户登录过滤器
	 * @param arg0
	 * @param arg1
	 * @param chain
	 * @throws IOException
	 * @throws ServletException
	 */
	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		System.out.println("进入过滤器");
		HttpServletRequest request = (HttpServletRequest) arg0;
		HttpServletResponse response = (HttpServletResponse) arg1;
		HttpSession session = request.getSession();
		UserInfo user = (UserInfo) session.getAttribute("user");
		String contextPath = request.getSession().getServletContext().getContextPath();
		String path = request.getRequestURI();
		if (path.indexOf("/login.jsp") > -1 || path.indexOf("/login") > -1) {
			chain.doFilter(arg0, arg1);
			return;
		}
		if (user == null) {
			response.sendRedirect(contextPath + "/login.jsp");
			return;
		}
		chain.doFilter(arg0, arg1);

	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}

}
