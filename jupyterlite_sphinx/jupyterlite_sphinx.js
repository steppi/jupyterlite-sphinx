window.jupyterliteShowIframe = (tryItButtonId, iframeSrc) => {
  const tryItButton = document.getElementById(tryItButtonId);
  const iframe = document.createElement('iframe');

  iframe.src = iframeSrc;
  iframe.width = iframe.height = '100%';
  iframe.classList.add('jupyterlite_sphinx_iframe');
ifra
  tryItButton.parentNode.appendChild(iframe);
  tryItButton.innerText = 'Loading ...';
  tryItButton.classList.remove('jupyterlite_sphinx_try_it_button_unclicked');
  tryItButton.classList.add('jupyterlite_sphinx_try_it_button_clicked');
}

window.liteExamplesShowIframe = (examplesContainerId, iframeContainerId, iframeSrc) => {
    const examples_container = document.getElementById(examplesContainerId)
    const iframe_container = document.getElementById(iframeContainerId);
    const iframe = document.createElement('iframe');

    iframe.src = iframeSrc;
    iframe.width = iframe.height = '100%';
    iframe.classList.add('jupyterlite_sphinx_raw_iframe');
    examples_container.classList.add("hidden")
    iframe_container.appendChild(iframe);
    iframe_container.classList.remove("hidden")
}
