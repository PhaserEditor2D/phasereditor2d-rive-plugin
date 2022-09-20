namespace phasereditor2d.rive.pack {

    export const RIVE_TYPE = "rive";

    export class RiveAssetPackExtension extends phasereditor2d.pack.ui.AssetPackExtension {

        createAssetPackItem(type: string, data: any, pack: phasereditor2d.pack.core.AssetPack): phasereditor2d.pack.core.AssetPackItem {

            if (type === RIVE_TYPE) {

                return new RiveAssetPackItem(pack, data);
            }

            return undefined;
        }

        getAssetPackItemTypes(): { type: string; displayName: string; }[] {

            return [{ type: RIVE_TYPE, displayName: "Rive File" }];
        }

        createImporters(): phasereditor2d.pack.ui.importers.Importer[] {

            return [
                new phasereditor2d.pack.ui.importers.SingleFileImporter(RIVE_CONTENT_TYPE, RIVE_TYPE)
            ];
        }

        getCellRenderer(element: any, layout: "grid" | "tree"): colibri.ui.controls.viewers.ICellRenderer {

            if (element instanceof RiveAssetPackItem) {

                return phasereditor2d.pack.ui.DefaultAssetPackExtension.getIconRenderer(
                    RivePlugin.getInstance().getIcon(ICON_RIVE), layout);
            }

            return undefined;
        }

        createEditorPropertySections(page: colibri.ui.controls.properties.PropertyPage): colibri.ui.controls.properties.PropertySection<phasereditor2d.pack.core.AssetPackItem>[] {

            return [

                new RiveAssetPackItemSection(page),
            ];
        }
    }
}