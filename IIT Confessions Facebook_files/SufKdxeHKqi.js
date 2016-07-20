/*1350277357,173217319*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FJ\/rn"]); }

__d("legacy:dom-collect",["collectDataAttributes"],function(a,b,c,d){a.collect_data_attribs=b('collectDataAttributes');},3);
function couponTrackingSendRequest(a,b){link_data=collect_data_attribs(a,['ft','gt']);new AsyncRequest().setURI(b).setRelativeTo(a).setData({link_data:link_data}).send();}