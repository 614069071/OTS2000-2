export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clonData: {},
      titeData: {},
      infoData: {},
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
      setInfoDisabled: false,
      restorInfoDisabled: false,
      restoreDefaultInfoDisabled: false,
    }
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log('minxis');
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
        this
          .$http
          .post(data)
          .then((res) => {
            this.titeData = res.otn2000_ack;
            this.setTilteDisabled = false;
            this.refreshTitleDisabled = false;
            resolve(res.otn2000_ack);
          })
          .catch(err => {
            this.setTilteDisabled = false;
            this.refreshTitleDisabled = false;
            reject(err);
          })
      })
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.titeData;
      const { boardname, slot } = this.info;
      const iSuperData = this.$store.state.iSuper ? { mfgdate, sn } : {};
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
        this
          .$http
          .post(data)
          .then((res) => {
            this.infoData = res.otn2000_ack || {};
            this.clonData = this.$clone(res.otn2000_ack);
            this.refreshInfoDisabled = false;
            this.setInfoDisabled = false;
            this.restorInfoDisabled = false;
            this.restoreDefaultInfoDisabled = false;
            resolve(res.otn2000_ack);
          })
          .catch(err => {
            this.refreshInfoDisabled = false;
            this.setInfoDisabled = false;
            this.restorInfoDisabled = false;
            this.restoreDefaultInfoDisabled = false;
            reject(err);
          })
      });
    },
    setInfo() {
      const { slot, boardname } = this.info;
      const diffData = this.$difference(this.infoData, this.clonData);
      const data = { otn2000: { ...diffData, slot, boardname, type: "post_info" } };

      this.setInfoDisabled = true;
      this.refreshInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      this
        .$http
        .post(data)
        .then(() => {
          this.setInfoDisabled = false;

          return this.getInfo();
        })
        .then(() => {
          this.refreshInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
          this.$message("成功");
        })
        .catch(() => {
          this.setInfoDisabled = false;
          this.refreshInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
          this.$message("失败");
        });
    },
    getDetail() {
      this.getTitle()
        .then(() => {
          return this.getInfo();
        })
        .then(() => { })
        .catch(() => { });
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
      this
        .getInfo()
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
  }
};