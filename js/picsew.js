/*
Picsew 一款IOS长截图软件
Picsew内购

[MITM]
hostname = buy.itunes.apple.com

[Script]
http-response ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/wubulaba/surgescript/master/Script/Picsew.js,script-update-interval=0
*/

var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];
if (bundle_id == "com.sugarmo.ScrollClip") {
obj = {
"receipt": {
    "receipt_type": "Production",
    "adam_id": 0,
    "app_item_id": 0,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3061",
    "download_id": 0,
    "version_external_identifier": 0,
    "receipt_creation_date": "2020-01-01 00:00:00 Etc/GMT",
    "receipt_creation_date_ms": "1588000000000",
    "receipt_creation_date_pst": "2020-04-27 21:10:15 America/Los_Angeles",
    "request_date": "2020-01-01 00:00:00 Etc/GMT",
    "request_date_ms": "1588000000000",
    "request_date_pst": "2020-01-01 00:00:00 America/Los_Angeles",
    "original_purchase_date": "2001-01-01 00:00:00 Etc/GMT",
    "original_purchase_date_ms": "1576200000000",
    "original_purchase_date_pst": "2020-01-01 00:00:00 America/Los_Angeles",
    "original_application_version": "3037",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "purchase_date_ms": "1587700000000",
      "purchase_date_pst": "2020-01-21 00:00:00 America/Los_Angeles",
      "original_purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "original_purchase_date_ms": "1587700000000",
      "original_purchase_date_pst": "2020-01-01 00:00:00 America/Los_Angeles",
      "is_trial_period": "false"
    }]
  },
  "status": 0,
  "environment": "Production"
  };
}
$done({body:JSON.stringify(obj)});
