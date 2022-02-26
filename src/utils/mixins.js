export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
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
  methods: {
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
            console.log("get info finally");
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
        return alert("请选择配置项");
      }

      this.setInfoDisabled = true;
      this.refreshInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.setInfoDisabled = false;
          this.getInfo();
        })
        .catch(() => {
          alert("配置失败");
        })
        .finally(() => {
          this.setInfoDisabled = false;
          this.refreshInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
        });
    },

    refreshTitle() {
      this.getTitle();
    },
    refreshInfo() {
      this.getInfo();
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "default", boardname, slot } };

      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.getInfo();
        })
        .catch(() => {
          alert("配置失败");
        });
    },
    restorInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "reset", boardname, slot } };
      this.restorInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.getInfo();
        })
        .catch(() => {
          alert("配置失败");
        });
    },
  },
};
