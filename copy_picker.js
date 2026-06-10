const fs = require('fs');
let menu = fs.readFileSync('menu.html', 'utf8');
let start = menu.indexOf('<div class="container" style="padding-top: 40px; padding-bottom: 40px;">');
let end = menu.indexOf('</div>\r\n  </div>\r\n\r\n  <!-- food section -->');
if (end === -1) end = menu.indexOf('</div>\n  </div>\n\n  <!-- food section -->'); // handle LF
let picker = menu.substring(start, end);

let idx = fs.readFileSync('index.php', 'utf8');
let result = idx.replace('    </section>\r\n    <!-- end slider section -->\r\n\r\n  </div>', '    </section>\r\n    <!-- end slider section -->\r\n\n' + picker + '\n  </div>');
if (result === idx) {
  result = idx.replace('    </section>\n    <!-- end slider section -->\n\n  </div>', '    </section>\n    <!-- end slider section -->\n\n' + picker + '\n  </div>');
}
fs.writeFileSync('index.php', result);
console.log("Done");
