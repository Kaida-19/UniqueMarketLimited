function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages:
        "af,sq,am,ar,hy,az,bn,bs,bg,ca,zh-CN,zh-TW,hr,cs,da,nl,en,et,fi,fr,de,el,gu,he,hi,hu,id,it,ja,kn,ko,lv,lt,ml,mr,no,fa,pl,pt,pa,ro,ru,sk,sl,es,sv,ta,te,th,tr,uk,ur,vi,sw,zu",
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      autoDisplay: false
    },
    "google_translate_element"
  );
}
