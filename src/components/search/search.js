import tpl from './search.tpl';
import './search.css';

function searchCom() {
  var data = {
  	name: 'From search component',
  	tpl: tpl,
  	show: showPrompt()
  }
  function showPrompt() {
  	var search = document.getElementById('search');
  	var input = document.getElementById('ser-input');
  	console.log(search);
  }
  return data;
}

export default searchCom;