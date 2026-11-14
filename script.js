document.querySelectorAll("[data-link]").forEach(links =>{
  const key = link.dataset.link;
  const url = A.links?.[key];

    if(url){
      link.href="url";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
});
