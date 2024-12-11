const NotificationProvider = require("./notification-provider");
const axios = require("axios");
const { DOWN, UP } = require("../../src/util");


class Kakao extends NotificationProvider {
    name = "Kakao";
 
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        let okMsg = "Sent Successfully.";

        const baseUrl = "http://10.100.21.128:17878/sendSms";
        //const baseUrl = "http://10.100.21.128:17878/sendSms?/sendKakao?";
        
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
            console.log("=====================33333333333333333");
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
                let kakaodowndata = {
                    username: notification.name,
                    embeds: [{
                        title: "❌ Your service " + monitorJSON["name"] + " went down. ❌",
                        color: 16711680,
                        timestamp: heartbeatJSON["time"],
                        fields: [
                            {
                                name: "Service Name",
                                value: monitorJSON["name"],
                            },
                            {
                                name: monitorJSON["type"] === "push" ? "Service Type" : "Service URL",
                                value: monitorJSON["type"] === "push" ? "Heartbeat" : address,
                            },
                            {
                                name: `Time (${heartbeatJSON["timezone"]})`,
                                value: heartbeatJSON["localDateTime"],
                            },
                            {
                                name: "Error",
                                value: heartbeatJSON["msg"] == null ? "N/A" : heartbeatJSON["msg"],
                            },
                        ],
                    }],
                };
                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(okMsg)}`;
                //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(JSON.stringify(kakaodowndata))}`;
                console.log("url======"+url);
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 10000, // 5초 제한
                });
                return response.data;

            } else if (heartbeatJSON["status"] === UP) {
                console.log("상태 upupupupupupp================");
                let kakaoupdata = {
                    username: notification.name,
                    embeds: [{
                        title: "✅ Your service " + monitorJSON["name"] + " is up! ✅",
                        color: 65280,
                        timestamp: heartbeatJSON["time"],
                        fields: [
                            {
                                name: "Service Name",
                                value: monitorJSON["name"],
                            },
                            {
                                name: monitorJSON["type"] === "push" ? "Service Type" : "Service URL",
                                value: monitorJSON["type"] === "push" ? "Heartbeat" : address,
                            },
                            {
                                name: `Time (${heartbeatJSON["timezone"]})`,
                                value: heartbeatJSON["localDateTime"],
                            },
                            {
                                name: "Ping",
                                value: heartbeatJSON["ping"] == null ? "N/A" : heartbeatJSON["ping"] + " ms",
                            },
                        ],
                    }],
                };
                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(okMsg)}`;
                
                //const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${eencodeURIComponent(JSON.stringify(kakaoupdata))}`;
                console.log("url======"+url);
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
