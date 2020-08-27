if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote_ext", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });
  new SimpleSlide({
    slide: "portifolio",
    nav: true,
    auto: true,
    time: 5000,
    pauseOnHover: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro:
      "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
