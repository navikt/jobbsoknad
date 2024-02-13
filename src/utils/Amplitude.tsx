import {add, init} from "@amplitude/analytics-browser";
import { userAgentEnrichmentPlugin } from '@amplitude/plugin-user-agent-enrichment-browser';


export const initAmplitude = () => {
    if (window.location.hostname === 'localhost') {
        return;
    }

    init("fa27163cf0da8ea7a4ad324825579462", undefined, {
        serverUrl: "https://amplitude.nav.no/collect",
        serverZone: "EU",
        defaultTracking: {
            pageViews: true,
            sessions: true,
        },

    });

};


export default initAmplitude;