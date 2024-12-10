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

            if (heartbeatJSON !== null) {
                const kakaotestdata = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000, // 5초 제한
                });
                return kakaotestdata.data;
            }

            let address;

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
                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(kakaodowndata)}`;
                console.log("kakaodowndata=========="+url);
                kakaodowndata = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000, // 5초 제한
                });
                return kakaodowndata.data;

            } else if (heartbeatJSON["status"] === UP) {
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
                const url = `${baseUrl}?sendNo=${encodeURIComponent(notification.biztalkSenderNo)}&callBackNo=${encodeURIComponent(notification.biztalkCallBackNo)}&projectId=${encodeURIComponent(notification.biztalkProjectId)}&systemKey=${encodeURIComponent(notification.biztalkSystemKey)}&content=${encodeURIComponent(kakaoupdata)}`;
                console.log("kakaoupdata=========="+url);
                kakaoupdata = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000, // 5초 제한
                });
                return kakaoupdata.data;
            }
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }
}


