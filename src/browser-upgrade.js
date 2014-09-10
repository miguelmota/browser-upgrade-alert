(function(window) {
  var allowed = ['MSIE 9', 'Firefox 30', 'Safari 5.1', 'Opera 23', 'Chrome 27'],
      msg1 = "Did you know that your Browser is out of date?",
      msg2 = "To get the best possible experience using our website we recommend that you upgrade to a newer version or other web browser. A list of the most popular web browsers can be found below.",
      msg3 = "Just click on the icons to get to the download page.",
      br1 = "Internet Explorer 9+",
      br2 = "Firefox 30+",
      br3 = "Safari 5.1+",
      br4 = "Opera 23+",
      br5 = "Chrome 27+",
      url1 = "http://www.microsoft.com/windows/Internet-explorer/default.aspx",
      url2 = "http://www.mozilla.com/firefox/",
      url3 = "http://www.apple.com/safari/download/",
      url4 = "http://www.opera.com/download/",
      url5 = "http://www.google.com/chrome",
      imgPath;

  function navigatorWho() {
      var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])) {
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\bOPR\/(\d+)/)
          if(tem!= null) return 'Opera '+tem[1];
      }
      M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
  }


  function needUpgrade() {
    var i = 0,
        len = allowed.length,
        who = navigatorWho().split(' '),
        _allowed,
        browserMatch,
        versionMatch;

    for (i = 0; i < len; i += 1) {
      _allowed = allowed[i].split(' ');
      browserMatch = who[0].toLowerCase() === _allowed[0].toLowerCase();
      versionMatch = Number(who[1]) >= Number(_allowed[1]);

      if (browserMatch && versionMatch) {
        return true;
      }
    }

    return false;
  }

  function e(str) {
      if (needUpgrade()) return false;

      imgPath = str;
      var _body = document.getElementsByTagName('body')[0],
          _d = document.createElement('div'),
          _l = document.createElement('div'),
          _h = document.createElement('h1'),
          _p1 = document.createElement('p'),
          _p2 = document.createElement('p'),
          _ul = document.createElement('ul'),
          _li1 = document.createElement('li'),
          _li2 = document.createElement('li'),
          _li3 = document.createElement('li'),
          _li4 = document.createElement('li'),
          _li5 = document.createElement('li'),
          _ico1 = document.createElement('div'),
          _ico2 = document.createElement('div'),
          _ico3 = document.createElement('div'),
          _ico4 = document.createElement('div'),
          _ico5 = document.createElement('div'),
          _lit1 = document.createElement('div'),
          _lit2 = document.createElement('div'),
          _lit3 = document.createElement('div'),
          _lit4 = document.createElement('div'),
          _lit5 = document.createElement('div');
      _body.appendChild(_l);
      _body.appendChild(_d);
      _d.appendChild(_h);
      _d.appendChild(_p1);
      _d.appendChild(_p2);
      _d.appendChild(_ul);
      _ul.appendChild(_li1);
      _ul.appendChild(_li2);
      _ul.appendChild(_li3);
      _ul.appendChild(_li4);
      _ul.appendChild(_li5);
      _li1.appendChild(_ico1);
      _li2.appendChild(_ico2);
      _li3.appendChild(_ico3);
      _li4.appendChild(_ico4);
      _li5.appendChild(_ico5);
      _li1.appendChild(_lit1);
      _li2.appendChild(_lit2);
      _li3.appendChild(_lit3);
      _li4.appendChild(_lit4);
      _li5.appendChild(_lit5);
      _d.setAttribute('id', '_d');
      _l.setAttribute('id', '_l');
      _h.setAttribute('id', '_h');
      _p1.setAttribute('id', '_p1');
      _p2.setAttribute('id', '_p2');
      _ul.setAttribute('id', '_ul');
      _li1.setAttribute('id', '_li1');
      _li2.setAttribute('id', '_li2');
      _li3.setAttribute('id', '_li3');
      _li4.setAttribute('id', '_li4');
      _li5.setAttribute('id', '_li5');
      _ico1.setAttribute('id', '_ico1');
      _ico2.setAttribute('id', '_ico2');
      _ico3.setAttribute('id', '_ico3');
      _ico4.setAttribute('id', '_ico4');
      _ico5.setAttribute('id', '_ico5');
      _lit1.setAttribute('id', '_lit1');
      _lit2.setAttribute('id', '_lit2');
      _lit3.setAttribute('id', '_lit3');
      _lit4.setAttribute('id', '_lit4');
      _lit5.setAttribute('id', '_lit5');
      var _width = document.documentElement.clientWidth;
      var _height = document.documentElement.clientHeight;
      var _dl = document.getElementById('_l');
      _dl.style.width = _width + "px";
      _dl.style.height = _height + "px";
      _dl.style.position = "fixed";
      _dl.style.top = "0px";
      _dl.style.left = "0px";
      _dl.style.filter = "alpha(opacity=50)";
      _dl.style.background = "#fff";
      _dl.style.zIndex = 100000;
      var _dd = document.getElementById('_d');
      _ddw = 768;
      _ddh = 260;
      _dd.style.width = _ddw + "px";
      _dd.style.height = _ddh + "px";
      _dd.style.position = "fixed";
      _dd.style.top = ((_height - _ddh) / 2) + "px";
      _dd.style.left = ((_width - _ddw) / 2) + "px";
      _dd.style.padding = "20px";
      _dd.style.background = "#fff";
      _dd.style.border = "1px solid #ccc";
      _dd.style.fontFamily = "'Lucida Grande','Lucida Sans Unicode',Arial,Verdana,sans-serif";
      _dd.style.listStyleType = "none";
      _dd.style.color = "#4F4F4F";
      _dd.style.fontSize = "12px";
      _dd.style.zIndex = 100000;
      _h.appendChild(document.createTextNode(msg1));
      var _hd = document.getElementById('_h');
      _hd.style.display = "block";
      _hd.style.fontSize = "1.3em";
      _hd.style.marginBottom = "0.5em";
      _hd.style.color = "#333";
      _hd.style.fontFamily = "Helvetica,Arial,sans-serif";
      _hd.style.fontWeight = "bold";
      _p1.appendChild(document.createTextNode(msg2));
      var _p1d = document.getElementById('_p1');
      _p1d.style.marginBottom = "1em";
      _p2.appendChild(document.createTextNode(msg3));
      var _p2d = document.getElementById('_p2');
      _p2d.style.marginBottom = "1em";
      var _uld = document.getElementById('_ul');
      _uld.style.listStyleImage = "none";
      _uld.style.listStylePosition = "outside";
      _uld.style.listStyleType = "none";
      _uld.style.margin = "0 px auto";
      _uld.style.padding = "0px";
      _uld.style.paddingLeft = "10px";
      _uld.style.textAlign = "center";
      var _li1d = document.getElementById('_li1'),
          _li2d = document.getElementById('_li2'),
          _li3d = document.getElementById('_li3'),
          _li4d = document.getElementById('_li4'),
          _li5d = document.getElementById('_li5'),
          _li1ds = _li1d.style,
          _li2ds = _li2d.style,
          _li3ds = _li3d.style,
          _li4ds = _li4d.style,
          _li5ds = _li5d.style;
      _li1ds.background = _li2ds.background = _li3ds.background = _li4ds.background = _li5ds.background = "transparent url('" + imgPath + "background_browser.gif') no-repeat scroll left top";
      _li1ds.cursor = _li2ds.cursor = _li3ds.cursor = _li4ds.cursor = _li5ds.cursor = "pointer";
      _li1d.onclick = function() {
          window.location = url1
      };
      _li2d.onclick = function() {
          window.location = url2
      };
      _li3d.onclick = function() {
          window.location = url3
      };
      _li4d.onclick = function() {
          window.location = url4
      };
      _li5d.onclick = function() {
          window.location = url5
      };
      _li1ds.styleFloat = _li2ds.styleFloat = _li3ds.styleFloat = _li4ds.styleFloat = _li5ds.styleFloat = "left";
      _li1ds.width = _li2ds.width = _li3ds.width = _li4ds.width = _li5ds.width = "120px";
      _li1ds.height = _li2ds.height = _li3ds.height = _li4ds.height = _li5ds.height = "122px";
      _li1ds.margin = _li2ds.margin = _li3ds.margin = _li4ds.margin = _li5ds.margin = "0 10px 10px 0";
      _li1ds.display = _li2ds.display = _li3ds.display = _li4ds.display = _li5ds.display = "inline-block";
      var _ico1d = document.getElementById('_ico1'),
          _ico2d = document.getElementById('_ico2'),
          _ico3d = document.getElementById('_ico3'),
          _ico4d = document.getElementById('_ico4'),
          _ico5d = document.getElementById('_ico5'),
          _ico1ds = _ico1d.style,
          _ico2ds = _ico2d.style,
          _ico3ds = _ico3d.style,
          _ico4ds = _ico4d.style,
          _ico5ds = _ico5d.style;
      _ico1ds.width = _ico2ds.width = _ico3ds.width = _ico4ds.width = _ico5ds.width = "100px";
      _ico1ds.height = _ico2ds.height = _ico3ds.height = _ico4ds.height = _ico5ds.height = "100px";
      _ico1ds.margin = _ico2ds.margin = _ico3ds.margin = _ico4ds.margin = _ico5ds.margin = "1px auto";
      _ico1ds.background = "transparent url('" + imgPath + "browser_ie.gif') no-repeat scroll left top";
      _ico2ds.background = "transparent url('" + imgPath + "browser_firefox.gif') no-repeat scroll left top";
      _ico3ds.background = "transparent url('" + imgPath + "browser_safari.gif') no-repeat scroll left top";
      _ico4ds.background = "transparent url('" + imgPath + "browser_opera.gif') no-repeat scroll left top";
      _ico5ds.background = "transparent url('" + imgPath + "browser_chrome.gif') no-repeat scroll left top";
      _lit1.appendChild(document.createTextNode(br1));
      _lit2.appendChild(document.createTextNode(br2));
      _lit3.appendChild(document.createTextNode(br3));
      _lit4.appendChild(document.createTextNode(br4));
      _lit5.appendChild(document.createTextNode(br5));
      var _lit1d = document.getElementById('_lit1'),
          _lit2d = document.getElementById('_lit2'),
          _lit3d = document.getElementById('_lit3'),
          _lit4d = document.getElementById('_lit4'),
          _lit5d = document.getElementById('_lit5'),
          _lit1ds = _lit1d.style,
          _lit2ds = _lit2d.style,
          _lit3ds = _lit3d.style,
          _lit4ds = _lit4d.style,
          _lit5ds = _lit5d.style;
      _lit1ds.color = _lit2ds.color = _lit3ds.color = _lit4ds.color = _lit5ds.color = "#808080";
      _lit1ds.fontSize = _lit2ds.fontSize = _lit3ds.fontSize = _lit4ds.fontSize = _lit5ds.fontSize = "0.8em";
      _lit1ds.height = _lit2ds.height = _lit3ds.height = _lit4ds.height = _lit5ds.height = "18px";
      _lit1ds.lineHeight = _lit2ds.lineHeight = _lit3ds.lineHeight = _lit4ds.lineHeight = _lit5ds.lineHeight = "17px";
      _lit1ds.margin = _lit2ds.margin = _lit3ds.margin = _lit4ds.margin = _lit5ds.margin = "1px auto";
      _lit1ds.width = _lit2ds.width = _lit3ds.width = _lit4ds.width = _lit5ds.width = "118px";
      _lit1ds.textAlign = _lit2ds.textAlign = _lit3ds.textAlign = _lit4ds.textAlign = _lit5ds.textAlign = "center";
  }

  window.e = e;

})(window);
