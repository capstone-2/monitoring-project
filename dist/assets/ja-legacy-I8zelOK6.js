System.register([],(function(e,t){"use strict";return{execute:function(){var t=e("languageName","日本語"),o=e("checkEverySecond","{0}秒ごとにチェックします"),a=e("retriesDescription","サービスが完全に停止したと判断し、通知を送信する前に再接続を試みる最大回数"),i=e("ignoreTLSError","HTTPS ウェブサイトの TLS/SSL エラーを無視する"),n=e("upsideDownModeDescription","稼働ステータスを反転して扱います。サービスに接続可能な場合は、停止として扱います。"),r=e("maxRedirectDescription","必要な場合にリダイレクトする最大回数です。リダイレクトを無効にしたい場合は、0に設定してください。"),s=e("acceptedStatusCodesDescription","成功した応答とみなされるステータスコードを選択する。"),c=e("passwordNotMatchMsg","繰り返しのパスワードが一致しません。"),l=e("notificationDescription","監視を機能させるには、監視に通知を割り当ててください。"),d=e("keywordDescription","プレーンHTMLまたはJSON応答でキーワードを検索し、大文字と小文字を区別します。"),p=e("pauseDashboardHome","一時停止"),u=e("deleteMonitorMsg","この監視を削除してよろしいですか？"),g=e("deleteNotificationMsg","全ての監視のこの通知を削除してよろしいですか？"),m=e("resolverserverDescription","Cloudflareがデフォルトのサーバーですが、いつでもリゾルバサーバーを変更できます。"),y=e("rrtypeDescription","監視するRRタイプを選択します"),D=e("pauseMonitorMsg","一時停止しますか？"),S=e("Settings","設定"),h=e("Dashboard","ダッシュボード"),T=e("Language","言語"),P=e("Appearance","外観"),k=e("Theme","テーマ"),f=e("General","全般"),A=e("Version","バージョン"),C=e("List","一覧"),M=e("Add","追加"),w=e("Up","正常"),b=e("Down","停止"),I=e("Pending","中止"),R=e("Unknown","不明"),v=e("Pause","一時停止"),N=e("Name","名前"),L=e("Status","ステータス"),U=e("DateTime","日時"),E=e("Message","メッセージ"),x=e("Resume","再開"),H=e("Edit","編集"),O=e("Delete","削除"),G=e("Current","現在"),F=e("Uptime","稼働時間"),K=e("day","日 | 日間"),B=e("hour","時間"),W=e("Response","レスポンス"),V=e("Ping","Ping"),z=e("Keyword","キーワード"),J=e("URL","URL"),Q=e("Hostname","ホスト名"),X=e("Port","ポート"),j=e("Retries","再試行回数"),q=e("Advanced","詳細設定"),Y=e("Save","保存"),Z=e("Notifications","通知"),_=e("Light","ライト"),$=e("Dark","ダーク"),ee=e("Auto","自動"),te=e("Normal","通常"),oe=e("Bottom","下部"),ae=e("None","なし"),ie=e("Timezone","タイムゾーン"),ne=e("Logout","ログアウト"),re=e("Leave","作業を中止する"),se=e("Confirm","確認"),ce=e("Yes","はい"),le=e("No","いいえ"),de=e("Username","ユーザー名"),pe=e("Password","パスワード"),ue=e("Login","ログイン"),ge=e("Email","Eメール"),me=e("Test","テスト"),ye=e("respTime","応答時間 (ms)"),De=e("notAvailableShort","N/A"),Se=e("Create","作成"),he=e("clearEventsMsg","この監視のすべての記録を削除してもよろしいですか？"),Te=e("clearHeartbeatsMsg","この監視のすべての異常記録を削除してもよろしいですか？"),Pe=e("confirmClearStatisticsMsg","すべての統計を削除してもよろしいですか？"),ke=e("Events","統計"),fe=e("Heartbeats","異常記録"),Ae=e("enableDefaultNotificationDescription","監視を作成するごとに、この通知方法はデフォルトで有効になります。監視ごとに通知を無効にすることもできます。"),Ce=e("Export","エクスポート"),Me=e("Import","インポート"),we=e("backupDescription","すべての監視と通知設定をJSONファイルとしてバックアップすることができます。"),be=e("backupDescription2","※ 履歴と統計のデータはバックアップされません。"),Ie=e("backupDescription3","通知に使用するトークンなどの機密データも含まれています。注意して扱ってください。"),Re=e("alertNoFile","インポートするファイルを選択してください。"),ve=e("alertWrongFileType","JSONファイルを選択してください。"),Ne=e("twoFAVerifyLabel","トークンを入力して、２段階認証を有効にします。"),Le=e("tokenValidSettingsMsg","トークンの確認が完了しました！ 「保存」をしてください。"),Ue=e("confirmEnableTwoFAMsg","２段階認証を「有効」にします。よろしいですか？"),Ee=e("confirmDisableTwoFAMsg","２段階認証を「無効」にします。よろしいですか？"),xe=e("retryCheckEverySecond","{0} 秒ごとにリトライします"),He=e("importHandleDescription","同じ名前のすべての監視または通知方法を上書きしない場合は、「既存のをスキップ」を選択します。 「上書きする」は、既存のすべてのモニターと通知を削除します。"),Oe=e("confirmImportMsg","バックアップをインポートしてもよろしいですか？希望するオプションを選択してください。"),Ge=e("Overwrite","上書きする"),Fe=e("Options","オプション"),Ke=e("Tags","タグ"),Be=e("color","色"),We=e("statusPageNothing","ここには何もありません。グループまたは監視を追加してください。"),Ve=e("Start","始める"),ze=e("Retry","リトライ"),Je=e("Orange","橙"),Qe=e("Game","ゲーム"),Xe=e("Help","ヘルプ"),je=e("Maintenance","メンテナンス"),qe=e("resendDisabled","再送信不可"),Ye=e("resendEveryXTimes","{0}回ごとに再送信"),Ze=e("markdownSupported","マークダウン構文がサポートされています"),_e=e("Monitor","モニター |モニター"),$e=e("needPushEvery","{0} 秒ごとにこの URL を呼び出す必要があります。"),et=e("pushOptionalParams","オプションのパラメーター: {0}"),tt=e("statusMaintenance","メンテナンス"),ot=e("Security","セキュリティ"),at=e("Default","デフォルト"),it=e("Title","タイトル"),nt=e("webhookAdditionalHeadersTitle","追加ヘッダー"),rt=e("Priority","優先順位"),st=e("Token","Token"),ct=e("Gray","灰色"),lt=e("Red","赤色"),dt=e("Green","緑色"),pt=e("Blue","青色"),ut=e("Indigo","藍色"),gt=e("Purple","紫色"),mt=e("Pink","ピンク"),yt=e("Required","必須"),Dt=e("webhookAdditionalHeadersDesc","Webhook で送信される追加ヘッダーを設定します。"),St=e("steamApiKeyDescription","Steam Game Server を監視するためには、Steam Web-API キーが必要です。APIキーの登録はこちらから行えます。 "),ht=e("clearDataOlderThan","監視履歴データを {0} 日間、保持します。"),Tt=e("PasswordsDoNotMatch","パスワードが一致していません。"),Pt=e("topic","トピック"),kt=e("Info","Info"),ft=e("Content","内容"),At=e("Unpin","ピンを外す"),Ct=e("Description","メモ"),Mt=e("Services","サービス"),wt=e("Discard","破棄"),bt=e("Cancel","キャンセル"),It=e("Customize","カスタマイズ"),Rt=e("deleteStatusPageMsg","本当にこのステータスページを削除しますか？"),vt=e("Proxies","プロキシ"),Nt=e("enabled","有効"),Lt=e("setAsDefault","デフォルトに設定する"),Ut=e("deleteProxyMsg","本当にすべてのモニターからこのプロキシを削除しますか？"),Et=e("proxyDescription","プロキシはモニターに割り当てられていないと機能しません。"),xt=e("setAsDefaultProxyDescription","このプロキシは、新しいモニターに対してデフォルトで有効になっています。モニターごとに個別にプロキシを無効にすることができます。"),Ht=e("Stop","停止"),Ot=e("Next","次へ"),Gt=e("Authentication","認証"),Ft=e("Backup","バックアップ"),Kt=e("About","About"),Bt=e("cloudflareWebsite","Cloudflare Website"),Wt=e("Custom","カスタム"),Vt=e("Created","作成日時"),zt=e("webhookJsonDesc","{0}はExpress.jsのような最新のHTTPサーバに適しています"),Jt=e("webhookFormDataDesc","{multipart}はPHPに適しています。このJSONは{decodeFunction}でデコードする必要があります"),Qt=e("appriseInstalled","Appriseはインストール済みです。"),Xt=e("emojiCheatSheet","絵文字一覧: {0}"),jt=e("Inactive","無効"),qt=e("defaultNotificationName","{notification} 通知 ({number})"),Yt=e("Active","有効"),Zt=e("appriseNotInstalled","Apprise はインストールされていません。{0}"),_t=e("Method","方式"),$t=e("Body","ボディ"),eo=e("Headers","ヘッダー"),to=e("PushUrl","Push URL"),oo=e("HeadersInvalidFormat","リクエストヘッダーのJSONが無効です: "),ao=e("BodyInvalidFormat","リクエストボディのJSONが無効です: "),io=e("records","レコード"),no=e("topicExplanation","監視するMQTTトピック"),ro=e("successMessage","成功メッセージ"),so=e("successMessageExplanation","成功したとみなされるMQTTメッセージ"),co=e("recent","直近"),lo=e("Done","完了"),po=e("Style","スタイル"),uo=e("info","情報"),go=e("warning","警告"),mo=e("signedInDisp","{0}としてログイン中"),yo=e("RadiusSecret","Radius シークレット"),Do=e("RadiusSecretDescription","クライアントとサーバー間の共有シークレット"),So=e("RadiusCalledStationId","Called Station Id"),ho=e("RadiusCallingStationId","Calling Station Id"),To=e("trustProxyDescription","ヘッダー「X-Forwarded-*」を信頼します。Uptime Kumaがリバースプロキシの中にあり、正しいクライアントIPを取得する場合は、有効化してください。"),Po=e("Examples","例"),ko=e("telegramMessageThreadID","(オプション) メッセージスレッドID"),fo=e("wayToGetLineNotifyToken","{0}からアクセストークンを入手できます"),Ao=e("critical","致命的エラー"),Co=e("signedInDispDisabled","認証が無効化されています。"),Mo=e("RadiusCalledStationIdDescription","着信側の識別子"),wo=e("telegramProtectContent","転送や保存を制限"),bo=e("Workstation","ワークステーション"),Io=e("wayToGetTelegramToken","{0}からトークンを入手できます。"),Ro=e("telegramMessageThreadIDDescription","オプションとしてフォーラムのスレッド(話題)のIDを指定してメッセージを送信することができます。スーパーグループでのみ利用できます。"),vo=e("telegramProtectContentDescription","有効な場合、Telegram上のボットのメッセージの転送や保存が制限されます。"),No=e("danger","危険"),Lo=e("error","エラー"),Uo=e("primary","プライマリー"),Eo=e("light","ライト"),xo=e("dark","ダーク"),Ho=e("Post","Post"),Oo=e("shrinkDatabaseDescription","SQLiteデーターベースにVACUUMを実行します。データーベースがv1.10.0以降に作成されている場合、AUTO_VACUUMが既に有効なため実行する必要はありません。"),Go=e("enableProxyDescription","このプロキシは有効化されない限り、監視リクエストには影響しません。無効化した場合、一時的にプロキシをすべての監視から無効化することができます。"),Fo=e("Valid","有効"),Ko=e("Invalid","無効"),Bo=e("User","ユーザー"),Wo=e("Installed","インストール済み"),Vo=e("Running","稼働中"),zo=e("Slug","スラッグ"),Jo=e("startOrEndWithOnly","{0}のみ最初と最後の文字として使用可能"),Qo=e("wayToGetCloudflaredURL","({0}からcloudflaredをダウンロード)"),Xo=e("RadiusCallingStationIdDescription","発信側の識別子"),jo=e("Query","クエリ"),qo=e("settingsCertificateExpiry","TLS証明書の有効期限"),Yo=e("certificationExpiryDescription","HTTPS監視のTLS証明書が以下の期限を迎えたときに通知を送信します。"),Zo=e("deleteDockerHostMsg","すべての監視のDocker ホストを削除してもよろしいですか?"),_o=e("socket","ソケット"),$o=e("tcp","TCP / HTTP"),ea=e("Domain","ドメイン"),ta=e("telegramSendSilently","通知せずに送信"),oa=e("telegramSendSilentlyDescription","通知せずにメッセージを送信します。通知音がなりません。"),aa=e("supportTelegramChatID","チャットやグループ、チャンネルのチャットIDに対応"),ia=e("wayToGetTelegramChatID","ボットにメッセージを送信し、以下のURLを開くとチャットIDのchat_idを入手できます。"),na=e("chatIDNotFound","チャットIDが存在しません。最初にメッセージをボットに送信してください"),ra=e("disableCloudflaredNoAuthMsg","認証が無効化されているため、パスワードは必要ありません。"),sa=e("Expiry","期限切れ"),ca=e("deleteAPIKeyMsg","本当にこのAPIキーを削除しますか？"),la=e("Generate","生成"),da=e("pauseMaintenanceMsg","本当に一時停止しますか？"),pa=e("secureOptionNone","None / STARTTLS (25, 587)"),ua=e("smtp","Email (SMTP)"),ga=e("endpoint","エンドポイント"),ma=e("or","または"),ya=e("promosmsPassword","APIパスワード"),Da=e("Clone","複製"),Sa=e("cloneOf","{0} の複製"),ha=e("affectedStatusPages","メンテナンスメッセージを選択したステータスページに表示する"),Ta=e("GoogleChat","Google Chat (Google Workspace 限定)"),Pa=e("pushyToken","デバイストークン"),ka=e("smtpDkimDomain","ドメイン名"),fa=e("smtpDkimSettings","DKIM設定"),Aa=e("strategyManual","手動で有効/無効を切り替える"),Ca=e("warningTimezone","サーバーのタイムゾーンを使用します"),Ma=e("weekdayShortMon","月"),wa=e("weekdayShortTue","火"),ba=e("weekdayShortWed","水"),Ia=e("weekdayShortFri","金"),Ra=e("weekdayShortSat","土"),va=e("weekdayShortSun","日"),Na=e("dayOfWeek","曜日ごと"),La=e("dayOfMonth","日にちごと"),Ua=e("IconUrl","アイコンURL"),Ea=e("Enable","有効"),xa=e("Disable","無効"),Ha=e("loadingError","データを取得できません。後でもう一度試してください。"),Oa=e("uninstall","アンインストール"),Ga=e("installing","インストール中"),Fa=e("smtpCC","CC"),Ka=e("secureOptionTLS","TLS (465)"),Ba=e("smtpBCC","BCC"),Wa=e("wayToCheckSignalURL","こちらから設定方法を確認できます:"),Va=e("enableGRPCTls","TLS接続でgRPCリクエストを送信できるようにする"),za=e("dnsPortDescription","DNSサーバーポートのデフォルトは53です。ポートはいつでも変更可能です。"),Ja=e("Device","デバイス"),Qa=e("here","こちら"),Xa=e("weekdayShortThu","木"),ja=e("plugin","プラグイン"),qa=e("dnsCacheDescription","一部のIPv6環境では動作しない場合があります。問題が発生した場合は無効にしてください。"),Ya=e("uninstalling","アンインストール中"),Za=e("confirmUninstallPlugin","本当にこのプラグインをアンインストールしていいですか？"),_a=e("wayToGetDiscordURL","サーバー設定 -> 連携サービス -> ウェブフックを確認 -> 新しいウェブフック から新たに取得できます"),$a=e("wayToGetTeamsURL","ウェブフックの作成方法は {0}"),ei=e("wayToGetZohoCliqURL","ウェブフックの作成方法は {0}"),ti=e("confirmDeleteTagMsg","このタグを本当に削除してよろしいですか？このタグが付けられたモニターは削除されません。"),oi=e("deleteMaintenanceMsg","このメンテナンスを本当に削除していいですか？"),ai=e("promosmsLogin","APIログイン名"),ii=e("pushyAPIKey","シークレットAPI Key"),ni=e("Expires","有効期限"),ri=e("disableAPIKeyMsg","本当にこのAPIキーを無効化しますか？"),si=e("install","インストール"),ci=e("affectedMonitorsDescription","メンテナンスによって影響を受けるモニターを選択してください"),li=e("backupOutdatedWarning","非推奨: 多くの機能に変更があり、バックアップ機能の開発が一部滞っているため、完全なバックアップの作成や復元ができません。"),di=e("backupRecommend","代わりにボリュームまたはデータフォルダ（./data/）を直接バックアップしてください。"),pi=e("recurringInterval","インターバル"),ui=e("Recurring","繰り返し"),gi=e("lineDevConsoleTo","Line Developers Console - {0}"),mi=e("Huawei","Huawei"),yi=e("recurringIntervalMessage","毎日1回実行する｜{0} 日に1回実行する"),Di=e("statusPageMaintenanceEndDate","終了日"),Si=e("infiniteRetention","保持期間を無制限にしたい場合は、0に設定してください。"),hi=e("startDateTime","開始日時"),Ti=e("SecretKey","シークレットキー"),Pi=e("Home","ホーム"),ki=e("webhookBodyCustomOption","カスタムbody"),fi=e("octopushPhoneNumber","電話番号 (初期フォーマット, 例: +33612345678) "),Ai=e("Topic","トピック"),Ci=e("pushoverMessageTtl","メッセージTTL(秒)"),Mi=e("apiCredentials","API認証情報"),wi=e("Economy","エコノミー"),bi=e("statusPageRefreshIn","{0}後に再読み込みします"),Ii=e("filterActivePaused","停止中"),Ri=e("filterActive","有効"),vi=e("AccessKeyId","アクセスキーID"),Ni=e("SecretAccessKey","アクセスキーシークレット"),Li=e("PhoneNumbers","携帯電話番号"),Ui=e("chromeExecutableAutoDetect","自動検出"),Ei=e("endDateTime","終了日時"),xi=e("cronSchedule","スケジュール "),Hi=e("WebHookUrl","ウェブフックUrl"),Oi=e("atLeastOneMonitor","最低一つは影響を受けるモニターを選択してください"),Gi=e("octopushSMSSender","SMS送信者名：3～11文字の英数字とスペース（a～zA～z0～9）"),Fi=e("Lowcost","低コスト");e("default",{languageName:t,checkEverySecond:o,retriesDescription:a,ignoreTLSError:i,upsideDownModeDescription:n,maxRedirectDescription:r,acceptedStatusCodesDescription:s,passwordNotMatchMsg:c,notificationDescription:l,keywordDescription:d,pauseDashboardHome:p,deleteMonitorMsg:u,deleteNotificationMsg:g,resolverserverDescription:m,rrtypeDescription:y,pauseMonitorMsg:D,Settings:S,Dashboard:h,"New Update":"新しいアップデート",Language:T,Appearance:P,Theme:k,General:f,Version:A,"Check Update On GitHub":"GitHubでアップデートを確認する",List:C,Add:M,"Add New Monitor":"監視の追加","Quick Stats":"統計",Up:w,Down:b,Pending:I,Unknown:R,Pause:v,Name:N,Status:L,DateTime:U,Message:E,"No important events":"重要なイベントなし",Resume:x,Edit:H,Delete:O,Current:G,Uptime:F,"Cert Exp.":"証明書有効期限",day:K,"-day":"-日",hour:B,"-hour":"時間",Response:W,Ping:V,"Monitor Type":"監視タイプ",Keyword:z,"Friendly Name":"分かりやすい名前",URL:J,Hostname:Q,Port:X,"Heartbeat Interval":"監視間隔",Retries:j,Advanced:q,"Upside Down Mode":"反転モード","Max. Redirects":"最大リダイレクト数","Accepted Status Codes":"正常なステータスコード",Save:Y,Notifications:Z,"Not available, please setup.":"利用できません。設定が必要です。","Setup Notification":"通知設定",Light:_,Dark:$,Auto:ee,"Theme - Heartbeat Bar":"テーマ - 監視バー",Normal:te,Bottom:oe,None:ae,Timezone:ie,"Search Engine Visibility":"検索エンジンでの表示","Allow indexing":"インデックス作成を許可する","Discourage search engines from indexing site":"検索エンジンにインデックスさせないようにする","Change Password":"パスワード変更","Current Password":"現在のパスワード","New Password":"新しいパスワード","Repeat New Password":"確認のため新しいパスワードをもう一度","Update Password":"パスワードの更新","Disable Auth":"認証の無効化","Enable Auth":"認証の有効化",Logout:ne,Leave:re,"I understand, please disable":"理解した上で無効化する",Confirm:se,Yes:ce,No:le,Username:de,Password:pe,"Remember me":"パスワードを忘れた場合",Login:ue,"No Monitors, please":"監視がありません","add one":"add one","Notification Type":"通知タイプ",Email:ge,Test:me,"Certificate Info":"証明書情報","Resolver Server":"問い合わせ先DNSサーバ","Resource Record Type":"DNSレコード設定","Last Result":"最終結果","Create your admin account":"Adminアカウントの作成","Repeat Password":"パスワード確認",respTime:ye,notAvailableShort:De,Create:Se,clearEventsMsg:he,clearHeartbeatsMsg:Te,confirmClearStatisticsMsg:Pe,"Clear Data":"データを削除",Events:ke,Heartbeats:fe,"Auto Get":"自動取得",enableDefaultNotificationDescription:Ae,"Default enabled":"デフォルトで有効にする","Also apply to existing monitors":"既存のモニターにも適用する",Export:Ce,Import:Me,backupDescription:we,backupDescription2:be,backupDescription3:Ie,alertNoFile:Re,alertWrongFileType:ve,twoFAVerifyLabel:Ne,tokenValidSettingsMsg:Le,confirmEnableTwoFAMsg:Ue,confirmDisableTwoFAMsg:Ee,"Apply on all existing monitors":"既存のすべてのモニターに適用する","Verify Token":"認証する","Setup 2FA":"２段階認証の設定","Enable 2FA":"２段階認証を有効にする","Disable 2FA":"２段階認証を無効にする","2FA Settings":"２段階認証の設定","Two Factor Authentication":"２段階認証","Clear all statistics":"すべての記録を削除",retryCheckEverySecond:xe,importHandleDescription:He,confirmImportMsg:Oe,"Heartbeat Retry Interval":"異常検知後の再試行間隔","Import Backup":"バックアップのインポート","Export Backup":"バックアップのエクスポート","Skip existing":"既存のをスキップする",Overwrite:Ge,Options:Fe,"Keep both":"どちらも保持する",Tags:Ke,"Add New below or Select...":"新規追加または選択…","Tag with this name already exist.":"この名前のタグはすでに存在しています。","Tag with this value already exist.":"この値のタグはすでに存在しています。",color:Be,"value (optional)":"値 (optional)","Search...":"検索…","Avg. Ping":"平均Ping時間","Avg. Response":"平均応答時間","Entry Page":"エントリーページ",statusPageNothing:We,"No Services":"サービス無し","All Systems Operational":"すべてのサービスが稼働中","Partially Degraded Service":"部分的にサービスが停止中","Degraded Service":"サービスが停止中","Add Group":"グループの追加","Add a monitor":"監視の追加","Edit Status Page":"ステータスページ編集","Go to Dashboard":"ダッシュボード","Status Page":"ステータスページ","Status Pages":"ステータスページ","Shrink Database":"データベースの縮小",Start:Ve,Retry:ze,"Please read":"次のリンクを参考にしてください",Orange:Je,"Gateway Type":"ゲートウェイの種類",Game:Qe,Help:Xe,Maintenance:je,resendDisabled:qe,"Schedule maintenance":"メンテナンスのスケジュール","Affected Monitors":"影響を受けるモニター","Pick Affected Monitors...":"影響を受けるモニターを選択…","Start of maintenance":"メンテナンス開始","General Monitor Type":"汎用モニタータイプ",resendEveryXTimes:Ye,markdownSupported:Ze,"All Status Pages":"すべてのステータス ページ",Monitor:_e,"Resend Notification if Down X times consequently":"ダウンX回連続で通知再送","Push URL":"プッシュ URL",needPushEvery:$e,pushOptionalParams:et,"disableauth.message1":"<strong>認証を無効</strong>にしてもよろしいですか?","disableauth.message2":"これは、Cloudflare Access、Authelia、またはその他の認証メカニズムなど、Uptime Kuma の前に<strong>サードパーティ認証を実装するシナリオ向けに設計されています</strong>。","Please use this option carefully!":"このオプションは慎重に使用してください!","Primary Base URL":"プライマリ ベース URL",statusMaintenance:tt,"Passive Monitor Type":"パッシブモニタータイプ","Specific Monitor Type":"特定のモニターの種類",Security:ot,"Steam API Key":"Steam API Key",Default:at,Title:it,"No status pages":"ステータスページがありません",Proxy:"プロキシ","Date Created":"作成日","Content Type":"コンテンツタイプ",webhookAdditionalHeadersTitle:nt,"Server URL":"Server URL",Priority:rt,"Read more":"続きを読む","Show Tags":"タグを表示","Switch to Dark Theme":"ダークテーマに切り替える",Token:st,"Show URI":"URIを表示する",Gray:ct,Red:lt,Green:dt,Blue:pt,Indigo:ut,Purple:gt,Pink:mt,Required:yt,"Select status pages...":"ステータスページを選択してください…",webhookAdditionalHeadersDesc:Dt,"Webhook URL":"Webhook URL","Application Token":"Application Token",steamApiKeyDescription:St,"Monitor History":"監視履歴",clearDataOlderThan:ht,PasswordsDoNotMatch:Tt,"Current User":"現在のユーザー",topic:Pt,Info:kt,"Create Incident":"インシデントを作成",Content:ft,"Please input title and content":"タイトルと内容を入力してください","Last Updated":"最終アップデート日時",Unpin:At,"Switch to Light Theme":"ライトテーマに切り替える","Hide Tags":"タグを隠す",Description:Ct,"Untitled Group":"名前の無いグループ",Services:Mt,Discard:wt,Cancel:bt,"Powered by":"Powered by",Customize:It,"Custom Footer":"カスタムフッター","Custom CSS":"カスタム CSS",deleteStatusPageMsg:Rt,Proxies:vt,default:"デフォルト",enabled:Nt,setAsDefault:Lt,deleteProxyMsg:Ut,proxyDescription:Et,setAsDefaultProxyDescription:xt,"Remove Token":"Tokenを削除",Stop:Ht,"Add New Status Page":"新しいステータスページを追加",Next:Ot,"No Proxy":"プロキシなし",Authentication:Gt,"HTTP Basic Auth":"HTTPベーシック認証","New Status Page":"新しいステータスページ","Page Not Found":"ページが見つかりません","Reverse Proxy":"リバースプロキシ",Backup:Ft,About:Kt,cloudflareWebsite:Bt,"Don't know how to get the token? Please read the guide:":"トークンの取得方法が分かりませんか？ガイドをお読みください。",Custom:Wt,Created:Vt,"Resend Notification if Down X times consecutively":"X回連続でダウンしたら通知を再送する",webhookJsonDesc:zt,webhookFormDataDesc:Jt,appriseInstalled:Qt,emojiCheatSheet:Xt,Inactive:jt,defaultNotificationName:qt,"Post URL":"Post URL",Active:Yt,"Pick a RR-Type...":"RR-Typeを選択…","Pick Accepted Status Codes...":"正常なステータスコードを選択…",appriseNotInstalled:Zt,Method:_t,Body:$t,Headers:eo,PushUrl:to,HeadersInvalidFormat:oo,BodyInvalidFormat:ao,records:io,"One record":"レコード",topicExplanation:no,successMessage:ro,successMessageExplanation:so,recent:co,Done:lo,"HTTP Options":"HTTPオプション",Style:po,info:uo,warning:go,"Valid To:":"有効期限:","Days Remaining:":"残りの有効日数:","Issuer:":"発行者:","Fingerprint:":"フィンガープリント:","Domain Name Expiry Notification":"ドメイン名有効期限通知","Footer Text":"フッター文章","Show Powered By":"Powered Byを表示","Domain Names":"ドメイン名",signedInDisp:mo,RadiusSecret:yo,RadiusSecretDescription:Do,RadiusCalledStationId:So,RadiusCallingStationId:ho,"Subject:":"サブジェクト:",trustProxyDescription:To,"Home Assistant URL":"ホームアシスタントURL",Examples:Po,telegramMessageThreadID:ko,wayToGetLineNotifyToken:fo,"Packet Size":"パケットサイズ","Bot Token":"ボットトークン","Chat ID":"チャットID",critical:Ao,signedInDispDisabled:Co,RadiusCalledStationIdDescription:Mo,telegramProtectContent:wo,"YOUR BOT TOKEN HERE":"入手したボットトークン","API Key":"APIキー","Show update if available":"アップデートがあれば表示する","Using a Reverse Proxy?":"リバースプロキシを使用中ですか?","Go back to the previous page.":"前のページに戻る","Coming Soon":"近日公開予定",Workstation:bo,wayToGetTelegramToken:Io,telegramMessageThreadIDDescription:Ro,telegramProtectContentDescription:vo,danger:No,error:Lo,primary:Uo,light:Eo,dark:xo,Post:Ho,"No monitors available.":"監視対象がありません。","Add one":"追加","No Monitors":"監視対象なし",shrinkDatabaseDescription:Oo,enableProxyDescription:Go,"Certificate Chain":"証明書チェーン",Valid:Fo,Invalid:Ko,User:Bo,Installed:Wo,"Not installed":"未インストール",Running:Vo,"Not running":"停止中",Slug:zo,"Accept characters:":"使用可能な文字:",startOrEndWithOnly:Jo,"No consecutive dashes":"連続したダッシュ記号は使用不可","The slug is already taken. Please choose another slug.":"指定されたスラグは既に使用されています。別のスラグを使用してください。",wayToGetCloudflaredURL:Qo,"Message:":"メッセージ:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"Cloudflare Tunnelを経由した接続が遮断される可能性があります。停止してもよろしいですか? 確認のため、現在のパスワードを入力してください。","HTTP Headers":"HTTPヘッダー","Trust Proxy":"信頼できるプロキシ","Other Software":"その他のソフトウェア","For example: nginx, Apache and Traefik.":"例: nginxやApache、Traefikなど",RadiusCallingStationIdDescription:Xo,"Certificate Expiry Notification":"証明書有効期限通知","API Username":"APIユーザー名","Also check beta release":"ベータ版も表示する","Check how to config it for WebSocket":"WebSocketの設定方法について","Steam Game Server":"Steamゲームサーバー","Most likely causes:":"最も考えられる原因:","There might be a typing error in the address.":"アドレスの入力ミスの可能性があります。","What you can try:":"対応方法:","Retype the address.":"アドレスを入力し直してください。","The resource is no longer available.":"存在しないページです。","Connection String":"接続文字列",Query:jo,settingsCertificateExpiry:qo,certificationExpiryDescription:Yo,"Setup Docker Host":"Docker ホストを設定","Connection Type":"接続タイプ","Docker Daemon":"Docker デーモン",deleteDockerHostMsg:Zo,socket:_o,tcp:$o,"Docker Container":"Docker コンテナー","Container Name / ID":"コンテナ名 / ID","Docker Host":"Docker ホスト","Docker Hosts":"Docker ホスト",Domain:ea,telegramSendSilently:ta,telegramSendSilentlyDescription:oa,supportTelegramChatID:aa,wayToGetTelegramChatID:ia,chatIDNotFound:na,disableCloudflaredNoAuthMsg:ra,"API Keys":"APIキー管理",Expiry:sa,"Expiry date":"有効期限","No API Keys":"API Keyがありません",deleteAPIKeyMsg:ca,Generate:la,pauseMaintenanceMsg:da,"maintenanceStatus-under-maintenance":"メンテナンス中",secureOptionNone:pa,smtp:ua,"Bot Display Name":"BOTの表示名","Prefix Custom Message":"メッセージの先頭に送信する文章",endpoint:ga,"Proxy Protocol":"Proxy Protocol","Google Analytics ID":"Google アナリティクス ID","Frontend Version do not match backend version!":"フロントエンドとバックエンドのバージョンが一致しません!",or:ma,"Frontend Version":"フロントエンドのバージョン",promosmsPassword:ya,"Notification Sound":"通知音","Clone Monitor":"監視の複製",Clone:Da,cloneOf:Sa,"Hello @everyone is...":"Hello {'@'}everyone is…","Icon URL":"アイコンURL",affectedStatusPages:ha,GoogleChat:Ta,pushyToken:Pa,"SMS Type":"SMSタイプ","Proxy Server":"Proxy Server",smtpDkimDomain:ka,"Uptime Kuma URL":"Uptime Kuma URL","Channel Name":"チャンネル名",smtpDkimSettings:fa,"Server Address":"サーバーアドレス",strategyManual:Aa,warningTimezone:Ca,weekdayShortMon:Ma,weekdayShortTue:wa,weekdayShortWed:ba,weekdayShortFri:Ia,weekdayShortSat:Ra,weekdayShortSun:va,dayOfWeek:Na,dayOfMonth:La,"maintenanceStatus-inactive":"無効","maintenanceStatus-scheduled":"スケジュール済み","maintenanceStatus-ended":"終了済み","maintenanceStatus-unknown":"不明","Server Timezone":"サーバータイムゾーン",IconUrl:Ua,"Enable DNS Cache":"DNSキャッシュを有効にする",Enable:Ea,Disable:xa,"Schedule Maintenance":"スケジュールメンテナンス",loadingError:Ha,uninstall:Oa,installing:Ga,"Ignore TLS Error":"TLSエラーを無視",smtpCC:Fa,secureOptionTLS:Ka,smtpBCC:Ba,"Discord Webhook URL":"Discord ウェブフック URL",wayToCheckSignalURL:Wa,Number:"Number","Line Developers Console":"Line Developers Console","Access Token":"アクセストークン","Channel access token":"チャンネルアクセストークン",enableGRPCTls:Va,"Messaging API":"Messaging API",dnsPortDescription:za,Device:Ja,"Event type:":"イベントタイプ:",here:Qa,weekdayShortThu:Xa,plugin:ja,"No Maintenance":"メンテナンスはありません",dnsCacheDescription:qa,uninstalling:Ya,confirmUninstallPlugin:Za,wayToGetDiscordURL:_a,wayToGetTeamsURL:$a,wayToGetZohoCliqURL:ei,confirmDeleteTagMsg:ti,deleteMaintenanceMsg:oi,promosmsLogin:ai,pushyAPIKey:ii,"Message Title":"メッセージタイトル","Setup Proxy":"プロキシを設定する","Proxy server has authentication":"プロキシサーバーは認証が必要","Edit Tag":"タグを編集","Add API Key":"API Keyを追加",Expires:ni,disableAPIKeyMsg:ri,install:si,affectedMonitorsDescription:ci,"default: notify all devices":"デフォルト：すべてのデバイスに通知する","Trigger type:":"トリガータイプ:","Event data:":"イベントデータ:",backupOutdatedWarning:li,backupRecommend:di,recurringInterval:pi,Recurring:ui,lineDevConsoleTo:gi,"Basic Settings":"基本設定","User ID":"User ID",Huawei:mi,"Device Token":"デバイストークン",recurringIntervalMessage:yi,"Add New Tag":"新しいタグを追加",statusPageMaintenanceEndDate:Di,"Body Encoding":"ボディエンコード","Learn More":"さらに詳しく",infiniteRetention:Si,"Display Timezone":"表示タイムゾーン",startDateTime:hi,"User Key":"ユーザーキー",SecretKey:Ti,Home:Pi,webhookBodyCustomOption:ki,octopushPhoneNumber:fi,Topic:Ai,pushoverMessageTtl:Ci,apiCredentials:Mi,Economy:wi,statusPageRefreshIn:bi,filterActivePaused:Ii,filterActive:Ri,"Example:":"例: {0}","Read more:":"さらに: {0}","Status:":"ステータス: {0}","Enable TLS":"TLS 有効",AccessKeyId:vi,SecretAccessKey:Ni,PhoneNumbers:Li,"Date and Time":"日時",chromeExecutableAutoDetect:Ui,"More info on:":"詳細はこちら: {0}","Cannot connect to the socket server":"ソケットサーバーに接続できません","Reconnecting...":"再接続中...",endDateTime:Ei,cronSchedule:xi,"Edit Maintenance":"メンテナンスの編集",WebHookUrl:Hi,"Notification Service":"通知サービス",atLeastOneMonitor:Oi,"Json Query":"Jsonクエリ",octopushSMSSender:Gi,Lowcost:Fi,'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':"通知サービスの一覧からデバイス名を見つけるには、Home Assistantの「開発者ツール > サービス」から通知で検索してください。","Notify Channel":"通知チャンネル","Icon Emoji":"絵文字アイコン"})}}}));
