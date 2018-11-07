var veight = {};
var apps = {};
var components = {};

window.onload = function() {
  Object.keys(components).forEach(function(comp) {
    apps[comp].call(apps[comp],components)
  }) 
}

// <element>.class function
Element.prototype.class = function(c) {
  this.className = c;
}


// App function
veight.app = function(n,callback) {
  if(typeof callback == "function") {
    apps[n] = callback
  } else {
    console.log("App's callback must be a function.")
  }
}

// Component function
veight.component = function(n,callback) {
  if(typeof callback == "function") {
    components[n] = callback
  } else {
    console.log("Component's callback must be a function.")
  }
}

// Write function
veight.write = function(str,color) {
  if(color) {
    document.write("<font color=\"" + color + "\">" + str + "</font>")
  } else {
    document.write(str)
  }

}

// Wrap function
veight.wrap = function(inner) {
  document.write("<span>" + inner + "</span>")
}

// Append child
veight.append = function(elem,parent) {
  if (elem && parent) parent.appendChild(elem);
}

// Str function
veight.str = function(str,color) {
  if(color) {
    return "<font color=\"" + color + "\">" + str + "</font>"
  } else {
    return str
  }
}

// Get function
veight.get = function(id) {
  return document.querySelector(id)
}

// Spawn function
veight.spawn = function(tag,attr,parent) {
  var t = document.createElement(tag)
  
  Object.keys(attr).forEach(function(at) {
    t.setAttribute(at,attr[at])
  });
  if(parent) parent.appendChild(t);
  return t
}

// Syntax Highlighter
veight.sh = {}
veight.sh.comment = function(str) {
  return veight.str(str,"slategray")
}
veight.sh.char = function(str) {
  return veight.str(str,"#690")
}
veight.sh.puncuation = function(str) {
  return veight.str(str,"#999")
}
veight.sh.bool = function(str) {
  return veight.str(str,"#905")
}
veight.sh.operator = function(str) {
  return veight.str(str,"#9a6e3a")
}
veight.sh.keyword = function(str) {
  return veight.str(str,"#07a")
}
veight.sh.classname = function(str) {
  return veight.str(str,"#DD4A68")
}
veight.sh.variable = function(str) {
  return veight.str(str,"#e90")
}
