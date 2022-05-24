 var bt = Vue.extend({
     template: '<h2>徐佳银</h2>'
 });
 Vue.component('bt', bt);

 // 
 var bt2 = Vue.extend({
     template: '<h2>注册全局组件</h2>'
 });
 Vue.component(' bt2 ', bt2);
 // 

 Vue.component('bt3', {
     template: '<div><span>ssssssss</span></div > '
 });
 // 
 Vue.component('bt4', {
     template: '<div> <h2>ALL</h2><span> aaaaaaa </span></div > '
 });
 // 
 Vue.component('bt5', {
     template: '<div> <h2>this is parent componens</h2><h2>Register child componens</h2></div > '
 });
 // 
 Vue.component('bt6', {
     template: '<div> <h2>Register New componensxx</h2><span>sssss </span></div > '
 });