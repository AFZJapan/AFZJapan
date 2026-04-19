// toggle collapse of specified content
function toggleContent(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

// collapse all open content
function collapseAllOpenContent() {
  const colls = document.getElementsByClassName('afz-collapsible');
  for (const coll of colls) {
    if (coll.classList.contains('afz-active')) {
      coll.classList.remove('afz-active');
      toggleContent(coll.nextElementSibling);
    }
  }
}

const colls = document.getElementsByClassName('afz-collapsible');
for (const coll of colls) {
  coll.addEventListener('click', function() {
    if (!this.classList.contains('afz-active')) {
      collapseAllOpenContent();
    }
    this.classList.toggle('afz-active');
    toggleContent(this.nextElementSibling);
  });
}
