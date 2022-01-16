	var loadingAddLike = false,
	FBRES=null;
	category_slug = "",
	loadingPanel = false,
	page = 0;
app = angular.module('AppVL', ['ngAnimate', 'ui.bootstrap']);
app.filter('split', function() {
  return function(input, delimiter) {
    delimiter = delimiter || ','

    return input.split(delimiter);
  }
});
app.filter('iframeYoutube', function() {
  return function(input) {
	  if(!input)return false;
	  var key = input.split('=')[1];
	  if(!key)return false;
    return key;
  }
});

app.filter('emoticon', function() {
  return function(str) {
	  var em = ''; 
	  if(str.toLowerCase().indexOf(":haha") > 1) em="emoticon emoticon_haha";
	  if(str.toLowerCase().indexOf(":wow") > 1) em="emoticon emoticon_wow";
	  if(str.toLowerCase().indexOf(":sad") > 1) em="emoticon emoticon_sad";
	  if(str.toLowerCase().indexOf(":angry") > 1) em="emoticon emoticon_angry";
    return em;
  }
});
app.filter('emoticonClear', function() {
  return function(str) {
    return str.replace(/:haha/i, "").replace(/:wow/i, "").replace(/:sad/i, "").replace(/:angry/i, "");
  }
});
app.directive("imageLoaded", function () {
return {
restrict: "A",
scope: {
imageLoadeded: "="
},
link: function (scope, element, attrs) {

element.bind("load", function () {
scope.imageLoadeded();

});
scope.$on("$destroy", function () {
element.unbind("load");
});
}
};
});
app.directive("scroll", function ($window) {
    return {
		scope: {
            scrollAction: '&'
        },
		link: function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
			if(element.attr("name")&&element.attr("name")=="col-right") {
				if(this.innerWidth>=768)
				{
					if ((this.innerHeight + this.scrollY) >= element[0].scrollHeight) 
					{
						
					//	element[0].style.marginTop = ((this.innerHeight + this.scrollY) - element[0].scrollHeight) + "px";
					
					} else {
						//element[0].style.marginTop = "0px";
					 }
				}
				
			} else{
				if ((this.innerHeight + this.scrollY) >= element[0].scrollHeight-100) {
				scope.scrollAction();
             }
			}
             
            scope.$apply();
        });
		}
	};
});

app.directive("nghTemplateIndexPanel", function ()
{
return {
  templateUrl: '/viewIndexPanel.html'
};
});
app.directive("nghTemplateSearch", function ()
{
return {
  templateUrl: '/viewSearch.html'
};
});
app.factory('DataManager', function(){
	   var data =
        {
            searchString: ''
        };
    
    return {
        getSearchString: function () {
            return data.searchString;
        },
        setSearchString: function (searchString) {
            data.searchString = searchString;
        }
    };
});

