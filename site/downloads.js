// Enable download links only after the public release contains both installers.
(async()=>{
 const links=[...document.querySelectorAll('.installer')];
 const state=document.getElementById('release-state');
 links.forEach(link=>{link.setAttribute('aria-disabled','true');link.addEventListener('click',event=>{if(link.hasAttribute('aria-disabled'))event.preventDefault();});});
 try{
  const response=await fetch('https://api.github.com/repos/domcan2-godfearer/textura-desktop/releases/tags/v1.0.7',{headers:{Accept:'application/vnd.github+json'}});
  if(!response.ok)throw Error('Release unavailable');
  const release=await response.json();
  for(const link of links){
   const filename=new URL(link.href).pathname.split('/').at(-1);
   const asset=release.assets.find(a=>a.name===filename);
   if(!asset)continue;
   // Keep links on the official repository, rather than trusting an arbitrary URL.
   link.removeAttribute('aria-disabled');
   link.closest('article').querySelector('.download-meta>span').textContent=Math.round(asset.size/1000000)+' MB';
  }
  if(links.some(link=>link.hasAttribute('aria-disabled')))state.textContent='Downloads are being prepared. Please check back shortly.';
 }catch{
  state.textContent='Downloads are being prepared. Please check back shortly.';
 }
})();
