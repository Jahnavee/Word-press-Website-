/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

/*   Copyright (C) 2011,2012,2013 John Kula */

/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    All trademarks and service marks contained within this document are
    property of their respective owners.

    Version 2013.09.26

    Updates may be found at: http:\\www.klaatusystems.com

    Output Compatibility
    Set glbOutputMode to 'RSA' for RSA compatible output (passing anything else will give 'Enhanced' output).

    RSA prints only use the following functions:
    fingerprint_browser, fingerprint_display, fingerprint_plugins, fingerprint_timezone, fingerprint_language, fingerprint_java, fingerprint_cookie, fingerprint_flash

    Enhanced prints should also use the following functions:
    fingerprint_useragent, fingerprint_OS, fingerprint_bt, fingerprint_silverlight, fingerprint_fonts
*/

define("security/device-id",[],function(){function e(e){var n,i,r,a,o,s,l,d,u,p,c=function(e,t){return e<<t|e>>>32-t},f=function(e,t){var n,i,r,a,o;return r=2147483648&e,a=2147483648&t,n=1073741824&e,i=1073741824&t,o=(1073741823&e)+(1073741823&t),n&i?2147483648^o^r^a:n|i?1073741824&o?3221225472^o^r^a:1073741824^o^r^a:o^r^a},C=function(e,t,n){return e&t|~e&n},g=function(e,t,n){return e&n|t&~n},v=function(e,t,n){return e^t^n},h=function(e,t,n){return t^(e|~n)},m=function(e,t,n,i,r,a,o){return e=f(e,f(f(C(t,n,i),r),o)),f(c(e,a),t)},y=function(e,t,n,i,r,a,o){return e=f(e,f(f(g(t,n,i),r),o)),f(c(e,a),t)},w=function(e,t,n,i,r,a,o){return e=f(e,f(f(v(t,n,i),r),o)),f(c(e,a),t)},F=function(e,t,n,i,r,a,o){return e=f(e,f(f(h(t,n,i),r),o)),f(c(e,a),t)},A=function(e){for(var t,n=e.length,i=n+8,r=(i-i%64)/64,a=16*(r+1),o=new Array(a-1),s=0,l=0;n>l;)t=(l-l%4)/4,s=l%4*8,o[t]=o[t]|e.charCodeAt(l)<<s,l++;return t=(l-l%4)/4,s=l%4*8,o[t]=o[t]|128<<s,o[a-2]=n<<3,o[a-1]=n>>>29,o},B=function(e){var t,n,i="",r="";for(n=0;3>=n;n++)t=e>>>8*n&255,r="0"+t.toString(16),i+=r.substr(r.length-2,2);return i},b=[],x=7,E=12,O=17,S=22,D=5,N=9,L=14,k=20,T=4,P=11,j=16,I=23,W=6,M=10,R=15,V=21;for(e=t(e),b=A(e),l=1732584193,d=4023233417,u=2562383102,p=271733878,n=b.length,i=0;n>i;i+=16)r=l,a=d,o=u,s=p,l=m(l,d,u,p,b[i+0],x,3614090360),p=m(p,l,d,u,b[i+1],E,3905402710),u=m(u,p,l,d,b[i+2],O,606105819),d=m(d,u,p,l,b[i+3],S,3250441966),l=m(l,d,u,p,b[i+4],x,4118548399),p=m(p,l,d,u,b[i+5],E,1200080426),u=m(u,p,l,d,b[i+6],O,2821735955),d=m(d,u,p,l,b[i+7],S,4249261313),l=m(l,d,u,p,b[i+8],x,1770035416),p=m(p,l,d,u,b[i+9],E,2336552879),u=m(u,p,l,d,b[i+10],O,4294925233),d=m(d,u,p,l,b[i+11],S,2304563134),l=m(l,d,u,p,b[i+12],x,1804603682),p=m(p,l,d,u,b[i+13],E,4254626195),u=m(u,p,l,d,b[i+14],O,2792965006),d=m(d,u,p,l,b[i+15],S,1236535329),l=y(l,d,u,p,b[i+1],D,4129170786),p=y(p,l,d,u,b[i+6],N,3225465664),u=y(u,p,l,d,b[i+11],L,643717713),d=y(d,u,p,l,b[i+0],k,3921069994),l=y(l,d,u,p,b[i+5],D,3593408605),p=y(p,l,d,u,b[i+10],N,38016083),u=y(u,p,l,d,b[i+15],L,3634488961),d=y(d,u,p,l,b[i+4],k,3889429448),l=y(l,d,u,p,b[i+9],D,568446438),p=y(p,l,d,u,b[i+14],N,3275163606),u=y(u,p,l,d,b[i+3],L,4107603335),d=y(d,u,p,l,b[i+8],k,1163531501),l=y(l,d,u,p,b[i+13],D,2850285829),p=y(p,l,d,u,b[i+2],N,4243563512),u=y(u,p,l,d,b[i+7],L,1735328473),d=y(d,u,p,l,b[i+12],k,2368359562),l=w(l,d,u,p,b[i+5],T,4294588738),p=w(p,l,d,u,b[i+8],P,2272392833),u=w(u,p,l,d,b[i+11],j,1839030562),d=w(d,u,p,l,b[i+14],I,4259657740),l=w(l,d,u,p,b[i+1],T,2763975236),p=w(p,l,d,u,b[i+4],P,1272893353),u=w(u,p,l,d,b[i+7],j,4139469664),d=w(d,u,p,l,b[i+10],I,3200236656),l=w(l,d,u,p,b[i+13],T,681279174),p=w(p,l,d,u,b[i+0],P,3936430074),u=w(u,p,l,d,b[i+3],j,3572445317),d=w(d,u,p,l,b[i+6],I,76029189),l=w(l,d,u,p,b[i+9],T,3654602809),p=w(p,l,d,u,b[i+12],P,3873151461),u=w(u,p,l,d,b[i+15],j,530742520),d=w(d,u,p,l,b[i+2],I,3299628645),l=F(l,d,u,p,b[i+0],W,4096336452),p=F(p,l,d,u,b[i+7],M,1126891415),u=F(u,p,l,d,b[i+14],R,2878612391),d=F(d,u,p,l,b[i+5],V,4237533241),l=F(l,d,u,p,b[i+12],W,1700485571),p=F(p,l,d,u,b[i+3],M,2399980690),u=F(u,p,l,d,b[i+10],R,4293915773),d=F(d,u,p,l,b[i+1],V,2240044497),l=F(l,d,u,p,b[i+8],W,1873313359),p=F(p,l,d,u,b[i+15],M,4264355552),u=F(u,p,l,d,b[i+6],R,2734768916),d=F(d,u,p,l,b[i+13],V,1309151649),l=F(l,d,u,p,b[i+4],W,4149444226),p=F(p,l,d,u,b[i+11],M,3174756917),u=F(u,p,l,d,b[i+2],R,718787259),d=F(d,u,p,l,b[i+9],V,3951481745),l=f(l,r),d=f(d,a),u=f(u,o),p=f(p,s);var $=B(l)+B(d)+B(u)+B(p);return $.toLowerCase()}function t(e){if(null===e||"undefined"==typeof e)return"";var t,n,i=e+"",r="",a=0;t=n=0,a=i.length;for(var o=0;a>o;o++){var s=i.charCodeAt(o),l=null;128>s?n++:l=s>127&&2048>s?String.fromCharCode(s>>6|192)+String.fromCharCode(63&s|128):String.fromCharCode(s>>12|224)+String.fromCharCode(s>>6&63|128)+String.fromCharCode(63&s|128),null!==l&&(n>t&&(r+=i.slice(t,n)),r+=l,t=n=o+1)}return n>t&&(r+=i.slice(t,a)),r}function n(){var e,t,n,i,r,a;try{if(e=navigator.userAgent.toLowerCase(),t=e.indexOf("opera")>=0,n=e.indexOf("msie")>=0&&!t,i=e.indexOf("mozilla")&&!n&&!t,"RSA"===N)if(r=e+E+navigator.appVersion+E+navigator.platform,n){try{r+=E+navigator.appMinorVersion}catch(o){r+=E+"na"}try{r+=E+navigator.cpuClass}catch(o){r+=E+"na"}try{r+=E+navigator.browserLanguage}catch(o){r+=E+"na"}try{r+=E+ScriptEngineBuildVersion()}catch(o){r+=E+"na"}}else i&&(r+=E+navigator.language);else if(r=e+E+navigator.platform,n){try{r+=E+navigator.cpuClass}catch(o){r+=E+"na"}try{r+=E+navigator.browserLanguage}catch(o){r+=E+"na"}try{r+=E+ScriptEngineBuildVersion()}catch(o){r+=E+"na"}}else i&&(r+=E+navigator.language);return a=r}catch(s){return D}}function r(){var e,t,n;try{return t=navigator.userAgent.toLowerCase(),e=-1!==t.indexOf("windows nt 8")?"Windows 8":-1!==t.indexOf("windows nt 7.0")?"Windows 7":-1!==t.indexOf("windows nt 6.2")?"Windows 7":-1!==t.indexOf("windows nt 6.1")?"Windows 7":-1!==t.indexOf("windows nt 6.0")?"Windows Vista/Windows Server 2008":-1!==t.indexOf("windows nt 5.2")?"Windows XP x64/Windows Server 2003":-1!==t.indexOf("windows nt 5.1")?"Windows XP":-1!==t.indexOf("windows xp")?"Windows XP":-1!==t.indexOf("windows 2000")?"Windows 2000":-1!==t.indexOf("windows nt 5.0")?"Windows 2000":-1!==t.indexOf("windows nt 4.0")?"Windows NT 4.0":-1!==t.indexOf("windows nt")?"Windows NT 4.0":-1!==t.indexOf("winnt4.0")?"Windows NT 4.0":-1!==t.indexOf("winnt")?"Windows NT 4.0":-1!==t.indexOf("windows me")?"Windows ME":-1!==t.indexOf("win 9x 4.90")?"Windows ME":-1!==t.indexOf("windows 98")?"Windows 98":-1!==t.indexOf("win98")?"Windows 98":-1!==t.indexOf("windows 95")?"Windows 95":-1!==t.indexOf("windows_95")?"Windows 95":-1!==t.indexOf("win95")?"Windows 95":-1!==t.indexOf("ce")?"Windows CE":-1!==t.indexOf("win16")?"Windows 3.11":-1!==t.indexOf("iemobile")?"Windows Mobile":-1!==t.indexOf("wm5 pie")?"Windows Mobile":-1!==t.indexOf("windows")?"Windows (Unknown Version)":-1!==t.indexOf("openbsd")?"Open BSD":-1!==t.indexOf("sunos")?"Sun OS":-1!==t.indexOf("ubuntu")?"Ubuntu":-1!==t.indexOf("ipad")?"iOS (iPad)":-1!==t.indexOf("ipod")?"iOS (iTouch)":-1!==t.indexOf("iphone")?"iOS (iPhone)":-1!==t.indexOf("mac os x beta")?"Mac OSX Beta (Kodiak)":-1!==t.indexOf("mac os x 10_0")?"Mac OSX Cheetah":-1!==t.indexOf("mac os x 10_1")?"Mac OSX Puma":-1!==t.indexOf("mac os x 10_2")?"Mac OSX Jaguar":-1!==t.indexOf("mac os x 10_3")?"Mac OSX Panther":-1!==t.indexOf("mac os x 10_4")?"Mac OSX Tiger":-1!==t.indexOf("mac os x 10_5")?"Mac OSX Leopard":-1!==t.indexOf("mac os x 10_6")?"Mac OSX Snow Leopard":-1!==t.indexOf("mac os x 10_7")?"Mac OSX Lion":-1!==t.indexOf("mac os x 10_8")?"Mac OSX Mountain Lion":-1!==t.indexOf("mac os x 10_9")?"Mac OSX Mavericks":-1!==t.indexOf("mac os x")?"Mac OSX (Version Unknown)":-1!==t.indexOf("mac_68000")?"Mac OS Classic (68000)":-1!==t.indexOf("68K")?"Mac OS Classic (68000)":-1!==t.indexOf("mac_powerpc")?"Mac OS Classic (PowerPC)":-1!==t.indexOf("ppc mac")?"Mac OS Classic (PowerPC)":-1!==t.indexOf("macintosh")?"Mac OS Classic":-1!==t.indexOf("googletv")?"Android (GoogleTV)":-1!==t.indexOf("xoom")?"Android (Xoom)":-1!==t.indexOf("htc_flyer")?"Android (HTC Flyer)":-1!==t.indexOf("android")?"Android":-1!==t.indexOf("symbian")?"Symbian":-1!==t.indexOf("series60")?"Symbian (Series 60)":-1!==t.indexOf("series70")?"Symbian (Series 70)":-1!==t.indexOf("series80")?"Symbian (Series 80)":-1!==t.indexOf("series90")?"Symbian (Series 90)":-1!==t.indexOf("cros")?"Chrome OS":-1!==t.indexOf("x11")?"UNIX":-1!==t.indexOf("nix")?"UNIX":-1!==t.indexOf("linux")?"Linux":-1!==t.indexOf("qnx")?"QNX":-1!==t.indexOf("os/2")?"IBM OS/2":-1!==t.indexOf("beos")?"BeOS":-1!==t.indexOf("blackberry95")?"Blackberry (Storm 1/2)":-1!==t.indexOf("blackberry97")?"Blackberry (Bold)":-1!==t.indexOf("blackberry96")?"Blackberry (Tour)":-1!==t.indexOf("blackberry89")?"Blackberry (Curve 2)":-1!==t.indexOf("blackberry98")?"Blackberry (Torch)":-1!==t.indexOf("playbook")?"Blackberry (Playbook)":-1!==t.indexOf("wnd.rim")?"Blackberry (IE/FF Emulator)":-1!==t.indexOf("blackberry")?"Blackberry":-1!==t.indexOf("palm")?"Palm OS":-1!==t.indexOf("webos")?"WebOS":-1!==t.indexOf("hpwos")?"WebOS (HP)":-1!==t.indexOf("blazer")?"Palm OS (Blazer)":-1!==t.indexOf("xiino")?"Palm OS (Xiino)":-1!==t.indexOf("kindle")?"Kindle":-1!==t.indexOf("wii")?"Nintendo (Wii)":-1!==t.indexOf("nintendo ds")?"Nintendo (DS)":-1!==t.indexOf("playstation 3")?"Sony (Playstation Console)":-1!==t.indexOf("playstation portable")?"Sony (Playstation Portable)":-1!==t.indexOf("webtv")?"MSN TV (WebTV)":-1!==t.indexOf("inferno")?"Inferno":"Unknown",n=e}catch(i){return D}}function a(){var e,t,n,i;try{return e=navigator.userAgent.toLowerCase(),/msie (\d+\.\d+);/.test(e)?(t=Number(RegExp.$1),e.indexOf("trident/6")>-1&&(t=10),e.indexOf("trident/5")>-1&&(t=9),e.indexOf("trident/4")>-1&&(t=8),n="Internet Explorer "+t):/firefox[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Firefox "+t):/opera[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Opera "+t):/chrome[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Chrome "+t):/version[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Safari "+t):/rv[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Mozilla "+t):/mozilla[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Mozilla "+t):/binget[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (BinGet) "+t):/curl[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (cURL) "+t):/java[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (Java) "+t):/libwww-perl[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (libwww-perl) "+t):/microsoft url control -[\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (Microsoft URL Control) "+t):/peach[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (Peach) "+t):/php[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (PHP) "+t):/pxyscand[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (pxyscand) "+t):/pycurl[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (PycURL) "+t):/python-urllib[\/\s](\d+\.\d+)/.test(e)?(t=Number(RegExp.$1),n="Library (Python URLlib) "+t):/appengine-google/.test(e)?(t=Number(RegExp.$1),n="Cloud (Google AppEngine) "+t):n="Unknown",i=n}catch(r){return D}}function o(){var e,t;try{return e=navigator.javaEnabled()?1:0,t=e}catch(n){return D}}function s(){var e,t;try{return e=navigator.cookieEnabled?1:0,"undefined"!=typeof navigator.cookieEnabled||e||(document.cookie="testcookie",e=-1!==document.cookie.indexOf("testcookie")?1:0),t=e}catch(n){return D}}function l(){var e,t;try{return e=(new Date).getTimezoneOffset()/60*-1,t=e}catch(n){return D}}function d(){var e,t;try{return"RSA"===N?(e="undefined"!=typeof navigator.language?"lang"+O+navigator.language+E:"undefined"!=typeof navigator.browserLanguage?"lang"+O+navigator.browserLanguage+E:"lang"+O+E,e+="undefined"!=typeof navigator.systemLanguage?"syslang"+O+navigator.systemLanguage+E:"syslang"+O+E,e+="undefined"!=typeof navigator.userLanguage?"userlang"+O+navigator.userLanguage:"userlang"+O):(e="undefined"!=typeof navigator.language?"BRW"+O+navigator.language+E:"undefined"!=typeof navigator.browserLanguage?"BRW"+O+navigator.browserLanguage+E:"BRW"+O+E,e+="undefined"!=typeof navigator.systemLanguage?"SYS"+O+navigator.systemLanguage+E:"SYS"+O+E,e+="undefined"!=typeof navigator.userLanguage?"USR"+O+navigator.userLanguage:"USR"+O),t=e}catch(n){return D}}function u(){var e,t;e="";try{return self.screen&&("RSA"===N?e+=screen.colorDepth+E+screen.width+E+screen.height+E+screen.availHeight:(e+=screen.colorDepth+E+screen.width+E+screen.height+E+screen.availWidth+E+screen.availHeight,-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(e+=E+screen.deviceXDPI+E+screen.deviceYDPI))),t=e}catch(n){return D}}function p(){var e,t,n;try{return e=L.getFlashPlayerVersion(),t=e.major+"."+e.minor+"."+e.release,"0.0.0"===t&&(t="Not Installed"),n=t}catch(i){return D}}function c(){var e,t,n,i;try{try{e=new ActiveXObject("AgControl.AgControl"),n=e.IsVersionSupported("5.0")?"5.x":e.IsVersionSupported("4.0")?"4.x":e.IsVersionSupported("3.0")?"3.x":e.IsVersionSupported("2.0")?"2.x":"1.x",e=null}catch(r){t=navigator.plugins["Silverlight Plug-In"],n=t?"1.0.30226.2"===t.description?"2.x":parseInt(t.description[0],10):"Not Installed"}return i=n}catch(a){return D}}function f(){var e,t,n,i,r,a,o,s,l,d,u,p;try{e=navigator.userAgent.toLowerCase(),t=e.indexOf("strOpera")>=0,n=e.indexOf("msie")>=0&&!t}catch(c){}try{if(i=new h,"RSA"===N?(i.put("npnul32.dll","def"),i.put("npqtplugin6.dll","qt6"),i.put("npqtplugin5.dll","qt5"),i.put("npqtplugin4.dll","qt4"),i.put("npqtplugin3.dll","qt3"),i.put("npqtplugin2.dll","qt2"),i.put("npqtplugin.dll","qt1"),i.put("nppdf32.dll","pdf"),i.put("NPSWF32.dll","swf"),i.put("NPJava11.dll","j11"),i.put("NPJava12.dll","j12"),i.put("NPJava13.dll","j13"),i.put("NPJava32.dll","j32"),i.put("NPJava14.dll","j14"),i.put("npoji600.dll","j61"),i.put("NPJava131_16.dll","j16"),i.put("NPOFFICE.DLL","mso"),i.put("npdsplay.dll","wpm"),i.put("npwmsdrm.dll","drm"),i.put("npdrmv2.dll","drn"),i.put("nprjplug.dll","rjl"),i.put("nppl3260.dll","rpl"),i.put("nprpjplug.dll","rpv"),i.put("npchime.dll","chm"),i.put("npCortona.dll","cor"),i.put("np32dsw.dll","dsw"),i.put("np32asw.dll","asw")):(i.put("np32asw.dll","asw"),i.put("npchime.dll","chm"),i.put("npCortona.dll","cor"),i.put("npnul32.dll","def"),i.put("npwmsdrm.dll","drm"),i.put("npdrmv2.dll","drn"),i.put("np32dsw.dll","dsw"),i.put("NPJava11.dll","j11"),i.put("NPJava12.dll","j12"),i.put("NPJava13.dll","j13"),i.put("NPJava131_16.dll","j131_16"),i.put("NPJava14.dll","j14"),i.put("NPJava142_01.dll","j142_01"),i.put("NPJava32.dll","j32"),i.put("npoji600.dll","j600"),i.put("npoji610.dll","j610"),i.put("npdeploytk.dll","jdk=6.19-"),i.put("npdeployJava1.dll","jdk=6.20+"),i.put("NPOFFICE.DLL","mso2K3"),i.put("nppdf32.dll","pdf"),i.put("npqtplugin.dll","qt1"),i.put("npqtplugin2.dll","qt2"),i.put("npqtplugin3.dll","qt3"),i.put("npqtplugin4.dll","qt4"),i.put("npqtplugin5.dll","qt5"),i.put("npqtplugin6.dll","qt6"),i.put("npqtplugin7.dll","qt7"),i.put("nprjplug.dll","rjl"),i.put("nppl3260.dll","rpl"),i.put("nprpjplug.dll","rpv"),i.put("NPSWF32.dll","swf"),i.put("NPSWF32_11_7_700_202.dll","swf11"),i.put("npdsplay.dll","wpm")),r=new h,"RSA"===N?(r.put("7790769C-0471-11D2-AF11-00C04FA35D02","abk"),r.put("89820200-ECBD-11CF-8B85-00AA005B4340","wnt"),r.put("47F67D00-9E55-11D1-BAEF-00C04FC2D130","aol"),r.put("76C19B38-F0C8-11CF-87CC-0020AFEECF20","arb"),r.put("76C19B34-F0C8-11CF-87CC-0020AFEECF20","chs"),r.put("76C19B33-F0C8-11CF-87CC-0020AFEECF20","cht"),r.put("9381D8F2-0288-11D0-9501-00AA00B911A5","dht"),r.put("4F216970-C90C-11D1-B5C7-0000F8051515","dhj"),r.put("283807B5-2C60-11D0-A31D-00AA00B92C03","dan"),r.put("44BBA848-CC51-11CF-AAFA-00AA00B6015C","dsh"),r.put("76C19B36-F0C8-11CF-87CC-0020AFEECF20","heb"),r.put("89820200-ECBD-11CF-8B85-00AA005B4383","ie5"),r.put("5A8D6EE0-3E18-11D0-821E-444553540000","icw"),r.put("630B1DA0-B465-11D1-9948-00C04F98BBC9","ibe"),r.put("08B0E5C0-4FCB-11CF-AAA5-00401C608555","iec"),r.put("45EA75A0-A269-11D1-B5BF-0000F8051515","ieh"),r.put("DE5AED00-A4BF-11D1-9948-00C04F98BBC9","iee"),r.put("76C19B30-F0C8-11CF-87CC-0020AFEECF20","jap"),r.put("76C19B31-F0C8-11CF-87CC-0020AFEECF20","krn"),r.put("76C19B50-F0C8-11CF-87CC-0020AFEECF20","lan"),r.put("D27CDB6E-AE6D-11CF-96B8-444553540000","swf"),r.put("2A202491-F00D-11CF-87CC-0020AFEECF20","shw"),r.put("5945C046-LE7D-LLDL-BC44-00C04FD912BE","msn"),r.put("22D6F312-B0F6-11D0-94AB-0080C74C7E95","wmp"),r.put("3AF36230-A269-11D1-B5BF-0000F8051515","obp"),r.put("44BBA840-CC51-11CF-AAFA-00AA00B6015C","oex"),r.put("44BBA842-CC51-11CF-AAFA-00AA00B6015B","net"),r.put("76C19B32-F0C8-11CF-87CC-0020AFEECF20","pan"),r.put("76C19B35-F0C8-11CF-87CC-0020AFEECF20","thi"),r.put("CC2A9BA0-3BDD-11D0-821E-444553540000","tks"),r.put("3BF42070-B3B1-11D1-B5C5-0000F8051515","uni"),r.put("10072CEC-8CC1-11D1-986E-00A0C955B42F","vtc"),r.put("76C19B37-F0C8-11CF-87CC-0020AFEECF20","vnm"),r.put("08B0E5C0-4FCB-11CF-AAA5-00401C608500","mvm"),r.put("4F645220-306D-11D2-995D-00C04F98BBC9","vbs"),r.put("73FA19D0-2D75-11D2-995D-00C04F98BBC9","wfd")):(r.put("7790769C-0471-11D2-AF11-00C04FA35D02","abk"),r.put("47F67D00-9E55-11D1-BAEF-00C04FC2D130","aol"),r.put("76C19B38-F0C8-11CF-87CC-0020AFEECF20","arb"),r.put("76C19B34-F0C8-11CF-87CC-0020AFEECF20","chs"),r.put("76C19B33-F0C8-11CF-87CC-0020AFEECF20","cht"),r.put("283807B5-2C60-11D0-A31D-00AA00B92C03","dan"),r.put("4F216970-C90C-11D1-B5C7-0000F8051515","dhj"),r.put("9381D8F2-0288-11D0-9501-00AA00B911A5","dht"),r.put("44BBA848-CC51-11CF-AAFA-00AA00B6015C","dsh"),r.put("76C19B36-F0C8-11CF-87CC-0020AFEECF20","heb"),r.put("630B1DA0-B465-11D1-9948-00C04F98BBC9","ibe"),r.put("5A8D6EE0-3E18-11D0-821E-444553540000","icw"),r.put("89820200-ECBD-11CF-8B85-00AA005B4383","ie5"),r.put("08B0E5C0-4FCB-11CF-AAA5-00401C608555","iec"),r.put("DE5AED00-A4BF-11D1-9948-00C04F98BBC9","iee"),r.put("45EA75A0-A269-11D1-B5BF-0000F8051515","ieh"),r.put("76C19B30-F0C8-11CF-87CC-0020AFEECF20","jap"),r.put("8AD9C840-044E-11D1-B3E9-00805F499D93","jav"),r.put("76C19B31-F0C8-11CF-87CC-0020AFEECF20","krn"),r.put("76C19B50-F0C8-11CF-87CC-0020AFEECF20","lan"),r.put("5945C046-LE7D-LLDL-BC44-00C04FD912BE","msn"),r.put("08B0E5C0-4FCB-11CF-AAA5-00401C608500","mvm"),r.put("44BBA842-CC51-11CF-AAFA-00AA00B6015B","net"),r.put("3AF36230-A269-11D1-B5BF-0000F8051515","obp"),r.put("44BBA840-CC51-11CF-AAFA-00AA00B6015C","oex"),r.put("76C19B32-F0C8-11CF-87CC-0020AFEECF20","pan"),r.put("2A202491-F00D-11CF-87CC-0020AFEECF20","shw"),r.put("D27CDB6E-AE6D-11CF-96B8-444553540000","swf"),r.put("76C19B35-F0C8-11CF-87CC-0020AFEECF20","thi"),r.put("CC2A9BA0-3BDD-11D0-821E-444553540000","tks"),r.put("3BF42070-B3B1-11D1-B5C5-0000F8051515","uni"),r.put("4F645220-306D-11D2-995D-00C04F98BBC9","vbs"),r.put("76C19B37-F0C8-11CF-87CC-0020AFEECF20","vnm"),r.put("10072CEC-8CC1-11D1-986E-00A0C955B42F","vtc"),r.put("73FA19D0-2D75-11D2-995D-00C04F98BBC9","wfd"),r.put("22D6F312-B0F6-11D0-94AB-0080C74C7E95","wmp"),r.put("89820200-ECBD-11CF-8B85-00AA005B4340","wnt")),l="",d=!0,navigator.plugins.length>0)for(u=0;u<navigator.plugins.length;u+=1)strPlugin=navigator.plugins[u],a=v(strPlugin.filename,"Plugins"),o=i.containsKey(a),d===!0?o&&(l+=i.get(a),d=!1):o&&(l+=E+i.get(a));else if(navigator.mimeTypes.length>0)for(u=0;u<navigator.mimeTypes.length;u+=1)mimeType=navigator.mimeTypes[u],d===!0?(o=i.containsKey(mimeType),o?(l+=i.get(mimeType)+O+mimeType,d=!1):(l+="Unknown"+O+mimeType,d=!1)):(o=i.containsKey(mimeType),o&&(l+=E+i.get(mimeType)+O+mimeType));else if(n){for(document.body.addBehavior("#default#clientCaps"),o=r.keys(),u=0;u<r.size();u+=1)strVersion=C(o[u]),s=r.get(o[u]),strVersion&&(d===!0?(l=s+O+strVersion,d=!1):l+=E+s+O+strVersion);"RSA"!==N&&(l=l.replace(/,/g,"."))}return l=g(l),""===l&&(l="None"),p=l}catch(f){return D}}function C(e){try{return componentVersion=document.body.getComponentVersion("{"+e+"}","ComponentID"),null!==componentVersion?componentVersion:!1}catch(t){return D}}function g(e){var t,n,i,r;try{for(i="",n=e.toLowerCase(),t=0;t<n.length;t+=1)"\n"!==n.charAt(t)&&"/"!==n.charAt(t)&&"\\"!==n.charAt(t)?i+=n.charAt(t):"\n"===n.charAt(t)&&(i+="n");return r=i}catch(a){return D}}function v(e,t){var n,i,r,a;try{return n=e,i=n.lastIndexOf(t),0>i?e:(r=n.length,n=n.substring(i+t.length,r),a=n)}catch(o){return D}}function h(){this.containsKey=m,this.get=y,this.keys=w,this.put=F,this.size=A,this.hashtable=new Array}function m(e){var t,n;t=!1;for(n in this.hashtable)if(n===e&&null!==this.hashtable[n]){t=!0;break}return t}function y(e){return this.hashtable[e]}function w(){var e,t;e=new Array;for(t in this.hashtable)null!==this.hashtable[t]&&e.push(t);return e}function F(e,t){if(null===e||null===t)throw"NullPointerException {"+e+"},{"+t+"}";this.hashtable[e]=t}function A(){var e,t;e=0;for(t in this.hashtable)null!==this.hashtable[t]&&e++;return e}function B(){try{var t=(new Date).getTime(),i={a:r(),b:navigator.platform,c:l(),d:u(),e:e(n()),f:a(),g:e(x()),h:d(),i:p(),j:c(),k:o(),l:s(),m:e(b())};return i.t=(new Date).getTime()-t,JSON.stringify(i)}catch(f){return Etsy.Logger.info("device-id: where=capture error="+f.message),""}}function b(){try{var e=document.getElementById("etsy-device-id-iframe"),t=e.contentDocument.getElementsByTagName("div"),n=[],i=t.length,r=!1;if(0==t[0].offsetWidth&&(r=!0,e.style.display=""),0!=t[0].offsetWidth)for(var a=0;i>a;a++){var o=t[a].getElementsByTagName("b");if(o[0].offsetWidth===o[1].offsetWidth){var s=t[a].getElementsByTagName("span")[0];n.push(s.textContent||s.innerText)}}return r&&(e.style.display="none"),n.join("|")}catch(l){return Etsy.Logger.info("device-id: where=fonts error="+l.message),""}}function x(){try{var e="";if(navigator.plugins.length>0){var t=navigator.plugins.length,n=[];for(i=0;t>i;i+=1){var r=navigator.plugins[i];n.push(r.name+"/"+r.filename+"/"+r.description)}e=n.join("|")}else if(navigator.mimeTypes.length>0){var t=navigator.mimeTypes.length,a=[];for(i=0;t>i;i+=1)a.push(navigator.mimeTypes[i].type);e=a.join("|")}else e=f();return e}catch(o){return Etsy.Logger.info("device-id: where=plugins error="+o.message),""}}var E,O,S,D,N,L=function(){function e(){if(!_){try{var e=W.getElementsByTagName("body")[0].appendChild(v("span"));e.parentNode.removeChild(e)}catch(t){return}_=!0;for(var n=V.length,i=0;n>i;i++)V[i]()}}function t(e){_?e():V[V.length]=e}function n(e){if(typeof I.addEventListener!=S)I.addEventListener("load",e,!1);else if(typeof W.addEventListener!=S)W.addEventListener("load",e,!1);else if(typeof I.attachEvent!=S)h(I,"onload",e);else if("function"==typeof I.onload){var t=I.onload;I.onload=function(){t(),e()}}else I.onload=e}function i(){R?r():a()}function r(){var e=W.getElementsByTagName("body")[0],t=v(D);t.setAttribute("type",T);var n=e.appendChild(t);if(n){var i=0;!function(){if(typeof n.GetVariable!=S){var r=n.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),z.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>i)return i++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,a()}()}else a()}function a(){var e=$.length;if(e>0)for(var t=0;e>t;t++){var n=$[t].id,i=$[t].callbackFn,r={success:!1,id:n};if(z.pv[0]>0){var a=g(n);if(a)if(!m($[t].swfVersion)||z.wk&&z.wk<312)if($[t].expressInstall&&s()){var u={};u.data=$[t].expressInstall,u.width=a.getAttribute("width")||"0",u.height=a.getAttribute("height")||"0",a.getAttribute("class")&&(u.styleclass=a.getAttribute("class")),a.getAttribute("align")&&(u.align=a.getAttribute("align"));for(var p={},c=a.getElementsByTagName("param"),f=c.length,C=0;f>C;C++)"movie"!=c[C].getAttribute("name").toLowerCase()&&(p[c[C].getAttribute("name")]=c[C].getAttribute("value"));l(u,p,n,i)}else d(a),i&&i(r);else w(n,!0),i&&(r.success=!0,r.ref=o(n),i(r))}else if(w(n,!0),i){var v=o(n);v&&typeof v.SetVariable!=S&&(r.success=!0,r.ref=v),i(r)}}}function o(e){var t=null,n=g(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=S)t=n;else{var i=n.getElementsByTagName(D)[0];i&&(t=i)}return t}function s(){return!J&&m("6.0.65")&&(z.win||z.mac)&&!(z.wk&&z.wk<312)}function l(e,t,n,i){J=!0,b=i||null,x={success:!1,id:n};var r=g(n);if(r){"OBJECT"==r.nodeName?(A=u(r),B=null):(A=r,B=n),e.id=P,(typeof e.width==S||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==S||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),W.title=W.title.slice(0,47)+" - Flash Player Installation";var a=z.ie&&z.win?"ActiveX":"PlugIn",o="MMredirectURL="+I.location.toString().replace(/&/g,"%26")+"&MMplayerType="+a+"&MMdoctitle="+W.title;if(typeof t.flashvars!=S?t.flashvars+="&"+o:t.flashvars=o,z.ie&&z.win&&4!=r.readyState){var s=v("div");n+="SWFObjectNew",s.setAttribute("id",n),r.parentNode.insertBefore(s,r),r.style.display="none",function(){4==r.readyState?r.parentNode.removeChild(r):setTimeout(arguments.callee,10)}()}p(e,t,n)}}function d(e){if(z.ie&&z.win&&4!=e.readyState){var t=v("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(u(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(u(e),e)}function u(e){var t=v("div");if(z.win&&z.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(D)[0];if(n){var i=n.childNodes;if(i)for(var r=i.length,a=0;r>a;a++)1==i[a].nodeType&&"PARAM"==i[a].nodeName||8==i[a].nodeType||t.appendChild(i[a].cloneNode(!0))}}return t}function p(e,t,n){var i,r=g(n);if(z.wk&&z.wk<312)return i;if(r)if(typeof e.id==S&&(e.id=n),z.ie&&z.win){var a="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?a+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(a+=" "+o+'="'+e[o]+'"'));var s="";for(var l in t)t[l]!=Object.prototype[l]&&(s+='<param name="'+l+'" value="'+t[l]+'" />');r.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+s+"</object>",q[q.length]=e.id,i=g(e.id)}else{var d=v(D);d.setAttribute("type",T);for(var u in e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?d.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&d.setAttribute(u,e[u]));for(var p in t)t[p]!=Object.prototype[p]&&"movie"!=p.toLowerCase()&&c(d,p,t[p]);r.parentNode.replaceChild(d,r),i=d}return i}function c(e,t,n){var i=v("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function f(e){var t=g(e);t&&"OBJECT"==t.nodeName&&(z.ie&&z.win?(t.style.display="none",function(){4==t.readyState?C(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function C(e){var t=g(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function g(e){var t=null;try{t=W.getElementById(e)}catch(n){}return t}function v(e){return W.createElement(e)}function h(e,t,n){e.attachEvent(t,n),X[X.length]=[e,t,n]}function m(e){var t=z.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function y(e,t,n,i){if(!z.ie||!z.mac){var r=W.getElementsByTagName("head")[0];if(r){var a=n&&"string"==typeof n?n:"screen";if(i&&(E=null,O=null),!E||O!=a){var o=v("style");o.setAttribute("type","text/css"),o.setAttribute("media",a),E=r.appendChild(o),z.ie&&z.win&&typeof W.styleSheets!=S&&W.styleSheets.length>0&&(E=W.styleSheets[W.styleSheets.length-1]),O=a}z.ie&&z.win?E&&typeof E.addRule==D&&E.addRule(e,t):E&&typeof W.createTextNode!=S&&E.appendChild(W.createTextNode(e+" {"+t+"}"))}}}function w(e,t){if(U){var n=t?"visible":"hidden";_&&g(e)?g(e).style.visibility=n:y("#"+e,"visibility:"+n)}}function F(e){var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=S?encodeURIComponent(e):e}{var A,B,b,x,E,O,S="undefined",D="object",N="Shockwave Flash",k="ShockwaveFlash.ShockwaveFlash",T="application/x-shockwave-flash",P="SWFObjectExprInst",j="onreadystatechange",I=window,W=document,M=navigator,R=!1,V=[i],$=[],q=[],X=[],_=!1,J=!1,U=!0,z=function(){var e=typeof W.getElementById!=S&&typeof W.getElementsByTagName!=S&&typeof W.createElement!=S,t=M.userAgent.toLowerCase(),n=M.platform.toLowerCase(),i=/win/.test(n?n:t),r=/mac/.test(n?n:t),a=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof M.plugins!=S&&typeof M.plugins[N]==D)l=M.plugins[N].description,!l||typeof M.mimeTypes!=S&&M.mimeTypes[T]&&!M.mimeTypes[T].enabledPlugin||(R=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof I.ActiveXObject!=S)try{var d=new ActiveXObject(k);d&&(l=d.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(u){}return{w3:e,pv:s,wk:a,ie:o,win:i,mac:r}}();!function(){z.w3&&((typeof W.readyState!=S&&"complete"==W.readyState||typeof W.readyState==S&&(W.getElementsByTagName("body")[0]||W.body))&&e(),_||(typeof W.addEventListener!=S&&W.addEventListener("DOMContentLoaded",e,!1),z.ie&&z.win&&(W.attachEvent(j,function(){"complete"==W.readyState&&(W.detachEvent(j,arguments.callee),e())}),I==top&&!function(){if(!_){try{W.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e()}}()),z.wk&&!function(){return _?void 0:/loaded|complete/.test(W.readyState)?void e():void setTimeout(arguments.callee,0)}(),n(e)))}(),function(){z.ie&&z.win&&window.attachEvent("onunload",function(){for(var e=X.length,t=0;e>t;t++)X[t][0].detachEvent(X[t][1],X[t][2]);for(var n=q.length,i=0;n>i;i++)f(q[i]);for(var r in z)z[r]=null;z=null;for(var a in L)L[a]=null;L=null})}()}return{registerObject:function(e,t,n,i){if(z.w3&&e&&t){var r={};r.id=e,r.swfVersion=t,r.expressInstall=n,r.callbackFn=i,$[$.length]=r,w(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){return z.w3?o(e):void 0},embedSWF:function(e,n,i,r,a,o,d,u,c,f){var C={success:!1,id:n};z.w3&&!(z.wk&&z.wk<312)&&e&&n&&i&&r&&a?(w(n,!1),t(function(){i+="",r+="";var t={};if(c&&typeof c===D)for(var g in c)t[g]=c[g];t.data=e,t.width=i,t.height=r;var v={};if(u&&typeof u===D)for(var h in u)v[h]=u[h];if(d&&typeof d===D)for(var y in d)typeof v.flashvars!=S?v.flashvars+="&"+y+"="+d[y]:v.flashvars=y+"="+d[y];if(m(a)){var F=p(t,v,n);t.id==n&&w(n,!0),C.success=!0,C.ref=F}else{if(o&&s())return t.data=o,void l(t,v,n,f);w(n,!0)}f&&f(C)})):f&&f(C)},switchOffAutoHideShow:function(){U=!1},ua:z,getFlashPlayerVersion:function(){return{major:z.pv[0],minor:z.pv[1],release:z.pv[2]}},hasFlashPlayerVersion:m,createSWF:function(e,t,n){return z.w3?p(e,t,n):void 0},showExpressInstall:function(e,t,n,i){z.w3&&s()&&l(e,t,n,i)},removeSWF:function(e){z.w3&&f(e)},createCSS:function(e,t,n,i){z.w3&&y(e,t,n,i)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=W.location.search||W.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return F(t);for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i].substring(0,n[i].indexOf("="))==e)return F(n[i].substring(n[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(J){var e=g(P);e&&A&&(e.parentNode.replaceChild(A,e),B&&(w(B,!0),z.ie&&z.win&&(A.style.display="block")),b&&b(x)),J=!1}}}}();return E="|",O="=",S="",D="err",N="ENHANCED",function(e){try{device_id=B(),e(device_id)}catch(t){Etsy.Logger.info("device-id: where=callback error="+t.message)}}});