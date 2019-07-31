
var convert = function (json) {

  parsedData = JSON.parse(json);
  report = {};
  report.licenses = [];
  report.dependencies = [];

  var licenses = {};

  for (var id in parsedData) {
    var item = parsedData[id];

    var idx = id.lastIndexOf('@');
    var name = id.substr(0, idx);

    report.dependencies.push({
      "license": {
        "name": item.licenses,
        "url": "https://opensource.org/search/node/" + item.licenses
      },
      "dependency": {
        "name": name,
        "url": item.repository,
        "description": "",
        "pathes": [
          "."
        ]
      }
    });

    var sum = licenses[item.licenses] || { count: 0, name: item.licenses };
    sum.count++;
    licenses[item.licenses] = sum;
  }

  for (var id in licenses) {
    report.licenses.push(licenses[id]);
  }

  return JSON.stringify(report, null, '  ');
}

module.exports = convert;
