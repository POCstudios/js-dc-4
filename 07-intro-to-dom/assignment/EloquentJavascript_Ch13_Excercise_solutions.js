//Excercise 1  //
function buildTable(data) {
    var table = document.createElement("table");

    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
      var headCell = document.createElement("th");
      headCell.textContent = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));

// Excercise 2

function byTagName(node, tagName) {
   var found = [];
   tagName = tagName.toUpperCase();

   function explore(node) {
     for (var i = 0; i < node.childNodes.length; i++) {
       var child = node.childNodes[i];
       if (child.nodeType == document.ELEMENT_NODE) {
         if (child.nodeName == tagName)
           found.push(child);
         explore(child);
       }
     }
   }

   explore(node);
   return found;
 }

 console.log(byTagName(document.body, "h1").length);
 console.log(byTagName(document.body, "span").length);
 var para = document.querySelector("p");
 console.log(byTagName(para, "span").length);

 // Excercise 3

var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");

var angle = 0, lastTime = null;
function animate(time) {
  if (lastTime != null)
    angle += (time - lastTime) * 0.0015;
  lastTime = time;

  cat.style.top = (Math.sin(angle) * 50 + 80) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
  // By adding π to the angle, the hat ends up half a circle ahead of the cat
  var hatAngle = angle + Math.PI;
  hat.style.top = (Math.sin(hatAngle) * 50 + 80) + "px";
  hat.style.left = (Math.cos(hatAngle) * 200 + 230) + "px";

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