app.controller('searchContentCtrl', function($scope, $http,DataManager) {
	$scope.listThreads = [];
	$scope.searchString = '';
	$scope.readMore = false;
	$scope.loadPanel = function() {
		if(!$scope.loadingPanel && $scope.searchString!='') {
			$scope.loadingPanel = true;
			$scope.readMore = false;
			$http.get("/search/" + $scope.searchString + "/0").success(
				function (response) {
			
					for(var i = 0;i < response.threads.length;i++)
						$scope.listThreads.push(response.threads[i]);
					$scope.loadingPanel = false;

					if($scope.listThreads.length == 0) $scope.notFound = true;
					else $scope.notFound = false;
			
					if(response.total > response.threads.length) 
						$scope.readMore=true;
						
				


					
				}
			);
			
		}
       
    }
  $scope.btnReadMore = function() {
  	location.href = "/" + path_search + "/" + $scope.searchString + "/1";
  }

 $scope.search = function(key) {
 	if(!key)
 		return;
 	$scope.searchString = key;
 	page=0;
	$scope.listThreads = [];
	$scope.loadPanel();

 }

	$scope.$watch(function () { return DataManager.getSearchString(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
			if(oldValue=='')document.body.scrollTop=0;
			$scope.searchString = newValue;
			page=0;
			$scope.listThreads = [];
			$scope.loadPanel();
			
		}
    });
    
	$scope.loadPanel();
	
});
app.controller('carouselCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  $scope.active = 0;
	  var slides = $scope.slides = [];
	  var currIndex = 0;
	  $scope.addSlide = function(title,thumbnail,href) {
	    slides.push({
	      image: thumbnail,
	      text: title,
	      href:href,
	      id: currIndex++
	    });
		
	  };
	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };
	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
	  for(var i = 0;i < carouselData.threads.length;i++) {
				var image = carouselData.threads[i].thumbnail.replace("/resize", "");
				if(carouselData.threads[i].thumbnail.length==0)
					image= carouselData.threads[i].youtube_thumbnail;
				$scope.addSlide(carouselData.threads[i].title,image,'/'+carouselData.threads[i].slug);
			
		}
});
app.controller('categoryContentCtrl', function($scope, $http) {
	
	$scope.listThreads = [];
	$scope.loadPanel = function() {
		if(!loadingPanel && category_slug != '') {
			loadingPanel = true;
			if(page==0)page=1;
			$http.get("/category/" + category_slug + "/" + page).success(
				function (response) {
					for(var i = 0;i < response.threads.length;i++) {
						$scope.listThreads.push(response.threads[i]);
					}
					page++;
					loadingPanel = false;
				}
			);
		}
       
    }
	$scope.loadPanel();
});
app.controller('indexContentCtrl', function($scope, $http) {
	
	$scope.listThreads = [];
	$scope.loadPanel = function() {
		if(!loadingPanel) {
			loadingPanel = true;
			if(page==0)page=1;
			$http.get("panel/" + page).success(
				function (response) {
					for(var i = 0;i < response.threads.length;i++) {
						$scope.listThreads.push(response.threads[i]);
						
					}
					page++;
					loadingPanel = false;
				}
			);
		}
       
    }
	$scope.loadPanel();
});
app.controller('topThreadsCtrl', function($scope, $http) {
	$scope.listThreads = [];
	$scope.loadTopThread = function() {
			$http.get("/topthreads").success(
				function (response) {
					for(var i = 0;i < response.threads.length;i++)
						$scope.listThreads.push(response.threads[i]);
				}
			);
    }
	$scope.loadTopThread();
});
app.controller('relatedThreadsCtrl', function($scope, $http) {
	$scope.listThreads = [];
	$scope.loadRelatedThread = function() {
			var name = encodeURIComponent(document.getElementById("thread_name").innerText);
			var tag = encodeURIComponent(document.getElementById("thread_tag").innerText);
			name = name.replace(/[()_:!^=@$]/g,'');
			tag = tag.replace(/[()_:!^=@$]/g,'');
			$http.get("/relatedthreads/" + name + "/" + tag).success(
				function (response) {
					for(var i = 0;i < response.threads.length;i++)
						$scope.listThreads.push(response.threads[i]);
				}
			);
    }
	$scope.loadRelatedThread();
});

