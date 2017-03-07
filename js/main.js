$(() => {
  let welcome_langs = [
    '🇪🇸 ¡Bienvenidos!',
    '🇬🇧 Welcome!',
    '🇩🇪 Willkommen!',
    '🇳🇱 Welkom!',
    '🇵🇹 Bem-vindos!',
    '🇮🇹 Benvenute!',
    '🇨🇳 歡迎光臨!',
    '🇯🇵 ようこそ!',
  ];

  let randomNoRepeats = (array) => {
    let copy = array.slice(0);
    return () => {
      if (copy.length < 1) { copy = array.slice(0); }
      let index = Math.floor(Math.random() * copy.length);
      let item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  let chooser = randomNoRepeats(welcome_langs);
  $('h1.languages').stop().html(chooser()).hide(0).fadeIn("fast");
  
  setInterval(() => {
    $('h1.languages').stop().html(chooser()).hide(0).fadeIn("fast");

  }, 2000);
});