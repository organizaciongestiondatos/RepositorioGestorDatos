jQuery.sap.registerPreloadedModules({version:"2.0",name:"SAPEspania/SAPEspania/Component-preload",modules:{"SAPEspania/SAPEspania/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","SAPEspania/SAPEspania/model/models"],function(e,i,t){"use strict";return e.extend("SAPEspania.SAPEspania.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(t.createDeviceModel(),"device")}})});',"SAPEspania/SAPEspania/controller/Main.controller.js":'sap.ui.define(["sap/ui/model/odata/v2/ODataModel","sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/m/UploadCollectionParameter","sap/m/UploadCollection"],function(e,t,a){"use strict";return t.extend("SAPEspania.SAPEspania.controller.Main",{onInit:function(){},buscar:function(){var e=this.getView(),t=e.byId("input00").getValue();this.global=t;var a="/ClienteSet(\'"+t+"\')";this.getView().bindElement({path:a,events:{change:function(t){var a=t.getSource(),i=a.sPath,o=new sap.ui.model.json.JSONModel,s=e.getModel().getProperty(i);if(null==s)e.byId("btnDescargar").setEnabled(!1),e.byId("seleccionaFichero").setEnabled(!1),e.byId("btnSubir").setEnabled(!1);else{o.setData(s);var n=o.getProperty("/dear1");e.byId("btnDescargar").setEnabled(!n),e.byId("seleccionaFichero").setEnabled(!n),e.byId("btnSubir").setEnabled(!n)}},dataRequested:function(e){},dataReceived:function(e){}}})},descargar:function(e){var t=this.getView().byId("input00").getValue(),i=this.getView().getModel(),o=i.getProperty("/ClienteSet(\'"+t+"\')/file");if(""==o)a.show("No hay fichero");else{var s=window.atob(o);sap.ui.core.util.File.save(s,this.global,"PDF",null,null)}},onUpload:function(e){""==this.getView().byId("seleccionaFichero").getValue()&&a.show("no hay fichero seleccionado");var t=this.getView().byId("seleccionaFichero"),i=t.getFocusDomRef(),o=i.files[0],s=new FileReader;s.readAsDataURL(o);var n=s.result.replace("data:"+o.type+";base64,",""),l=e.getSource().getModel(),r={stcd1:this.global,file:n};l.create("/DocumentoFirmadoSet",r,{success:function(){a.show("todo correcto")},error:function(){a.show("error")}})},rechazarCambios:function(e){this.getView().byId("name").setValue(""),this.getView().byId("surname").setValue(""),this.getView().byId("dni").setValue(""),this.getView().byId("registrado").setSelected(!1),this.getView().byId("seleccionaFichero").setValue("")}})});',"SAPEspania/SAPEspania/controller/test.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("SAPEspania.SAPEspania.controller.test",{onInit:function(){}})});',"SAPEspania/SAPEspania/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"SAPEspania/SAPEspania/serviceBinding.js":'function initModel(){var a=new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMF_PRUEBA_SRV_01/",!0);sap.ui.getCore().setModel(a)}',"SAPEspania/SAPEspania/test/integration/AllJourneys.js":'sap.ui.define(["sap/ui/test/Opa5","./arrangements/Startup","./NavigationJourney"],function(a,e){"use strict";a.extendConfig({arrangements:new e,viewNamespace:"SAPEspania.SAPEspania.view.",autoWait:!0})});',"SAPEspania/SAPEspania/test/integration/arrangements/Startup.js":'sap.ui.define(["sap/ui/test/Opa5"],function(a){"use strict";return a.extend("SAPEspania.SAPEspania.test.integration.arrangements.Startup",{iStartMyApp:function(a){var t=a||{};t.delay=t.delay||50,this.iStartMyUIComponent({componentConfig:{name:"SAPEspania.SAPEspania",async:!0},hash:t.hash,autoWait:t.autoWait})}})});',"SAPEspania/SAPEspania/test/integration/NavigationJourney.js":'sap.ui.define(["sap/ui/test/opaQunit","./pages/Main"],function(e){"use strict";QUnit.module("Navigation Journey"),e("Should see the initial page of the app",function(e,i,p){e.iStartMyApp(),p.onTheAppPage.iShouldSeeTheApp(),p.iTeardownMyApp()})});',"SAPEspania/SAPEspania/test/integration/opaTests.qunit.js":'QUnit.config.autostart=!1,sap.ui.getCore().attachInit(function(){"use strict";sap.ui.require(["SAPEspania/SAPEspania/test/integration/AllJourneys"],function(){QUnit.start()})});',"SAPEspania/SAPEspania/test/integration/pages/Main.js":'sap.ui.define(["sap/ui/test/Opa5"],function(e){"use strict";e.createPageObjects({onTheAppPage:{actions:{},assertions:{iShouldSeeTheApp:function(){return this.waitFor({id:"app",viewName:"Main",success:function(){e.assert.ok(!0,"The Main view is displayed")},errorMessage:"Did not find the Main view"})}}}})});',"SAPEspania/SAPEspania/test/testsuite.qunit.js":'window.suite=function(){"use strict";var t=new parent.jsUnitTestSuite,n=location.pathname.substring(0,location.pathname.lastIndexOf("/")+1);return t.addTestPage(n+"unit/unitTests.qunit.html"),t.addTestPage(n+"integration/opaTests.qunit.html"),t};',"SAPEspania/SAPEspania/test/unit/AllTests.js":'sap.ui.define(["SAPEspania/SAPEspania/test/unit/controller/Main.controller"],function(){"use strict"});',"SAPEspania/SAPEspania/test/unit/controller/Main.controller.js":'sap.ui.define(["SAPEspania/SAPEspania/controller/Main.controller"],function(n){"use strict";QUnit.module("Main Controller"),QUnit.test("I should test the Main controller",function(t){var o=new n;o.onInit(),t.ok(o)})});',"SAPEspania/SAPEspania/test/unit/unitTests.qunit.js":'QUnit.config.autostart=!1,sap.ui.getCore().attachInit(function(){"use strict";sap.ui.require(["SAPEspania/SAPEspania/test/unit/AllTests"],function(){QUnit.start()})});',"SAPEspania/SAPEspania/view/Main.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:l="sap.ui.layout" xmlns:u="sap.ui.unified" xmlns:f="sap.ui.layout.form"\n\tcontrollerName="SAPEspania.SAPEspania.controller.Main" displayBlock="true"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><VBox class="sapUiSmallMargin"><f:Form id="Search" editable="true" ariaLabelledBy="Title1"><f:toolbar><Toolbar id="TBS"><Title id="Title1_Search" text="{i18n>Search}" level="H5" titleStyle="H5"/><ToolbarSpacer/></Toolbar></f:toolbar><f:layout><f:ResponsiveGridLayout labelSpanXL="4" labelSpanL="3" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="1" columnsM="1" singleContainerFullSize="false"/></f:layout><f:formContainers><f:FormContainer ariaLabelledBy="Title2"><f:formElements><f:FormElement label="{i18n>dni}"><l:HorizontalLayout allowWrapping="true"><Input id="input00" width="28rem"/><Button icon="sap-icon://search" xmlns="sap.m" id="button1" press="buscar"/></l:HorizontalLayout></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form><f:Form id="FormToolbar" editable="true" ariaLabelledBy="Title1"><f:toolbar><Toolbar id="TB1"><Title id="Title1" text="{i18n>datos}" level="H5" titleStyle="H5"/><ToolbarSpacer/></Toolbar></f:toolbar><f:layout><f:ResponsiveGridLayout labelSpanXL="4" labelSpanL="3" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="1" columnsM="1" singleContainerFullSize="false"/></f:layout><f:formContainers><f:FormContainer ariaLabelledBy="Title2"><f:formElements><f:FormElement label="{i18n>nombre}"><f:fields><Input xmlns:cd="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1" id="name" value="{name1}" cd:w5g.dt.context="/ClienteSet"/></f:fields></f:FormElement><f:FormElement label="{i18n>apellidos}"><f:fields><Input xmlns:cd="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1" value="{name2}" id="surname"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcd:w5g.dt.context="/ClienteSet"/></f:fields></f:FormElement><f:FormElement label="{i18n>dni}"><f:fields><Input xmlns:cd="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1" id="dni" value="{stcd1}" cd:w5g.dt.context="/ClienteSet"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tchange="changeChange"/></f:fields></f:FormElement><f:FormElement label="{i18n>registrado}"><CheckBox xmlns:cd="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1" id="registrado" text=""\n\t\t\t\t\t\t\t\t\t\t\t\t\tcd:w5g.dt.context="/ClienteSet" selected="{dear1}"/><Button xmlns="sap.m" xmlns:cd="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1" width="100%" text="{i18n>descargar}"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid="btnDescargar" press="descargar" cd:w5g.dt.context="/ClienteSet"/></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form><f:Form id="Consent" editable="true" ariaLabelledBy="Title1"><f:toolbar><Toolbar id="TBC"><Title id="Title3" text="{i18n>consentimiento}" level="H5" titleStyle="H5"/><ToolbarSpacer/></Toolbar></f:toolbar><f:layout><f:ResponsiveGridLayout labelSpanXL="4" labelSpanL="3" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="1" columnsM="1" singleContainerFullSize="false"/></f:layout><f:formContainers><f:FormContainer ariaLabelledBy="Title3"><f:formElements><f:FormElement label="{i18n>fichero}"><u:FileUploader id="seleccionaFichero" name="myFileUpload" uploadUrl="upload/" tooltip="Upload your file to the local server"\n\t\t\t\t\t\t\t\t\t\t\t\t\tuploadComplete="handleUploadComplete" width="100%"/></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form></VBox></content><footer><OverflowToolbar id="otbFooter"><ToolbarSpacer/><Button type="Accept" text="{i18n>enviar}" press="onUpload" id="btnSubir"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow"/></layoutData></Button><Button type="Reject" text="{i18n>rechazar}" press="rechazarCambios"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow"/></layoutData></Button></OverflowToolbar></footer></Page></pages></App></Shell></mvc:View>',"SAPEspania/SAPEspania/view/test.view.xml":'<mvc:View xmlns:core="sap.ui.core" \nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:l="sap.ui.layout"\n\txmlns:f="sap.ui.layout.form"\nxmlns="sap.m" \nxmlns:html="http://www.w3.org/1999/xhtml"\ncontrollerName="SAPEspania.SAPEspania.controller.test"><App><pages><Page title="Title"><content><VBox class="sapUiSmallMargin"><f:Form id="FormToolbar"\n\t\t\teditable="true"\n\t\t\tariaLabelledBy="Title1"><f:toolbar><Toolbar id="TB1"><Title id="Title1" text="Address" level="H4" titleStyle="H4"/><ToolbarSpacer /><Button icon="sap-icon://settings"/><Button icon="sap-icon://drop-down-list" /></Toolbar></f:toolbar><f:layout><f:ResponsiveGridLayout\n\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\temptySpanL="4"\n\t\t\t\t\temptySpanM="0"\n\t\t\t\t\temptySpanS="0"\n\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\tsingleContainerFullSize="false" /></f:layout><f:formContainers><f:FormContainer ariaLabelledBy="Title2"><f:toolbar><Toolbar><Title id="Title2" text="Office" level="H5" titleStyle="H5"/><ToolbarSpacer /><Button icon="sap-icon://settings"/></Toolbar></f:toolbar><f:formElements><f:FormElement label="Name"><f:fields><Input value="{SupplierName}" id="name"/></f:fields></f:FormElement><f:FormElement label="Street"><f:fields><Input value="{Street}" /><Input value="{HouseNumber}"><layoutData><l:GridData span="XL2 L1 M3 S4" /></layoutData></Input></f:fields></f:FormElement><f:FormElement label="ZIP Code/City"><f:fields><Input value="{ZIPCode}"><layoutData><l:GridData span="XL2 L1 M3 S4" /></layoutData></Input><Input value="{City}" /></f:fields></f:FormElement><f:FormElement label="Country"><f:fields><Select width="100%" id="country" selectedKey="{Country}"><items><core:Item text="Germany" key="Germany"/><core:Item text="USA" key="USA"/><core:Item text="England" key="England"/></items></Select></f:fields></f:FormElement></f:formElements></f:FormContainer><f:FormContainer ariaLabelledBy="Title3"><f:toolbar><Toolbar><Title id="Title3" text="Online" level="H5" titleStyle="H5"/><ToolbarSpacer /><Button icon="sap-icon://settings"/></Toolbar></f:toolbar><f:formElements><f:FormElement label="Web"><f:fields><Input value="{Url}" type="Url" id="url"/></f:fields></f:FormElement><f:FormElement label="Twitter"><f:fields><Input value="{Twitter}" id="twitter"/></f:fields></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form></VBox></content></Page></pages></App></mvc:View>',"SAPEspania/SAPEspania/i18n/i18n.properties":"title=Gestión Consentimiento Informado\nappTitle=SCL Product\nappDescription=App Description\napellidos=Apellidos\nbuscar=Buscar\nconsentimiento=Consentimiento\ndatos=Datos Personales\ndescargar=Descargar\ndni=DNI\nenviar=Enviar\nfichero=Fichero\nnombre=Nombre\nrechazar=Rechazar\nregistrado=Consentimiento\nsubir= Subir\nSearch=Concepto de busqueda\n\n","SAPEspania/SAPEspania/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"SAPEspania.SAPEspania","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{"ZMF_PRUEBA_SRV_01":{"uri":"/sap/opu/odata/sap/ZMF_PRUEBA_SRV_01/","type":"OData","settings":{"localUri":"localService/ZMF_PRUEBA_SRV_01/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"SAPEspania.SAPEspania.view.Main","type":"XML","async":true,"id":"Main"},"dependencies":{"minUI5Version":"1.60.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{"minVersion":""}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"SAPEspania.SAPEspania.i18n.i18n"}},"":{"type":"sap.ui.model.odata.v2.ODataModel","settings":{"defaultOperationMode":"Server","defaultBindingMode":"OneWay","defaultCountMode":"Request"},"dataSource":"ZMF_PRUEBA_SRV_01","preload":true}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"SAPEspania.SAPEspania.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":"RouteMain","target":["TargetMain"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"},"Formulario":{"viewType":"XML","viewName":"Formulario"},"test":{"viewType":"XML","viewName":"test"}}}},"sap.platform.hcp":{"uri":"","_version":"1.1.0"}}'}});