app.controller('appRateCtrl', function($scope, $http) {
	$scope.rate=2;
	$scope.rate_count=1;
	$scope.rate_readonly=false;
	$scope.rate_id;//thread id;
	$scope.loadingAddRate=false;
    $scope.$watch('rate', function(newValue, oldValue) { 
    	if (newValue !== oldValue) {
			$scope.rate_count+=1;
			$scope.rate_readonly=true;
			if($scope.rate_id) {
				$scope.addRate($scope.rate_id,$scope.rate);
			}
			alert('Thank you for rating');
		}
    });

	$scope.addRate = function(id,rate) {
		if(!$scope.loadingAddRate) {
			$scope.loadingAddRate = true;
			$http.get("/rate/" + id + "/" + rate).success(
				function (response) {
					$scope.loadingAddRate = false;
					console.log(response);
				}
			);
		}
					
	}
});
app.controller('appVLCtrl', function($scope, $http,DataManager) {
	
	$scope.comments = {};
	$scope.fbShare = function(url, title) {
			var w=screen.width/2;
			var h = screen.height/2;
			var left = (screen.width/2)-(w/2);
			var top = (screen.height/2)-(h/2);
			 window.open("https://www.facebook.com/sharer/sharer.php?u=http://"+location.host+url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	} 
	$scope.getComment = function(url,id) {
			$http.get("https://graph.facebook.com/v2.4/?fields=share{comment_count}&id=http://"+location.host + url).success(
				function (response) {
						$scope.comments[id]=response.share.comment_count;
				}
			);
	}

	//Search Input
	$scope.searchString = '';
	$scope.$watch('searchString', function (newValue, oldValue) {
        if (newValue !== oldValue) {
			DataManager.setSearchString(newValue);
		}
    });

	$scope.goSearchPage = function() {
		if($scope.searchString != '')
		window.location = "/"+ path_search +"/" + $scope.searchString;
	}

	//Logo click 
	$scope.btnLogo = function() {
		window.location="/";
	}


	$scope.addLike = function(id) {
		if(!loadingAddLike) {
			loadingAddLike = true;
			$http.get("/like/" + id).success(
				function (response) {
					loadingAddLike = false;
				}
			);
		}
					
	}

	
	$scope.btnLike = function(thread) {
		if(!thread.view.like_check) {
			var audio = new Audio('/sound/like.eff');
			audio.play();
			thread.view.like_check = true;
			thread.view.like_count++;
			$scope.addLike(thread.id);
			
		}
					
					
	}
});
app.controller('ModalViewLiveStreamCtrl', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;
  $scope.res;
  $scope.openFrom = function (size) {

    var modalInstanceFrom = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/templateModalViewLiveStream.html',
      controller: 'ModalViewLiveStreamInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.res;
        }
      }
    });
  }
	$scope.ViewLiveStream = function(video_id,video_url) {
		$scope.res =  [  {id: video_id, url: video_url}  ];
		$scope.openFrom('lg');
	}
	
    
});

