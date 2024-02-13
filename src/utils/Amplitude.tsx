import {add, init} from "@amplitude/analytics-browser";
import { userAgentEnrichmentPlugin } from '@amplitude/plugin-user-agent-enrichment-browser';


export const initAmplitude = () => {
    if (window.location.hostname === 'localhost') {
        return;
    }

    //User Agent Tracking Options
    const uaPlugin = userAgentEnrichmentPlugin({
        osName: true,
        osVersion: true,
        deviceManufacturer: true,
        deviceModel: true,
    });

    init("fa27163cf0da8ea7a4ad324825579462", undefined, {
        serverUrl: "https://amplitude.nav.no/collect",
        serverZone: "EU",
        defaultTracking: {
            pageViews: true,
            sessions: true,
        },
        trackingOptions: {
            platform: true,
        }

    });

    add(uaPlugin)
};


export default initAmplitude;