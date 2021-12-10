import Vue from 'vue';
import {
  Menu, MenuItem, Submenu, Table, TableColumn, Form, FormItem, Radio, Select, Input, InputNumber,
  DatePicker, Option, Col, Row, Pagination, Popover, Button, Avatar, Dialog, Progress,
  Carousel, CarouselItem, Upload, MessageBox, Message, Notification, Loading, Switch, Checkbox
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
  .use(Radio)
  .use(Select)
  .use(Option)
  .use(Col)
  .use(Row)
  .use(Button)
  .use(Avatar)
  .use(Pagination)
  .use(Input)
  .use(InputNumber)
  .use(DatePicker)
  .use(Dialog)
  .use(Progress)
  .use(Carousel)
  .use(CarouselItem)
  .use(Upload)
  .use(Popover)
  .use(Switch)
  .use(Checkbox)