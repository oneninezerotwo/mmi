<template>
  <div>
    <div class="wrapper">
      <!-- loading -->
      <div class="popup_mask acquirePhoneMask" style="display:none;" id="loadingMask">
        <div class="bkc"></div>
        <div class="mod_wrap loadingmask"></div>
        <div class="loadingTips">正在检测你的帐号信息...</div>
      </div>
      <!--bg_banner_start-->
      <div class="bgiframe">
        <iframe
          name="ifr"
          style="height:100%"
          width="100%"
          height="686"
          src="about:blank"
          id="bgiframe"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <!--bg_banner_end-->
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <!--表单输入登录-->
            <div class="mainbox form-panel" id="login-main">
              <div id="custom_display_2">
                <a class="ercode" id="qrcode-trigger" href="javascript:void(0)"></a>
              </div>
              <!-- header s -->
              <div class="lgnheader">
                <div class="header_tit t_c">
                  <em id="custom_display_1" class="milogo">
                    <svg
                      width="100%"
                      height="100%"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
                      <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                      <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                      <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                      <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
                      <rect
                        x="20.6"
                        y="15"
                        width="9.8"
                        height="9.8"
                        rx="4.4"
                        ry="4.4"
                        style="fill:#FFFFFF"
                      ></rect>
                      <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
                      <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                      <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
                      <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
                    </svg>
                  </em>
                  <h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
                  <div class="site_info"></div>
                </div>
              </div>
              <!-- header e -->
              <!-- tab s -->
              <div class="nav_tabs_panel">
                <div id="nav-tabs" class="nav_tabs">
                  <a class="navtab-link now" href="javascript:void(0);" data-tab="pwd">帐号登录</a>
                  <span class="line"></span>
                  <a class="navtab-link" href="javascript:void(0);" data-tab="qr">扫码登录</a>
                </div>
              </div>
              <!-- tab e -->
              <!-- tab con s -->
              <div class="tabs-con tabs_con now" data-con="pwd">
                <div>
                  <div class="login_area">
                    <form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
                      <div class="loginbox c_b">
                        <!-- 输入框 -->
                        <div class="lgn_inputbg c_b login-panel pwdLogin sms_login">
                          <!--验证用户名-->
                          <div class="single_imgarea" id="account-info">
                            <div class="na-img-area" id="account-avator" style="display:none">
                              <div class="na-img-bg-area" id="account-avator-con"></div>
                            </div>
                            <p class="us_name tac" id="account-displayname"></p>
                            <p class="us_id tac"></p>
                          </div>
                          <label
                            id="region-code"
                            class="labelbox login_user c_b disable add_regioncode"
                            for
                          >
                            <div class="turn_area">
                              <a
                                class="btn_turn"
                                id="manual_code"
                                href="javascript:void(0);"
                                title="关闭国家码"
                              ></a>
                            </div>
                            <div class="country_list">
                              <div class="animation countrycode_selector" id="countrycode_selector">
                                <span class="country_code">
                                  <tt class="countrycode-value" id="countrycode_value">+86</tt>
                                  <i class="icon_arrow_down"></i>
                                </span>
                              </div>
                            </div>
                            <input
                              class="item_account"
                              autocomplete="off"
                              type="tel"
                              name="user"
                              id="username"
                              placeholder="手机号码"
                              _type="tel"
                            >
                            <div id="btn-clear-link" class="clear_link_panel">
                              <span class="clear_link"></span>
                            </div>
                          </label>
                          <div
                            class="country-container"
                            id="countrycode_container"
                            style="display: none;"
                          >
                            <div class="country_container_con" id="countrycode_container_con"></div>
                          </div>
                          <div id="captcha"></div>
                          <label class="labelbox pwd_panel c_b">
                            <input
                              class="item_account"
                              type="number"
                              placeholder="短信验证码"
                              autocomplete="off"
                              id="pwd"
                              name="password"
                              _type="number"
                            >
                            <input
                              class="item_account"
                              type="text"
                              placeholder="密码"
                              autocomplete="off"
                              id="visiablePwd"
                              name="visiablepwd"
                              style="display:none"
                            >
                            <div class="eye_panel pwd-visiable">
                              <i class="eye pwd-eye">
                                <svg
                                  width="100%"
                                  height="100%"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    class="eye_outer"
                                    d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"
                                  ></path>
                                  <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                                </svg>
                              </i>
                            </div>
                            <div id="sms-code-panel" class="code_panel" style="display: block;">
                              <a class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</a>
                            </div>
                          </label>
                        </div>
                        <div class="security_Controller" style="display: none;">
                          <label class="checkbox_area">
                            <input type="checkbox" id="trustSecurityController" class="checkbox">使用安全控件
                          </label>
                        </div>

                        <!-- 错误信息 -->
                        <div class="err_tip">
                          <div>
                            <em class="icon_error"></em>
                            <span class="error-con"></span>
                          </div>
                        </div>
                        <div class="btns_bg">
                          <input class="btnadpt" id="login-button" type="submit" value="立即登录/注册">
                          <span
                            id="custom_display_8"
                            class="sns-default-container sns_default_container"
                            style="display: none;"
                          ></span>
                        </div>
                        <div class="other_panel clearfix">
                          <span id="custom_display_256" class="sms_link">
                            <a
                              href="javascript:;"
                              class="btnadpt btn_gray login_type_link"
                              id="ChangeLoginType"
                            >用户名密码登录</a>
                          </span>
                          <div class="reverse">
                            <div class="n_links_area" id="custom_display_64" style="display: none;">
                              <a
                                class="outer-link"
                                href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket"
                              >立即注册</a>
                              <span>|</span>
                              <a
                                class="outer-link"
                                href="https://account.xiaomi.com/pass/forgetPassword?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket"
                              >忘记密码？</a>
                            </div>
                          </div>
                          <!-- 其他登录方式 s -->
                          <div
                            style="display: block;"
                            class="other_login_type sns-login-container"
                            id="custom_display_16"
                          >
                            <fieldset class="oth_type_tit">
                              <legend align="center" class="oth_type_txt">其他方式登录</legend>
                            </fieldset>
                            <div id="sns-login-links" class="oth_type_links">
                              <a
                                class="icon_type btn_qq sns-login-link"
                                data-type="qq"
                                href="/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                                title="QQ登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_qq"></i>
                              </a>
                              <a
                                class="icon_type btn_weibo sns-login-link"
                                data-type="weibo"
                                href="/pass/sns/login/auth?appid=2996826273&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                                title="微博登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_weibo"></i>
                              </a>
                              <a
                                class="icon_type btn_alipay sns-login-link"
                                data-type="alipay"
                                href="/pass/sns/login/auth?appid=2088011127562160&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                                title="支付宝登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_alipay"></i>
                              </a>
                              <a
                                class="icon_type btn_weixin sns-login-link"
                                data-type="weixin"
                                href="/pass/sns/login/auth?appid=wxxmh5&amp;scope=snsapi_userinfo&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                                title="微信登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_weixin"></i>
                              </a>
                            </div>
                          </div>
                          <!-- 其他登录方式 e -->
                          <p class="acq_tips" style="display: none;"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tabs-con tabs_con" data-con="qr"></div>
              <!-- tab con e -->
            </div>
            <div class="ercode_area" id="login-qrcode">
              <div class="ercode_pannel">
                <a class="code_close" href="javascript:void(0)" title="关闭" id="qrcode-close">
                  <span class="icon_code_close"></span>
                </a>
                <div class="ercode_box">
                  <div class="code_hd">
                    <h3 class="code_tit">小米帐号扫码登录</h3>
                    <p>请打开「设置 &gt; 小米帐号 &gt; 右上角扫一扫」扫码登录</p>
                  </div>
                  <div class="code_iframe">
                    <iframe
                      style="background:#fff;"
                      src="about:blank"
                      id="qriframe"
                      frameborder="0"
                      scrolling="no"
                      sandbox="allow-scripts allow-same-origin allow-top-navigation allow-modals"
                    ></iframe>
                  </div>
                  <div class="custom_sub_txt">
                    <p id="custom-qr-name"></p>
                    <p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 取号注册 -->
            <div id="ac-register" class="tac mode_panel form-panel" style="display: none">
              <h1>注册小米帐号</h1>
              <div class="box">
                <img
                  src="https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png"
                  alt="sim card"
                  width="70"
                  height="70"
                >
                <p>
                  手机号：
                  <span class="maskedPhone"></span>
                </p>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot dis_box">
                <a href="javascript:;" class="btnadpt plain ok_btn">一键注册</a>
                <a href="javascript:;" class="btnadpt plain no_btn btn_gray">登录其他帐号</a>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="agreeTip">
                <i class="icon_select icon_true"></i>同意小米的
                <a
                  href="https://static.account.xiaomi.com/html/agreement/account/cn.html"
                  class="agreement_link"
                >用户协议</a>和
                <a href="https://www.mi.com/about/privacy/" class="privacy_link">隐私政策</a>
              </p>
            </div>
            <!-- 回收号确认 -->
            <div id="ac-confirm" class="tac mode_panel form-panel" style="display: none">
              <div>
                <div class="box">
                  <div class="na-img-area">
                    <div class="na-img-bg-area us-portraitUrl"></div>
                  </div>
                  <div class="confirm_tips">
                    <p class="us_name us-userName">
                      昵称：
                      <span class="usernameShow"></span>
                    </p>
                    <p>
                      小米ID：
                      <span class="useridShow"></span>
                    </p>
                    <!-- <p>注册时间：<span class="userRegisterDateShow"></span></p>
                    <p>注册设备：<span class="userRegisterDeviceShow"></span></p>
                    <p>注册来源：<span class="userRegisterOriginShow"></span></p>
                    <p>手机号：<span class="userPhoneShow"></span></p>-->
                  </div>
                </div>
                <h2>这是你的帐号吗？</h2>
                <div class="recycle">
                  <p>
                    <span class="user-phone"></span>疑似是运营商回收后再次售卖的号码，该号码下已有小米帐号，这个帐号是你的吗？
                  </p>
                  <p class="color_warning">如果使用非本人注册的帐号，部分功能可能会受限制。</p>
                </div>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot">
                <a href="javascript:;" class="btnadpt plain ok_btn">继续登录</a>
                <a href="javascript:;" class="btnadpt plain no_btn">注册新帐号</a>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="ptb30 btn_alink_box">
                <a href="javascript:;" class="back_btn blue">登录其他帐号</a>
              </p>
            </div>
            <div id="set-pwd" class="mode_panel set_pwd_panel form-panel">
              <h4>请设置您的密码：</h4>
              <label class="labelbox c_b">
                <input
                  class="item_account set-password re-password"
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                >
              </label>
              <label class="labelbox c_b">
                <input
                  class="item_account set-password"
                  name="repassword"
                  type="password"
                  placeholder="请输入确认密码"
                >
              </label>
              <div class="err_tip pwd_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span
                    class="error-con"
                    data-origin="密码长度8~16位，数字、字母、字符至少包含两种"
                  >密码长度8~16位，数字、字母、字符至少包含两种</span>
                </div>
              </div>
              <div class="btns_bg">
                <a id="register-button" class="btnadpt">立即注册</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="custom_display_4" class="n-footer">
      <div class="nf-link-area clearfix">
        <ul class="lang-select-list">
          <li>
            <a href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li current">简体</a>|
          </li>
          <li>
            <a
              href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=zh_TW"
              data-lang="zh_TW"
              class="lang-select-li"
            >繁体</a>|
          </li>
          <li>
            <a
              href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=en"
              data-lang="en"
              class="lang-select-li"
            >English</a>|
          </li>
          <li>
            <a href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</a>|
          </li>
          <li>
            <a id="msg-privacy" href="https://www.mi.com/about/privacy/" target="_blank">隐私政策</a>
          </li>
        </ul>
      </div>
      <p class="nf-intro" style="display: none;">
        小米公司版权所有-京ICP备10046444-
        <a
          class="beian-record-link"
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
        >
          <span>
            <img
              src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
            >
          </span>京公网安备11010802020134号
        </a>-京ICP证110507号
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
li,
a,
span,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
address {
  margin: 0;
  padding: 0;
}
* {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
ol,
ul {
  list-style: none;
}
li {
  list-style: none;
}
fieldset,
img {
  border: 0;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
}
input,
button,
textarea,
select {
  font-size: 100%;
}
input,
button,
select,
textarea {
  outline: 0;
}
textarea {
  resize: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  font-size: inherit;
}
abbr[title] {
  border-bottom: 1px dotted;
  cursor: help;
}
a,
a:hover {
  text-decoration: none;
}
a,
label,
:focus {
  outline: 0 none;
}
a,
img,
input {
  border: 0 none;
}
s {
  font-style: normal;
  text-decoration: none;
}
body {
  font-size: 14px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
}
button,
input,
select,
textarea {
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}
::-webkit-input-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}
input:-ms-input-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}
::-ms-clear {
  display: none;
}
::-ms-reveal {
  display: none;
}
.clearfix:after {
  display: block;
  content: "\20";
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
input::-ms-clear {
  display: none;
}
input::-ms-reveal {
  display: none;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  a {
    background-color: transparent;
  }
}
input {
  background: 0;
  border: 0 none;
}
input[type="button"],
input[type="submit"],
input[type="reset"],
a {
  -webkit-appearance: none;
  appearance: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.nbg {
  background: none !important;
}
.t_l {
  text-align: left;
}
.t_c {
  text-align: center;
}
.t_r {
  text-align: right;
}
.c_b:before,
.c_b:after {
  content: "";
  display: block;
}
.c_b:after {
  clear: both;
}
.c_b {
  zoom: 1;
}
.hidden,
.hide {
  display: none;
}
.hideimportant {
  display: none !important;
}
.underline {
  text-decoration: underline;
}
input[type="text"]::-ms-clear,
input[type="password"]::-ms-reveal {
  display: none;
}
input {
  color: #333;
}
input:required,
input:invalid {
  -moz-box-shadow: none;
  box-shadow: none;
}
input::-moz-focus-inner {
  border: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input {
  color: #4a4a4a;
}
::-webkit-input-placeholder {
  color: #9b9b9b;
}
input:-ms-input-placeholder {
  color: #9b9b9b;
}
@media only screen and (max-width: 420px) {
  html {
    font-size: 625%;
  }
}
@media only screen and (max-width: 580px) and (min-width: 421px) {
  html {
    font-size: 687.5%;
  }
}
@media only screen and (max-width: 540px) and (min-width: 480px) {
  html {
    font-size: 750%;
  }
}
@media only screen and (max-width: 660px) and (min-width: 541px) {
  html {
    font-size: 781.25%;
  }
}
@media only screen and (max-width: 720px) and (min-width: 661px) {
  html {
    font-size: 812.5%;
  }
}
@media only screen and (min-width: 720px) {
  html {
    font-size: 875%;
  }
}
.blue {
  color: #2ea5e5;
}
.tac {
  text-align: center;
}
.ptb30 {
  padding: 30px 0;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.color_warning {
  color: red;
}
body {
  font-size: 0.14rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: #fff;
}
button,
input,
select,
textarea,
tt {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
html,
body {
  height: 100%;
}
a {
  color: #9b9b9b;
}
.a_critical {
  color: #4a4a4a;
}
.btns_bg {
  padding-top: 24px;
}
.btnadpt {
  width: 100%;
  padding: 0.1rem 0;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 0.18rem;
  color: #fff;
  cursor: pointer;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ff6700;
}
.btnadpt.disabled {
  opacity: 0.7;
  filter: alpha(opacity=70);
}
.btnadpt.plain {
  border: 1px solid #ff6700;
  background-color: #fff;
  color: #ff6700;
  width: 100%;
  font-size: 0.16rem;
  margin-top: 0;
}
.btnadpt.ok_btn {
  margin-right: 20px;
}
.btn_gray {
  background: #fff;
  margin-top: 10px;
  border: 1px solid #d3d3d3;
  color: #000;
}
.btn_gray.disabled {
  color: #9b9b9b;
}
.wrapper {
  min-height: 100%;
  height: auto;
}
.wrap {
  padding-bottom: 0.9rem;
}
.layout {
  width: 100%;
  margin: 0 auto 30px;
  padding: 0 20px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.header_tit {
  padding: 40px 0 10px;
}
.milogo {
  background-image: url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png);
  width: 48px;
  height: 48px;
  margin: 0 auto 15px;
  display: block;
  background-image: -webkit-image-set(url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png) 1x,url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png) 2x);
}
.header_tit_txt {
  font-size: 0.18rem;
  color: #000;
  font-weight: normal;
}
.login_area {
  padding-bottom: 20px;
}
.mode_panel {
  padding-top: 60px;
}
.labelbox {
  display: block;
  background-color: #fff;
}
.labelbox input {
  width: 100%;
  padding: 0.16rem 0;
  line-height: normal;
  display: block;
  font-size: 0.18rem;
}
body.sys_wv #login-button {
  background-color: #09f;
}
body.sys_wv .mainbox {
  margin-top: 30px;
}
.loginbox .acq_tips {
  margin-top: 30px;
}
.labelbox {
  border-bottom: 1px solid #d3d3d3;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
}
.labelbox input {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
}
.login_user {
  margin-bottom: 1px;
}
.eye {
  width: 20px;
  height: 16px;
  display: block;
}
.eye.chk .eye_outer,
.eye.chk .eye_inner {
  fill: #ff6700;
}
.eye_outer {
  fill: #4d4d4d;
}
.eye_inner {
  fill: #4d4d4d;
  stroke: #fff;
  stroke-width: 2;
  stroke-opacity: 0.8;
}
.lgncode {
  padding-top: 14px;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  box-align: center;
  align-items: flex-end;
}
.code_label {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
  border-bottom: 1px solid #d3d3d3;
}
.chkcode_img {
  border-bottom: 1px solid #d3d3d3;
}
.sms_login .lgncode {
  padding: 0;
  background: #fff;
  margin-bottom: 1px;
}
.sms_login .code_label {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
}
.sms_login .chkcode_img {
  margin-left: 0;
}
.btn_facebook {
  background-color: #7a96d2;
}
.btn_qq {
  background-color: #72c7db;
}
.btn_weibo {
  background-color: #ed9090;
}
.btn_alipay {
  background-color: #6bb6ea;
}
.btn_weixin {
  background-color: #00be00;
}
.btn_google {
  background-color: #f8f8f8;
}
.btn_sns_icontype {
  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png)
    no-repeat;
  display: block;
  width: 18px;
  height: 18px;
  margin: 5px auto 0;
}
.sns-default-container .btn_sns_icontype {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 0 0;
}
.icon_default_qq {
  background-position: -19px 0;
}
.icon_default_weibo {
  background-position: -38px 0;
}
.icon_default_alipay {
  background-position: -57px 0;
}
.icon_default_weixin {
  background-position: -84px 0;
}
.icon_default_google {
  background-position: -111px 0;
}
.icon_default_facebook {
  background-position: 0 0;
}
.icon_default_alipay {
  width: 26px;
}
.icon_default_weixin {
  width: 23px;
}
.other_login_type {
  padding-top: 40px;
  text-align: center;
}
.oth_type_tit {
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;
}
.oth_type_txt {
  font-size: 0.12rem;
  color: #b0b0b0;
  width: 80px;
}
.oth_type_links {
  padding-top: 10px;
  text-align: center;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-pack: center;
  box-pack: center;
}
.oth_type_links .btn_qq {
  display: none;
}
.icon_type {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: inline-block;
  text-indent: -9999px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.icon_type .icon_default_qq {
  background-position: -19px 0;
}
.icon_type .icon_default_weibo {
  background-position: -38px 0;
}
.icon_type .icon_default_alipay {
  background-position: -57px 0;
}
.icon_type .icon_default_weixin {
  background-position: -84px 0;
}
.icon_type .icon_default_google {
  background-position: -111px 0;
}
.icon_type .icon_default_facebook {
  background-position: 0 0;
}
.hasSnsDefault .sms_link .btn_gray {
  font-size: 0.14rem;
  text-align: center;
  display: block;
  background: 0;
  border: 0 none;
  padding: 10px 0 20px 0;
  margin: 0;
  color: #424242;
}
.hasSnsDefault .sms_link .btn_gray:after {
  content: ">";
}
.reverse {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-direction: reverse;
  box-direction: reverse;
}
.reverse .n_links_area {
  text-align: center;
}
.reverse .n_links_area a {
  padding: 0 9px;
  font-size: 0.16rem;
}
#qrcode-trigger {
  display: none !important;
}
.ercode {
  background: url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/ercode_hover.png);
  width: 68px;
  height: 68px;
  position: absolute;
  right: 0;
  top: 0;
}
.ercode_area {
  display: none;
  width: 100% !important;
}
.ercode_box {
  padding-top: 40px;
}
.code_close {
  background-color: #bdbdbd;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  right: 10px;
  top: 10px;
}
.icon_code_close {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
  display: block;
  position: relative;
}
.icon_code_close:before,
.icon_code_close:after {
  content: "";
  width: 100%;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: 0.04rem;
}
.icon_code_close:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.icon_code_close:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.code_hd {
  padding-bottom: 20px;
}
.zh_CN .code_hd,
.zh_TW .code_hd {
  text-align: center;
}
.code_tit {
  font-size: 0.2rem;
  text-align: center;
  color: #ff6700;
  font-weight: normal;
  padding-bottom: 10px;
}
.code_iframe {
  text-align: center;
}
.turn_area {
  display: none;
  padding-right: 8px;
}
.btn_turn,
.clear_link {
  width: 0.11rem;
  height: 0.11rem;
  display: block;
  position: relative;
}
.btn_turn:before,
.btn_turn:after,
.clear_link:before,
.clear_link:after {
  content: "";
  width: 100%;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
}
.btn_turn:before,
.clear_link:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.btn_turn:after,
.clear_link:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.clear_link {
  margin-top: 1px;
}
.clear_link:before,
.clear_link:after {
  background: #fff;
}
.clear_link_panel {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 2px;
  display: none;
}
.turn_off {
  display: none;
}
.add_regioncode .country_list {
  padding: 0.1rem 10px 0.1rem 0;
  margin-right: 8px;
  display: block;
  overflow: hidden;
}
.add_regioncode .country_list .country_code {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}
.add_regioncode .country_list .country_code tt {
  margin-right: 2px;
  color: #9b9b9b;
  font-size: 0.18rem;
  line-height: 0.2rem;
}
.add_regioncode .turn_area {
  display: block;
}
.add_regioncode .animation {
  position: relative;
  -webkit-animation: fade-in ease-in-out 0.5s;
  -webkit-animation-name: fade-in;
  animation-name: fade-in;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
.icon_arrow_down {
  margin-left: 0.03rem;
  display: block;
  width: 0.07rem;
  height: 0.07rem;
  border-width: 0.01rem;
  border-style: solid;
  border-color: transparent transparent #9b9b9b #9b9b9b;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.country-container {
  background: #fff;
  width: 100%;
  height: 100%;
  line-height: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 98;
  display: none;
  font-size: 0.16rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.country_container_con {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  box-orient: vertical;
}
.country-code {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
}
.country-code .header {
  border-bottom: 1px solid #eee;
  padding: 10px 20px;
  font-size: 0.14rem;
  color: #a3a3a3;
  font-weight: bold;
  background-color: #f8f8f8;
}
.country-code .record {
  padding: 0.14rem 0;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  margin: 0 20px;
}
.country-code .record:last-child {
  border-bottom: 0 none;
}
.country-code .record-country {
  float: left;
  max-width: 74%;
  color: #000;
}
.country-code .record-code {
  float: right;
  max-width: 20%;
  color: #cacaca;
}
.country-code .code_style1 {
  background: #f2f6e9;
  border: 1px solid #b7ce8b;
}
.country-code .code_style2 {
  background: #f8f2ec;
  border: 1px solid #fac084;
}
.country-code .code_style3 {
  background: #f9eaeb;
  border: 1px solid #fca1a7;
}
.country-code .code_style4 {
  background: #d3d3d3;
  border: 1px solid #c9c9c9;
}
.country-code .code_style5 {
  background: #e1f6f6;
  border: 1px solid #73bade;
}
.navbar_panel {
  display: none;
}
.countrycode-container-usual {
  display: none;
}
.countrycode-container-usual .header {
  display: none;
}
.countrycode-container-usual .list {
  padding: 0 20px;
}
.countrycode-container-usual .list:before,
.countrycode-container-usual .list:after {
  content: " ";
  display: table;
}
.countrycode-container-usual .list:after {
  clear: both;
}
.countrycode-container-usual .record {
  float: left;
  margin: 10px 10px 0 0;
  padding: 0.1rem;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}
.countrycode-container-usual .record-country {
  max-width: 100%;
}
.countrycode-container-usual .record-code {
  max-width: 100%;
  display: none;
}
.country_list {
  font-size: 0.16rem;
  display: none;
}
.country_regin {
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.search-code {
  margin: 20px 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  -o-border-radius: 0.2rem;
  border-radius: 0.2rem;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
}
.icon_search {
  display: block;
  margin-left: 10px;
}
.icon_search {
  width: 0.13rem;
  height: 0.13rem;
  margin-top: -0.04rem;
  border: 0.029rem solid #b2b2b2;
  position: relative;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.icon_search:before {
  content: "";
  width: 0.029rem;
  height: 0.1rem;
  background: #b2b2b2;
  position: absolute;
  top: 100%;
  right: 0;
  margin-right: -0.06rem;
  margin-top: -0.04rem;
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg);
}
.search-code-input {
  padding: 0.1rem 13px;
  display: block;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
}
.search-mode .header,
.search-mode .record {
  display: none;
}
.search-mode .countrycode-container-usual .record,
.search-mode .selected {
  display: block;
}
.n-footer {
  line-height: 1.5;
  text-align: center;
  font-size: 0.14rem;
  margin-top: -0.9rem;
  height: 0.9rem;
}
.nf-intro {
  padding: 10px;
}
.nf-link-area {
  color: #9b9b9b;
}
.nf-link-area li {
  display: inline-block;
}
.nf-link-area li a {
  padding: 0 10px;
  color: #9b9b9b;
}
.nf-link-area li a.current {
  color: #4a4a4a;
}
.warning_white {
  float: left;
  width: 0.16rem;
  height: 0.16rem;
  margin: 2px 4px 0 0;
  border: 1px solid #ff6700;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.warning_white:before,
.warning_white:after {
  content: "";
  background: #ff6700;
  width: 0.02rem;
  display: block;
  margin-left: 0.07rem;
  margin-top: 0.024rem;
}
.warning_white:before {
  height: 0.08rem;
}
.warning_white:after {
  height: 0.02rem;
  margin-top: 1px;
}
.icon_close {
  width: 0.18rem;
  height: 0.18rem;
  margin: 0 auto;
  display: inline-block;
  position: relative;
}
.icon_close:before,
.icon_close:after {
  content: "";
  width: 100%;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: 0.04rem;
  background-color: #4a4a4a;
}
.icon_close:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.icon_close:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.na-img-area {
  width: 70px;
  height: 70px;
  border: 2px solid #e3e3e3;
  border-radius: 50%;
  padding: 4px;
  background: #fff;
  position: relative;
  z-index: 4;
  margin: 0 auto 10px;
}
.na-img-bg-area {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.na-img-bg-area:empty {
  background: url(https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/avatar.png)
    0 0 no-repeat;
  background-size: cover;
}
.na-img-bg-area img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.err_tip {
  margin-bottom: 5px;
  line-height: 20px;
  color: #f66;
  display: none;
  padding-top: 14px;
}
.err_tip span {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
  vertical-align: middle;
}
.dis_box {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
}
.dis_box a {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
}
.icon_error {
  width: 0.14rem;
  height: 0.14rem;
  margin: 0 5px 0 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  background-color: #ff6700;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.icon_error:before,
.icon_error:after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 0.02rem;
  background-color: #fff;
}
.icon_error:before {
  height: 0.05rem;
  margin-top: 0.03rem;
}
.icon_error:after {
  height: 0.02rem;
  margin-top: 0.01rem;
}
.err_forbidden {
  padding: 10px;
  line-height: 1.5;
  background: #fff;
  color: #f66;
  display: none;
}
.error_bg {
  border-bottom: 1px solid #f66 !important;
}
.pwd_tip {
  display: block;
  color: #555;
}
.pwd_tip .icon_error {
  display: none;
}
.set_pwd_panel {
  display: none;
}
.set_pwd_panel h4 {
  padding-bottom: 10px;
}
.recycle {
  padding-top: 20px;
  text-align: left;
}
.recycle p {
  padding-top: 10px;
}
.btn_alink_box {
  text-align: center;
}
.btn_alink_box a {
  display: inline-block;
}
@media only screen and (min-width: 520px) {
  .layout {
    max-width: 80%;
  }
}
@media only screen and (min-width: 720px) {
  .layout {
    max-width: 500px;
  }
  .labelbox {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
  }
  .lgn_inputbg .labelbox:nth-of-type(1) {
    -webkit-border-radius: 2px 2px 0 0;
    -moz-border-radius: 2px 2px 0 0;
    -o-border-radius: 2px 2px 0 0;
    border-radius: 2px 2px 0 0;
    margin-bottom: 1px;
  }
  .lgn_inputbg .labelbox:nth-of-type(2) {
    -webkit-border-radius: 0 0 2px 2px;
    -moz-border-radius: 0 0 2px 2px;
    -o-border-radius: 0 0 2px 2px;
    border-radius: 0 0 2px 2px;
  }
  .btnadpt {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
  }
}
@-webkit-keyframes fade-in {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
@keyframes fade-in {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
.only_pwdlogin .ercode {
  display: none;
}
.only_qrlogin .code_close,
.only_qrlogin .code_hd,
.only_qrlogin .n-footer {
  display: none;
}
.only_qrlogin .wrap,
.only_qrlogin .ercode_box {
  padding: 0;
}
.only_qrlogin .layout {
  margin: 0;
}
.only_qrlogin .wrapper,
.only_qrlogin .ercode_pannel {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
  -webkit-box-pack: center;
  box-pack: center;
}
.only_qrlogin .ercode_pannel {
  width: 100%;
  height: 100%;
}
.security_Controller {
  display: none;
}
.tabs_con {
  display: none;
}
.tabs_con.now {
  display: block;
}
.bgiframe iframe {
  height: 100%;
}
.nav_tabs_panel,
.bgiframe {
  display: none;
}
.acq_tips {
  margin-bottom: 5px;
  text-align: center;
  font-size: 0.12rem;
  color: #9b9b9b;
}
.icon_select {
  width: 0.16rem;
  height: 0.16rem;
  margin-top: -4px;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  margin-right: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.icon_true.icon_select {
  background-color: #ff6700;
  border: 1px solid #ff6700;
}
.icon_true.icon_select.disabled {
  background-color: #d3d3d3;
  border: 1px solid #d3d3d3;
}
.icon_true.icon_select:after {
  content: "";
  width: 0.07rem;
  height: 0.03rem;
  display: block;
  margin: 0.04rem auto 0;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.icon_caret {
  display: block;
  margin: 7px 0 0 5px;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border-width: 5px;
  border-style: solid;
  border-color: #9b9b9b transparent transparent transparent;
}
.icon_caret.up {
  border-color: transparent transparent #9b9b9b transparent;
  margin: 2px 0 0 5px;
}
.agreeTip {
  text-align: center;
  font-size: 0.12rem;
  color: #9b9b9b;
}
.agreeTip .agreement_link,
.agreeTip .privacy_link {
  text-decoration: underline;
}
.sms_panel input {
  -webkit-box-flex: 1;
  box-flex: 1;
}
.send_ticket.disabled,
.send_ticket.sending {
  color: #999;
  cursor: default;
}
.send_ticket {
  cursor: pointer;
  color: #2ea5e5;
}
.sms_panel {
  border-radius: 0 0 16px 16px;
  display: -webkit-box;
  display: box;
  -webkit-box-align: center;
  box-align: center;
  -webkit-box-direction: reverse;
  box-direction: reverse;
}
.code_panel {
  padding: 0.1rem 20px;
  color: #333;
  display: block;
  overflow: hidden;
  display: none;
}
.fixed_bot {
  padding-top: 30px;
  padding-bottom: 10px;
}
.sms_login .btn_turn,
.sms_login .eye_panel,
.sms_login #manual_code {
  display: none;
}
.box {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}
.box:before,
.box:after {
  content: " ";
  display: table;
}
.box:after {
  clear: both;
}
.ac-box {
  padding-top: 50px;
}
#ac-register h1 {
  font-size: 0.18rem;
  padding-bottom: 15px;
  font-weight: normal;
}
#ac-register .box {
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
  -webkit-box-pack: center;
  box-pack: center;
  align-items: center;
  margin-bottom: 22px;
}
#ac-register .box img {
  margin: 20px 24px;
}
#ac-register .box p {
  height: 110px;
  line-height: 110px;
  text-align: left;
  color: #4a4a4a;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
#ac-confirm .na-img-area {
  margin: 20px;
}
#ac-confirm .box {
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
  -webkit-box-pack: center;
  box-pack: center;
  align-items: center;
}
#ac-confirm .box .confirm_tips {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  flex-grow: 1;
  margin: 20px 0;
}
#ac-confirm .box p {
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  margin: 10px 0;
  max-width: 200px;
  text-align: left;
  color: #4a4a4a;
}
#ac-confirm h2 {
  padding-top: 30px;
  font-size: 0.16rem;
  text-align: center;
  font-weight: normal;
}
.oauth_box .title {
  color: #4a4a4a;
  font-size: 0.16rem;
  margin: 10px 0;
}
.scope_list .scope_item {
  color: #9b9b9b;
  font-size: 0.14rem;
  line-height: 30px;
}
.oauth_wrap,
.scope_more {
  display: none;
}
@media (max-width: 241px) {
  .header_tit {
    padding: 10px 0 10px;
  }
  .header_tit_txt,
  .btnadpt,
  .add_regioncode .country_list .country_code tt {
    font-size: 0.14rem;
  }
  .labelbox input {
    padding: 0.1rem 0;
    font-size: 0.14rem;
  }
  .send_ticket {
    font-size: 0.14rem;
  }
  .reverse .n_links_area a {
    font-size: 0.12rem;
  }
  #login-button {
    margin: 0;
  }
  .oauth_box .title {
    font-size: 0.14rem;
  }
  .oauth_box .scope_list .scope_item {
    font-size: 0.12rem;
  }
  .code_panel {
    padding: 0.1rem 5px;
  }
  #custom_display_64 {
    display: none;
  }
  #ac-confirm .box {
    display: block;
  }
  #ac-confirm .box .na-img-area {
    margin: 20px auto;
  }
  #ac-confirm .box .confirm_tips {
    margin: 20px;
  }
  #ac-register .box {
    display: block;
  }
  #ac-register .box p {
    margin: 0 20px;
    height: auto;
    line-height: auto;
  }
}
#login-main {
  width: 100%;
}
.lgnheader {
  margin-top: 10%;
}
</style>