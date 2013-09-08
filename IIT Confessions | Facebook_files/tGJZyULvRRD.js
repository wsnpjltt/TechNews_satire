/*1358369959,173213215*/

if (self.CavalryLogger) { CavalryLogger.start_js(["E\/rqF"]); }

__d("TimelineSignUpDialog",["event-extensions","$","CSS"],function(a,b,c,d,e,f){b('event-extensions');var g=b('$'),h=b('CSS'),i={show:function(j,k,l){this.dialog=j;this.dialog.show();if(k=='scroll'||k=='fixedbar'||l>0)h.hide(g('timelineSignUpDialog'));if(k=='wait'&&l>0){setTimeout(function(m){h.show(g('timelineSignUpDialog'));},l,this.dialog);}else if(k=='scroll'){this.scroll_listener=Event.listen(window,'scroll',function(){h.show(g('timelineSignUpDialog'));this.scroll_listener.remove();}.bind(this));}else if(k=='fixedbar'){h.addClass(g('pagelet_bluebar'),'pagelet_bluebar_fixed');h.addClass(g('blueBarHolder'),'blueBarHolderFixed');}}};e.exports=i;});
function reg_bootload(a,b,c,d,e){var f=function(g){Bootloader.loadComponents(['reg-util','editor'],function(){new RegKeyPressListen(e);new CaptchaBoxKeyPressListen(a,b,e);regform_focused(d);});};if(ge(c)){$(c).onclick=f;$(c).onkeypress=f;}}