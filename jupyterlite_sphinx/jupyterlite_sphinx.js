window.jupyterliteShowIframe = (tryItButtonId, iframeSrc) => {
  const tryItButton = document.getElementById(tryItButtonId);
  const iframe = document.createElement('iframe');

  iframe.src = iframeSrc;
  iframe.width = iframe.height = '100%';
  iframe.classList.add('jupyterlite_sphinx_iframe');

  tryItButton.parentNode.appendChild(iframe);
  tryItButton.innerText = 'Loading ...';
  tryItButton.classList.remove('jupyterlite_sphinx_try_it_button_unclicked');
  tryItButton.classList.add('jupyterlite_sphinx_try_it_button_clicked');
}

window.tryExamplesShowIframe = (containerId, iframeSrc) => {
    const container = document.getElementById(containerId);
    const iframe = document.createElement('iframe');

    iframe.src = iframeSrc;
    iframe.width = iframe.height = '100%';
    iframe.classList.add('jupyterlite_sphinx_iframe');

    // Optionally, you could create a loading message element here
    const loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Loading ...';
    loadingMessage.classList.add('loading-message');
    container.appendChild(loadingMessage);
    
    container.appendChild(iframe); // Appends the iframe to the container
}
