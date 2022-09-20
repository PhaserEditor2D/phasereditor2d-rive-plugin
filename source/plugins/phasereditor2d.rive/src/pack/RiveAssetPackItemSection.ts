namespace phasereditor2d.rive.pack {

    export class RiveAssetPackItemSection extends phasereditor2d.pack.ui.editor.properties.SimpleURLSection {

        constructor(page: colibri.ui.controls.properties.PropertyPage) {
            super(page, "phasereditor2d.rive.pack.RiveAssetPackItemSection", "Rive File", "URL", "url", RIVE_CONTENT_TYPE, RIVE_TYPE);
        }
    }
}