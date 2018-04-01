exports.build = function (params) {
  return `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>${params.title}</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/bundle.js"></script>
  </head>
  <body>
  <div class="page">
    <div class="content">
      <h1>Архитектура приложения</h1>
      <div class="view-stub">
        <form class="view-stub__input-block" method="post">
          <input class="view-stub__input" name="userText"/>
          <button class="view-stub__apply">Отправить на сервер</button>
        </form>
        <p class="view-stub__label">${params.answer}</p>
      </div>
      <div class="log"></div>
    </div>
  </div>
  </body>
</html>
  `;
};
