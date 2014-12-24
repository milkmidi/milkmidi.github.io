// 2013 03 25
this.milkmidi = this.milkmidi || {};
(function () { 
    var ua = navigator.userAgent.toLowerCase();
    var MOBILES_NAME/*Array*/ = [ 
        "android","iphone","windows ce","windows phone","symbian","blackberry",
        "mobile","phone","midp","cldc","opera mini","minimo","up.browser","up.link","docomo",
        "avantgo","palmos","ppc","xv6850","htc_","kindle","wap","mmp/","teleca","lge","portalmmm",
        "nintendo","nokia","armv","j2me","nook browser","webos","blazer","epoc","samsung","novarra-vision",
        "netfront","sec-sgh","sharp","au-mic/1.1.4.0","reqwirelessweb","sonyericsson","playstation","vodafone",
        "ucweb"
    ];    
    milkmidi.detectmobile = {
        isMobile : function(){
            for (var a in MOBILES_NAME) {
                if (ua.indexOf(MOBILES_NAME[a])!=-1) {
                    return true;
                }
            }
            return false;
        },
        iPhone :function (){
            return ua.indexOf("iphone") != -1;
        },
        iPad:function(){
            return ua.indexOf("ipad") != -1;
        },
		iOS:function(){
			return this.iphone() || this.ipad();
		},
		android:function(){
			return ua.indexOf("android") != -1;
		},
		getOS:function ( ) {
			var mobileOS;
			var ua = navigator.userAgent;				
			if ( ua.match(/iPad/i) || ua.match(/iPhone/i) )   {
				mobileOS = 'iOS';				
			}  else if ( ua.match(/Android/i) )  {
				mobileOS = 'Android';				
			}  else   {
				mobileOS = 'unknown';
			}
			return mobileOS;
		},
		getVersion:function(){
			var mobileOS;
			var ua = navigator.userAgent;
			var uaindex;			
			if ( ua.match(/iPad/i) || ua.match(/iPhone/i) )   {
				mobileOS = 'iOS';
				uaindex  = ua.indexOf( 'OS ' );
			}  else if ( ua.match(/Android/i) )  {
				mobileOS = 'Android';
				uaindex  = ua.indexOf( 'Android ' );
			}  else   {
				mobileOS = 'unknown';
			}
			if ( mobileOS === 'iOS'  &&  uaindex > -1 )   {
				mobileOSver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
			}  else if ( mobileOS === 'Android'  &&  uaindex > -1 )  {
				mobileOSver = ua.substr( uaindex + 8, 3 );
			}  else  {
				mobileOSver = 'unknown';
			}
			return mobileOSver;
		},
		isAndroid4DefaultBrowser:function(){ // createJS Bug
			var version = this.getVersion().split(".")[0];
			if( this.android() && version == "4" && ua.indexOf("chrome") == -1 && ua.indexOf("firefox")==-1 && ua.indexOf("opera") ==-1){
				return true;
			}
			return false;
		}
    };
})()