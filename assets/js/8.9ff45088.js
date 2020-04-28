(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(r,t,a){"use strict";a.r(t);var e=a(33),o=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"数字货币交易所的那点事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字货币交易所的那点事"}},[r._v("#")]),r._v(" 数字货币交易所的那点事")]),r._v(" "),a("h2",{attrs:{id:"难以割舍的超级管理员情结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#难以割舍的超级管理员情结"}},[r._v("#")]),r._v(" 难以割舍的超级管理员情结")]),r._v(" "),a("p",[r._v("最近，随着政策基本面的利好，区块链中的币圈又着实热闹了一把。 谈起发币、上币、炒币，永远离不开形形色色的数字货币交易所，比如国内大名鼎鼎的币安、火币等。 大的交易所往往意味着更安全的交易环境，正如区块链解决的信任问题一样，他们总是会以区块链的名义标榜自己是最安全的。但是，他们真的安全吗？\n我看不见得吧。\n我们在交易所交易的时候，总是要将自己的数字货币以充值的方式充值到交易所，然后完成不同币种的兑换交易，最后或者取出到自己的私有账户中、或者仍旧存放在该交易所账户中，等待下次交易。\n几乎所有的交易所都是这个模式。那我们的资金放在交易所百分百安全吗？我不信，我猜中本聪也不信。")]),r._v(" "),a("p",[r._v("为什么在区块链去中心化的世界里，这群人才要把交易所中心化？\n我们用数字货币解决了信任问题，为什么又要跳到中心化交易所的信任中？\n难道就没有不需要预先存储数字货币的交易所吗？")]),r._v(" "),a("h2",{attrs:{id:"hydro-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hydro-protocol"}},[r._v("#")]),r._v(" Hydro protocol")]),r._v(" "),a("p",[r._v("Hydro Protocol，号称一款为去中心化交易所设计的开源协议。我对Hydro合约进行了仔细的翻阅，发现它的确是一款完全去中心化的交易协议。\n但是它需要一个叫做Relayer的角色，这个角色承担了将所有签名的买卖订单进行撮合并发送给Hydro的任务，也就是交易所。在这里，我们只需要将期望交易的货币数量和价格附带签名发送给Relayer，Relayer就可以也只能撮合符合相应价格的订单，将符合的订单发送给Hydro最终完成交易。\n在这个过程中，Relayer只承担了撮合订单的任务，不能对订单做任何修改，因为只要有人篡改订单中任何一个bit，都会导致Hydro验证签名的时候发生错误,最终无法完成交易。")]),r._v(" "),a("p",[r._v("现在看来Hydro完美的解决了交易所去中心化的问题。我们现在找到这样的交易所就可以了。")]),r._v(" "),a("p",[r._v("寻找以Hydro协议为基础的交易所\n别说，我们还真找到了这么几家交易所，但是却发现了一个很严重的问题和一个很严肃的问题: 白名单机制和上币费用！")]),r._v(" "),a("h2",{attrs:{id:"白名单机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#白名单机制"}},[r._v("#")]),r._v(" 白名单机制")]),r._v(" "),a("p",[r._v("这是一个很严重的问题。因为Hydro在完成订单的过程中有一个非常重要的环节，即转账（这不废话吗？所有的交易最终都是要完成转账)。我们知道，在以太坊里要想完成转账，只有拥有账户的本人或者其批准的代理人才能转移该账户的资金。原本Hydro协议的设定是代理人是Hydro协议本身，这样只有符合价格要求的订单才能被Hydro协议承认，这完全没有问题。\n经过对交易所协议的研究，我们发现交易所用了另外一个叫Proxy的代理合约来完成交易，而代理合约的转账权限是所有白名单都可以完成转账（Hydro肯定需要被加到白名单里的），但是白名单是可以添加和删除的。这里就存在一个很严重的问题，假如合约Owner添加了自己或者另外的账户为白名单，那么该白名单将会自由的转移所有授权过当前交易所的账户里的资金，事实上，在代理合约里的确添加了除Hydro以外的其它账户为白名单。\n好了，现在我们来梳理下这类交易所的流程：\n用户提交订单 ---\x3e 交易所收集订单 ---\x3e 交易所线下撮合订单 ---\x3e 交易所将撮合成功的订单发送给Hydro合约 ---\x3e Hydro验证订单签名、价格等信息 ---\x3e Hydro通过Proxy完成转账\n前面所有的环节都没有问题，只有最后一步转账，Hydro作为白名单可以转账成功，那其它的白名单账户一样可以转账成功，这个问题很严重，我代表个人替所有授权过交易所的账户捏把汗。")]),r._v(" "),a("h2",{attrs:{id:"上币费用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上币费用"}},[r._v("#")]),r._v(" 上币费用")]),r._v(" "),a("p",[r._v("这是个老生常谈的问题，相信在交易所上过币的组织都知道，上币费用少则几万多则几十万，有时候为了营销该代币还需要更大的资本去操纵（这种割韭菜行为我们暂不谈）。就单单这个上币费用的问题，就扼杀了很多优秀的且要通过代币的形式公募的项目组织, 因为对于初创的项目是很难接受如此高昂的费用的。况且在去中心的区块链世界，出现垄断性的交易所，也是非常不合理的。")]),r._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[r._v("#")]),r._v(" 思考")]),r._v(" "),a("p",[r._v("Hydro 的Relayer问题\n其实想想为什么会有白名单机制，主要原因还是因为Hydro没有解决Relayer的问题。Relayer说透了，就是完成线下撮合的工作。正因为Hydro缺少了撮合这个工作，最终导致Relayer的线下撮合有了绝对的话语权。假如我们将撮合过程作为Hydro的补充放到线上，公开透明撮合过程，实现完整的交易过程，那么线下的撮合还会有市场和话语权吗？")]),r._v(" "),a("h2",{attrs:{id:"代币的真正价值是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代币的真正价值是什么？"}},[r._v("#")]),r._v(" 代币的真正价值是什么？")]),r._v(" "),a("p",[r._v("为什么会有数不清的代币、数不清的割韭菜现象？代币的价值就只是炒作吗？没有落地的项目、稳定的收益、可靠的担保，代币只能是泡沫、只能是击鼓传花的游戏。\n我所理解的代币更像是一个组织的信任凭证或者发行的股票，组织也要有一定的实力（包括资金或者利润或者前景）去担保该代币的价值，当组织收益的时候，代币的持有者可以从中得到利益。只有这样代币才有升值空间和存在的意义。（貌似这样也会颠覆目前的风投方式）。")])])}),[],!1,null,null,null);t.default=o.exports}}]);