//= require mxgraph_latest/js/Init.js
//= require mxgraph_latest/mxClient.js
//= require mxgraph_latest/js/Editor.js
//= require mxgraph_latest/js/EditorUi.js
//= require mxgraph_latest/js/Actions.js
//= require mxgraph_latest/js/Dialogs.js
//= require mxgraph_latest/js/Format.js
//= require mxgraph_latest/js/Graph.js
//= require mxgraph_latest/js/Menus.js
//= require mxgraph_latest/js/Shapes.js
//= require mxgraph_latest/js/Sidebar.js
//= require mxgraph_latest/js/Toolbar.js
//= require mxgraph_latest/jscolor/jscolor.js
//= require mxgraph_latest/deflate/pako.min.js
//= require mxgraph_latest/deflate/base64.js
//= require mxgraph_latest/sanitizer/sanitizer.min.js

// Extends EditorUi to update I/O action states based on availability of backend
		//new EditorUi(new Editor());
		/*(function()
		{
			var editorUiInit = EditorUi.prototype.init;
			
			EditorUi.prototype.init = function()
			{
				editorUiInit.apply(this, arguments);
				this.actions.get('export').setEnabled(false);

				// Updates action states which require a backend
				if (!Editor.useLocalStorage)
				{
					mxUtils.post(OPEN_URL, '', mxUtils.bind(this, function(req)
					{
						var enabled = req.getStatus() != 404;
						this.actions.get('open').setEnabled(enabled || Graph.fileSupport);
						this.actions.get('import').setEnabled(enabled || Graph.fileSupport);
						this.actions.get('save').setEnabled(enabled);
						this.actions.get('saveAs').setEnabled(enabled);
						this.actions.get('export').setEnabled(enabled);
					}));
				}
			};
			
			// Adds required resources (disables loading of fallback properties, this can only
			// be used if we know that all keys are defined in the language specific file)
			mxResources.loadDefaultBundle = false;
			var bundle = mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
				mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

			// Fixes possible asynchronous requests
			mxUtils.getAll([bundle, STYLE_PATH + '/default.xml'], function(xhr)
			{
				// Adds bundle text to resources
				mxResources.parse(xhr[0].getText());
				
				// Configures the default graph theme
				var themes = new Object();
				themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement(); 
				
				// Main
				new EditorUi(new Editor(urlParams['chrome'] == '0', themes));
			}, function()
			{
				document.body.innerHTML = '<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
			});
		})();*/