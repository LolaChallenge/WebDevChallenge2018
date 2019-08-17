// variables
const url = window.location.href
let locale = url.split('/')[5]
const onlineGreeting, offlineGreeting

//Function as a filter that control the lenguages in the web app depending his position on the window.location
$zopim (function() {
  $zopim.livechat.departments.filter('es', 'pt-pt', 'fr','hi','pl');
})

// I'm extract the duplicate code and I make a function that contain this code.
const getZopim = () => {
  window.$zopim || (function (d, s) {
    var z = $zopim = function (c) {
      z._.push(c)
    }; var $ = z.s =
    d.createElement(s); var e = d.getElementsByTagName(s)[0]; z.set = function (o) {
      z.set
        ._.push(o)
    }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute('charset', 'utf-8')
    $.src = '//v2.zopim.com/?'; z.t = +new Date(); $
      .type = 'text/javascript'; e.parentNode.insertBefore($, e)
  })(document, 'script')
}

if (locale === 'es') {
  getZopim()
  onlineGreeting = 'Habla con nosotras'
  offlineGreeting = 'Nuestros asesores no están disponibles en este momento, deje un mensaje y nos pondremos en contacto con usted pronto'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
} else if (locale === 'pt-pt') {
  getZopim()
  onlineGreeting = 'Fale com a gente'
  offlineGreeting = 'Nossos conselheiros não estão disponíveis no momento, por favor deixe uma mensagem e entraremos em contato em breve'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
} else if (locale === 'fr') {
  getZopim()
  onlineGreeting = 'Parlez-nous'
  offlineGreeting = 'Nos conseillers ne sont pas disponibles pour le moment, veuillez laisser un message et nous vous contacterons bientôt'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
} else if (locale === 'hi') {
  getZopim()
  onlineGreeting = 'हमारे साथ चैट करें'
  offlineGreeting = ' हमारे काउंसलर फिलहाल उपलब्ध नहीं हैं, कृपया एक संदेश छोड़ें और हम आपसे जल्द ही संपर्क करेंगे'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
} else if (locale === 'pl') {
  getZopim()
  onlineGreeting = 'Rozmawiaj z nami'
  offlineGreeting = 'Nasi doradcy nie są w tej chwili dostępni, proszę zostaw wiadomość, a my skontaktujemy się z Tobą wkrótce'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
} else {
  getZopim()
  onlineGreeting = 'Chat with us'
  offlineGreeting = 'Our counselors are not available at the moment, please leave a message and we will contact you soon'
  $zopim(function () {
    $zopim.livechat.setGreetings({
      online: onlineGreeting,
      offline: offlineGreeting
    })
  })
}
