// Verify each platform against its own public release.
(async()=>{
 const links=[...document.querySelectorAll('.installer')];
 const state=document.getElementById('release-state');
 links.forEach(link=>{link.setAttribute('aria-disabled','true');link.addEventListener('click',event=>{if(link.hasAttribute('aria-disabled'))event.preventDefault();});});
 const releases=new Map();
 await Promise.all(links.map(async link=>{
  const tag=link.dataset.release||'v1.0.7';
  try{
   if(!releases.has(tag))releases.set(tag,fetch('https://api.github.com/repos/domcan2-godfearer/textura-desktop/releases/tags/'+encodeURIComponent(tag),{headers:{Accept:'application/vnd.github+json'}}).then(response=>{if(!response.ok)throw Error('Release unavailable');return response.json();}));
   const release=await releases.get(tag);
   const filename=new URL(link.href).pathname.split('/').at(-1);
   const asset=release.assets.find(a=>a.name===filename&&a.state==='uploaded');
   if(!asset)return;
   link.removeAttribute('aria-disabled');
   link.closest('article').querySelector('.download-meta>span').textContent=Math.round(asset.size/1000000)+' MB';
  }catch{}
 }));
 const unavailable=links.filter(link=>link.hasAttribute('aria-disabled')).map(link=>link.dataset.platform);
 if(unavailable.length)state.textContent='Could not verify '+unavailable.join(', ')+' downloads. Please try again shortly.';
})();