app.controller('ModalViewLiveStreamInstanceCtrl', function ($scope, $sce,$http, $uibModalInstance, items) {
	$scope.mVideo = items;
	$scope.mwidth = angular.element(document.getElementById("id-modal")).clientWidth;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.openFacebook = function() {
	  window.open('https://www.facebook.com' + $scope.mVideo[0].url, '_blank');
	  $scope.cancel();
};
 	$scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
 setTimeout(function(){
 	if(document.getElementById('fb-live-video').getAttribute("fb-xfbml-state")!="rendered")
 		FB.XFBML.parse(document.getElementById('fb-video'));

 }, 400);
});
app.controller('ModalCreateLiveStreamCtrl', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;
  $scope.res;


  
  $scope.openFrom = function (size) {

    var modalInstanceFrom = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/templateModalCreateLiveStream.html',
      controller: 'ModalCreateLiveStreamInstanceCtrl',
      backdrop: 'static',
      size: size,
      resolve: {
        items: function () {
          return $scope.res;
        }
      }
    });
  }
	$scope.CreateLive = function(display) {
		FB.ui({
		    display: display,
		    method: 'live_broadcast',
		    phase: 'create',
			}, function(response) {
			    if (!response.id) {
			      alert('dialog canceled');
			      return;
			    }
			   	$scope.res = response;
				 $scope.openFrom('md');
		
				
			
			  });
	}
	$scope.LoginFB = function() {
		FB.login(function(response) {
		    if (response.authResponse) {
			     FB.api('/me', function(response) {

			      	FBRES=response;
			       $scope.CreateLive('iframe');
			     });
		    } else {
			}
		},{
    scope: 'public_profile,email', //user_videos
    return_scopes: true
});
	}
  	$scope.btnCreateLiveStream = function() {

		
			$scope.CreateLive('popup');

	}

    
});
app.controller('ModalCreateLiveStreamInstanceCtrl', function ($scope, $http, $uibModalInstance, items) {
	$scope.mURLServer = "rtmp://rtmp-api.facebook.com:80/rtmp/";
			var masohoa = items;
			var macdinh = items.secure_stream_url,
			a = macdinh.replace('rtmps://rtmp-api.facebook.com:443/rtmp/', "rtmp://rtmp-api.facebook.com:80/rtmp/"),
			o = items.id,
			b = a.replace('rtmp://rtmp-api.facebook.com:80/rtmp/', ""),
			c = a.replace(b, "");
			var key = "%7B%22id%22%3A%22" + o + "%22%2C%22stream_url%22%3A%22" + a + "%22%2C%22secure_stream_url%22%3A%22" + macdinh + "%22%2C%22stream_secondary_urls%22%3A%5B%5D%7D";

	$scope.mStreamKey = b;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.publish = function () {
  	

	  	FB.ui({
	      display: 'popup',
	      method: 'live_broadcast',
	      phase: 'publish',
		  broadcast_data: items,
		}, function(response) {
			if(response != undefined) {
				if(response.status=="live" && !$scope.submitfb) {
	
				     
				}
			}
		});
  };

  $scope.copyStreamKey = function () {
  	$scope.CopyTextToClipboard($scope.mStreamKey);

  }
  $scope.copyURLServer = function () {
  	$scope.CopyTextToClipboard('rtmp://rtmp-api.facebook.com:80/rtmp/');
  }
  $scope.CopyTextToClipboard = function(text) {

	    var TextAreaElement = document.createElement("textarea");

	    // Place in outside of the visible area of the screen regardless of scroll position.
	    TextAreaElement.style.position = 'absolute';
	    TextAreaElement.style.top = -100;
	    TextAreaElement.style.left = 0;
	    
	    // add text to the textbox
	    TextAreaElement.value = text;

	    // append TextAreaElement to document
	    document.body.appendChild(TextAreaElement);

	    // select the content
	    TextAreaElement.select();

	    try {
	        var successful = document.execCommand('copy');
	        var msg = successful ? 'successful' : 'unsuccessful';
			//  console.log('Copying text "' + text + '" to clipboard was ' + msg);
	    } catch (err) {
	       // console.log('Cannot copy to clipboard');
	    }

	    // remove the TextAreaElement from the document
	    document.body.removeChild(TextAreaElement);

	    // unload
	    TextAreaElement = undefined;
	};	
 
});
app.controller('PaginationCtrl', function ($scope, $log) {

 	$scope.bigCurrentPage;
 	$scope.page_slug;

  $scope.pageChanged = function() {
    location.href=$scope.page_slug + "/" + ($scope.bigCurrentPage -1);
  };


 
});
app.controller('ModalCreateThreadCtrl', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.openFrom = function (size) {
    var modalInstanceFrom = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/templateModalCreateThread.html',
      controller: 'ModalCreateThreadInstanceCtrl',
      backdrop: 'static',
      size: size,
      resolve: {
        edit_id: function () {
          return $scope.edit_id;
        }
      }
    });
  };

    
});
app.controller('ModalCreateThreadInstanceCtrl', function ($scope, $http, $uibModalInstance, edit_id) {
	$scope.mErrorNewThread='';
	$scope.chooseImage = function() {
	    var inputImage =  document.getElementById("EditorInputImage");
	    inputImage.click();

  	};
  	$scope.HTML = function()
  	{
  		$scope.mHtml=!$scope.mHtml;
  		if($scope.mHtml) {
			$scope.mTextarea = document.querySelector("#modal-div-editor").innerHTML;
  		}
  		else
  		{
			document.querySelector("#modal-div-editor").innerHTML = $scope.mTextarea;
  		}
  		
  	}
  	
	$scope.ctrlH1 = function () {
		$scope.insertHtmlAtCursor("<h1>{TEXT}</h1>");
	}
	$scope.ctrlH2 = function () {
		$scope.insertHtmlAtCursor("<h2>{TEXT}</h2>");
	}
	$scope.ctrlH3 = function () {
		$scope.insertHtmlAtCursor("<h3>{TEXT}</h3>");
	}
	$scope.ctrlH4 = function () {
		$scope.insertHtmlAtCursor("<h4>{TEXT}</h4>");
	}
	$scope.ctrlB = function () {
		$scope.insertHtmlAtCursor("<strong>{TEXT}</strong>",true);
	}
	$scope.ctrlBRed = function () {
		$scope.insertHtmlAtCursor("<strong style='color:red'>{TEXT}</strong>",true);

	}
	$scope.ctrlImage = function (linkimage) {
		if(!$scope.getCaretPosition()) {
			var img = '<img class="img-responsive  shadow-effect center-block" src="' + linkimage + '" />';
			angular.element(document.querySelector("#modal-div-editor")).append(img);
		} else {
			$scope.insertHtmlAtCursor('<img class="img-responsive  shadow-effect center-block" src="' + linkimage + '" />');
		}
		           
		
	}

	$scope.handlePaste = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var plaintext = event.clipboardData.getData('text/plain');
        plaintext = plaintext.replace(new RegExp('\r?\n','g'), '<br>');
        document.execCommand('inserthtml', false, plaintext);
    }
    $scope.handleEnter = function(event) {

    	if(event.ctrlKey)
    	{
    		if(event.which === 98 || event.which === 66) //Ctrl + B
					$scope.ctrlB();
			if(event.which === 71 || event.which === 103) //Ctrl + R
					$scope.ctrlBRed();
  
    	}
    	if(event.which === 13) {

    		//$scope.insertHtmlAtCursor("<br>");
    	}
    }
	$scope.insertHtmlAtCursor = function (html,autoReplace) {
		if(!$scope.getCaretPosition())
			return;
	    var sel, range, node;
	    if (window.getSelection) {
	        sel = window.getSelection();
	        if (sel.getRangeAt && sel.rangeCount) {

	            range = window.getSelection().getRangeAt(0);
	            var span = document.createElement('SPAN');
	            span.appendChild(range.extractContents());
	            if(span.innerHTML.length==0 && html.indexOf("<img") < 0 && html.indexOf("<br>") < 0) return;
	            node = range.createContextualFragment(html.replace("{TEXT}",span.innerHTML));
	            range.deleteContents();
	            range.insertNode(node);

	  			if(autoReplace) {
	  				var innerHTML =document.querySelector("#modal-div-editor").innerHTML; 
		            innerHTML = innerHTML.split(' ' + String(span.innerHTML).trim() ).join(' ' + html.replace("{TEXT}",span.innerHTML));
		            innerHTML = innerHTML.split(String(span.innerHTML).trim() + ' ').join( html.replace("{TEXT}",span.innerHTML) + ' ');
		            document.querySelector("#modal-div-editor").innerHTML = innerHTML;
	  			}
	        }
	    } else if (document.selection && document.selection.createRange) {
	        document.selection.createRange().pasteHTML(html);
	    }
	}
	$scope.getCaretPosition = function () {
   		var caretOffset = 0;
	    var sel;
	    if (window.getSelection) {
	      sel = window.getSelection();
	      if (sel.getRangeAt && sel.rangeCount) {
	        var range = window.getSelection().getRangeAt(0);
	        var r = range.startContainer.parentElement;
	        if(range.startContainer.tagName=='EDITOR')
	          return true;
	        while(r) {
	            if(r.tagName=='EDITOR')
	                return true;
	            r = r.parentElement;
	        } 
	      }
	    } 
	    return false;
 	};
 	$scope.submiting = false;
 	$scope.mID=0;
 	$scope.mTitle='';
 	$scope.mMeta='';
 	$scope.mYoutube='';
 	$scope.mContent='';
 	$scope.mTags='';
 	$scope.mcategory_id=0;
 	$scope.mShortcutImage=1;
 	$scope.mHideImage=0;
 	$scope.mHideYoutube=0;
 	$scope.mapp_position=2;
 	$scope.mApp='';
 	$scope.app_pos_name = ["App Position","Trên", "Giữa", "Dưới"];
 	$scope.thread_app_position=$scope.app_pos_name[$scope.mapp_position];
 	//Edit
 	if(!isNaN(edit_id) && edit_id>0) {
		$http.get("/thread/" + edit_id).success(
			function (response) {
				$scope.mID=edit_id;
				$scope.mTitle = response.threads.title;
			 	$scope.mMeta=response.threads.meta;
			 	$scope.mYoutube=response.threads.youtube;
			 	$scope.mContent=response.threads.content;
			 	$scope.mTags=response.threads.tags;
			 	$scope.mcategory_id=response.threads.category.id;

			 	$scope.thread_type=response.threads.category.name;


			 	$scope.mShortcutImage=response.threads.shortcut_image?parseInt(response.threads.shortcut_image):0;
			 	$scope.mHideImage=response.threads.hide_image?parseInt(response.threads.hide_image):0;
			 	$scope.mHideYoutube=response.threads.hide_youtube?parseInt(response.threads.hide_youtube):0;
				$scope.mApp=response.threads.app;
				$scope.mapp_position=response.threads.position_app?parseInt(response.threads.position_app):0;
				$scope.thread_app_position=$scope.app_pos_name[$scope.mapp_position];
			 	document.querySelector("#modal-div-editor").innerHTML = $scope.mContent;
			}
		);
 	}
 
 	$scope.checkValidation =  function() {
 		$scope.mErrorNewThread='';
 		document.querySelector("#modal-div-error").innerHTML = '';

		if(!$scope.mcategory_id)
 			$scope.mErrorNewThread += 'Bạn Chưa Chọn Loại Bài Viết <br/>';
 		if(!$scope.mTitle.length)
 			$scope.mErrorNewThread += 'Bạn Chưa Nhập Tên Bài Viết <br/>';
 		if(!$scope.mMeta.length)
 			$scope.mErrorNewThread += 'Bạn Chưa Nhập Mô Tả Bài Viết <br/>';
 		if($scope.mYoutube.length && !$scope.mYoutube.split('=')[1])
 			$scope.mErrorNewThread += 'Link youtube Không Chính xác <br/>';
 		if(!$scope.mTags.length)
 			$scope.mErrorNewThread += 'Bạn Chưa Nhập Tags Bài Viết <br/>';
		if(document.querySelector("#modal-div-editor").innerHTML.length < 100)
			$scope.mErrorNewThread += 'Nội Dung Bài Viết Quá ít <br/>';
 		if($scope.mErrorNewThread) {
 			document.querySelector("#modal-div-error").innerHTML = $scope.mErrorNewThread;
 			return false;
 		}
 		
 		return true;
 	}
  $scope.submitThread = function () {
  	if(!$scope.checkValidation())
  		return;
  	$scope.submiting = true;
  	var postThreadUrl = "/submitThread";
  	var fd = new FormData();
  	fd.append('id',$scope.mID);
  	fd.append('category_id',$scope.mcategory_id);
  	fd.append('title', $scope.mTitle);
  	fd.append('meta', $scope.mMeta);
  	fd.append('youtube', $scope.mYoutube.length?$scope.mYoutube.split('=')[1]:'');
  	fd.append('content',document.querySelector("#modal-div-editor").innerHTML);
  	fd.append('tags', $scope.mTags);
  	fd.append('shortcut_image', $scope.mShortcutImage);
  	fd.append('hide_image', $scope.mHideImage);
  	fd.append('hide_youtube', $scope.mHideYoutube);
  	fd.append('position_app', $scope.mapp_position?$scope.mapp_position:2);
  	fd.append('app', $scope.mApp);
  

  	//send post image
     $http.post(postThreadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       }).success(function(data){
       		console.log(data);
       		$scope.submiting = false;
       		try {
       			if(data.result=="Error") {
		       		$scope.mErrorNewThread = data.valid;
		 			document.querySelector("#modal-div-error").innerHTML = $scope.mErrorNewThread;
       			} else {
       				if(data.thread.slug) {
       					window.location = "/p/" + data.thread.slug + base_lastfix;// fix p
       				} else {
       					window.location.reload();
       				}
       				
       			
       			}
       		}catch(error) {
       		}
       		
			
       }).error(function(data){
       		$scope.submiting = false;
       		console.log(data);
       		alert('Error cannot submit');
       });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  
  $scope.uploading = false;
  $scope.uploadImage = function(event) {
  	var input = event.target;
    if(!input.files[0])
    	return;
	$scope.uploading = true;
    var file = input.files[0];
	var domainUpload = base_url_image;
	var uploadUrl = domainUpload + "upload.php";
    var fd = new FormData();
     fd.append('fileToUpload', file);
     //send post image
       $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       }).success(function(data){
       		$scope.uploading = false;
       		if(!data.length) {
       			alert('Error Image cannot upload');
       			console.log(data);
       		}else {
       			$scope.ctrlImage(domainUpload + 'upload/' + data);
       		}
			
       }).error(function(){
       		$scope.uploading = false;
       		alert('Error Image cannot upload');
       });
       //reset
	   document.getElementById("EditorInputImage").value ="";
  };
});

