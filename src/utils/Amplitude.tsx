import * as amplitude from "@amplitude/analytics-browser";
import { userAgentEnrichmentPlugin } from '@amplitude/plugin-user-agent-enrichment-browser';

export const initAmplitude = () => {

    if (window.location.hostname === 'localhost') {
        return;
    }


    const uaPlugin = userAgentEnrichmentPlugin({
        osName: true,
        osVersion: true,
        deviceManufacturer: true,
        deviceModel: true,
    });

    amplitude.add(uaPlugin);

    amplitude.init("fa27163cf0da8ea7a4ad324825579462", undefined, {
        serverUrl: "https://amplitude.nav.no/collect",
        serverZone: "EU",
        defaultTracking: {
            pageViews: true,
            sessions: true,
        },
    });
};

export default initAmplitude;