/*
知乎简化去广告

[Rule]
USER-AGENT,AVOS*,REJECT-TINYGIF
URL-REGEX,https://www.zhihu.com/api/v4/mcn/,REJECT-TINYGIF
URL-REGEX,https://api.zhihu.com/(ab|adx|xen|drama|fringe|zst|commercial|ad-style-service|market/popover|search/(top|tab|preset)|.*(guide|recommendations|extended|featured-comment-ad)),REJECT-TINYGIF
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT-TINYGIF

[MITM]
hostname = www.zhihu.com, api.zhihu.com

[Script]
Zhihu.js = type=http-response,pattern= ^https:\/\/(api|lens|www)\.zhihu\.com\/(moments(\/recommend)?\?(action|feed_type)|topstory\/recommend|.*\/questions|market\/header|people|appview\/(v2|p)\/(answer\/)?\d+\?no\_image\=false(\&article\_fixed\_bottom\=1)?\&X\-SUGER\=|api\/videos\/\d+\/recommend),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/wubulaba/surgescript/master/Script/Zhihu.js,script-update-interval=0
*/
const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";
const path5 = "/people";
const path6 = "/moments/recommend?";
const path7 = "/appview/"
const path8 = "/api/videos/"

let url = $request.url;
let body = $response.body;

if ($request.method == "GET") {
  if (url.indexOf(path7) != -1) {
    body = body.replace(/<a data-draft-node="block" data-draft-type="mcn-link-card" data-mcn-id=".*?"><\/a>/ig, '');
  } else {
    body = JSON.parse(body);

    if (url.indexOf(path1) != -1 || url.indexOf(path6) != -1) {
      body.data = body.data.filter(function(item) {
        if (item.hasOwnProperty('adjson')) {
          return false;
        }
        return true;
      });
    }

    if (url.indexOf(path2) != -1) {
      body.data = body.data.filter(function(item) {
        if (item.card_type == "slot_event_card" || item.hasOwnProperty('ad')) {
          return false;
        }
        return true;
      });
    }

    if (url.indexOf(path3) != -1) {
      delete body.ad_info;
      /*
      body.data = body.data.filter(function(item) {
        if (item.author.name == "盐选推荐") {
          return false;
        }
        return true;
      });
      */
    }

    if (url.indexOf(path4) != -1) {
      body.sub_webs.splice(0, 1);
      body.sub_webs.splice(1, 1);
    }

    if (url.indexOf(path5) != -1) {
      delete body.mcn_user_info;
    }

    if (url.indexOf(path8) != -1) {
      delete body.ad_info;
    }

    body = JSON.stringify(body);
  }
}

$done({
  body
})
