"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{35796:function(d,b,a){a.d(b,{d:function(){return e}});var c=a(45624);class e extends c.J5{async authenticateUser(){var b;if(!this.provider||!(null!==(b=this.chainConfig)&& void 0!==b&&b.chainId))throw c.RM.notConnectedError();const{chainNamespace:e,chainId:h}=this.chainConfig;if(this.status!==c.MP.CONNECTED)throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first");const a=await this.provider.request({method:"eth_accounts"});if(a&&a.length>0){const d=(0,c.Cb)(a[0],this.name);if(d){const i=(0,c.$E)(d);if(!i)return{idToken:d}}const j={domain:window.location.origin,uri:window.location.href,address:a[0],chainId:parseInt(h,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},f=await (0,c.tV)(j,e),k=await this.provider.request({method:"personal_sign",params:[f,a[0]]}),g=await (0,c.rn)(e,k,f,this.name,this.sessionTime);return(0,c.Fr)(a[0],this.name,g),{idToken:g}}throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==c.MP.CONNECTED)throw c.RM.disconnectionError("Not connected with wallet");const a=await this.provider.request({method:"eth_accounts"});a&&a.length>0&&(0,c.qz)(a[0],this.name)}}},94429:function(e,b,a){a.r(b),a.d(b,{MetamaskAdapter:function(){return i}});var f=a(4942),c=a(92003),g=a.n(c),h=a(45624),d=a(35796);class i extends d.d{constructor(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};super(),(0,f.Z)(this,"adapterNamespace",h.yk.EIP155),(0,f.Z)(this,"currentChainNamespace",h.EN.EIP155),(0,f.Z)(this,"type",h.hN.EXTERNAL),(0,f.Z)(this,"name",h.rW.METAMASK),(0,f.Z)(this,"status",h.MP.NOT_READY),(0,f.Z)(this,"rehydrated",!1),(0,f.Z)(this,"metamaskProvider",null),this.chainConfig=a.chainConfig||null,this.sessionTime=a.sessionTime||86400}get provider(){return this.status===h.MP.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null}set provider(a){throw new Error("Not implemented")}async init(a){if(super.checkInitializationRequirements(),this.metamaskProvider=await g()({mustBeMetaMask:!0}),!this.metamaskProvider)throw h.Ty.notInstalled("Metamask extension is not installed");this.status=h.MP.READY,this.emit(h.n2.READY,h.rW.METAMASK);try{h.cM.debug("initializing metamask adapter"),a.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(b){this.emit(h.n2.ERRORED,b)}}setAdapterSettings(a){this.status!==h.MP.READY&&null!=a&&a.sessionTime&&(this.sessionTime=a.sessionTime)}async connect(){if(super.checkConnectionRequirements(),this.chainConfig||(this.chainConfig=(0,h.h2)(h.EN.EIP155,1)),this.status=h.MP.CONNECTING,this.emit(h.n2.CONNECTING,{adapter:h.rW.METAMASK}),!this.metamaskProvider)throw h.RM.notConnectedError("Not able to connect with metamask");try{await this.metamaskProvider.request({method:"eth_requestAccounts"});const{chainId:a}=this.metamaskProvider;if(a!==this.chainConfig.chainId&&await this.switchChain(this.chainConfig),this.status=h.MP.CONNECTED,!this.provider)throw h.RM.notConnectedError("Failed to connect with provider");return this.provider.once("disconnect",()=>{this.disconnect()}),this.emit(h.n2.CONNECTED,{adapter:h.rW.METAMASK,reconnected:this.rehydrated}),this.provider}catch(b){throw this.status=h.MP.READY,this.rehydrated=!1,this.emit(h.n2.ERRORED,b),h.RM.connectionError("Failed to login with metamask wallet")}}async disconnect(){var a;let b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{cleanup:!1};await super.disconnect(),null===(a=this.provider)|| void 0===a||a.removeAllListeners(),b.cleanup?(this.status=h.MP.NOT_READY,this.metamaskProvider=null):this.status=h.MP.READY,this.rehydrated=!1,this.emit(h.n2.DISCONNECTED)}async getUserInfo(){if(this.status!==h.MP.CONNECTED)throw h.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async switchChain(a){if(!this.metamaskProvider)throw h.RM.notConnectedError("Not connected with wallet");try{await this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:a.chainId}]})}catch(b){if(4902===b.code)await this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:a.chainId,chainName:a.displayName,rpcUrls:[a.rpcTarget]}]});else throw b}}}}}])