const NotificationProvider = require("./notification-provider");
const axios = require("axios");
const { DOWN, UP } = require("../../src/util");


class Kakao extends NotificationProvider {
    name = "Kakao";
 
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        let okMsg = "Sent Successfully.";

        // 문자
        // const baseUrl = "http://10.100.21.128:17878/sendSms";
        
        // 카카오톡
        const baseUrl = "http://10.100.21.128:17878/sendKakao";
        
        try {

            const smsMsg = `${msg}`;

            const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(smsMsg)}`;

            if (heartbeatJSON == null) {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000, // 5초 제한
                });
                return response.data;
            }

            console.log("heartbeatJSON===========" + JSON.stringify(heartbeatJSON, null, 2));
            let address;

            console.log("monitorJSON===========" + JSON.stringify(monitorJSON, null, 2));

            switch (monitorJSON["type"]) {
                case "ping":
                    address = monitorJSON["hostname"];
                    break;
                case "port":
                case "dns":
                case "gamedig":
                case "steam":
                    address = monitorJSON["hostname"];
                    if (monitorJSON["port"]) {
                        address += ":" + monitorJSON["port"];
                    }
                    break;
                default:
                    address = monitorJSON["url"];
                    break;
            }

            // If heartbeatJSON is not null, we go into the normal alerting loop.
            if (heartbeatJSON["status"] === DOWN) {
                console.log("상태 downdowndowndowndown================");
         
                let title = 'TalkTest';
                let content = 'Talk';
                let msgTitle= "❌ Your service " + monitorJSON["name"] + " went down. ❌";
                let serviceName= monitorJSON["name"];
                let serviceType = monitorJSON["type"] === "push" ? "Service Type" : "Service URL";
                let Address= address;
                let timezone = heartbeatJSON["timezone"];
                let time = heartbeatJSON["localDateTime"];
                let errorMsg= heartbeatJSON["msg"] == null ? "N/A" : heartbeatJSON["msg"];

                // 문자
                //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(okMsg)}`;
                
                // 카카오톡
                //const url = `${baseUrl}?sendNo=${notification.biztalkSenderNo}&callBackNo=${notification.biztalkCallBackNo}&projectId=${notification.biztalkProjectId}&title=${sanitize(title)}&content=${sanitize(content)}&tmplCode=AT_20241211130812&systemKey=${notification.biztalkSystemKey}&paramNum=7&param1=${sanitize(msgTitle)}&param2=${sanitize(serviceName)}&param3=${sanitize(serviceType)}&param4=${sanitize(Address)}&param5=${sanitize(timezone)}&param6=${sanitize(time)}&param7=${sanitize(errorMsg)}`;
                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&tmplCode=${encodeURIComponent(notification.biztalkTemplateCode)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&paramNum=7&param1=${encodeURIComponent(msgTitle)}&param2=${encodeURIComponent(serviceName)}&param3=${encodeURIComponent(serviceType)}&param4=${encodeURIComponent(Address)}&param5=${encodeURIComponent(timezone)}&param6=${encodeURIComponent(time)}&param7=${encodeURIComponent(errorMsg)}`;
                
                console.log("down======" + url);

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 10000, // 5초 제한
                });
                return response.data;

            } else if (heartbeatJSON["status"] === UP) {
                console.log("상태 upupupupupupp================");

                let title = 'TalkTest';
                let content = 'Talk';
                let msgTitle= "✅ Your service " + monitorJSON["name"] + " is up! ✅";
                let serviceName= monitorJSON["name"];
                let serviceType = monitorJSON["type"] === "push" ? "Service Type" : "Service URL";
                let Address= address;
                let timezone = heartbeatJSON["timezone"];
                let time = heartbeatJSON["localDateTime"];
                let passMsg = heartbeatJSON["ping"] == null ? "N/A" : heartbeatJSON["ping"] + " ms";

                // 문자 
                //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(okMsg)}`;
                //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&title=TalkTest&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&tmplCode=~~~~&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(JSON.stringify(kakaodowndata))}`;
                
                // 카카오톡
                //const sanitize = (str) => str.replace(/[^\x20-\x7E]/g, ''); // ASCII 범위만 허용
      
                // 카카오톡
                //const url = `${baseUrl}?sendNo=${notification.biztalkSenderNo}&callBackNo=${notification.biztalkCallBackNo}&projectId=${notification.biztalkProjectId}&title=${sanitize(title)}&content=${sanitize(content)}&tmplCode=AT_20241211130812&systemKey=${notification.biztalkSystemKey}&paramNum=7&param1=${sanitize(msgTitle)}&param2=${sanitize(serviceName)}&param3=${sanitize(serviceType)}&param4=${sanitize(Address)}&param5=${sanitize(timezone)}&param6=${sanitize(time)}&param7=${sanitize(errorMsg)}`;

                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&tmplCode=${encodeURIComponent(notification.biztalkTemplateCode)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&paramNum=7&param1=${encodeURIComponent(msgTitle)}&param2=${encodeURIComponent(serviceName)}&param3=${encodeURIComponent(serviceType)}&param4=${encodeURIComponent(Address)}&param5=${encodeURIComponent(timezone)}&param6=${encodeURIComponent(time)}&param7=${encodeURIComponent(passMsg)}`;

                console.log("up======" + url);

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 10000, // 5초 제한
                });
                return response.data;
            }
        } catch (error) {
            console.error("[Kakao Notification Error]:", error.message || error.response?.data);
            throw new Error("Failed to send Kakao notification. Check the logs for more details.");
        }
    }
}

module.exports = Kakao;
