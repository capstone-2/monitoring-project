const NotificationProvider = require("./notification-provider");
const axios = require("axios");
const { DOWN, UP } = require("../../src/util");


class Kakao extends NotificationProvider {
    name = "Kakao";

    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {

        const baseUrl = "http://10.100.21.128:17878/sendSms?";
        //const baseUrl = "http://10.100.21.128:17878/sendSms?/sendKakao?";

        // let callBackNo = notification.biztalkCallBackNo
        // let sendNo = notification.biztalkSenderNo
        // let projectId = notification.biztalkProjectId
        // let systemKey = notification.biztalkSystemKey
        // let tmplCode = notification.biztalkTemplateCode
        // let title = notification.biztalkTitleName

        let serviceStatus = "";
        
        if (heartbeatJSON !== null) {
            //serviceStatus = (heartbeatJSON["status"] === DOWN) ? "🔴 Down" : "✅ Up";
            serviceStatus = (heartbeatJSON["status"] === DOWN) ? "서버가 다운되었습니다." : "서버가 정상적으로 기동중입니다.";
        }

        const smsMsg = `${serviceStatus}\n${msg}`;

        // URL에 필요한 쿼리 파라미터
        const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(smsMsg)}`;
        
        //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&tmplCode=${encodeURIComponent(notification.biztalkTemplateCode)}&title=${encodeURIComponent(notification.biztalkTitleName)}&content=${encodeURIComponent(smsMsg)}`;
        
        
        console.log("msg===========");
        console.log(msg);
        console.log("notification===========" + JSON.stringify(notification, null, 2));
        console.log("monitorJSON===========" + JSON.stringify(monitorJSON, null, 2));
        console.log("heartbeatJSON===========" + JSON.stringify(heartbeatJSON, null, 2));
        console.log("Generated URL: " + url);

        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 5000, // 5초 제한
            });
            console.log("[Kakao] Message sent successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("[Kakao] Error sending message:", error.message || error.response?.data);
            throw new Error("Failed to send KakaoTalk notification.");
        }
    }
}

module.exports = Kakao;
