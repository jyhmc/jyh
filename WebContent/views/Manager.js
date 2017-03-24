/**
 * 控制类
 * 
 * @author xingxw
 */
Ext.define('Manager', {
			mixins : {
				ManagerConfig : 'ManagerConfig'
			},
			name : 'yzzc',
			/**
			 * 获取配置名
			 * 
			 * @param {}
			 *            type
			 * @param {}
			 *            ctrlname
			 * @return {}
			 */
			getViewName : function(ctrlname) {
				var items = this[ctrlname];
				if (items != undefined) {
					return items.views[0].toString();
				} else {
					return null;
				}
			},
			/**
			 * 获取页面类/对象
			 * 
			 * @param {}
			 *            type
			 * @param {}
			 *            refs
			 * @return {}
			 */
			getViewFnName : function(type, refs) {
				var type = Ext.String.capitalize(type);
				var fn, ref, parts, x, numParts;
				fn = 'get';
				ref = refs;
				parts = ref.split('.');
				numParts = parts.length;
				for (x = 0; x < numParts; x++) {
					fn += Ext.String.capitalize(parts[x]);
				}
				fn += type;
				return fn;
			},
			/**
			 * menu里调用
			 * 
			 * @param {}
			 *            a
			 * @return {}
			 */
			getSigleViewName : function(a) {
				var splitstring=a.split('.');
				if(splitstring.length==1){
					return a;
				}else{
				return splitstring[1];
				}
			},
			getFullViewName : function(a) {
				return 'yzzc.view.' + a;
			},
			/**
			 * 创建应用
			 * 
			 * @param {}
			 *            ctrlname
			 * @param {}
			 *            viewcfg
			 */
			create : function(ctrlname, viewcfg) {
				
//				var newctrlname='ArithmeticApp.controller.ArithmeticrMgrCtrl';
//				var ctrl = Application.getController(newctrlname, viewcfg);
				if(ctrlname !='Homepage.controller.ChangeShiftsController'){
					Helper=ctrlname;
				}
				var ctrl = Application.getController(ctrlname, viewcfg);
				var viewshortname = Manager.getViewName(ctrlname);
				var center = Ext.getCmp('content-panel');
				var testshortname=Manager.getSigleViewName(viewshortname);
				var itemid = '[itemId=' + testshortname + ']';
				var item=center.down(itemid);
//				if (item!=null) {
//					center.getLayout().setActiveItem(item);
//					return ;
//				}
				var viewfn = Manager.getViewFnName('view', viewshortname);
				var view = ctrl[viewfn]();
				if (view.$isClass) {
					view = Ext.create(view.$className,viewcfg);
				}
				
				if (view instanceof Ext.window.Window) {
					view.show();
				}else{
					center.removeAll()
					center.add(view);
				}
				return;
				if (!center) {
					view.render(Ext.getBody());
				} else {
					if (view instanceof Ext.window.Window) {
						view.show();
					} else {
						center.add(view);
						center.setActiveTab(view);
					}
				}
			}
		});