function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var str = 'nigga\u00A0@\u00A0nig.ga'; // non-breaking space
  document.title = '';
  async function typewriteTitle() {
    for (let i = 0; i < str.length; i++) {
      document.title += str.charAt(i);
      console.log(document.title);
      await sleep(200);
    }
  }
  typewriteTitle();