namespace phasereditor2d.rive {

    export const RIVE_CONTENT_TYPE = "phasereditor2d.rive.ContentType";
    export const ICON_RIVE = "rive";

    export class RivePlugin extends colibri.Plugin {

        private static _instance = new RivePlugin();

        static getInstance() {

            return this._instance;
        }

        constructor() {
            super("phasereditor2d.rive");
        }

        registerExtensions(reg: colibri.ExtensionRegistry): void {

            // icons loader

            reg.addExtension(
                colibri.ui.ide.IconLoaderExtension.withPluginFiles(this, [
                    ICON_RIVE
                ])
            );

            // content type icons
            reg.addExtension(
                colibri.ui.ide.ContentTypeIconExtension.withPluginIcons(this, [
                    {
                        iconName: ICON_RIVE,
                        contentType: RIVE_CONTENT_TYPE
                    }
                ]));

            // pack extensions

            reg.addExtension(new colibri.core.ContentTypeExtension([

                new colibri.core.ContentTypeResolverByExtension("phasereditor2d.rive.RiveContentTypeResolver", [
                    ["riv", RIVE_CONTENT_TYPE]
                ])
            ]));

            reg.addExtension(new pack.RiveAssetPackExtension());
        }
    }

    colibri.Platform.addPlugin(RivePlugin.getInstance());
}