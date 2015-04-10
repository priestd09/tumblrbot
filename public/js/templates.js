module.exports = (function() {
    var Hogan = require('./lib/hogan');
    var templates = {};
    templates['_image'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<figure>");t.b("\n" + i);t.b("  <img class=\"thumbnailImage\" src=\"");t.b(t.v(t.f("src",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("</figure>");t.b("\n" + i);t.b("<figcaption>");t.b(t.t(t.f("caption",c,p,0)));t.b("</figcaption>");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,120,162,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a data-button=\"tag\" href=\"#\">");t.b(t.v(t.d(".",c,p,0)));t.b("</a> ");});c.pop();}t.b("\n" + i);t.b("<button data-button=\"close\">Close</button>");t.b("\n" + i);if(t.s(t.f("prev",c,p,1),c,p,0,228,282,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <a href=\"");t.b(t.v(t.f("prev",c,p,0)));t.b("\" data-button=\"detail\">Prev</a>");t.b("\n" + i);});c.pop();}if(t.s(t.f("next",c,p,1),c,p,0,305,359,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <a href=\"");t.b(t.v(t.f("next",c,p,0)));t.b("\" data-button=\"detail\">Next</a>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
    templates['_images'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("images",c,p,1),c,p,0,13,91,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-button=\"detail\">");t.b("\n" + i);t.b("    <img src=\"");t.b(t.v(t.f("src",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
    templates['hello_world'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>");t.b(t.v(t.f("greeting",c,p,0)));t.b("</h1>");t.b("\n");t.b("\n" + i);t.b("<form data-form=\"search\">");t.b("\n" + i);t.b("  <div>");t.b("\n" + i);t.b("    <input type=\"text\" name=\"blog\" placeholder=\"blog\" />");t.b("\n" + i);t.b("    <input type=\"text\" name=\"tags\" placeholder=\"tag\" />");t.b("\n" + i);t.b("    <button data-button=\"search\">Search</button>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("<form>");t.b("\n");t.b("\n" + i);t.b("<div data-container=\"images\">");t.b("\n" + i);t.b("  <div data-container=\"results\">");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <button data-button=\"more\">More</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['layout'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<html>");t.b("\n" + i);t.b("  <head>");t.b("\n" + i);t.b("    <title>Tumblrbot</title>");t.b("\n" + i);t.b("  </head>");t.b("\n" + i);t.b("  <body>");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("content",c,p,0)));t.b("\n" + i);t.b("  </body>");t.b("\n" + i);t.b("  <script src='/js/lib/jquery.min.js'></script>");t.b("\n" + i);t.b("  <script src='/js/bundle.js'></script>");t.b("\n" + i);t.b("</html>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();