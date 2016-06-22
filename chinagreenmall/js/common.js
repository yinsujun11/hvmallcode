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
						success:function(e){
							fn(e);	
						},
						error:function(e){
							fn(e);	
						}
					}
			);
			
		}
	
	
})(window);