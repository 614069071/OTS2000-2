import { isSimilar, storages } from "./";

export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      iSuper: storages.get("__iSuper__") || false,
      titeData: {
        sn: "",
        desc: "",
        h_rev: "",
        p_rev: "",
        s_rev: "",
        bdtype: "",
        status: "",
        mfgdate: "",
        device_type: "",
        mac_address: "",
      },
      clonData: {},
      infoData: {},
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
      setInfoDisabled: false,
      restorInfoDisabled: false,
      restoreDefaultInfoDisabled: false,
    };
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("minxis");
      this.getDetail();
    },
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getTitle() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_title", boardname, slot } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      return new Promise((resolve, reject) => {
        this.$http
          .post(data)
          .then((res) => {
            this.titeData = res.otn2000_ack;

            resolve(res.otn2000_ack);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.setTilteDisabled = false;
            this.refreshTitleDisabled = false;
          });
      });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.titeData;
      const { boardname, slot } = this.info;
      const iSuperData = this.iSuper ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.setTilteDisabled = false;
          return this.getTitle();
        })
        .then(() => {
          this.refreshTitleDisabled = false;
          this.$message("成功");
        })
        .catch(() => {
          this.setTilteDisabled = false;
          this.refreshTitleDisabled = false;
          this.$message("失败");
        });
    },
    getInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_info", boardname, slot } };

      this.refreshInfoDisabled = true;
      this.setInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      return new Promise((resolve, reject) => {
        this.$http
          .post(data)
          .then((res) => {
            this.infoData = res.otn2000_ack || {};
            this.clonData = this.$clone(res.otn2000_ack);
            resolve(res.otn2000_ack);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.refreshInfoDisabled = false;
            this.setInfoDisabled = false;
            this.restorInfoDisabled = false;
            this.restoreDefaultInfoDisabled = false;
          });
      });
    },
    setInfo() {
      const { slot, boardname } = this.info;
      const diffData = this.$difference(this.infoData, this.clonData);
      const data = { otn2000: { ...diffData, slot, boardname, type: "post_info" } };

      if (JSON.stringify(diffData) === "{}") {
        return this.$message("请选择配置项");
      }

      this.setInfoDisabled = true;
      this.refreshInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.setInfoDisabled = false;

          return this.getInfo();
        })
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.$message("失败");
        })
        .finally(() => {
          this.setInfoDisabled = false;
          this.refreshInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
        });
    },
    getDetail() {
      this.getTitle()
        .then(() => {
          const { boardname } = this.info;
          const isHave = isSimilar(boardname);

          return !isHave && this.getInfo();
        })
        .then(() => {})
        .catch(() => {});
    },
    refreshTitle() {
      this.getTitle()
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.$message("失败");
        });
    },
    refreshInfo() {
      this.getInfo()
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.$message("失败");
        });
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "default", boardname, slot } };

      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getInfo();
        })
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.$message("失败");
        });
    },
    restorInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "reset", boardname, slot } };
      this.restorInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          return this.getInfo();
        })
        .then(() => {
          this.$message("成功");
        })
        .catch(() => {
          this.$message("失败");
        });
    },
  },
};
