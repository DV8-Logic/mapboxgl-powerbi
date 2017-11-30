﻿module powerbi.extensibility.visual {
    import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;

    export interface MapboxData {
        features: any[];
        maxSize: number;
    }

    export class MapboxSettings extends DataViewObjectsParser {
        public api: APISettings = new APISettings();
    }

    export class APISettings {
        public accessToken: string = "";
        public style: string = "";
        public style_url: string = "";
        public layerType: string = "circle";
    }
}
