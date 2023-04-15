const axios = require('axios');
const { JSDOM } = require('jsdom');
const { response } = require('express');
const { Readability } = require('@mozilla/readability');
exports.text_to_speech = async (request, response) => {
  const { url } = request.query;
  try {
    await axios.get(url).then((response_google) => {
      const dom = new JSDOM(response_google.data, {
        url: url,
      });

      let article = new Readability(dom.window.document).parse();
      response.json({ success: true, data: article.textContent });
    })
  } catch (error) {
    response.json({ success: false });
  }
};