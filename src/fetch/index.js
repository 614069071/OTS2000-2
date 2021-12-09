import axios from './axios';
import api from './api';

export default {
  upload: data => axios.post(api.upload, data),//单文件上传
  uploads: data => axios.post(api.uploads, data),//多文件上传
  login: data => axios.post(api.login, data),//登录
  getPower: () => axios.get(api.getPower),//获取权限菜单
  getAdList: params => axios.get(api.getAdList, { params }),//广告列表
  deleteAd: id => axios.delete(api.deleteAd + id),//删除广告
  addAd: data => axios.post(api.addAd, data),//新增广告
  updateAd: data => axios.post(api.updateAd, data),//编辑广告
  getCity: () => axios.get(api.getCity),//获取城市信息
  getUpgradePlanInfo: (params) => axios.get(api.getUpgradePlanInfo, { params }),//升级列表
  getUpgradePlanDetails: () => axios.get(api.getUpgradePlanDetails),//获取升级计划详情
  addUpgradePlan: data => axios.post(api.addUpgradePlan, data),//添加升级计划列表
  updateUpgradePlan: data => axios.post(api.updateUpgradePlan, data),//修改
}