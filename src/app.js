import _ from 'lodash';
import toUpperCase from './mod/utils.js'
import './app.css'
var arr = ['a', 'b', 'c'].map(toUpperCase);
console.log('test')
document.querySelector('#content').innerHTML = "Cosssast1111"
console.log(_.shuffle(arr));