(e=>{const t=e.chrome,o=e.$,n=t.storage,a=t.i18n,i=n.local,c=o("#epub-chooser"),s=o("#open-epub"),r=o("#arrow-left"),l=o("#arrow-right"),p=o("#page-number"),d=o("#bottom-content"),g=o("#total-page"),u=o("#epub-contents");let f,h;const y="epub-locations",m="epub-page-progress";function k(e){"ArrowLeft"===e.key?(e.stopPropagation(),r.click()):"ArrowRight"===e.key&&(e.stopPropagation(),l.click())}function b(e,t,o){i.get([e],(n=>{const a=n[e]??{};o&&o(a[t]?.value)}))}function v(e,t,o,n){i.get([e],(a=>{const c=a[e]??{};if(c[t]={savedTime:(new Date).getTime(),value:o},a[e]=c,Object.keys(a).length>25){const e=Object.keys(a).reduce(((e,t)=>a[e].savedTime<a[t].savedTime?e:t));delete a[e]}i.set(a,n)}))}o((()=>{d.hide(),p.inputfilter({allowNumeric:!0,maxLength:6})})),s.click((()=>{c.click()})),c.change((e=>{if(e.target&&(e.target.files??[]).length>0&&"application/epub+zip"===e.target.files[0].type){!function t(e){const t=new FileReader;t.onload=function(){const e=this.result;h=ePub(),h.open(e),h.ready.then((()=>{const e=`l-${h.key()}`;b(y,e,(t=>{(async()=>t?(await h.locations.load(t),!0):(await h.locations.generate(1024),!1))().then((t=>{if(v(y,e,h.locations.save()),d.show(),!t)try{f.display(f.currentLocation().start.cfi)}catch(e){}}))}))})),f&&f.destroy(),f=void 0,u.empty(),d.hide(),u.addClass("hidden"),f=h.renderTo(u.attr("id"),{width:"100%",height:"100%"}),f.spread("none"),f.on("keyup",k);const t=f.book.spine.get.bind(f.book.spine);f.book.spine.get=function(e){let o=t(e);return o||(o=t(e)),o},f.display().then((function(){const e=`p-${h.key()}`;f.themes.default({p:{"font-size":"larger !important"}}),p.val(1),b(m,e,(e=>{e?f.display(h.locations.cfiFromPercentage(e)).then((()=>{u.removeClass("hidden")})):u.removeClass("hidden")})),f.on("relocated",(function(t){const o=h.locations.percentageFromCfi(t.start.cfi),n=h.locations.total;g.text(n),p.val(h.locations.locationFromCfi(t.start.cfi)),v(m,e,o)}))}))},t.readAsArrayBuffer(e)}(e.target.files[0]),c.val("")}})),r.click((()=>{f&&f.prev()})),l.click((()=>{f&&f.next()})),p.keyup((()=>{const e=parseInt(p.val())/parseInt(g.text());isNaN(e)||f.display(h.locations.cfiFromPercentage(e))})),o(document).on("keyup","*",k),document.querySelectorAll("[data-locale]").forEach((e=>{e.innerText=a.getMessage(e.dataset.locale)||e.innerText.replaceAll(/\n/g,"").replaceAll(/ +(?= )/g,"")}))})(this);