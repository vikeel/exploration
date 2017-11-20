import tpl from './login.tpl'
import './login.css';

function loginCom() {
  var $ = function(target) {
  	return document.querySelector(target);
  }
  var data = {
  	name: 'From login.js',
  	tpl: tpl,
  	show: ShowLogin()
  }
 
  function ShowLogin() {
  	var spn = $('.login');
  	// event.stopPropagation();
  	spn.innerHTML = tpl({name: 'Login'});
  	data.close = $('.close')
  	Object.defineProperty(data, 'close', {
  	  value: $('.close')
  	})
  }
  console.log(data)
  // var clos = new ShowLogin();
  // function Close() {
  // 	ShowLogin.call(this);
  // 	// console.log(this.cls)
  // 	// return this.cls;
  // }
//   function closeLogin() {

//   }
  // var cls = new ShowLogin();
//   console.log(cls.cls)
  return data
  	  // console.log(cls)
  	  // var cls = $('.close')
  	  // console.log(cls)
  	  // console.log(cls)
  	  // cls.onclick = function() {
  	  // 	var cls = spn.innerHTML = null;
  	  // 	return cls;
  	  // }
  	  // console.log($('.close'))
  	  // return {
  	  // 	cls: cls
  	  // }

  	// },
  	// closeLogin: function() {
  	//   var cls = new showLogin()
  	// }
  	// closeLogin: function() {
  	//   var spn = $('.')
  	// }
//   }
}

export default loginCom;