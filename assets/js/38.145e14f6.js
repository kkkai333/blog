(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{553:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("首先,")]),s._v(" "),a("p",[s._v("因为clickhouse(下面简称ck)需要使用SSE 4.2指令集, 所有先执行以下命令检查当前CPU是否支持该指令集.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -q sse4_2 /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SSE 4.2 supported"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SSE 4.2 not supported"')]),s._v("\n")])])]),a("h3",{attrs:{id:"单机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单机"}},[s._v("#")]),s._v(" 单机")]),s._v(" "),a("h3",{attrs:{id:"集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[s._v("#")]),s._v(" 集群")]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 测试clickhouse-local")]),s._v("\ncho "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1\\n2\\n3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" clickhouse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create table test_table(id Int64) engine=File(CSV, stdin); select id from test_table;"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 打印系统用户内存用量")]),s._v("\nps aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" awk "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ printf(\"%s\\t%s\\n\", $1, $4)}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" clickhouse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("S "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user String, memory Float64"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select user, round(sum(memory), 2) as memoryTotal from table group by user order by memoryTotal desc format Pretty"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- clickhouse-benchmark 测试sql性能")]),s._v("\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from system.numbers limit 100"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" clickhouse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("benchmark "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" loaded "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" queries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[s._v("朱凯. ClickHouse 原理解析与应用实践")])])])}),[],!1,null,null,null);t.default=r.exports}}]);