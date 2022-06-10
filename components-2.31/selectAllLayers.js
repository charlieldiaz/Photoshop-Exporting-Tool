

          function selectAllLayers() {
                // https://feedback.photoshop.com/photoshop_family/topics/i-cant-record-sellect-all-layers-in-script-listener-and-in-actions
                var c2t = function (s) {
                    return app.charIDToTypeID(s);
                };

                var s2t = function (s) {
                    return app.stringIDToTypeID(s);
                };

                var descriptor = new ActionDescriptor();
                var descriptor2 = new ActionDescriptor();
                var reference = new ActionReference();
                var reference2 = new ActionReference();

                reference2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
                descriptor.putReference(c2t("null"), reference2);
                executeAction(s2t("selectAllLayers"), descriptor, DialogModes.NO);
                reference.putProperty(s2t("layer"), s2t("background"));
                descriptor2.putReference(c2t("null"), reference);
                descriptor2.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t("addToSelection"));
                descriptor2.putBoolean(s2t("makeVisible"), false);
                try {
                    executeAction(s2t("select"), descriptor2, DialogModes.NO);
                } catch (e) { }
            }

            // selectAllLayers()