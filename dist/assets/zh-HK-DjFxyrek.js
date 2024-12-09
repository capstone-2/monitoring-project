const e="繁體中文 (香港)",o="設定",t="主控台",s="語言",n="外觀",a="主題",r="一般",i="版本",c="列表",l="新增",d="上線",p="離線",u="待定",m="不明",g="暫停",h="暫停",y="名稱",S="狀態",D="日期時間",P="內容",T="恢復",k="編輯",A="刪除",b="目前",M="上線率",v="日",C="小時",I="每 {0} 秒檢查一次",f="反應時間",w="反應時間",R="關鍵字",N="網址 URL",E="Hostname",x="Port",L="重試數次確定為離線",U="重試多少次後才判定為離線及傳送通知。如數值為 0 會即判定為離線及傳送通知。",H="進階",K="忽略 TLS/SSL 錯誤",F="反轉狀態，如網址是可正常瀏覽，會被判定為 '離線/DOWN'",G="設為 0 即不跟蹤",O="可多選",B="儲存",W="通知",V="明亮",z="暗黑",j="自動",q="一般",J="下方",Q="沒有",X="時區",Z="密碼不一致",Y="登出",_="新增後，你需要在監測器裡啟用。",$="離開",ee="確認",oe="是",te="否",se="帳號",ne="密碼",ae="登入",re="電郵",ie="測試",ce="搜索 HTML 或 JSON 裡是否有出現關鍵字（注意英文大細階）",le="是否確定刪除這個監測器？",de="是否確定刪除這個通知設定？如監測器啟用了這個通知，將會收不到通知。",pe="預設為 Cloudflare DNS 伺服器，你可以轉用其他 DNS 伺服器。",ue="請選擇 DNS 記錄類型",me="是否確定要暫停？",ge="反應時間 (ms)",he="N/A",ye="建立",Se="是否確定刪除這個監測器的所有事件？",De="是否確定刪除這個監測器的所有脈搏資料？",Pe="是否確定刪除所有監測器的脈搏資料？（您的監測器會繼續正常運作）",Te="事件",ke="脈搏",Ae="新增監測器時這個通知會預設啟用，當然每個監測器亦可分別控制開關。",be="匯出",Me="匯入",ve="您可以備份所有監測器及所有通知。",Ce="註：此備份不包括歷史記錄。",Ie="此備份可能包含了一些敏感資料如通知裡的 Token，請小心保存備份。",fe="請選擇一個檔案",we="請選擇 JSON 檔案",Re="請輸入 Token 以確認 2FA：",Ne="Token 有效！您現在可以儲存 2FA 設定。",Ee="您確定要啟用 2FA 嗎？",xe="您確定要停用 2FA 嗎？",Le="執行狀態",Ue="已暫停",He="生效",Ke="未生效",Fe="Token",Ge="Retry every {0} seconds.",Oe="\"略過已存在的\" 會跳過所有相同名稱的監測器或通知。 '覆蓋' 將刪除所有現有的監測器及通知。",Be="您確定要匯入備份嗎？請確認你已選擇正確的匯入設定。",We="覆蓋",Ve="選項",ze="標籤",je="顏色",qe="灰",Je="紅",Qe="橙",Xe="綠",Ze="藍",Ye="靛",_e="紫",$e="粉紅",eo="Nothing here, please add a group or a monitor.",oo="Telegram",to="Webhook",so="電郵 (SMTP)",no="Discord",ao="Microsoft Teams",ro="Signal",io="Gotify",co="Slack",lo="Pushover",po="Pushy",uo="Octopush",mo="PromoSMS",go="LunaSea",ho="Apprise (支援 50 多種通知)",yo="Pushbullet",So="Line Messenger",Do="Mattermost",Po="是否確定刪除這個 Status Page？",To="您應每 {0} 秒呼叫此網址。",ko="選填參數：{0}",Ao="我的 {notification} 通知 ({number})",bo="此處",Mo="必填",vo="您可以從 {0} 取得 Token。",Co="支援 對話/群組/頻道的聊天 ID",Io="傳送訊息給機器人，並前往以下網址以取得您的 chat ID：",fo="找不到 Chat ID；請先傳送訊息給機器人",wo="{0} 適合任何現代的 HTTP 伺服器，如 Express.js",Ro="{multipart} 適合 PHP。 JSON 必須先經由 {decodeFunction} 剖析。",No="無 / STARTTLS (25, 587)",Eo="TLS (465)",xo="自訂主旨",Lo="CC",Uo="BCC",Ho="您可以前往 伺服器設定 -> 整合 -> Webhook -> 新 Webhook 以取得",Ko="您可以前往此頁面以了解如何建立 Webhook 網址 {0}。",Fo="收件人",Go="您需要有 REST API 的 Signal 客戶端。",Oo="您可以前往下列網址以了解如何設定：",Bo="注意: 不得混合收件人的群組和號碼！",Wo="優先度",Vo="更多關於 Webhook 的資訊: {0}",zo="如果您不想使用 Webhook 頻道，請在 {0} 頻道名稱欄位填入您想使用的頻道。例如: #其他頻道",jo="如果您未填入 Uptime Kuma 網址。將預設使用專案 Github 頁面。",qo="Emoji 一覽表: {0}",Jo="Push by Techulus",Qo="ClickSend SMS",Xo="Google Chat (僅限 Google Workspace)",Zo="裝置",Yo="緊急優先度 (2) 的重試間隔為 30 秒並且會在 1 小時後過期。",_o="如果您想要傳送通知到不同裝置，請填寫裝置欄位。",$o="Premium (快速 - 建議用於警報)",et="Low Cost (緩慢 - 有時會被營運商阻擋)",ot="查看 {0} 價格：",tt="API 認證",st="您使用的是舊版的 Octopush (2011-2020) 還是新版？",nt="電話號碼 (intl 格式，例如：+33612345678) ",at="簡訊寄件人名稱：3-11位英數字元及空白 (a-zA-Z0-9)",rt="已安裝 Apprise。",it="尚未安裝 Apprise。{0}",ct="Line 開發者控制台 - {0}",lt="首先，前往 {0}，建立 provider 和 channel (Messaging API)。接著您就可以從上面提到的選單項目中取得頻道存取權杖及使用者 ID。",dt='您可以在 "圖示網址" 中提供圖片網址以覆蓋預設個人檔案圖片。若已設定 Emoji 圖示，將忽略此設定。',pt='您可以在 "頻道名稱" 欄位中填寫頻道名稱以覆蓋 Webhook 的預設頻道。必須在 Mattermost 的 Webhook 設定中啟用。例如：#其他頻道',ut="Matrix",mt="SMS ECO - 便宜，但是很慢且經常過載。僅限位於波蘭的收件人。",gt="SMS FLASH - 訊息會自動在收件人的裝置上顯示。僅限位於波蘭的收件人。",ht="SMS FULL - 高級版，您可以使用您的寄件人名稱 (必須先註冊名稱。對於警報來說十分可靠。",yt="SMS SPEED - 系統中的最高優先度。快速、可靠，但昂貴 (約 SMS FULL 的兩倍價格)。",St="電話號碼 (若收件人位於波蘭則無需輸入區域代碼)",Dt="簡訊寄件人名稱：預先註冊的名稱或以下的預設名稱：InfoSMS、SMS Info、MaxSMS、INFO、SMS",Pt="Homeserver 網址 (開頭為 http(s)://，結尾可能帶連接埠)",Tt="您可以在 Matrix 客戶端的房間設定中的進階選項找到 internal room ID。應該看起來像 !QMdRCpUIfLwsfjxye6:home.server。",kt="使用您自己的 Matrix 使用者存取權杖將賦予存取您的帳號和您加入的房間的完整權限。建議建立新使用者，並邀請至您想要接收通知的房間中。您可以執行 {0} 以取得存取權杖",At="方法",bt="主體",Mt="標頭",vt="Push URL",Ct="要求標頭不是有效的 JSON：",It="請求主體不是有效的 JSON：",ft="保留 {0} 天內的監測器歷史紀錄。",wt="密碼不相符。",Rt="記錄",Nt="若要監測 Steam 遊戲伺服器，您將需要 Steam Web-API 金鑰。您可以在此註冊您的 API 金鑰：",Et="最近",xt="完成",Lt="資訊",Ut="安全性",Ht="預設",Kt="標題",Ft="內容",Gt="樣式",Ot="資訊",Bt="警告",Wt="危險",Vt="主要",zt="淺色",jt="暗色",qt="發佈",Jt="建立",Qt="取消釘選",Xt="描述",Zt="服務",Yt="捨棄",_t="取消",$t="觸發 SQLite 的資料庫清理 (VACUUM)。如果您的資料庫是在 1.10.0 版本後建立，AUTO_VACUUM 已自動啟用，則無需此操作。",es="SerwerSMS.pl",os="API 使用者名稱 (包括 webapi_ 前綴)",ts="API 密碼",ss="電話號碼",ns="SMS 寄件人名稱 (由客戶入口網站註冊)",as="Stackfield",rs="DKIM 設定",is="請參考 Nodemailer DKIM {0} 使用方式。",cs="文件",ls="網域名稱",ds="Key Selector",ps="私密金鑰",us="雜湊演算法 (選填)",ms="要簽署的郵件標頭 (選填)",gs="不簽署的郵件標頭 (選填)",hs="Gorush",ys="Alerta",Ss="API Endpoint",Ds="環境",Ps="API 金鑰",Ts="警示狀態",ks="恢復狀態",As="代理伺服器",bs="啟用",Ms="設為預設",vs="您確定要為所有監測器刪除此 Proxy 嗎？",Cs="必須將 Proxy 指派給監測器才能運作。",Is="此 Proxy 在啟用前不會在監測器上生效，您可以藉由控制啟用狀態來暫時對所有的監測器停用 Proxy。",fs="預設情況下，新監測器將啟用此 Proxy。您仍可分別停用各監測器的 Proxy。",ws="維護",Rs="維護中",Ns="啟用",Es="停用",xs="幫助",Ls="每 {0} 次便重新傳送",Us="重新傳送已停用",Hs="允許以 TLS 連線傳送 gRPC 要求",Ks="每天一次 | 每 {0} 天一次",Fs="選擇受目前維護影響的監測器",Gs="在已選取的狀態頁中顯示此維護訊息",Os="遊戲",Bs="監測器 | 監測器",Ws="額外 Header",Vs="成功訊息",zs="錯誤",js="嚴重",qs="自定義",Js="有效",Qs="無效",Xs="已安裝",Zs="執行中",Ys="停止",_s="下一步",$s="備份",en="自訂",on="開始",tn="使用者",sn="信任 'X-Forwarded-*' 的 Header。如果您想取得正確的 Client IP，且您的 Uptime Kuma 架設於 Nginx 或 Apache Proxy 之後，您應啟用此選項。",nn="未能取得數據，請重新再試。",an="解除安裝",rn="您可以前往此頁面以了解如何建立 Webhook 網址 {0}。",cn="設定傳送 Webhook 時使用的額外 Header。請使用 JSON key/value 格式。",ln="Topic",dn="監測 MQTT 中的一個 Topic",pn="MQTT 中收到視為成功的訊息",un="Slug",mn="只能使用 {0} 開頭或結尾",gn="驗證",hn="關於",yn="(到 {0} 下載 cloudflared)",Sn="Cloudflare 網頁",Dn="登入為 {0}",Pn="驗證已停用。",Tn="Radius Secret",kn="Client 與 Server 之間的共享 Secret",An="Called Station Id",bn="Calling Station Id",Mn="Query",vn="TLS 証書到期",Cn="証書將於 X 天後到期時觸發 HTTPS 監測器通知：",In="您確定要為所有監測器刪除此 Docker 主機嗎？",fn="Socket",wn="TCP / HTTP",Rn="Domain",Nn="Workstation",En="ZohoCliq",xn="您處於無驗證模式。無須輸入密碼。",Ln="您可以從 {0} 取得 Access Token。",Un="例子",Hn="請直接備份 Docker Volume 或 ./data/ 資料夾。",Kn="Squadcast",Fn="或",Gn="間隔",On="重複性",Bn="手動啟用/停用",Wn="正在使用 Server 的時區",Vn="一",zn="二",jn="三",qn="四",Jn="五",Qn="六",Xn="日",Zn="每周特定一天",Yn="每月特定一天",_n="最後一天",$n="每月最後一天",ea="插件 | 插件",oa="安裝",ta="正在安装",sa="正在解除安裝",na="你確定要解除安裝？",aa="保留限期必需為 0 或正數",ra="設定為 0 以作無限期保留。",ia="每月倒數第二天",ca="每月倒數第三天",la="每月倒數第四天",da="您確定要暫停嗎？",pa="結束",ua="Icon 網址",ma="在某些情況 IPv6 可能會出現異常，如果您遇到任何問題，請停用。",ga="過時：由於備份功能未顧及新功能的增加，因此備份功能無法產生或復原完整的備份。",ha="可選填",ya="支援 Markdown",Sa="你確定你要刪除此標籤？相關的監測器不會被刪除。",Da="裝置 Token",Pa="OneBot HTTP 地址",Ta="Home Assistant",ka='您可以前往 Service -> Service Directory -> (Select a service) -> Integrations -> Add integration 以取得。您可以搜尋 "Events API V2"。詳細資訊 {0}',Aa="Kook",ba="到 {0} 創建應用並取得 Bot Token",Ma="Method 名稱將被轉換成 cammelCase 命名，如 sayHello、check 等。",va="您確定要刪除此維護嗎？",Ca="DNS 伺服器 port。預設為 53。您可以隨時變更 port。",Ia="選擇至少一個受影響的監測器",fa="endpoint",wa='在控制台的 HTTP API 憑證取得的 "API Key"',Ra='在控制台的 HTTP API 憑證取得的 "Login"',Na="API 登入名稱",Ea="API 密碼",xa="Secret API Key",La="策略",Ua="群組",Ha="OneBot 訊息類型",Ka="訊息優先度 (0-9，預設 = 0)",Fa="以 Unicode 傳送",Ga="您的 SMSEagle 裝置 URL",Oa="API 存取 Token",Ba="收件者 (以逗號分隔)",Wa="收件者類型",Va="聯絡人名稱",za="群組名稱",ja="電話號碼",qa="SMSEagle",Ja="您可以到 {0} 取得 API 使用者名稱和 API Key。",Qa="為了安全起見，必須設置存取 Token",Xa="群組/使用者 ID",Za="私人",Ya="地區性",_a="Called Device 識別碼",$a="靜音發送",er="(選填) Message Thread ID",or="Calling Device 識別碼",tr="你確定要刪除此 API Key?",sr="你確定要停用此 API Key?",nr="失效時間",ar="繼續",rr="產生",ir="你的 API Key 已被產生。此頁只會顯示一次，請適當保存。",cr="過期",lr="選擇以靜音發送。用戶會收到無聲通知。",dr="複製",pr="複製的 {0}",ur="Topic",mr="重試",gr="高",hr="華為",yr="SecretKey",Sr="WebHookUrl",Dr="平台",Pr="禁止轉發/儲存",Tr="如果選擇，用戶將不能轉發/儲存收到的信息。",kr="經濟",Ar="平價",br="高價",Mr="將於 {0} 後重新整理",vr="SendKey",Cr="開始時間",Ir="低",fr="結束時間",wr="Cron 表達式",Rr="排程： ",Nr="無效 Cron 表達式：{0}",Er="使用伺服器時區",xr="中",Lr="高",Ur="Chrome/Chromium 執行檔",Hr="自動偵測",Kr="如果您使用 Docker 且未安裝 Chromium，可能要花數分鐘安裝後才能顯示測試結果。安裝會使用 1GB 的硬碟空間。",Fr="首頁",Gr={languageName:e,Settings:o,Dashboard:t,"New Update":"有更新",Language:s,Appearance:n,Theme:a,General:r,Version:i,"Check Update On GitHub":"到 Github 查看更新",List:c,Add:l,"Add New Monitor":"新增監測器","Quick Stats":"綜合數據",Up:d,Down:p,Pending:u,Unknown:m,Pause:g,pauseDashboardHome:h,Name:y,Status:S,DateTime:D,Message:P,"No important events":"沒有重要事件",Resume:T,Edit:k,Delete:A,Current:b,Uptime:M,"Cert Exp.":"証書期限",day:v,"-day":"日",hour:C,"-hour":"小時",checkEverySecond:I,Response:f,Ping:w,"Monitor Type":"監測器類型",Keyword:R,"Friendly Name":"名稱",URL:N,Hostname:E,Port:x,"Heartbeat Interval":"檢查間距",Retries:L,retriesDescription:U,Advanced:H,ignoreTLSError:K,"Upside Down Mode":"反轉模式",upsideDownModeDescription:F,"Max. Redirects":"跟隨重新導向 (Redirect) 的次數",maxRedirectDescription:G,"Accepted Status Codes":"接受為上線的 HTTP 狀態碼",acceptedStatusCodesDescription:O,Save:B,Notifications:W,"Not available, please setup.":"無法使用，需要設定","Setup Notification":"設定通知",Light:V,Dark:z,Auto:j,"Theme - Heartbeat Bar":"監測器列表 狀態條外觀",Normal:q,Bottom:J,None:Q,Timezone:X,"Search Engine Visibility":"是否允許搜尋器索引","Allow indexing":"允許索引","Discourage search engines from indexing site":"不建議搜尋器索引","Change Password":"變更密碼","Current Password":"目前密碼","New Password":"新密碼","Repeat New Password":"確認新密碼",passwordNotMatchMsg:Z,"Update Password":"更新密碼","Disable Auth":"取消登入認証","Enable Auth":"開啟登入認証","disableauth.message1":"你是否確認<strong>取消登入認証</strong>？","disableauth.message2":"這個功能是設計給已有<strong>第三方認証</strong>的用家，例如 Cloudflare Access。","Please use this option carefully!":"請小心使用。",Logout:Y,notificationDescription:_,Leave:$,"I understand, please disable":"我明白，請取消登入認証",Confirm:ee,Yes:oe,No:te,Username:se,Password:ne,"Remember me":"記住我",Login:ae,"No Monitors, please":"沒有監測器，請","add one":"新增","Notification Type":"通知類型",Email:re,Test:ie,keywordDescription:ce,"Certificate Info":"憑證詳細資料",deleteMonitorMsg:le,deleteNotificationMsg:de,"Resolver Server":"DNS 伺服器","Resource Record Type":"DNS 記錄類型",resolverserverDescription:pe,rrtypeDescription:ue,pauseMonitorMsg:me,"Last Result":"最後結果","Create your admin account":"建立管理員帳號","Repeat Password":"重複密碼",respTime:ge,notAvailableShort:he,Create:ye,clearEventsMsg:Se,clearHeartbeatsMsg:De,confirmClearStatisticsMsg:Pe,"Clear Data":"清除資料",Events:Te,Heartbeats:ke,"Auto Get":"自動獲取",enableDefaultNotificationDescription:Ae,"Default enabled":"預設通知","Also apply to existing monitors":"同時取用至目前所有監測器",Export:be,Import:Me,backupDescription:ve,backupDescription2:Ce,backupDescription3:Ie,alertNoFile:fe,alertWrongFileType:we,twoFAVerifyLabel:Re,tokenValidSettingsMsg:Ne,confirmEnableTwoFAMsg:Ee,confirmDisableTwoFAMsg:xe,"Apply on all existing monitors":"套用至目前所有監測器","Verify Token":"驗証 Token","Setup 2FA":"設定 2FA","Enable 2FA":"開啟 2FA","Disable 2FA":"關閉 2FA","2FA Settings":"2FA 設定","Two Factor Authentication":"雙重認證",filterActive:Le,filterActivePaused:Ue,Active:He,Inactive:Ke,Token:Fe,"Show URI":"顯示 URI","Clear all statistics":"清除所有歷史記錄",retryCheckEverySecond:Ge,importHandleDescription:Oe,confirmImportMsg:Be,"Heartbeat Retry Interval":"Heartbeat Retry Interval","Import Backup":"匯入備份","Export Backup":"匯出備份","Skip existing":"略過已存在的",Overwrite:We,Options:Ve,"Keep both":"兩者並存",Tags:ze,"Add New below or Select...":"在下方新增或選取…","Tag with this name already exist.":"Tag with this name already exist.","Tag with this value already exist.":"Tag with this value already exist.",color:je,"value (optional)":"值 (非必需)",Gray:qe,Red:Je,Orange:Qe,Green:Xe,Blue:Ze,Indigo:Ye,Purple:_e,Pink:$e,"Search...":"搜尋…","Avg. Ping":"平均反應時間","Avg. Response":"平均反應時間","Entry Page":"Entry Page",statusPageNothing:eo,"No Services":"沒有服務","All Systems Operational":"一切正常","Partially Degraded Service":"部份服務受阻","Degraded Service":"服務受阻","Add Group":"新增群組","Add a monitor":"新增監測器","Edit Status Page":"編輯 Status Page","Go to Dashboard":"前往主控台","Status Page":"Status Page","Status Pages":"Status Pages",telegram:oo,webhook:to,smtp:so,discord:no,teams:ao,signal:ro,gotify:io,slack:co,"rocket.chat":"Rocket.chat",pushover:lo,pushy:po,octopush:uo,promosms:mo,lunasea:go,apprise:ho,pushbullet:yo,line:So,mattermost:Do,deleteStatusPageMsg:Po,"Push URL":"推送網址",needPushEvery:To,pushOptionalParams:ko,defaultNotificationName:Ao,here:bo,Required:Mo,"Bot Token":"機器人權杖",wayToGetTelegramToken:vo,"Chat ID":"聊天 ID",supportTelegramChatID:Co,wayToGetTelegramChatID:Io,"YOUR BOT TOKEN HERE":"在此填入您的機器人權杖",chatIDNotFound:fo,"Post URL":"Post 網址","Content Type":"Content Type",webhookJsonDesc:wo,webhookFormDataDesc:Ro,secureOptionNone:No,secureOptionTLS:Eo,"Ignore TLS Error":"忽略 TLS 錯誤","From Email":"寄件人",emailCustomSubject:xo,"To Email":"收件人",smtpCC:Lo,smtpBCC:Uo,"Discord Webhook URL":"Discord Webhook 網址",wayToGetDiscordURL:Ho,"Bot Display Name":"機器人顯示名稱","Prefix Custom Message":"前綴自訂訊息","Webhook URL":"Webhook 網址",wayToGetTeamsURL:Ko,Number:"號碼",Recipients:Fo,needSignalAPI:Go,wayToCheckSignalURL:Oo,signalImportant:Bo,"Application Token":"應用程式權杖","Server URL":"伺服器網址",Priority:Wo,"Icon Emoji":"Emoji 圖示","Channel Name":"頻道名稱","Uptime Kuma URL":"Uptime Kuma 網址",aboutWebhooks:Vo,aboutChannelName:zo,aboutKumaURL:jo,emojiCheatSheet:qo,PushByTechulus:Jo,clicksendsms:Qo,GoogleChat:Xo,"User Key":"使用者金鑰",Device:Zo,"Message Title":"訊息標題","Notification Sound":"通知音效","More info on:":"更多資訊: {0}",pushoverDesc1:Yo,pushoverDesc2:_o,"SMS Type":"簡訊類型",octopushTypePremium:$o,octopushTypeLowCost:et,checkPrice:ot,apiCredentials:tt,octopushLegacyHint:st,"Check octopush prices":"查看 octopush 價格 {0}。",octopushPhoneNumber:nt,octopushSMSSender:at,"LunaSea Device ID":"LunaSea 裝置 ID","Apprise URL":"Apprise 網址","Example:":"範例：{0}","Read more:":"深入瞭解：{0}","Status:":"狀態：{0}","Read more":"深入瞭解",appriseInstalled:rt,appriseNotInstalled:it,"Access Token":"存取權杖","Channel access token":"頻道存取權杖","Line Developers Console":"Line 開發者控制台",lineDevConsoleTo:ct,"Basic Settings":"基本設定","User ID":"使用者 ID","Messaging API":"Messaging API",wayToGetLineChannelToken:lt,"Icon URL":"圖示網址",aboutIconURL:dt,aboutMattermostChannelName:pt,matrix:ut,promosmsTypeEco:mt,promosmsTypeFlash:gt,promosmsTypeFull:ht,promosmsTypeSpeed:yt,promosmsPhoneNumber:St,promosmsSMSSender:Dt,"Feishu WebHookUrl":"飛書 WebHook 網址",matrixHomeserverURL:Pt,"Internal Room Id":"Internal Room ID",matrixDesc1:Tt,matrixDesc2:kt,Method:At,Body:bt,Headers:Mt,PushUrl:vt,HeadersInvalidFormat:Ct,BodyInvalidFormat:It,"Monitor History":"監測器歷史紀錄",clearDataOlderThan:ft,PasswordsDoNotMatch:wt,records:Rt,"One record":"一項記錄","Showing {from} to {to} of {count} records":"正在顯示 {count} 項記錄中的 {from} 至 {to} 項",steamApiKeyDescription:Nt,"Current User":"目前使用者",recent:Et,Done:xt,Info:Lt,Security:Ut,"Steam API Key":"Steam API Key","Shrink Database":"壓縮資料庫","Pick a RR-Type...":"選擇資源記錄類型…","Pick Accepted Status Codes...":"選擇可接受的狀態碼…",Default:Ht,"HTTP Options":"HTTP 選項","Create Incident":"建立事件",Title:Kt,Content:Ft,Style:Gt,info:Ot,warning:Bt,danger:Wt,primary:Vt,light:zt,dark:jt,Post:qt,"Please input title and content":"請輸入標題及內容",Created:Jt,"Last Updated":"最後更新",Unpin:Qt,"Switch to Light Theme":"切換至淺色佈景主題","Switch to Dark Theme":"切換至深色佈景主題","Show Tags":"顯示標籤","Hide Tags":"隱藏標籤",Description:Xt,"No monitors available.":"沒有可用的監測器。","Add one":"新增一個","No Monitors":"無監測器","Untitled Group":"未命名群組",Services:Zt,Discard:Yt,Cancel:_t,shrinkDatabaseDescription:$t,serwersms:es,serwersmsAPIUser:os,serwersmsAPIPassword:ts,serwersmsPhoneNumber:ss,serwersmsSenderName:ns,stackfield:as,smtpDkimSettings:rs,smtpDkimDesc:is,documentation:cs,smtpDkimDomain:ls,smtpDkimKeySelector:ds,smtpDkimPrivateKey:ps,smtpDkimHashAlgo:us,smtpDkimheaderFieldNames:ms,smtpDkimskipFields:gs,gorush:hs,alerta:ys,alertaApiEndpoint:Ss,alertaEnvironment:Ds,alertaApiKey:Ps,alertaAlertState:Ts,alertaRecoverState:ks,Proxies:As,default:"預設",enabled:bs,setAsDefault:Ms,deleteProxyMsg:vs,proxyDescription:Cs,enableProxyDescription:Is,setAsDefaultProxyDescription:fs,Maintenance:ws,statusMaintenance:Rs,"Enable DNS Cache":"啟用 DNS 快取",Enable:Ns,Disable:Es,"Schedule maintenance":"計劃維護",Help:xs,"Valid To:":"有效期至：","Date Created":"新增日期",resendEveryXTimes:Ls,resendDisabled:Us,enableGRPCTls:Hs,recurringIntervalMessage:Ks,affectedMonitorsDescription:Fs,affectedStatusPages:Gs,"Primary Base URL":"主要 Base URL","Passive Monitor Type":"被動監測器類型","Resend Notification if Down X times consecutively":"每 X 次心跳皆離線，重新傳送通知",Game:Os,"Specific Monitor Type":"特定監測器類型",Monitor:Bs,"General Monitor Type":"一般監測器類型","Affected Monitors":"受影響的監測器","Powered by":"技術支持：","Add New Status Page":"新增 Status Page","Page Not Found":"找不到頁面","Start of maintenance":"維護開始時間","All Status Pages":"所有 Status Page",webhookAdditionalHeadersTitle:Ws,successMessage:Vs,error:zs,critical:js,Customize:qs,"Custom Footer":"自訂 Footer","Custom CSS":"自訂 CSS",Valid:Js,Invalid:Qs,Installed:Xs,"Not installed":"未安裝",Running:Zs,Stop:Ys,Next:_s,"No Proxy":"無 Proxy",Backup:$s,"Pick Affected Monitors...":"挑選受影響的監測器…",Custom:en,"Not running":"未執行","Remove Token":"移除 Token",Start:on,User:tn,trustProxyDescription:sn,"Reverse Proxy":"反向 Proxy","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"若要取得長期有效 Access Token，請按您的個人檔案名稱 (左下角)，捲動至最下方，然後按建立 Token。 ",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'您可以在 Home Assistant 中查看通知服務的列表，在"開發者工具 > 服務"下搜尋"通知"來找到您的裝置/手機的名稱。',loadingError:nn,uninstall:an,wayToGetZohoCliqURL:rn,"Select status pages...":"選擇 Status Page…",webhookAdditionalHeadersDesc:cn,topic:ln,topicExplanation:dn,successMessageExplanation:pn,"Certificate Chain":"証書信任鏈",Slug:un,"Accept characters:":"可用字元：",startOrEndWithOnly:mn,"No consecutive dashes":"不得連續使用破折號","The slug is already taken. Please choose another slug.":"此 slug 已被使用。請選擇其他 slug。",Authentication:gn,"HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"新 Status Page","Docker Daemon":"Docker Daemon",About:hn,wayToGetCloudflaredURL:yn,cloudflareWebsite:Sn,"Message:":"訊息：","Don't know how to get the token? Please read the guide:":"不知道如何取得權杖？請閱讀指南：","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"如果您正透過 Cloudflare Tunnel 連線，可能會導致連線中斷。您確定要停止嗎？請輸入密碼以確認。","HTTP Headers":"HTTP Headers","Trust Proxy":"信任 Proxy","Other Software":"其他軟件","For example: nginx, Apache and Traefik.":"例如 nginx、Apache 和 Traefik。","Please read":"請閱覽","Subject:":"標題：","Days Remaining:":"餘下日數：","Issuer:":"簽發者：","Fingerprint:":"指紋：","No status pages":"無 Status Page","Domain Name Expiry Notification":"Domain 到期通知","Footer Text":"Footer 文字","Show Powered By":'顯示 "Powered By"',"Domain Names":"Domain",signedInDisp:Dn,signedInDispDisabled:Pn,RadiusSecret:Tn,RadiusSecretDescription:kn,RadiusCalledStationId:An,RadiusCallingStationId:bn,"Certificate Expiry Notification":"証書過期通知","API Username":"API 使用者名稱","API Key":"API Key","Show update if available":"有更新時顯示","Also check beta release":"檢查 Beta 版本","Using a Reverse Proxy?":"正在使用反向代理 (Reverse Proxy)？","Check how to config it for WebSocket":"查看如何加入 WebSocket 設定","Steam Game Server":"Steam 遊戲 Server","Most likely causes:":"最可能原因：","The resource is no longer available.":"資源已不能存取。","There might be a typing error in the address.":"網址可能輸入錯誤。","What you can try:":"您可以嘗試：","Retype the address.":"重新輸入網址。","Go back to the previous page.":"返回上一頁。","Coming Soon":"即將推出","Connection String":"Connection String",Query:Mn,settingsCertificateExpiry:vn,certificationExpiryDescription:Cn,"Setup Docker Host":"設定 Docker 主機","Connection Type":"連線方式",deleteDockerHostMsg:In,socket:fn,tcp:wn,"Docker Container":"Docker Container","Container Name / ID":"Container 名稱 / ID","Docker Host":"Docker 主機","Docker Hosts":"Docker 主機",Domain:Rn,Workstation:Nn,ZohoCliq:En,disableCloudflaredNoAuthMsg:xn,wayToGetLineNotifyToken:Ln,Examples:Un,"Home Assistant URL":"Home Assistant 網址","Long-Lived Access Token":"長期有效 Access Token","Notification Service":"通知服務","default: notify all devices":"預設：通知所有服務","Automations can optionally be triggered in Home Assistant:":"可以選擇在 Home Assistant 中觸發自動程序：","Trigger type:":"觸發類型：",backupRecommend:Hn,squadcast:Kn,or:Fn,recurringInterval:Gn,Recurring:On,strategyManual:Bn,warningTimezone:Wn,weekdayShortMon:Vn,weekdayShortTue:zn,weekdayShortWed:jn,weekdayShortThu:qn,weekdayShortFri:Jn,weekdayShortSat:Qn,weekdayShortSun:Xn,dayOfWeek:Zn,dayOfMonth:Yn,lastDay:_n,lastDay1:$n,"maintenanceStatus-ended":"已結束","maintenanceStatus-unknown":"未知","Display Timezone":"顯示時區","Schedule Maintenance":"排程維護","Date and Time":"日期與時間","DateTime Range":"日期與時間範圍",plugin:ea,install:oa,installing:ta,uninstalling:sa,confirmUninstallPlugin:na,dataRetentionTimeError:aa,infiniteRetention:ra,"Effective Date Range":"有效日期範圍 (可選)","Hello @everyone is...":"Hello {'@'}everyone is…","Packet Size":"Packet 大小","Event type:":"事件類型：","Event data:":"事件資料：","Then choose an action, for example switch the scene to where an RGB light is red.":"然後選擇操作，例如切換至 RGB 燈為紅色的場景。","Frontend Version":"前端版本","Frontend Version do not match backend version!":"前端版本與後端版本不符！",lastDay2:ia,lastDay3:ca,lastDay4:la,"No Maintenance":"無維護",pauseMaintenanceMsg:da,"maintenanceStatus-under-maintenance":"維護中","maintenanceStatus-inactive":"已停用","maintenanceStatus-scheduled":"已排程","Server Timezone":"伺服器時區",statusPageMaintenanceEndDate:pa,IconUrl:ua,dnsCacheDescription:ma,"Single Maintenance Window":"單一維護時段","Maintenance Time Window of a Day":"每日維護時段",Proxy:"Proxy",backupOutdatedWarning:ga,Optional:ha,markdownSupported:ya,"Custom Monitor Type":"自訂監測器","Google Analytics ID":"Google Analytics ID","Learn More":"了解更多","Server Address":"Server 地址","Edit Tag":"編輯標籤",confirmDeleteTagMsg:Sa,"pushoversounds pushover":"Pushover (預設)","pushoversounds tugboat":"Tug Boat",pushyToken:Da,"Proto Content":"Proto 內容",onebotHttpAddress:Pa,HomeAssistant:Ta,"Leave blank to use a shared sender number.":"留空以使用平台共享的發送人號碼。","auto acknowledged":"自動標記已讀",wayToGetPagerDutyKey:ka,Kook:Aa,wayToGetKookBotToken:ba,grpcMethodDescription:Ma,deleteMaintenanceMsg:va,dnsPortDescription:Ca,atLeastOneMonitor:Ia,endpoint:fa,octopushAPIKey:wa,octopushLogin:Ra,promosmsLogin:Na,promosmsPassword:Ea,"pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:xa,"Guild ID":"Guild ID",Strategy:La,"Free Mobile User Identifier":"Free Mobile User Identifier","Free Mobile API Key":"Free Mobile API Key","Enable TLS":"使用 TLS","Proto Service Name":"Proto 服務名稱","Proto Method":"Proto 方式",onebotGroupMessage:Ua,onebotMessageType:Ha,"ntfy Topic":"ntfy Topic","Legacy Octopush-DM":"舊版 Octopush-DM","Octopush API Version":"Octopush API 版本","From Name/Number":"發送人名稱/號碼","Recipient Number":"收件人號碼",smseaglePriority:Ka,smseagleEncoding:Fa,smseagleUrl:Ga,smseagleToken:Oa,smseagleRecipient:Ba,smseagleRecipientType:Wa,smseagleContact:Va,smseagleGroup:za,smseagleTo:ja,smseagle:qa,"auto resolve":"自動解決","do nothing":"不進行任何操作","Auto resolve or acknowledged":"自動解決或標記已讀","Integration URL":"Integration URL","Integration Key":"Integration Key",wayToGetClickSendSMSToken:Ja,"PushDeer Key":"PushDeer Key",onebotSafetyTips:Qa,onebotUserOrGroupId:Xa,onebotPrivateMessage:Za,notificationRegional:Ya,RadiusCalledStationIdDescription:_a,telegramSendSilently:$a,telegramMessageThreadID:er,RadiusCallingStationIdDescription:or,"Body Encoding":"Body Encoding","API Keys":"API Keys",deleteAPIKeyMsg:tr,disableAPIKeyMsg:sr,"apiKey-inactive":"已停用","apiKey-active":"有效","No API Keys":"沒有 API Keys","Add API Key":"新增 API Key","Expiry date":"失效時間","Don't expire":"不會失效","apiKey-expired":"已失效",Expires:nr,"Key Added":"API Key 已產生","Add Another":"加另一個",Continue:ar,Generate:rr,apiKeyAddedMsg:ir,Expiry:cr,telegramSendSilentlyDescription:lr,"Clone Monitor":"複製監察器",Clone:dr,cloneOf:pr,"Proxy server has authentication":"Proxy 伺服器啟用了驗證功能","Proxy Server":"Proxy 伺服器","Proxy Protocol":"Proxy 通訊協定","Setup Proxy":"設定 Proxy",Topic:ur,Retry:mr,High:gr,Huawei:hr,"For safety, must use secret key":"為安全起見，必須使用 Secret Key",SecretKey:yr,WebHookUrl:Sr,"Bark Sound":"Bark 鈴聲","Bark Group":"Bark 群組","Bark Endpoint":"Bark Endpoint",Platform:Dr,"Device Token":"裝置 Token",telegramProtectContent:Pr,telegramProtectContentDescription:Tr,"Add New Tag":"加新標籤",Economy:kr,Lowcost:Ar,high:br,statusPageRefreshIn:Mr,SendKey:vr,"SMSManager API Docs":"SMSManager API 文件 ",startDateTime:Cr,pagertreeLow:Ir,endDateTime:fr,cronExpression:wr,cronSchedule:Rr,invalidCronExpression:Nr,sameAsServerTimezone:Er,"WeCom Bot Key":"WeCom 機器人 Key",pagertreeMedium:xr,pagertreeHigh:Lr,"Cannot connect to the socket server":"無法連線到 Socket 伺服器","Reconnecting...":"重新連線...",chromeExecutable:Ur,chromeExecutableAutoDetect:Hr,chromeExecutableDescription:Kr,"Edit Maintenance":"編輯維護","Invert Keyword":"以上關鍵字不能出現",Home:Fr,"Expected Value":"預期值","Json Query":"JSON 查询"};export{hn as About,He as Active,l as Add,H as Advanced,n as Appearance,gn as Authentication,j as Auto,$s as Backup,Ze as Blue,bt as Body,It as BodyInvalidFormat,J as Bottom,_t as Cancel,dr as Clone,ee as Confirm,Ft as Content,ar as Continue,ye as Create,Jt as Created,b as Current,en as Custom,qs as Customize,z as Dark,t as Dashboard,D as DateTime,Ht as Default,A as Delete,Xt as Description,Zo as Device,Es as Disable,Yt as Discard,Rn as Domain,xt as Done,p as Down,kr as Economy,k as Edit,re as Email,Ns as Enable,Te as Events,Un as Examples,nr as Expires,cr as Expiry,be as Export,Os as Game,r as General,rr as Generate,Xo as GoogleChat,qe as Gray,Xe as Green,Mt as Headers,Ct as HeadersInvalidFormat,ke as Heartbeats,xs as Help,gr as High,Fr as Home,Ta as HomeAssistant,E as Hostname,hr as Huawei,ua as IconUrl,Me as Import,Ke as Inactive,Ye as Indigo,Lt as Info,Xs as Installed,Qs as Invalid,R as Keyword,Aa as Kook,s as Language,$ as Leave,V as Light,c as List,ae as Login,Y as Logout,Ar as Lowcost,ws as Maintenance,P as Message,At as Method,Bs as Monitor,y as Name,_s as Next,te as No,Q as None,q as Normal,W as Notifications,ha as Optional,Ve as Options,Qe as Orange,We as Overwrite,ne as Password,wt as PasswordsDoNotMatch,g as Pause,u as Pending,w as Ping,$e as Pink,Dr as Platform,x as Port,qt as Post,Wo as Priority,As as Proxies,_e as Purple,Jo as PushByTechulus,vt as PushUrl,Mn as Query,An as RadiusCalledStationId,_a as RadiusCalledStationIdDescription,bn as RadiusCallingStationId,or as RadiusCallingStationIdDescription,Tn as RadiusSecret,kn as RadiusSecretDescription,Fo as Recipients,On as Recurring,Je as Red,Mo as Required,f as Response,T as Resume,L as Retries,mr as Retry,Zs as Running,B as Save,yr as SecretKey,Ut as Security,vr as SendKey,Zt as Services,o as Settings,un as Slug,on as Start,S as Status,Ys as Stop,La as Strategy,Gt as Style,ze as Tags,ie as Test,a as Theme,X as Timezone,Kt as Title,Fe as Token,ur as Topic,N as URL,m as Unknown,Qt as Unpin,d as Up,M as Uptime,tn as User,se as Username,Js as Valid,i as Version,Sr as WebHookUrl,Nn as Workstation,oe as Yes,En as ZohoCliq,zo as aboutChannelName,dt as aboutIconURL,jo as aboutKumaURL,pt as aboutMattermostChannelName,Vo as aboutWebhooks,O as acceptedStatusCodesDescription,Fs as affectedMonitorsDescription,Gs as affectedStatusPages,fe as alertNoFile,we as alertWrongFileType,ys as alerta,Ts as alertaAlertState,Ss as alertaApiEndpoint,Ps as alertaApiKey,Ds as alertaEnvironment,ks as alertaRecoverState,tt as apiCredentials,ir as apiKeyAddedMsg,ho as apprise,rt as appriseInstalled,it as appriseNotInstalled,Ia as atLeastOneMonitor,ve as backupDescription,Ce as backupDescription2,Ie as backupDescription3,ga as backupOutdatedWarning,Hn as backupRecommend,Cn as certificationExpiryDescription,fo as chatIDNotFound,I as checkEverySecond,ot as checkPrice,Ur as chromeExecutable,Hr as chromeExecutableAutoDetect,Kr as chromeExecutableDescription,ft as clearDataOlderThan,Se as clearEventsMsg,De as clearHeartbeatsMsg,Qo as clicksendsms,pr as cloneOf,Sn as cloudflareWebsite,je as color,Pe as confirmClearStatisticsMsg,Sa as confirmDeleteTagMsg,xe as confirmDisableTwoFAMsg,Ee as confirmEnableTwoFAMsg,Be as confirmImportMsg,na as confirmUninstallPlugin,js as critical,wr as cronExpression,Rr as cronSchedule,Wt as danger,jt as dark,aa as dataRetentionTimeError,v as day,Yn as dayOfMonth,Zn as dayOfWeek,Gr as default,Ao as defaultNotificationName,tr as deleteAPIKeyMsg,In as deleteDockerHostMsg,va as deleteMaintenanceMsg,le as deleteMonitorMsg,de as deleteNotificationMsg,vs as deleteProxyMsg,Po as deleteStatusPageMsg,sr as disableAPIKeyMsg,xn as disableCloudflaredNoAuthMsg,no as discord,ma as dnsCacheDescription,Ca as dnsPortDescription,cs as documentation,xo as emailCustomSubject,qo as emojiCheatSheet,Ae as enableDefaultNotificationDescription,Hs as enableGRPCTls,Is as enableProxyDescription,bs as enabled,fr as endDateTime,fa as endpoint,zs as error,Le as filterActive,Ue as filterActivePaused,hs as gorush,io as gotify,Ma as grpcMethodDescription,bo as here,br as high,C as hour,K as ignoreTLSError,Oe as importHandleDescription,ra as infiniteRetention,Ot as info,oa as install,ta as installing,Nr as invalidCronExpression,ce as keywordDescription,e as languageName,_n as lastDay,$n as lastDay1,ia as lastDay2,ca as lastDay3,la as lastDay4,zt as light,So as line,ct as lineDevConsoleTo,nn as loadingError,go as lunasea,ya as markdownSupported,ut as matrix,Tt as matrixDesc1,kt as matrixDesc2,Pt as matrixHomeserverURL,Do as mattermost,G as maxRedirectDescription,To as needPushEvery,Go as needSignalAPI,he as notAvailableShort,_ as notificationDescription,Ya as notificationRegional,uo as octopush,wa as octopushAPIKey,st as octopushLegacyHint,Ra as octopushLogin,nt as octopushPhoneNumber,at as octopushSMSSender,et as octopushTypeLowCost,$o as octopushTypePremium,Ua as onebotGroupMessage,Pa as onebotHttpAddress,Ha as onebotMessageType,Za as onebotPrivateMessage,Qa as onebotSafetyTips,Xa as onebotUserOrGroupId,Fn as or,Lr as pagertreeHigh,Ir as pagertreeLow,xr as pagertreeMedium,Z as passwordNotMatchMsg,h as pauseDashboardHome,da as pauseMaintenanceMsg,me as pauseMonitorMsg,ea as plugin,Vt as primary,mo as promosms,Na as promosmsLogin,Ea as promosmsPassword,St as promosmsPhoneNumber,Dt as promosmsSMSSender,mt as promosmsTypeEco,gt as promosmsTypeFlash,ht as promosmsTypeFull,yt as promosmsTypeSpeed,Cs as proxyDescription,ko as pushOptionalParams,yo as pushbullet,lo as pushover,Yo as pushoverDesc1,_o as pushoverDesc2,po as pushy,xa as pushyAPIKey,Da as pushyToken,Et as recent,Rt as records,Gn as recurringInterval,Ks as recurringIntervalMessage,Us as resendDisabled,Ls as resendEveryXTimes,pe as resolverserverDescription,ge as respTime,U as retriesDescription,Ge as retryCheckEverySecond,ue as rrtypeDescription,Er as sameAsServerTimezone,No as secureOptionNone,Eo as secureOptionTLS,es as serwersms,ts as serwersmsAPIPassword,os as serwersmsAPIUser,ss as serwersmsPhoneNumber,ns as serwersmsSenderName,Ms as setAsDefault,fs as setAsDefaultProxyDescription,vn as settingsCertificateExpiry,$t as shrinkDatabaseDescription,ro as signal,Bo as signalImportant,Dn as signedInDisp,Pn as signedInDispDisabled,co as slack,qa as smseagle,Va as smseagleContact,Fa as smseagleEncoding,za as smseagleGroup,Ka as smseaglePriority,Ba as smseagleRecipient,Wa as smseagleRecipientType,ja as smseagleTo,Oa as smseagleToken,Ga as smseagleUrl,so as smtp,Uo as smtpBCC,Lo as smtpCC,is as smtpDkimDesc,ls as smtpDkimDomain,us as smtpDkimHashAlgo,ds as smtpDkimKeySelector,ps as smtpDkimPrivateKey,rs as smtpDkimSettings,ms as smtpDkimheaderFieldNames,gs as smtpDkimskipFields,fn as socket,Kn as squadcast,as as stackfield,Cr as startDateTime,mn as startOrEndWithOnly,Rs as statusMaintenance,pa as statusPageMaintenanceEndDate,eo as statusPageNothing,Mr as statusPageRefreshIn,Nt as steamApiKeyDescription,Bn as strategyManual,Vs as successMessage,pn as successMessageExplanation,Co as supportTelegramChatID,wn as tcp,ao as teams,oo as telegram,er as telegramMessageThreadID,Pr as telegramProtectContent,Tr as telegramProtectContentDescription,$a as telegramSendSilently,lr as telegramSendSilentlyDescription,Ne as tokenValidSettingsMsg,ln as topic,dn as topicExplanation,sn as trustProxyDescription,Re as twoFAVerifyLabel,an as uninstall,sa as uninstalling,F as upsideDownModeDescription,Bt as warning,Wn as warningTimezone,Oo as wayToCheckSignalURL,Ja as wayToGetClickSendSMSToken,yn as wayToGetCloudflaredURL,Ho as wayToGetDiscordURL,ba as wayToGetKookBotToken,lt as wayToGetLineChannelToken,Ln as wayToGetLineNotifyToken,ka as wayToGetPagerDutyKey,Ko as wayToGetTeamsURL,Io as wayToGetTelegramChatID,vo as wayToGetTelegramToken,rn as wayToGetZohoCliqURL,to as webhook,cn as webhookAdditionalHeadersDesc,Ws as webhookAdditionalHeadersTitle,Ro as webhookFormDataDesc,wo as webhookJsonDesc,Jn as weekdayShortFri,Vn as weekdayShortMon,Qn as weekdayShortSat,Xn as weekdayShortSun,qn as weekdayShortThu,zn as weekdayShortTue,jn as weekdayShortWed};