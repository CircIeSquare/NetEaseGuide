$(function(){
	var pageNum=1;
	var current=$(".page"+pageNum);
	var next=$(".page"+(pageNum+1));
	
	var page=$(".page");
	var state=false;
		
	page.each(function(index,ele){
		$(this).swipeUp(function(){		
			if(state) return;
			setTimeout(function(){			
				//state=true;
				pageNum=index;
				
				current=$(".page"+(pageNum+1));
				next=$(".page"+(pageNum+2));
				current.removeClass("pt-page-moveFromTopFade").addClass("pt-page-moveToTopFade hide");
				next.removeClass("pt-page-moveToBottomFade hide").addClass("pt-page-moveFromBottomFade");
				//pageNum++;
				if(pageNum>=page.length-2){
					pageNum=page.length-2;
					state=true;
					/*if(pageNum<page.length-2){
						pageNum=index;
						state=false;
					};*/
				};
			},200);
		}).swipeDown(function(){		
			if(!state) return;
			setTimeout(function(){
				//state=false;
				pageNum=index;
				
				current=$(".page"+(pageNum));
				next=$(".page"+(pageNum+1));
				current.removeClass("hide pt-page-moveToTopFade pt-page-moveFromBottomFade").addClass("pt-page-moveFromTopFade");
				next.addClass("pt-page-moveToBottomFade hide").removeClass("pt-page-moveFromBottomFade");
				//pageNum--;
				if(pageNum<=1){
					pageNum=1;
					state=false;
					/*if(pageNum>1){
						pageNum=index;
						state=true;
					};*/
				};
			},200);
		});
	});
	
});