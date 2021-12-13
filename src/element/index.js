import Vue from 'vue';
import {
  Menu, MenuItem, Submenu, Table, TableColumn, Form, FormItem, Select, Input, DatePicker, Option, Col, Row,
  Pagination, Button, Avatar, Dialog, Upload, MessageBox, Message, Notification, Loading, Checkbox, Popover, Progress
} from 'element-ui';

export let load = null;

Vue.prototype.$load = () => load = Loading.service();
Vue.prototype.$loaded = load && load.close();

(() => {
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
})();

Vue
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Table)
  .use(TableColumn)
  .use(Form)
  .use(FormItem)
  .use(Select)
  .use(Option)
  .use(Col)
  .use(Row)
  .use(Button)
  .use(Avatar)
  .use(Pagination)
  .use(Input)
  .use(DatePicker)
  .use(Dialog)
  .use(Upload)
  .use(Checkbox)
  .use(Popover)
  .use(Progress)

