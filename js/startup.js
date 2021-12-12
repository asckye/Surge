#开屏去广告

# 嘀嗒出行
^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js
# BiliBili
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 美团外卖
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js
# 京东
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js

hostname = capis.didapinche.com,capis*.didapinche.com,app.bilibili.com,mapi.meituan.com,api.m.jd.com,
