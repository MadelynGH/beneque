document.head.innerHTML += `<link rel="stylesheet" type="text/css" href="/styles/header.css">`;

document.body.innerHTML = `
    <div id="header">
        <a href="/" id="logo-link"><h3 id="logo">Beneque</h3></a>

        <a class="header-link" href="/"><p>Home</p></a>
        <a class="header-link" href="/translator"><p>Translator</p></a>
        <a class="header-link" href="/dictionary"><p>Dictionary</p></a>
    </div>
` + document.body.innerHTML;