;(function() {
  var postData = {
    browseNumber: 0, // 浏览次数
    uniqueVisitor: '', // 独立访客
    deviceName: 1, // 设备信息,1:pc,2:mobile, 默认pc
    fileName: '' // 文件名,网页的名字
  }
  // 请求方法
  function ajax(option) {
    var arr = []
    for (var i in option.data) {
      arr.push(`${i}=${option.data[i]}`)
    }
    var ajax = new XMLHttpRequest()
    // debugger
    
    ajax.open(
      option.method || 'POST',
      option.url,
      option.async || true
    )
    // ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = option.data ? option.data : {}
    data.token = 'F0F3854D68D9773D774E9FAD166A4D73' // 设置固定token
    ajax.send(JSON.stringify(data))
    ajax.onreadystatechange = function() {
      if (ajax.readyState === 4) {
        if (ajax.status >= 200 && ajax.status < 300 || ajax.status === 304) {
          option.success(ajax.responseText)
        } else {
          option.error()
        }
      }
    }
  }
  // 浏览次数
  var browse = {}
  browse.setBrowseNmber = function() {
    postData.browseNumber = 1
  }
  browse.setBrowseNmber()
  // 获取设备信息
  var device = {}
  // 设备类型
  device.type = function() {
    var is_mobile = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    // 1:pc 2:mobile
    if (is_mobile) {
      postData.deviceName = 2
    } else {
      postData.deviceName = 1
    }
  }
  device.type()
  // 操作系统
  device.getOs = function(plat, agent) {
    var isWin = plat == 'Win32' || plat == 'Windows' || plat == 'Win'
    var isMac =
      plat == 'Mac' ||
      plat == 'Mac68K' ||
      plat == 'MacPPC' ||
      plat == 'Macintosh' ||
      plat == 'MacIntel'
    if (isMac) return 'Mac'
    var isUnix = plat == 'X11' && !isWin && !isMac
    if (isUnix) return 'Unix'
    var isLinux = String(plat).indexOf('Linux') > -1

    var bIsAndroid = agent.toLowerCase().match(/android/i) == 'android'
    var isIos = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (bIsAndroid || isLinux) {
      if (bIsAndroid) return 'android'
      else return 'Linux'
    }
    if (isIos) {
      return 'IOS'
    }
    if (isWin) {
      var isWin2K =
        agent.indexOf('Windows NT 5.0') > -1 ||
        agent.indexOf('Windows 2000') > -1
      if (isWin2K) return 'Win2000'
      var isWinXP =
        agent.indexOf('Windows NT 5.1') > -1 || agent.indexOf('Windows XP') > -1
      if (isWinXP) return 'WinXP'
      var isWin2003 =
        agent.indexOf('Windows NT 5.2') > -1 ||
        agent.indexOf('Windows 2003') > -1
      if (isWin2003) return 'Win2003'
      var isWinVista =
        agent.indexOf('Windows NT 6.0') > -1 ||
        agent.indexOf('Windows Vista') > -1
      if (isWinVista) return 'WinVista'
      var isWin7 =
        agent.indexOf('Windows NT 6.1') > -1 || agent.indexOf('Windows 7') > -1
      if (isWin7) return 'Win7'
      return 'other'
    }
  }
  // 浏览器类型
  device.getBrowser = function(agent) {
    var isOpera = agent.indexOf('Opera') > -1 //判断是否Opera浏览器
    var isIE =
      agent.indexOf('compatible') > -1 && agent.indexOf('MSIE') > -1 && !isOpera //判断是否IE浏览器
    var isEdge = agent.indexOf('Edge') > -1 //判断是否IE的Edge浏览器
    var isFF = agent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
    var isSafari = agent.indexOf('Safari') > -1 && agent.indexOf('Chrome') == -1 //判断是否Safari浏览器
    var isChrome = agent.indexOf('Chrome') > -1 && agent.indexOf('Safari') > -1 //判断Chrome浏览器

    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(agent)
      var fIEVersion = parseFloat(RegExp['$1'])
      if (fIEVersion == 7) {
        return 'IE7'
      } else if (fIEVersion == 8) {
        return 'IE8'
      } else if (fIEVersion == 9) {
        return 'IE9'
      } else if (fIEVersion == 10) {
        return 'IE10'
      } else if (fIEVersion == 11) {
        return 'IE11'
      } else {
        return '0'
      } //IE版本过低
      return 'IE'
    }
    if (isOpera) {
      return 'Opera'
    }
    if (isEdge) {
      return 'Edge'
    }
    if (isFF) {
      return 'FF'
    }
    if (isSafari) {
      return 'Safari'
    }
    if (isChrome) {
      return 'Chrome'
    }
  }
  // 本地ip
  device.getUserIP = function(callback) {
    //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection
    var pc = new myPeerConnection({
        iceServers: []
      }),
      noop = function() {},
      localIPs = {},
      ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
      key

    function iterateIP(ip) {
      if (!localIPs[ip]) callback(ip)
      localIPs[ip] = true
    }

    //create a bogus data channel
    pc.createDataChannel('')

    // create offer and set local description
    pc.createOffer()
      .then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
          if (line.indexOf('candidate') < 0) return
          line.match(ipRegex).forEach(iterateIP)
        })

        pc.setLocalDescription(sdp, noop, noop)
      })
      .catch(function(reason) {
        // An error occurred, so handle the failure to connect
      })

    //sten for candidate events
    pc.onicecandidate = function(ice) {
      if (
        !ice ||
        !ice.candidate ||
        !ice.candidate.candidate ||
        !ice.candidate.candidate.match(ipRegex)
      )
        return
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
    }
  }
  // 访客
  var visitor = {}
  // 设置cookie
  visitor.setCookie = function(key, value, days = 1) {
    // 默认过期时间为1天
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 3600 * 1000) 
    // 设置
    document.cookie = key + '=' + value + ';expires=' + date.toGMTString()
  }
  // 获取cookie
  visitor.getCookie = function(key) {
    var strCookie = document.cookie
    var arrCookie = strCookie.split(';')
    for (var i = 0; i < arrCookie.length; i ++) {
      var arr = arrCookie[i].split('=')
      if (arr[0] === key) {
        return arr[1]
      }
      return ''
    }
  }
  // 根据cookie中存储的时间戳判断是否为独立访客,cookie过期时间为24小时
  visitor.setUniqueVisitor = function() {
    var timestamp = ''
    // 判断当前是否有cookie时间戳
    if (visitor.getCookie('firstAccessTime') === '') {
      // 没有就添加一个
      var firstAccessTime = new Date().getTime()
      visitor.setCookie('firstAccessTime', firstAccessTime)
    }
    // 获取cookie
    var timestamp = visitor.getCookie('firstAccessTime')
    postData.uniqueVisitor = timestamp
  }
  visitor.setUniqueVisitor()
  // url方法
  var url = {}
  url.htmlName = function() {
    var name = window.location.href
    fileName = name.slice(name.lastIndexOf('/') + 1, name.lastIndexOf('.'))
    postData.fileName = fileName
  }
  url.htmlName()
  // 将postData上传
  console.log(postData)
  ajax({
    url: 'http://114.112.101.158:9995/authc/login',
    data: postData,
    method: 'post',
    success: (res) => {
      console.log(res)
    },
    error: (err) => {
      console.log(err)
      console.log('数据统计js数据上传失败')
    }
  })
  // 事件监听
  var eventMonitor = {}
  // 监听属性(用户收集)
  var monitorProperty = {
    // 点击次数
    clickNum: 1
  }
  // 事件委托
  eventMonitor.elementClick = function(idStr, fn) {
    if (idStr) {
      document.body.addEventListener('click', (e) => {
        if (e.target.id === idStr) {
          fn.apply(this, [])
        }
      })
    }
  }
  // 设置monitorProperty点击次数或者是请求一次接口
  eventMonitor.setClickNum = function() {
    ajax({
      url: 'http://114.112.101.158:9995/authc/login',
      data: {
        loginName: '',
        password: ''
      },
      method: 'post',
      success: (res) => {
        console.log('点击监听上传成功')
      },
      error: () => {
        console.log('上传失败')
        console.log('按钮点击数据上传失败')
      }
    })
  }
  eventMonitor.elementClick('jssdk_btn', eventMonitor.setClickNum)
})()
