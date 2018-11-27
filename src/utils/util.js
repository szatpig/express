
export function toast(str, icon) {
/*  store.dispatch('showToast', true)
  if (icon == 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg',str);
  setTimeout(() => {
    store.dispatch('showToast', false);
  },1500);*/
}

/**dialog公共方法*/
export function alert(str) {
  /*  store.dispatch('showAlert', true)
   store.dispatch('alertMsg', str)
   setTimeout(() => {
   store.dispatch('showAlert', false);
   },1500);*/
}

export function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

export function  getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

export function  clearCookie(name){
  setCookie(name, "", -1);
}


export function encodeUnicode(str) {
  var res = [];
  for ( var i=0; i<str.length; i++ ) {
    res[i] = ( "000" + str.codePointAt(i).toString(16) ).slice(-4);
  }
  return "\\u" + res.join("\\u");
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
export function deepClone(values) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == values || "object" != typeof values) return values;

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
export function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  else return '刚刚'
}


/**
 * @desc   时间戳转换成"yyyy--mm--dd"格式
 * @param  {Date} startTime
 * @return {String}
 */
export function formatDate(obj){
  var date =  new Date(obj);
  var y = 1900+date.getYear();
  var m = "0"+(date.getMonth()+1);
  var d = "0"+date.getDate();
  return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}

/**
 * element-UI的日期格式化
 * *
 */
export function dateElement(obj){
  return obj.toLocaleString("en-US", { hour12: false }).replace(/\b\d\b/g, '0$&').replace(new RegExp('/','gm'),'-')
}

/**
 * @desc   数组对象排序
 * @param  {Array} arr
 * @return {Array}
 */
export function sortByObject(arr,property){
  return arr.sort((a,b)=>{
    let _a = a[property];
    let _b = b[property];
    return _a - _b;//sort方法接收一个函数作为参数，这里嵌套一层函数用
    //来接收对象属性名，其他部分代码与正常使用sort方法相同
  })
}

export function myBrowser(){
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  if (isOpera) {
    return "Opera"
  }; //判断是否Opera浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  } //判断是否Firefox浏览器
  if (userAgent.indexOf("Chrome") > -1){
    return "Chrome";
  }
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } //判断是否Safari浏览器
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    return "IE";
  }; //判断是否IE浏览器
}

export function sortBy(name,minor){
  return function(o,p){
    var a,b;
    if(o && p && typeof o === 'object' && typeof p ==='object'){
      a = o[name];
      b = p[name];
      if(a === b){
        return typeof minor === 'function' ? minor(o,p):0;
      }
      if(typeof a === typeof b){
        return a < b ? -1:1;
      }
      return typeof a < typeof b ? -1 : 1;
    }else{
      thro("error");
    }
  }
}

export function URLencode(sStr) {
  return escape(sStr).
  replace(/\+/g, '%2B').
  replace(/\"/g, '%22').
  replace(/\'/g, '%27').
  replace(/\//g, '%2F');
}

export function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}

//数字千分位

export function numTransform(num){
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export function showNotification(title,body,imgPath,mp3Path) {
  if (window.Notification) {
    let popNotice = function() {
      if (Notification.permission == "granted") {
        let notification = new Notification(title, {
          body: body,
          icon: imgPath,
          silent:true,
          sound:mp3Path
        });

        notification.onclick = function() {
          notification.close();
        };
      }
    };

    if (Notification.permission == "granted") {
      popNotice();
    } else if (Notification.permission != "denied") {
      Notification.requestPermission((permission)=> {
        popNotice();
      });
    }
  }
}


