sap.ui.define([
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	//hasta aqi
	"sap/m/UploadCollectionParameter",
	"sap/m/UploadCollection"
], function (ODataModel, Controller, MessageToast) {
	"use strict";
	return Controller.extend("SAPEspania.SAPEspania.controller.Main", {
		onInit: function () {},
		
		buscar: function () {
			// funcion asociada al boton de busqeda
			var oView = this.getView();
			//metemos en una variable la referencia a la vista
			var valor = oView.byId("input00").getValue();
			this.global = valor;
			//variable global
			//capturamos el valor de la barra de busqeda en una variable
			var sBindingPath = "/ClienteSet('" + valor + "')";
			//hacemos el bindeo con el valor obtenido de la barra de busqueda
			this.getView().bindElement({
				path: sBindingPath,
				events: {
					change: function (onChange) {
						// Get source that trigger the event
						var source = onChange.getSource();
						// Get Path used for binding
						var path = source.sPath;
						// Create JSON Model
						var json = new sap.ui.model.json.JSONModel();
						// Get data from current binding
						var data = oView.getModel().getProperty(path);
						// Check Binding retrieve data
						if (data == null) {
							oView.byId("btnDescargar").setEnabled(false);
							oView.byId("seleccionaFichero").setEnabled(false);
							oView.byId("btnSubir").setEnabled(false);
						} else {
							// Set binding data to JSON Model
							json.setData(data);
							// Get DEAR1 property
							var firmado = json.getProperty("/dear1");
							// Set enable depending on DEAR1 value
							oView.byId("btnDescargar").setEnabled(!firmado);
							oView.byId("seleccionaFichero").setEnabled(!firmado);
							oView.byId("btnSubir").setEnabled(!firmado);
						}
					},
					dataRequested: function (oEvent) {
						// oView.setBusy(true);
					},
					dataReceived: function (oEventReceived) {
						/*var parameters = oEventReceived.getParameters();
																								var gConfigModel = new sap.ui.model.json.JSONModel();
																								gConfigModel.setData(parameters);
																								var firmado = gConfigModel.getProperty("/data/dear1");
																								oView.byId("button1").setEnabled(!firmado);*/ // oView.setBusy(false);
					}
				}
			});
		},
		descargar: function (oEvent) {
			// funcion asociada al boton de descargar el fichero
			var valor = this.getView().byId("input00").getValue();
			var oModel = this.getView().getModel();
			//-->Accedemos al modelo 
			var myFile = oModel.getProperty("/ClienteSet('" + valor + "')/file");
			// ---> obtener dato del modelo
			//controla si viene el modelo sin fichero que no de excepcion
			if (myFile == "") {
				MessageToast.show("No hay fichero");
			} else {
				var bin = window.atob(myFile);
				//--->convierte a binario
				sap.ui.core.util.File.save(bin, this.global, "PDF", null, null); //--> descarga el pdf 
			}
		},
		onUpload: function (oEvent) {
			var valor = this.getView().byId("seleccionaFichero").getValue();
			if (valor == "") {
				MessageToast.show("no hay fichero seleccionado");
			}
			//Get file
			var oFileUpload = this.getView().byId("seleccionaFichero");
			var domRef = oFileUpload.getFocusDomRef();
			var file = domRef.files[0];
			//Read file
			var reader = new FileReader();
			reader.readAsDataURL(file);
			//Replace content to get only file hexString
			var vContent = reader.result.replace("data:" + file.type + ";base64,", "");
			//Get Model
			var oModel = oEvent.getSource().getModel();
			var payload = {
				//"stcd1": "123456789",
				"stcd1": this.global,
				//hay qe poner el correspondiente?
				"file": vContent
			};
			oModel.create("/DocumentoFirmadoSet", payload, {
				success: function () {
					var exito = "exito";
					MessageToast.show("todo correcto");
				},
				error: function () {
					var error = "error";
					MessageToast.show(error);
				}
			});
		},
	
		rechazarCambios: function (oEvent) {
			
			this.getView().byId("name").setValue("");
			this.getView().byId("surname").setValue("");
			this.getView().byId("dni").setValue("");
			this.getView().byId("registrado").setSelected(false);
			this.getView().byId("seleccionaFichero").setValue("");
		}
	});
});