app.factory('audio', function($document) {
		var audio = $document[0].getElementById('playlist-audio');
		return audio;
	});

	app.controller('playListController', function ($scope, audio, $http){
		$scope.supportsAudio = !!document.createElement('audio').canPlayType;
		$scope.mediaPath = 'https://api.soundcloud.com/tracks/';
		$scope.playing = false;
		$scope.selectedIndex = 0;
		$scope.audio=audio;
		$scope.seek =0;
		$scope.vol =10;
		$scope.tracks = [];
		$scope.clientids = ["985fe0b63fe807998cd19814485180ef","3d884ff627b73a61a6ad7aaaf2fb2dc2","87f5e37d8f9d20c645330fff775b78c4","43f45e45d8e32d0e4d8314f90f853215","e0a548d554ef3d7f95c0e3d33976a035","dfd9eb25fc829e3273d03f9318c98742","87481c41dd8cc8e40bdccffda687c95e","354d8da318ae7b50ad550baba76520ff","2a8b428f9f3196288a70790d11f63f0a","985fe0b63fe807998cd19814485180ef","165e46d723f47e25a1a63e9ccc503efd","549de423d1f3194cbb36d5c9f692e31f","a1e87c770e20cc3c50b9ec9bfeb531c4","a8aec4ae01b4d6d927bcd0609644dae1","5f4d0ba5cd85d34cc6573c9f4a1843d3","c37a718714cb5e11b52203cd67294c39"];
		$http.get("http://modskinpro.com/playlist/").success(
				function (response) {
					for(var i = 0;i < response.playlist.length;i++)
						$scope.tracks.push(response.playlist[i]);
					$scope.trackCount = $scope.tracks.length;

					$scope.audio.src = $scope.audioSource();
				}
		);
		
		$scope.selectedTrack = function(){ return $scope.tracks[$scope.selectedIndex]};
		$scope.audioSource = function ()
		{
			return $scope.mediaPath + $scope.selectedTrack().track_id + "/stream?client_id=" + $scope.clientids[Math.floor(Math.random() * $scope.clientids.length)];
		};
		$scope.audioDownload = function (index)
		{
	
		    return $scope.mediaPath + $scope.tracks[index].track_id + "/stream?client_id=" + $scope.clientids[Math.floor(Math.random() * $scope.clientids.length)];

		};
		
		$scope.volChange = function() {
			$scope.audio.volume = $scope.vol/10;
		}
		$scope.seekChange = function() {
			$scope.audio.currentTime = $scope.seek;
		}
		$scope.loadTrack = function(index) {
			if($scope.selectedIndex==index) {
				$scope.audio.currentTime = 0;
				return;
			}
			$scope.selectedIndex = index;
			try {
				$scope.audio.src = $scope.audioSource();
				$scope.audio.play();
			} catch(error) {

			}
			
		}
		$scope.playPauseMusic = function() {
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		}
		$scope.previous = function(){
			$scope.selectedIndex--;
			$scope.selectedIndex = ($scope.selectedIndex < 0 ? $scope.tracks.length - 1 : $scope.selectedIndex);
			audio.src = $scope.audioSource();
			
			if($scope.playing){
				audio.play();
			}
		};
		$scope.next = function(){
			$scope.selectedIndex++;
			$scope.selectedIndex = ($scope.selectedIndex >=  $scope.tracks.length ? 0 : $scope.selectedIndex);
			audio.src = $scope.audioSource();
			if($scope.playing){
				audio.play();
			}
		};
	
		audio.addEventListener('play', function() {
			$scope.$apply(function(){
				$scope.playing = true;
			});
		}, false);
		audio.addEventListener('pause', function() {
			$scope.$apply(function(){
				$scope.playing = false;
			});
		}, false);
		audio.addEventListener('ended', function() {
			$scope.$apply(function(){
				if(($scope.selectedIndex + 1) === $scope.tracks.length){
					$scope.playing = false;
					$scope.selectedIndex = 0;
					audio.src = $scope.audioSource();
				}
				else{
					$scope.playing = true;
					$scope.next();
				}
			});
		}, false);
		audio.ontimeupdate = function() {
			$scope.seek = $scope.audio.currentTime;
			document.getElementById("seek").value = $scope.seek;
			var minutes = "0" + Math.floor($scope.audio.duration / 60);
			var seconds = "0" +  Math.floor($scope.audio.duration - minutes * 60);
			var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
			document.getElementById('durationTime').innerHTML = dur;

			minutes = "0" + Math.floor($scope.audio.currentTime / 60);
			seconds = "0" +  Math.floor($scope.audio.currentTime - minutes * 60);
			dur = minutes.substr(-2) + ":" + seconds.substr(-2);
			document.getElementById('currentTime').innerHTML = dur;
		};

	});
