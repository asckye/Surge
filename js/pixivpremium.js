/*
[MITM]
hostname = oauth.secure.pixiv.net
[Script]
PixivPremium = type=http-response,pattern=^https:\/\/oauth\.secure\.pixiv\.net\/auth\/token,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/wubulaba/surgescript/master/Script/PixivPremium.js,script-update-interval=0
*/

let body = $response.body
body = JSON.parse(body)
body['user']['is_premium'] = true
body['response']['user']['is_premium'] = true
body = JSON.stringify(body)
$done({ body })
