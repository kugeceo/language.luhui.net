document.write(`<div class="worldMap">
<h3 class="dropdown-toggle">语言雷达[蓝色标示即该语言所在地或发源地]<small class="text-muted">*提示：鼠标滑轮在地图上可放大缩小呈现矢量效果</small></h3>
<div id="worldmap" ></div>
</div>
<footer>
<script src="mobile.js"></script>
Copyright &copy; 
<script>
var year="";
mydate=new Date();
myyear=mydate.getYear();
year=(myyear > 200) ? myyear : 1900 + myyear;
document.write(year); 
</script> -01-11
  <a href="http://www.luhui.net" target="_blank">luhui.net</a> All Rights Reserved.
<script src="echarts.js"></script>
<script src="world.js"></script>
<script src="unimap.js"></script>
<script src="common.js"></script>
<script src="layer.js"></script>
<script>
//弹片效果
$(".con_Tent_main ul li").on("click",function(){
var htmlspan=$(this).children("span").text();
var htmlem=$(this).children("em").html();
var htmlHeight=$(this).offset().top+65;
var htmlleft=$(this).offset().left+29;
var title=$(".con_Tent_main h2").html();
var asciihtml=htmlspan.charCodeAt();
var abbrhtml=$(".con_Tent_main p abbr").html();
//alert(codehtml);
/*获取标题文本*/
 function delHtmlTag(str){  
  return str.replace(/<[^>]+>/g,"");//去掉所有的html标记  
}   
var titcon=htmlspan+"属于"+delHtmlTag(title)+"该分区共有"+abbrhtml+"个，ASCII码为："+"&amp;#"+asciihtml+",想了解更多内容请来 http://yuyan.luhui.net/uni";


 $.message({
       message:"<span class='tip_uni'>"+htmlspan+"</span><strong>"+title+"</strong><div class='tip_case'><span> Unicode number:<small>"+"uni"+htmlem+"</small></span><span> HTML-code:<small>"+"&amp;#"+asciihtml+"</small></span></div><div class='tip_copy'><a href='#' data-clipboard-text='"+titcon+"'  id='copyLink'>复制/Copy</a></div>",
       type:'error',
       time:'5000',
       showClose:true,
	   autoClose:false,
 });
 
 $(".c-message").css({
 "top":htmlHeight+"px",
 left:htmlleft+"px",
 "border-radius":".5rem"
 })
})

  
//分享按钮JS配合layer.js使用
 $(document).ready(function (e) {
         var clipboard = new Clipboard("#copyLink");
            clipboard.on('success', function (e) {
                console.log(e);
				      layer.msg('复制将字码复制到粘贴板！');
            });
            clipboard.on('error', function (e) {
                console.log(e);
                 layer.msg('复制失败！');
       });
 });

//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}
var GetID=getUrlParam('id');

$(".nav"+GetID).addClass("active");
//地图	
var dom = document.getElementById("worldmap");
var myChart = echarts.init(dom);
var app = {};
var data=[];
unimap();
var option = {
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = params.value 
            return params.seriesName + '<br/>' + params.name 
        }
    },
    visualMap: {
        type: 'piecewise',
		show:false,
        min: 0,
        max: 2,//变色范围
        realtime: false,
        calculable : true,
        color: ['orangered','#44ee87','#999']//指定颜色
    },
	dataset:{
		
	},
    series : [
        {
            name: '地区',
            type: 'map',
            mapType: 'world',
            roam: true,
            show:true,
            itemStyle:{
                emphasis:{
					label:{show:true},
					areaColor: '#3e9ef8',
				}
				
            },
			data:data
        }
		
    ]
};
myChart.setOption(option, true);
</script>`)