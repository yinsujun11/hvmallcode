var commUrl = "http://192.168.1.111";
var commPort = "888";

(function(w){
	
	/**
	 * 网络请求数据总接口
	 * @param {Object} reqUrl 请求的url
	 * @param {Object} dataJson 请求的参数
	 * @param {Object} fn  回调函数
	 */
	w.submitData = function(reqUrl, dataJson,fn){
			mui.ajax(reqUrl,
					{
						data:dataJson,
						dataType:"json",
						type:'GET',
						crossDomain:true,
						timeout:10000,
						success:function(e){
							fn(e);	
						},
						error:function(e){
							fn(e);	
						}
					}
			);
			
		}
	
	w.ajax_login_new = function(suburl,options,fn){
		var urlAll = commUrl + ":" + commPort +"/" + suburl;
		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				console.log(data)
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	w.ajax_login_other = function(suburl,options,fn){
		var urlAll = commUrl + ":" + commPort +"/" + suburl;
		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
//			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				console.log(data)
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	/**
	 * 同步请求
	 * @param {Object} suburl
	 * @param {Object} options
	 * @param {Object} ul
	 * @param {Object} pageIn
	 * @param {Object} fn
	 */
	w.ajax_login_other_sync = function(suburl,options,ul,pageIn,fn){
		var urlAll = commUrl + ":" + commPort +"/" + suburl;
		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				console.log(data)
				console.log('ul' + ul + 'pagein' + pageIn);
				fn(ul,pageIn,data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	w.isMatch = function(srcMatchStr,regxStr){
		if(!regxStr.test(srcMatchStr)){
			return false; //不符合条件
		}
		return true;
	}
})(window);