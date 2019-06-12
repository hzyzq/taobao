    
    
    //导航栏的js
        Nav();
        function Nav(){
        var sp=document.getElementsByClassName('sp')[0];
        var spn=sp.children;
        var search=document.getElementsByClassName('searchs')[0];
        var Inp=search.firstElementChild;
        var oFdj=document.getElementsByClassName('icon-sousuo')[0];
        var search_hots=document.getElementsByClassName('search-hots')[0];
        var x=document.getElementsByClassName('sjtaobao')[0];
        x.firstElementChild.onclick=function(){x.style.display='none';}
        for(var i=0;i<spn.length;i++){
            spn[i].n=i;
            spn[i].onclick=function(){
                for(var j=0;j<spn.length;j++)
                {
                    spn[j].id='';
                }
                this.id='q';
                Inp.focus();
                if(this.n>0){Inp.placeholder='';search_hots.style.display='none';}
                else{Inp.placeholder='      瘦瘦的小跟短靴';search_hots.style.display='block';}
            }
        }
         Inp.oninput=function(){
                if(Inp.value==''){oFdj.style.display='block';}
                if(Inp.value!=''){oFdj.style.display='none';}
            }
        }

    //导航的划入划出
        Nav_hh();
        function Nav_hh(){
        var navleft=document.getElementById('navleft');
        var nav_li=navleft.getElementsByTagName('li');
        var service=document.getElementsByClassName('service')[0];
        var service_item=document.getElementsByClassName('service-item');
        service.style.transition='opacity 0.5s linear';
        for(var i=0;i<service_item.length;i++)
        {      nav_li[i].index=i;
               
            nav_li[i].onmouseover=function(){
                service.style.opacity="1";
                service.style.display="block";
                for(var j=0;j<service_item.length;j++){
                    service_item[j].style.display='none';
                }
                service_item[this.index].style.display='block';
            }
            
        }
        navleft.onmouseleave=function(){
                service.style.opacity="0";
                service.style.display="none";
                
            }
        service.onmouseleave=function(){
            service.style.opacity="0";
                service.style.display="none";
        }
        }

    //三个轮播图
        Lunbo();
        function Lunbo(){
        //无缝轮播
        //原理: 定时器定义一个变量,如果满足条件style.left = 0,速调回,做到无缝效果
        //注意一下num = key = this.index;必须更新一下数值否则会有bug
        //先封装个运动函数。
        function animate(obj,target) {
        clearInterval(obj.timer);
        var speed = obj.offsetLeft > target ? -15 : 15;
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; //用于判断清除定时器
            obj.style.left = obj.offsetLeft + speed + 'px';
            //这句话要放在下面否则会有bug
            if(Math.abs(result) <= 15){ //小于等于15说明到位置了
            clearInterval(obj.timer);
            //目标值为200,400.offsetLeft为203,403要更新一下
            obj.style.left = target + 'px';
            }
         },10)
        }
        //找到元素
        var next = document.getElementById('next');
        var prev = document.getElementById('prev');
        var warp = document.getElementById('lb');
        var oUl = warp.children[0];
        var ullis = oUl.children;
        var ol = warp.children[1];
        var ollis = ol.children;
        var timer = null;
        var num = 0;
        var key = 0;
        var result = 0;
        
        for(var i=0;i<ollis.length;i++) {
            ollis[i].index = i;
            ollis[i].onclick = function() {
        for(var j=0;j<ollis.length;j++) {
            ollis[j].id = '';
            }
            this.id = 'clr';
            animate(oUl,-this.index * 520);
            num = key = this.index;
        }
        }
        timer = setInterval(autoplay,2000);
        function autoplay() {
            banner();
        }
        warp.onmouseover = function() {
            clearInterval(timer);
            next.style.display='block';
            prev.style.display='block';
        }
        warp.onmouseout = function() {
            timer = setInterval(autoplay,2000);
            next.style.display='none';
            prev.style.display='none';
        }
        
        //手动切换
        next.onclick = function() {
             banner();
        }
        
        prev.onclick = function() {
        num --;
        if(num < 0) {
            oUl.style.left = -2600 + 'px'; // 迅速调回
            num = 4; // 因为第6张就是第一张 第6张播放 下次播放第2张
        }
        animate(oUl,-num * 520);
            key --;
            if(key < 0) { //因为索引是从0开始的
            key = ollis.length-1;
        }
        for(var k=0;k<ollis.length;k++) {
            ollis[k].id = '';
            }
            ollis[key].id = 'clr';
        }
        
        function banner(){
            num ++;
            if(num > ollis.length) {
                oUl.style.left = 0; // 迅速调回
                num = 1; // 因为第6张就是第一张 第6张播放 下次播放第2张
            }
            animate(oUl,-num * 520);
                key ++;
                if(key > ollis.length-1) { //因为索引是从0开始的
                key = 0;
            }
            for(var k=0;k<ollis.length;k++)
            {
                ollis[k].id = '';
            }
            ollis[key].id = 'clr';
        }



    //同理改变参数
        function animates(obj,target) {
            clearInterval(obj.time);
            var speed = obj.offsetLeft > target ? -15 : 15;
            obj.time = setInterval(function() {
            var results = target - obj.offsetLeft; //用于判断清除定时器
            obj.style.left = obj.offsetLeft + speed + 'px';
            //这句话要放在下面否则会有bug
            if(Math.abs(results) <= 15){ //小于等于15说明到位置了
            clearInterval(obj.time);
            //目标值为200,400.offsetLeft为203,403要更新一下
            obj.style.left = target + 'px';
            }
         },10)
        }
        function banners(){
            nums ++;
            if(nums > olli.length) {
                Ul.style.left = 0+'px'; // 迅速调回
                nums = 1; // 因为第7张就是第一张 第7张播放 下次播放第2张
            }
            animates(Ul,-nums * 520);
                keys ++;
                if(keys > olli.length-1) { //因为索引是从0开始的
                keys = 0;
            }
            for(var k=0;k<olli.length;k++)
            {
                olli[k].id = '';
            }
            olli[keys].id = 'black';
            numbers.innerHTML=keys+1;
        }
        var nexts = document.getElementById('next1');
        var prevs = document.getElementById('prev1');
        var warps = document.getElementById('lb2');
        var numbers=document.getElementById('numbers');
        var Ul = warps.children[0];
        var ulli = Ul.children;
        var Ol = document.getElementsByClassName('bd')[0];
        var olli = Ol.children;
        var time = null;
        var nums = 0;
        var keys = 0;
        var results = 0;
        for(var i=0;i<olli.length;i++) {
            olli[i].indexs = i;
            olli[i].onclick = function() {
        for(var j=0;j<olli.length;j++) {
            olli[j].id = '';
            }
            this.id = 'black';
            animates(Ul,-this.indexs * 520);
            nums = keys = this.indexs;
        }
        }
        time = setInterval(autoplays,2000);
        function autoplays() {
            banners();
        }
        warps.onmouseover = function() {
            clearInterval(time);
            nexts.style.display='block';
            prevs.style.display='block';
        }
        warps.onmouseout = function() {
            time = setInterval(autoplays,2000);
            nexts.style.display='none';
            prevs.style.display='none';
        }
        
        //手动切换
        nexts.onclick = function() {
             banners();
        }
        
        prevs.onclick = function() {
        nums --;
        if(nums < 0) {
            Ul.style.left = -3120 + 'px'; // 迅速调回
            nums = 5; // 因为第6张就是第一张 第6张播放 下次播放第2张
        }
        animates(Ul,-nums * 520);
            keys --;
            if(keys < 0) { //因为索引是从0开始的
            keys = olli.length-1;
        }
        for(var k=0;k<olli.length;k++) {
            olli[k].id = '';
            }
            olli[keys].id = 'black';
            
        }

        //消息框轮播
        var lb=document.getElementsByClassName('lb3')[0];
        var times=null;
        var b=0;
        change();
        lb.onmouseover=function(){
            clearInterval(times);
        }
        lb.onmouseout=function(){
           change();
        }
        function change(){
        times=setInterval(function(){ 
            lb.style.transition="top 0.3s linear";  
            if(b>2){b=0;}
            lb.style.top=b*-72+'px';
            b++;
        },1500)}
        }

    //公告栏切换
        Notice();
        function Notice(){
    var notice_nav=document.getElementsByClassName('notice-nav')[0];
    var nav_li=notice_nav.children;
    var notice_bd=document.getElementsByClassName('notice-bd')[0];
    var bd_ul=notice_bd.children;
    var timee=null;
    var p=0;
    for(var i=0;i<nav_li.length;i++)
    {   nav_li[i].c=i;
        
        nav_li[i].onmouseover=function(){
            var a=this.c;
            timee=setTimeout(function(){
                p++;
                if(p==1)
                {nav(a);p=0;}
                },300)
        }
        nav_li[i].onmouseout=function(){
            clearTimeout(timee);
        }
    }
    function nav(c){
                for(var j=0;j<nav_li.length;j++)
                {
                    nav_li[j].className='';
                    bd_ul[j].style.display='none';
                }
                nav_li[c].className='b';
                bd_ul[c].style.display='block';
            }
        }

     //倒计时
        Daojishi();
        function Daojishi(){
     var s=document.getElementsByClassName('shi')[0];
     var f=document.getElementsByClassName('fen')[0];
     var m=document.getElementsByClassName('miao')[0];
     shijian();
      function shijian(){
         var day=new Date();
     var day1=new Date(2018,11,30,10,0,0);
     var zhs=Math.floor((day1-day)/1000);
     var shi=Math.floor(zhs/3600/24)
     var fen=Math.floor(zhs%3600/60)
     var miao=Math.floor(zhs%60)
         s.innerHTML=two(shi);
         f.innerHTML=two(fen);
         m.innerHTML=two(miao);
     }
     setInterval(shijian,1000)
     function two(n){
         return n<10?('0'+n):n;
     }
        }
    //固定定位的侧边顶部导航栏
        Fixed();
        function Fixed(){
       var fixedtop=document.getElementsByClassName('forms')[0];
       var Inps=document.getElementsByClassName('texts')[0];
       var oFdjs=document.getElementsByClassName('icon-sousuos')[0];
       var sb=document.getElementsByClassName('sb')[0];
       var sbs=document.getElementsByClassName('sbs')[0];
     
       var srightfixed=document.getElementsByClassName('srightfixed')[0];
       var toplist=document.getElementsByClassName('rightfixed-list')[0];
       var topli=toplist.children;
       var sbsspan=sbs.children;
       var sbspan=sb.firstElementChild;
       var timese=null;
       var aa=200;
       for(var i=0;i<sbsspan.length;i++)
       {
        sbsspan[i].onclick=function()
        {
            var a=sbspan.innerHTML;
            sbspan.innerHTML=this.innerHTML;
            this.innerHTML=a;
            Inps.focus();
            if(sbspan.innerHTML!='宝贝'){Inps.placeholder='';search_hots.style.display='none';}
            else{Inps.placeholder='      瘦瘦的小跟短靴';search_hots.style.display='block';}
        }
       }
       for(var j=1;j<topli.length-2;j++)
       {
           topli[j].cq=j;
           var i=0;
           topli[j].onclick=function(){

            for(var y=1;y<topli.length;y++)
            {
                topli[y].id='';
            }
            topli[this.cq].id='rightfixed-li';
               i=this.cq;
               clearInterval(timese);
               timese=setInterval(function(){
                   
                var Top=document.documentElement.scrollTop || document.body.scrollTop;
                if(i==1){ 
                    if(aa<960){aa+=20;};
                    if(aa>980){aa-=20;}
                    if(aa>=960&&aa<=980){clearInterval(timese)}
                }
                if(i==2){
                    if(aa<1970){aa+=20;};
                    if(aa>1980){aa-=20;}
                    if(aa>=1970&&aa<=1980){clearInterval(timese)}
                }
                if(i==3){
                    if(aa<2830){aa+=20;};
                    if(aa>2840){aa-=20;}
                    if(aa>=2830&&aa<=2840){clearInterval(timese)}
                }
                if(i==4)
                {
                    if(aa<3610){aa+=20;};
                    if(aa>3620){aa-=20;}
                    if(aa>=3610&&aa<=3620){clearInterval(timese)}
                }
                if(i==5)
                {
                    if(aa<4860){aa+=30;};
                    if(aa>4880){aa-=30;}
                    if(aa>=4860&&aa<=4880){clearInterval(timese)}
                }
                if(i==6)
                {
                    
                    if(aa>0){aa-=50;}
                    if(aa==0){clearInterval(timese)}
                }
                document.documentElement.scrollTop = document.body.scrollTop =aa;
               
                },1)
            }
           }
       
       Inps.oninput=function(){
                if(Inps.value==''){oFdjs.style.display='block';}
                if(Inps.value!=''){oFdjs.style.display='none';}
            }
            var Tops=document.documentElement.scrollTop || document.body.scrollTop; 
              
            if(Tops>=200){
                    fixedtop.style.display="block";
                }
            if(Tops<200)
                {
                    fixedtop.style.display="none";
                }     
            if(Tops<=460)
                {
                    srightfixed.firstElementChild.className='rightfixed';
                }
            if(Tops>460)
                {
                    srightfixed.firstElementChild.className='rightfixeds';
                }
            if(Tops<720)
            {
                topli[6].style.height=0+'px';
                topli[6].style.display='none';
            }
            if(Tops>=720)
                {
                    topli[6].style.height=50+'px';
                    topli[6].style.display='block';
                }
                if(Tops<1970){
                    Id(1);
                }
                if(Tops>=1970&&Tops<2787){
                        Id(2);
                    }
                if(Tops>=2787&&Tops<3596){
                        Id(3);
                    }
                if(Tops>=3596&&Tops<4835){
                Id(4);
                }
                if(Tops>=4835){
                Id(5);
                }
       window.onscroll=function(){
        var Top=document.documentElement.scrollTop || document.body.scrollTop;
            aa=Top;
            if(Top>=200){
                fixedtop.style.display="block";
                srightfixed.firstElementChild.className='rightfixeds';
            }
            if(Top<200)
            {
                fixedtop.style.display="none";
                srightfixed.firstElementChild.className='rightfixed';
            }
        
            if(Top<=460)
            {
                srightfixed.firstElementChild.className='rightfixed';
            }
            if(Top>460)
            {
                srightfixed.firstElementChild.className='rightfixeds';
            }
            if(Top<720)
            {
                topli[6].style.height=0+'px';
                topli[6].style.display='none';
            }
            if(Top>=720)
                {
                    topli[6].style.height=50+'px';
                    topli[6].style.display='block';
                }
           
            if(Top<1970){
                Id(1);
            }
            if(Top>=1970&&Top<2787){
                    Id(2);
                }
            if(Top>=2787&&Top<3596){
                    Id(3);
                }
            if(Top>=3596&&Top<4835){
            Id(4);
            }
            if(Top>=4835){
            Id(5);
            }
    
    }
    function Id(s){
        for(var y=1;y<topli.length;y++)
                {
                    topli[y].id='';
                }
                topli[s].id='rightfixed-li';
       }
        }
    //右边app js
        Apps();
        function Apps(){
            var appsimg=document.getElementsByClassName('appsimg');
            var app_erm=document.getElementsByClassName('app-erm');
                for(var i=0;i<appsimg.length;i++)
                {   appsimg[i].l=i;
                    appsimg[i].onmouseover=function(){
                        app_erm[this.l].style.display='block';
                        for(var j=0;j<app_erm.length;j++)
                        {
                            app_erm[j].firstElementChild.style.display='none';
                        }
                        app_erm[this.l].firstElementChild.style.display='block';
                    }
                    appsimg[i].onmouseout=function(){
                        for(var j=0;j<app_erm.length;j++)
                        {
                            app_erm[j].firstElementChild.style.display='none';
                        }
                        app_erm[this.l].style.display='none';
                        
                    }
                }
           
            var conve_list=document.getElementsByClassName('conve-list')[0];
            var conve_list_li=conve_list.children;
            var conve_bd_box=document.getElementsByClassName('conve-bd-box');
            var timees=null;
            var Gb=document.getElementsByClassName('gb')[0];
            var q=0;
           
            Gb.onclick=function(){
                for(var j=0;j<3;j++)
                        {
                            conve_list_li[j].id='';
                            conve_bd_box[j].style.display='none';
                        }
                  Gb.style.display='none';
            }   
           
            for(var i=0;i<3;i++)
            {   conve_list_li[i].m=i;
           
                conve_list_li[i].onmouseover=function(){
                    var a=this.m;
                    timees=setTimeout(function(){
                        q++;
                        if(q==1)
                        {nave(a);q=0;}
                        },30)
                    Gb.style.display='block';
                }
                conve_list_li[i].onmouseout=function(){
                    clearTimeout(timees);
                }
              
                conve_bd_box[i].onclick=function(e){
                    e = e || event;e.cancelBubble = true;
                    this.style.display='block';
                }
                document.onclick=function(){
                 for(var j=0;j<3;j++)
                        {
                            conve_list_li[j].id='';
                            conve_bd_box[j].style.display='none';
                        }
                         Gb.style.display='none';
                    }
                   
            }
            
            function nave(c){
                        for(var j=0;j<3;j++)
                        {
                            conve_list_li[j].id='';
                            conve_bd_box[j].style.display='none';
                        }
                        conve_list_li[c].id='py';
                        conve_bd_box[c].style.display='block';
                    }
           
            var payphone=document.getElementsByClassName('payphone')[0];
            var payp=payphone.children;
            var px=document.getElementsByClassName('payphone-big-box')[0];
           
            var timeee=null;
            var o=0;
                for(var i=0;i<4;i++)
                {
                    payp[i].n=i;
                    payp[i].onmouseover=function(){
                        var a=this.n;
                    timeee=setTimeout(function(){
                        o++;
                        if(o==1)
                        {naves(a);o=0;}
                        },30)
                }
                payp[i].onmouseout=function(){
                    clearTimeout(timeee);
                    }
                }
                function naves(t){
                for(var j=0;j<4;j++)
                {
                    payp[j].id='';
                   
                }
                payp[t].id='chf';
                
                px.style.left=t*-300+'px';
                px.style.transition='all 0.3s linear';
            }
           
        }
    //反馈弹窗
    Fankui();
    function Fankui()
    {   
    var hidebg=document.getElementById("hidebox");
    var content=document.getElementById("content");
        var oSpan=document.getElementById("span");
        var oLis=document.getElementsByClassName('rightfixed-li7')[0];
        oLis.onclick=function(){
            show();
        }
        oSpan.onclick=function(){
            hide();
        }
        function show()  //显示隐藏层和弹出层
        {
            
            hidebg.style.height=document.body.clientHeight+"px";  //设置隐藏层的高度为当前页面高度
            hidebg.style.display="block";  //显示弹出层
            content.style.display="block"; 
        }
        function hide()  //去除隐藏层和弹出层
        {
            hidebg.style.display="none";
            content.style.display="none";
        }
    }