app.controller('ModalCropImageCtrl', function ($scope, $uibModal, $log) {

	$scope.animationsEnabled = true;
  	$scope.myImage;
	$scope.myCroppedImage;
	$scope.resultSize={w: 306, h: 560};
	$scope.chooseImage = function(event) {
		var inputImage = angular.element(event.target).parent()[0].querySelectorAll("#InputCropImage")[0];
		inputImage.value = "";
	    inputImage.click();

  	};
   $scope.handleFileSelect = function(evt) {
	
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
		  $scope.openFrom('md');
        });
      };
      reader.readAsDataURL(file);
    };
  $scope.openFrom = function (size) {

    var modalInstanceFrom = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/templateModalCropImage.html',
      controller: 'ModalCropImageInstanceCtrl',
      backdrop: 'static',
      size: size,
      resolve: {
        myImage: function () {
          return $scope.myImage;
        },
		resultSize: function () {
          return $scope.resultSize;
        }
      }
    });
	 modalInstanceFrom.result.then(function (myCroppedImage) {
      $scope.myCroppedImage = myCroppedImage;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
	
});
app.controller('ModalCropImageInstanceCtrl', function ($scope, $http,$timeout, $uibModalInstance, myImage,resultSize) {
	$scope.myImage=myImage;
	$scope.resultSize=resultSize;
	$scope.aspectRadio=resultSize.w/resultSize.h;
    $scope.myCroppedImage='';
    $scope.cropType="circle";
	$scope.mHeight;

	  $scope.setArea=function(value){
			  
		  $scope.cropType=value;
	  }
	   $timeout(function () {
			$scope.mHeight=angular.element(document.getElementById("body-image-crop"))[0].clientWidth*0.8; 
		}, 100);
	 

     $scope.blockingObject = {block:true};
   
    $scope.blockingObject.callback=function(dataURL){
      //console.log('via function');
      //console.log(dataURL.length);
    } 
	$scope.callCropImage = function(){
      $scope.blockingObject.render(function(dataURL){
	  
        //console.log('via render');
       // console.log(dataURL);
	   $uibModalInstance.close(dataURL);
      });
	  
    }
		  $scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		  };
  
 
});
