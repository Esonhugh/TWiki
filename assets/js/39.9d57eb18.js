(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{832:function(t,r,s){"use strict";s.r(r);var n=s(112),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("center",[s("h1",[t._v("利用 IAM 进行权限提升")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("如果当前用户具备编辑 IAM 策略的权限，但没有某些服务权限的话，那么可以在 IAM 中开启这个服务权限，以实现提权。")]),t._v(" "),s("p",[t._v("例如下面这个用户，在打开 EC2 时提示我们没有权限。")]),t._v(" "),s("p",[s("br"),s("img",{attrs:{width:"1000",src:"/img/1651980039.png"}}),s("br")]),t._v(" "),s("p",[t._v("但是这个用户是具有 IAM 的编辑权限的，因此我们可以将 AmazonEC2FullAccess 权限赋予给这个用户")]),t._v(" "),s("p",[s("br"),s("img",{attrs:{width:"800",src:"/img/1651980063.png"}}),s("br")]),t._v(" "),s("p",[t._v("此时再次访问 EC2 界面，发现就可以成功访问了，这样就实现了提权。")]),t._v(" "),s("p",[s("br"),s("img",{attrs:{width:"900",src:"/img/1651980101.png"}}),s("br")]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);r.default=e.exports}}]);